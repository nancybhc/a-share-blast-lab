from __future__ import annotations

import argparse
import csv
import json
import os
import time
from datetime import datetime, time as clock_time
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

import requests


CHINA_TZ = ZoneInfo("Asia/Shanghai")
DATA_DIR = Path(__file__).resolve().parent
INTRADAY_DIR = DATA_DIR / "intraday"
API_PATH = "/api/qt/stock/fflow/kline/get"
DAILY_API_PATH = "/api/qt/stock/fflow/daykline/get"
HOSTS = (
    "https://push2.eastmoney.com",
    "https://push2test.eastmoney.com",
)
DAILY_HOSTS = (
    "https://push2his.eastmoney.com",
    "https://push2test.eastmoney.com",
)
BOARDS = {
    "BK0917": "半导体概念",
    "BK0891": "国产芯片",
    "BK1036": "半导体",
}
EM_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://data.eastmoney.com/bkzj/",
}
UT = "b2884a393a59ad64002292a3e90d46a5"


def is_trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 20) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current <= clock_time(15, 5)
    )


def parse_period_date(periods: list[dict[str, Any]] | None) -> str:
    if not periods:
        return datetime.now(CHINA_TZ).date().isoformat()
    stamp = str(periods[0].get("b", ""))
    if len(stamp) >= 8:
        return f"{stamp[:4]}-{stamp[4:6]}-{stamp[6:8]}"
    return datetime.now(CHINA_TZ).date().isoformat()


def request_intraday(board_code: str) -> tuple[dict[str, Any], str]:
    params = {
        "lmt": "0",
        "klt": "1",
        "fields1": "f1,f2,f3,f7",
        "fields2": "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65",
        "secid": f"90.{board_code}",
        "ut": UT,
        "_": str(int(time.time() * 1000)),
    }
    errors: list[str] = []
    for host in HOSTS:
        try:
            response = requests.get(
                host + API_PATH,
                params=params,
                headers={
                    **EM_HEADERS,
                    "Referer": f"https://data.eastmoney.com/bkzj/{board_code}.html",
                },
                timeout=15,
            )
            response.raise_for_status()
            payload = response.json()
            data = payload.get("data") or {}
            klines = data.get("klines") or []
            if not klines:
                raise ValueError("empty intraday series")
            return data, host
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{host}: {type(exc).__name__}: {exc}")
    raise RuntimeError("; ".join(errors))


def parse_series(board_code: str, data: dict[str, Any]) -> dict[str, Any]:
    periods = (data.get("tradePeriods") or {}).get("periods") or []
    date = parse_period_date(periods)
    points: dict[str, dict[str, Any]] = {}

    for raw in data.get("klines") or []:
        fields = raw.split(",")
        if len(fields) < 2:
            continue
        stamp = fields[0].strip()
        if " " in stamp:
            date_part, minute = stamp.split(" ", 1)
        else:
            date_part, minute = date, stamp
        try:
            main_yuan = float(fields[1])
        except (TypeError, ValueError):
            continue
        points[minute] = {
            "time": minute,
            "main_net_yuan": main_yuan,
            "main_net_yi": round(main_yuan / 1e8, 4),
        }

    series = [points[key] for key in sorted(points)]
    if not series:
        raise ValueError(f"{board_code}: no parsable points")

    minimum = min(series, key=lambda point: point["main_net_yi"])
    maximum = max(series, key=lambda point: point["main_net_yi"])
    latest = series[-1]
    return {
        "date": date,
        "board_code": board_code,
        "board_name": data.get("name") or BOARDS.get(board_code, board_code),
        "series": series,
        "minimum": minimum,
        "maximum": maximum,
        "latest": latest,
        "rebound_yi": round(maximum["main_net_yi"] - minimum["main_net_yi"], 4),
    }


