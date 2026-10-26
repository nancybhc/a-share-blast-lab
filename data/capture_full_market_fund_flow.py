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
FULL_DIR = DATA_DIR / "full_market"
API_PATH = "/api/qt/clist/get"
HOSTS = (
    "https://push2.eastmoney.com",
    "https://push2test.eastmoney.com",
)
UT = "b2884a393a59ad64002292a3e90d46a5"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://data.eastmoney.com/bkzj/",
}
SCOPES = {
    "industry": {
        "label": "行业板块",
        "fs": "m:90+t:2",
    },
    "concept": {
        "label": "概念板块",
        "fs": "m:90+t:3",
    },
    "stock": {
        "label": "全市场个股",
        "fs": "m:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23,m:0+t:81+s:2048",
    },
}
FIELDS = "f12,f14,f2,f3,f6,f20,f62,f184,f104,f105,f106,f124"


def now_cn() -> datetime:
    return datetime.now(CHINA_TZ)


def is_trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 20) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current <= clock_time(15, 5)
    )


def numeric(value: Any, scale: float = 1.0) -> float | None:
    if value in (None, "", "-", "--"):
        return None
    try:
        return round(float(value) / scale, 4)
    except (TypeError, ValueError):
        return None


def integer(value: Any) -> int:
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return 0


def fetch_scope(
    scope: str, timeout: int = 25
) -> tuple[list[dict[str, Any]], str, int]:
    params = {
        "pz": 500,
        "po": 1,
        "np": 1,
        "fltt": 2,
        "invt": 2,
        "fid": "f62",
        "fs": SCOPES[scope]["fs"],
        "fields": FIELDS,
        "ut": UT,
    }
    errors: list[str] = []
    for host in HOSTS:
        try:
            records: dict[str, dict[str, Any]] = {}
            total = 0
            page = 1
            while page <= 100:
                response = requests.get(
                    host + API_PATH,
                    params={**params, "pn": page},
                    headers=HEADERS,
                    timeout=timeout,
                )
                response.raise_for_status()
                data = response.json().get("data") or {}
                rows = data.get("diff") or []
                total = int(data.get("total") or total or len(rows))
                if not rows:
                    break
                before = len(records)
                for row in rows:
                    flow = numeric(row.get("f62"), 1e8)
                    if flow is None:
                        continue
                    code = str(row.get("f12") or "").strip()
                    name = str(row.get("f14") or "").strip()
                    if not code or not name:
                        continue
                    up_count = integer(row.get("f104"))
                    down_count = integer(row.get("f105"))
                    flat_count = integer(row.get("f106"))
                    records[code] = {
                        "code": code,
                        "name": name,
                        "flow_yi": flow,
                        "change_pct": numeric(row.get("f3")),
                        "amount_yi": numeric(row.get("f6"), 1e8),
                        "market_cap_yi": numeric(row.get("f20"), 1e8),
                        "main_ratio": numeric(row.get("f184")),
                        "up_count": up_count,
                        "down_count": down_count,
                        "flat_count": flat_count,
                        "breadth_pct": (
                            round(
                                up_count
                                / max(up_count + down_count + flat_count, 1)
                                * 100,
                                2,
                            )
                        ),
                    }
                if len(records) >= total:
                    break
                if page > 1 and len(records) == before:
                    raise ValueError(f"pagination stalled at page {page}")
                page += 1
            if not records:
                raise ValueError("empty result")
            if total and len(records) < total * 0.9:
                raise ValueError(
                    f"incomplete result: received {len(records)}/{total}"
                )
            return list(records.values()), host, total
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{host}: {type(exc).__name__}: {exc}")
    raise RuntimeError(f"{scope}: " + "; ".join(errors))


def summarize_stocks(stocks: list[dict[str, Any]]) -> dict[str, Any]:
    inflows = [stock for stock in stocks if stock["flow_yi"] > 0]
    outflows = [stock for stock in stocks if stock["flow_yi"] < 0]
    return {
        "count": len(stocks),
        "main_net_yi": round(sum(stock["flow_yi"] for stock in stocks), 2),
        "inflow_count": len(inflows),
        "outflow_count": len(outflows),
        "flat_count": len(stocks) - len(inflows) - len(outflows),
        "top_inflow": sorted(stocks, key=lambda item: item["flow_yi"], reverse=True)[:20],
        "top_outflow": sorted(stocks, key=lambda item: item["flow_yi"])[:20],
    }


