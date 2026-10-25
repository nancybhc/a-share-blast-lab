from __future__ import annotations

import csv
import json
import time
from pathlib import Path
from typing import Any

import requests


DATA_DIR = Path(__file__).resolve().parent
FULL_DIR = DATA_DIR / "full_market"
DATE = "2026-10-23"
API = "https://push2his.eastmoney.com/api/qt/stock/fflow/daykline/get"
FALLBACK_API = "https://push2test.eastmoney.com/api/qt/stock/fflow/daykline/get"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://data.eastmoney.com/bkzj/",
}
UT = "b2884a393a59ad64002292a3e90d46a5"

SEGMENTS = (
    ("BK0891", "国产芯片", "concept"),
    ("BK0917", "半导体概念", "concept"),
    ("BK1137", "存储芯片", "concept"),
    ("BK1127", "AI芯片", "concept"),
    ("BK0969", "汽车芯片", "concept"),
    ("BK0952", "第三代半导体", "concept"),
    ("BK1121", "第四代半导体", "concept"),
    ("BK1036", "半导体", "industry"),
    ("BK1331", "数字芯片设计", "industry"),
    ("BK1330", "模拟芯片设计", "industry"),
    ("BK1328", "集成电路封测", "industry"),
    ("BK1325", "半导体材料", "industry"),
    ("BK1326", "半导体设备", "industry"),
)


def request_daily(code: str) -> tuple[list[dict[str, Any]], str]:
    params = {
        "lmt": "15",
        "klt": "101",
        "fields1": "f1,f2,f3,f7",
        "fields2": "f51,f52,f53,f54,f55,f56",
        "secid": f"90.{code}",
        "ut": UT,
    }
    errors: list[str] = []
    for host in (API, FALLBACK_API):
        try:
            response = requests.get(
                host,
                params=params,
                headers={**HEADERS, "Referer": f"https://data.eastmoney.com/bkzj/{code}.html"},
                timeout=25,
            )
            response.raise_for_status()
            data = response.json().get("data") or {}
            rows = []
            for line in data.get("klines") or []:
                fields = line.split(",")
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
            if rows:
                return rows, host
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{host}: {type(exc).__name__}: {exc}")
        time.sleep(0.3)
    raise RuntimeError("; ".join(errors))


def main() -> None:
    full_path = next(FULL_DIR.glob(f"full_market_daily_{DATE}.json"))
    full = json.loads(full_path.read_text(encoding="utf-8"))
    lookup = {
        row["code"]: row
        for scope in ("concept", "industry")
        for row in full[scope]["all"]
    }

    segments = []
    for code, name, taxonomy in SEGMENTS:
        live = lookup.get(code)
        if not live:
            raise RuntimeError(f"{code} {name} missing from full-market snapshot")
        history, host = request_daily(code)
        target_index = next(i for i, row in enumerate(history) if row["date"] == DATE)
        target = history[target_index]
        previous = history[target_index - 1] if target_index > 0 else None
        five_day = history[max(0, target_index - 4) : target_index + 1]
        segments.append(
            {
                **live,
                "code": code,
                "name": name,
                "taxonomy": taxonomy,
                "source_host": host,
                "previous_day_yi": previous["main_net_yi"] if previous else None,
                "day_change_yi": (
                    round(target["main_net_yi"] - previous["main_net_yi"], 4)
                    if previous
                    else None
                ),
                "five_day_main_net_yi": round(
                    sum(row["main_net_yi"] for row in five_day),
                    4,
                ),
                "history": history[-6:],
            }
        )

    concept_rows = sorted(
        (row for row in segments if row["taxonomy"] == "concept"),
        key=lambda row: row["flow_yi"],
        reverse=True,
    )
    for rank, row in enumerate(concept_rows, 1):
        row["concept_day_rank"] = rank

    industry_rows = sorted(
        (row for row in segments if row["taxonomy"] == "industry"),
        key=lambda row: row["flow_yi"],
        reverse=True,
    )
    for rank, row in enumerate(industry_rows, 1):
        row["industry_day_rank"] = rank

    by_code = {row["code"]: row for row in segments}
    payload = {
        "date": DATE,
        "source": (
            "东方财富板块收盘快照 f62、涨跌幅与上涨家数；"
            "日级资金趋势来自 fflow/daykline f52"
        ),
        "method": (
            "单个官方板块独立统计。当日主力、资金强度、涨跌幅、上涨广度和"
            "5日累计分别比较；不把成分重叠的不同板块相加。"
        ),
        "segments": segments,
        "highlights": {
            "single_day_concept_leader": by_code["BK0891"],
            "single_day_industry_leader": by_code["BK1036"],
            "five_day_leader": max(segments, key=lambda row: row["five_day_main_net_yi"]),
            "flow_efficiency_leader": max(
                segments,
                key=lambda row: row["main_ratio"] if row["main_ratio"] is not None else -999,
            ),
            "breadth_leader": max(
                (
                    row
                    for row in segments
                    if row["up_count"] + row["down_count"] + row["flat_count"] >= 50
                ),
                key=lambda row: row["breadth_pct"],
            ),
            "weakest_five_day": min(
                segments,
                key=lambda row: row["five_day_main_net_yi"],
            ),
        },
        "custom_reference": {
            "name": "远航版·半导体芯片",
            "constituents": 52,
            "single_day_yi": 44.86,
            "day_change_yi": 33.07,
            "five_day_main_net_yi": 116.06,
            "structure_strength": 59.6,
            "note": "自定义成分与官方板块不同，只作结构参照，不参与官方细分排名。",
        },
    }

    json_path = DATA_DIR / f"chip_segments_{DATE}.json"
    js_path = DATA_DIR / f"chip_segments_{DATE}.js"
    csv_path = FULL_DIR / f"chip_segments_{DATE}.csv"
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    json_path.write_text(text, encoding="utf-8")
    js_path.write_text(f"window.CHIP_SEGMENTS_DATA = {text};\n", encoding="utf-8")
    with csv_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            [
                "分类",
                "代码",
                "名称",
                "当日主力净流入亿",
                "较前日变化亿",
                "近5日累计亿",
                "涨跌幅%",
                "主力净流入率%",
                "上涨家数",
                "下跌家数",
                "平盘家数",
                "上涨广度%",
            ]
        )
        for row in segments:
            writer.writerow(
                [
                    "概念" if row["taxonomy"] == "concept" else "行业",
                    row["code"],
                    row["name"],
                    row["flow_yi"],
                    row["day_change_yi"],
                    row["five_day_main_net_yi"],
                    row["change_pct"],
                    row["main_ratio"],
                    row["up_count"],
                    row["down_count"],
                    row["flat_count"],
                    row["breadth_pct"],
                ]
            )
    print(f"[DONE] {json_path}", flush=True)
    print(f"[DONE] {js_path}", flush=True)
    print(f"[DONE] {csv_path}", flush=True)


if __name__ == "__main__":
    main()