def merge_and_save(result: dict[str, Any]) -> Path:
    INTRADAY_DIR.mkdir(parents=True, exist_ok=True)
    path = INTRADAY_DIR / f"{result['date']}_{result['board_code']}.json"
    existing: dict[str, Any] = {}
    if path.exists():
        try:
            existing = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            existing = {}

    merged = {
        (point["time"]): point
        for point in existing.get("series", [])
    }
    for point in result["series"]:
        merged[point["time"]] = point
    series = [merged[key] for key in sorted(merged)]
    minimum = min(series, key=lambda point: point["main_net_yi"])
    maximum = max(series, key=lambda point: point["main_net_yi"])
    latest = series[-1]

    output = {
        **result,
        "source": "东方财富板块资金流 fflow/kline klt=1",
        "definition": "第一数据列为主力净流入，原始单位元",
        "captured_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        "series": series,
        "minimum": minimum,
        "maximum": maximum,
        "latest": latest,
        "rebound_yi": round(maximum["main_net_yi"] - minimum["main_net_yi"], 4),
        "snapshots": int(existing.get("snapshots", 0)) + 1,
    }
    temp = path.with_suffix(".tmp")
    temp.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    os.replace(temp, path)
    return path


def capture_once(board_codes: list[str]) -> int:
    written = 0
    for board_code in board_codes:
        try:
            data, host = request_intraday(board_code)
            result = parse_series(board_code, data)
            result["source_host"] = host
            path = merge_and_save(result)
            print(
                f"[OK] {result['board_name']} {result['latest']['time']} "
                f"主力={result['latest']['main_net_yi']:+.2f}亿 "
                f"最低={result['minimum']['main_net_yi']:+.2f}亿@"
                f"{result['minimum']['time']} 文件={path.name}",
                flush=True,
            )
            written += 1
        except Exception as exc:  # noqa: BLE001
            print(f"[WARN] {board_code}: {exc}", flush=True)
    return written


def request_daily(board_code: str, target_date: str) -> tuple[dict[str, Any], str]:
    params = {
        "lmt": "30",
        "klt": "101",
        "fields1": "f1,f2,f3,f7",
        "fields2": "f51,f52,f53,f54,f55,f56",
        "secid": f"90.{board_code}",
        "ut": UT,
    }
    errors: list[str] = []
    for host in DAILY_HOSTS:
        try:
            response = requests.get(
                host + DAILY_API_PATH,
                params=params,
                headers={
                    **EM_HEADERS,
                    "Referer": f"https://data.eastmoney.com/bkzj/{board_code}.html",
                },
                timeout=15,
            )
            response.raise_for_status()
            data = response.json().get("data") or {}
            dates = {
                row.split(",", 1)[0]
                for row in data.get("klines") or []
            }
            if target_date not in dates:
                raise ValueError(f"target date {target_date} absent")
            return data, host
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{host}: {type(exc).__name__}: {exc}")
    raise RuntimeError("; ".join(errors))