def snapshot_once(target_date: str | None = None) -> dict[str, Any]:
    captured_at = now_cn()
    date = target_date or captured_at.date().isoformat()
    raw: dict[str, list[dict[str, Any]]] = {}
    hosts: set[str] = set()
    totals: dict[str, int] = {}
    for scope in SCOPES:
        rows, host, total = fetch_scope(scope)
        raw[scope] = rows
        totals[scope] = total
        hosts.add(host)
        print(
            f"[OK] {SCOPES[scope]['label']} valid={len(rows)} total={total}",
            flush=True,
        )

    stocks = raw["stock"]
    market = summarize_stocks(stocks)
    payload = {
        "date": date,
        "captured_at": captured_at.isoformat(timespec="seconds"),
        "source": "东方财富 clist f62 / 主力净流入",
        "source_hosts": sorted(hosts),
        "counts": totals,
        "valid_counts": {scope: len(rows) for scope, rows in raw.items()},
        "market": market,
        "industry": {
            "count": len(raw["industry"]),
            "top_inflow": sorted(
                raw["industry"], key=lambda item: item["flow_yi"], reverse=True
            )[:20],
            "top_outflow": sorted(raw["industry"], key=lambda item: item["flow_yi"])[:20],
            "all": sorted(raw["industry"], key=lambda item: item["flow_yi"], reverse=True),
        },
        "concept": {
            "count": len(raw["concept"]),
            "top_inflow": sorted(
                raw["concept"], key=lambda item: item["flow_yi"], reverse=True
            )[:20],
            "top_outflow": sorted(raw["concept"], key=lambda item: item["flow_yi"])[:20],
            "all": sorted(raw["concept"], key=lambda item: item["flow_yi"], reverse=True),
        },
        "stock": {
            **market,
            "all": sorted(stocks, key=lambda item: item["flow_yi"], reverse=True),
        },
        "intraday_available": False,
        "intraday_note": "该文件为收盘/最近快照，不包含历史分钟序列。",
    }
    save_daily(payload)
    return payload


def save_daily(payload: dict[str, Any]) -> None:
    FULL_DIR.mkdir(parents=True, exist_ok=True)
    date = payload["date"]
    json_path = FULL_DIR / f"full_market_daily_{date}.json"
    js_path = DATA_DIR / f"full_market_daily_{date}.js"
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    json_path.write_text(text, encoding="utf-8")

    compact = {
        **payload,
        "industry": {
            **payload["industry"],
            "all": payload["industry"]["all"],
        },
        "concept": {
            **payload["concept"],
            "all": payload["concept"]["all"],
        },
        "stock": {
            key: value
            for key, value in payload["stock"].items()
            if key != "all"
        },
    }
    js_path.write_text(
        "window.FULL_MARKET_DATA = "
        + json.dumps(compact, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    csv_path = FULL_DIR / f"full_market_daily_{date}.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            [
                "类型",
                "代码",
                "名称",
                "主力净流入亿",
                "涨跌幅%",
                "成交额亿",
                "流通市值亿",
                "主力净流入率%",
            ]
        )
        for scope in ("industry", "concept"):
            for row in payload[scope]["all"]:
                writer.writerow(
                    [
                        SCOPES[scope]["label"],
                        row["code"],
                        row["name"],
                        row["flow_yi"],
                        row.get("change_pct"),
                        row.get("amount_yi"),
                        row.get("market_cap_yi"),
                        row.get("main_ratio"),
                    ]
                )
        for row in payload["stock"]["all"]:
            writer.writerow(
                [
                    SCOPES["stock"]["label"],
                    row["code"],
                    row["name"],
                    row["flow_yi"],
                    row.get("change_pct"),
                    row.get("amount_yi"),
                    row.get("market_cap_yi"),
                    row.get("main_ratio"),
                ]
            )

    print(f"[DONE] {json_path}", flush=True)
    print(f"[DONE] {js_path}", flush=True)
    print(f"[DONE] {csv_path}", flush=True)


def load_live_state(date: str) -> dict[str, Any]:
    path = FULL_DIR / f"full_market_intraday_{date}.json"
    if path.exists():
        try:
            state = json.loads(path.read_text(encoding="utf-8"))
            latest_stock = state.get("latest_stock_snapshot") or {}
            if int(latest_stock.get("count") or 0) < 500:
                state["market_series"] = []
                state["latest_stock_snapshot"] = None
            return state
        except (OSError, json.JSONDecodeError):
            pass
    return {
        "date": date,
        "source": "东方财富 clist f62 / 主力净流入",
        "first_capture_at": None,
        "last_capture_at": None,
        "capture_count": 0,
        "boards": {},
        "market_series": [],
        "latest_stock_snapshot": None,
    }


def append_live_boards(state: dict[str, Any], captured_at: datetime) -> None:
    point_time = captured_at.strftime("%H:%M:%S")
    for scope in ("industry", "concept"):
        rows, _, _ = fetch_scope(scope)
        for row in rows:
            entry = state["boards"].setdefault(
                row["code"],
                {
                    "code": row["code"],
                    "name": row["name"],
                    "kind": scope,
                    "points": [],
                },
            )
            entry["name"] = row["name"]
            points = {point["time"]: point for point in entry["points"]}
            points[point_time] = {
                "time": point_time,
                "flow_yi": row["flow_yi"],
                "change_pct": row.get("change_pct"),
                "main_ratio": row.get("main_ratio"),
                "up_count": row.get("up_count", 0),
                "down_count": row.get("down_count", 0),
                "flat_count": row.get("flat_count", 0),
                "breadth_pct": row.get("breadth_pct"),
            }
            entry["points"] = [points[key] for key in sorted(points)]


def append_live_market(state: dict[str, Any], captured_at: datetime) -> None:
    stocks, _, _ = fetch_scope("stock")
    market = summarize_stocks(stocks)
    latest = {
        "time": captured_at.strftime("%H:%M:%S"),
        "count": market["count"],
        "main_net_yi": market["main_net_yi"],
        "inflow_count": market["inflow_count"],
        "outflow_count": market["outflow_count"],
        "top_inflow": market["top_inflow"][:12],
        "top_outflow": market["top_outflow"][:12],
    }
    state["market_series"].append(latest)
    state["latest_stock_snapshot"] = latest


def live_summary(state: dict[str, Any]) -> dict[str, Any]:
    rows = []
    for item in state["boards"].values():
        points = item.get("points") or []
        if not points:
            continue
        minimum = min(points, key=lambda point: point["flow_yi"])
        maximum = max(points, key=lambda point: point["flow_yi"])
        latest = points[-1]
        rows.append(
            {
                "code": item["code"],
                "name": item["name"],
                "kind": item["kind"],
                "minimum_yi": minimum["flow_yi"],
                "minimum_time": minimum["time"],
                "maximum_yi": maximum["flow_yi"],
                "maximum_time": maximum["time"],
                "close_yi": latest["flow_yi"],
                "close_time": latest["time"],
                "rebound_yi": round(maximum["flow_yi"] - minimum["flow_yi"], 4),
                "change_pct": latest.get("change_pct"),
                "main_ratio": latest.get("main_ratio"),
                "up_count": latest.get("up_count", 0),
                "down_count": latest.get("down_count", 0),
                "flat_count": latest.get("flat_count", 0),
                "breadth_pct": latest.get("breadth_pct"),
            }
        )

    market_series = state.get("market_series") or []
    market_stats = None
    if market_series:
        minimum = min(market_series, key=lambda point: point["main_net_yi"])
        maximum = max(market_series, key=lambda point: point["main_net_yi"])
        latest = market_series[-1]
        market_stats = {
            "count": latest.get("count"),
            "minimum_yi": minimum["main_net_yi"],
            "minimum_time": minimum["time"],
            "maximum_yi": maximum["main_net_yi"],
            "maximum_time": maximum["time"],
            "close_yi": latest["main_net_yi"],
            "close_time": latest["time"],
            "rebound_yi": round(maximum["main_net_yi"] - minimum["main_net_yi"], 4),
            "top_inflow": latest["top_inflow"],
            "top_outflow": latest["top_outflow"],
            "inflow_count": latest["inflow_count"],
            "outflow_count": latest["outflow_count"],
        }

    return {
        "date": state["date"],
        "source": state["source"],
        "available": bool(rows),
        "capture_count": state["capture_count"],
        "first_capture_at": state["first_capture_at"],
        "last_capture_at": state["last_capture_at"],
        "board_count": len(rows),
        "boards": sorted(rows, key=lambda row: row["close_yi"], reverse=True),
        "market": market_stats,
    }


def save_live_latest(summary: dict[str, Any]) -> None:
    path_js = DATA_DIR / "full_market_intraday_latest.js"
    path_json = FULL_DIR / "full_market_intraday_latest.json"
    text = json.dumps(summary, ensure_ascii=False, indent=2)
    path_js.write_text(f"window.FULL_MARKET_INTRADAY = {text};\n", encoding="utf-8")
    path_json.write_text(text, encoding="utf-8")

    csv_path = FULL_DIR / f"full_market_intraday_summary_{summary['date']}.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "类型",
                "代码",
                "名称",
                "最低流出亿",
                "发生时间",
                "最高流入亿",
                "发生时间",
                "收盘值亿",
                "收盘时间",
                "回补幅度亿",
                "涨跌幅%",
            ],
        )
        writer.writeheader()
        for row in summary.get("boards", []):
            writer.writerow(
                {
                    "类型": SCOPES[row["kind"]]["label"],
                    "代码": row["code"],
                    "名称": row["name"],
                    "最低流出亿": row["minimum_yi"],
                    "发生时间": row["minimum_time"],
                    "最高流入亿": row["maximum_yi"],
                    "发生时间": row["maximum_time"],
                    "收盘值亿": row["close_yi"],
                    "收盘时间": row["close_time"],
                    "回补幅度亿": row["rebound_yi"],
                    "涨跌幅%": row.get("change_pct"),
                }
            )