def backfill_daily(board_codes: list[str], target_date: str) -> Path:
    output: dict[str, Any] = {
        "source": "东方财富板块资金流 daykline",
        "definition": "f52 主力净流入，原始单位元",
        "captured_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        "date": target_date,
        "boards": {},
    }
    for board_code in board_codes:
        try:
            data, host = request_daily(board_code, target_date)
            rows = []
            for raw in data.get("klines") or []:
                fields = raw.split(",")
                if len(fields) < 6:
                    continue
                rows.append(
                    {
                        "date": fields[0],
                        "main_net_yi": round(float(fields[1]) / 1e8, 4),
                        "small_net_yi": round(float(fields[2]) / 1e8, 4),
                        "medium_net_yi": round(float(fields[3]) / 1e8, 4),
                        "large_net_yi": round(float(fields[4]) / 1e8, 4),
                        "super_large_net_yi": round(float(fields[5]) / 1e8, 4),
                    }
                )
            target_index = next(
                index for index, row in enumerate(rows) if row["date"] == target_date
            )
            target = rows[target_index]
            previous = rows[target_index - 1] if target_index > 0 else None
            output["boards"][board_code] = {
                "board_code": board_code,
                "board_name": data.get("name") or BOARDS.get(board_code, board_code),
                "source_host": host,
                "current": target,
                "previous": previous,
                "main_net_change_yi": (
                    round(target["main_net_yi"] - previous["main_net_yi"], 4)
                    if previous
                    else None
                ),
                "recent": rows[-6:],
            }
            print(
                f"[OK] {output['boards'][board_code]['board_name']} "
                f"{target_date} 主力={target['main_net_yi']:+.2f}亿",
                flush=True,
            )
        except Exception as exc:  # noqa: BLE001
            print(f"[WARN] {board_code}: {exc}", flush=True)

    json_path = DATA_DIR / f"board_daily_fund_flows_{target_date}.json"
    js_path = DATA_DIR / f"board_daily_fund_flows_{target_date}.js"
    csv_path = DATA_DIR / f"board_daily_fund_flows_{target_date}.csv"
    text = json.dumps(output, ensure_ascii=False, indent=2)
    json_path.write_text(text, encoding="utf-8")
    js_path.write_text(f"window.BOARD_FUND_DATA = {text};\n", encoding="utf-8")
    with csv_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "交易日",
                "板块代码",
                "板块名称",
                "前日主力净流入亿",
                "当日主力净流入亿",
                "较前日变化亿",
                "大单净流入亿",
                "超大单净流入亿",
                "数据源",
            ],
        )
        writer.writeheader()
        for item in output["boards"].values():
            writer.writerow(
                {
                    "交易日": target_date,
                    "板块代码": item["board_code"],
                    "板块名称": item["board_name"],
                    "前日主力净流入亿": (
                        item["previous"]["main_net_yi"] if item["previous"] else None
                    ),
                    "当日主力净流入亿": item["current"]["main_net_yi"],
                    "较前日变化亿": item["main_net_change_yi"],
                    "大单净流入亿": item["current"]["large_net_yi"],
                    "超大单净流入亿": item["current"]["super_large_net_yi"],
                    "数据源": "东方财富板块资金流 daykline",
                }
            )
    print(f"[DONE] {json_path}", flush=True)
    print(f"[DONE] {js_path}", flush=True)
    print(f"[DONE] {csv_path}", flush=True)
    return json_path


def main() -> None:
    parser = argparse.ArgumentParser(description="抓取东方财富板块分钟级主力资金流")
    parser.add_argument(
        "--board",
        action="append",
        dest="boards",
        help="板块代码，可重复，例如 --board BK0917；默认芯片三口径",
    )
    parser.add_argument("--watch", action="store_true", help="持续轮询直到收盘")
    parser.add_argument("--interval", type=int, default=60, help="轮询间隔秒，默认 60")
    parser.add_argument(
        "--backfill-daily",
        action="store_true",
        help="回填板块日级主力资金，不抓分钟线",
    )
    parser.add_argument("--date", default="2026-10-23", help="回填目标交易日")
    parser.add_argument(
        "--ignore-session",
        action="store_true",
        help="忽略交易时段限制，用于测试接口",
    )
    args = parser.parse_args()

    boards = args.boards or list(BOARDS)
    now = datetime.now(CHINA_TZ)
    if args.backfill_daily:
        backfill_daily(boards, args.date)
        return
    if not args.watch:
        capture_once(boards)
        return

    print(
        f"[INFO] 盘中采集启动：{now:%Y-%m-%d %H:%M:%S}，"
        f"板块={','.join(boards)}，间隔={args.interval}s",
        flush=True,
    )
    while True:
        now = datetime.now(CHINA_TZ)
        if not args.ignore_session and not is_trading_window(now):
            print("[DONE] 当前不在交易时段，结束采集。", flush=True)
            return
        capture_once(boards)
        if not args.ignore_session and now.time() >= clock_time(15, 5):
            print("[DONE] 已过收盘时间，结束采集。", flush=True)
            return
        time.sleep(max(args.interval, 5))


if __name__ == "__main__":
    main()