def save_live_state(state: dict[str, Any]) -> None:
    FULL_DIR.mkdir(parents=True, exist_ok=True)
    path = FULL_DIR / f"full_market_intraday_{state['date']}.json"
    temp = path.with_suffix(".tmp")
    temp.write_text(json.dumps(state, ensure_ascii=False), encoding="utf-8")
    os.replace(temp, path)


def watch(
    interval: int,
    stock_interval: int,
    ignore_session: bool,
    wait_for_open: bool = False,
) -> None:
    now = now_cn()
    date = now.date().isoformat()
    state = load_live_state(date)
    last_stock_at = (
        datetime.fromisoformat(state["latest_stock_snapshot"]["captured_at"])
        if (state.get("latest_stock_snapshot") or {}).get("captured_at")
        else None
    )
    print(
        f"[INFO] 全市场采集启动：{now:%Y-%m-%d %H:%M:%S} "
        f"板块间隔={interval}s 个股间隔={stock_interval}s",
        flush=True,
    )
    waiting_reported = False

    while True:
        now = now_cn()
        if not ignore_session and not is_trading_window(now):
            if wait_for_open:
                if not waiting_reported:
                    print("[WAIT] 休市，等待下一个交易时段。", flush=True)
                    waiting_reported = True
                time.sleep(min(max(interval, 10), 60))
                continue
            print("[DONE] 当前不在交易时段。", flush=True)
            break
        waiting_reported = False
        captured_at = now_cn()
        try:
            append_live_boards(state, captured_at)
        except Exception as exc:  # noqa: BLE001
            print(
                f"[WARN] {captured_at:%H:%M:%S} 板块采样失败 "
                f"{type(exc).__name__}: {exc}",
                flush=True,
            )
            time.sleep(max(interval, 10))
            continue

        should_snapshot_stocks = (
            last_stock_at is None
            or (captured_at - last_stock_at).total_seconds() >= stock_interval
        )
        if should_snapshot_stocks:
            try:
                append_live_market(state, captured_at)
                state["latest_stock_snapshot"]["captured_at"] = captured_at.isoformat(
                    timespec="seconds"
                )
                last_stock_at = captured_at
            except Exception as exc:  # noqa: BLE001
                print(
                    f"[WARN] {captured_at:%H:%M:%S} 个股快照失败 "
                    f"{type(exc).__name__}: {exc}",
                    flush=True,
                )

        state["capture_count"] = int(state.get("capture_count", 0)) + 1
        state["first_capture_at"] = state["first_capture_at"] or captured_at.isoformat(
            timespec="seconds"
        )
        state["last_capture_at"] = captured_at.isoformat(timespec="seconds")
        summary = live_summary(state)
        save_live_state(state)
        save_live_latest(summary)
        market_text = (
            f" 全市场={summary['market']['close_yi']:+.2f}亿"
            if summary.get("market")
            else ""
        )
        print(
            f"[OK] {captured_at:%H:%M:%S} 板块={summary['board_count']}"
            f"{market_text}",
            flush=True,
        )
        if not ignore_session and now.time() >= clock_time(15, 5):
            print("[DONE] 已过收盘时间。", flush=True)
            break
        time.sleep(max(interval, 10))


def ensure_placeholder() -> None:
    path = DATA_DIR / "full_market_intraday_latest.js"
    if path.exists():
        return
    payload = {
        "date": now_cn().date().isoformat(),
        "source": "东方财富 clist f62 / 主力净流入",
        "available": False,
        "capture_count": 0,
        "first_capture_at": None,
        "last_capture_at": None,
        "board_count": 0,
        "boards": [],
        "market": None,
    }
    path.write_text(
        "window.FULL_MARKET_INTRADAY = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="全市场板块与个股资金流采集")
    parser.add_argument("--snapshot", action="store_true", help="抓取一次收盘/当前快照")
    parser.add_argument("--watch", action="store_true", help="交易时段持续采集")
    parser.add_argument("--date", help="快照交易日，例如 2026-10-23")
    parser.add_argument("--interval", type=int, default=30, help="板块采样间隔秒")
    parser.add_argument("--stock-interval", type=int, default=300, help="个股采样间隔秒")
    parser.add_argument("--ignore-session", action="store_true")
    parser.add_argument(
        "--wait-for-open",
        action="store_true",
        help="休市时保持进程，等待下一个交易时段",
    )
    args = parser.parse_args()
    ensure_placeholder()
    if args.snapshot:
        snapshot_once(args.date)
        return
    if args.watch:
        watch(
            args.interval,
            args.stock_interval,
            args.ignore_session,
            args.wait_for_open,
        )
        return
    parser.print_help()


if __name__ == "__main__":
    main()
