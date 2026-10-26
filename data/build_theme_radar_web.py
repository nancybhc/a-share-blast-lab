from __future__ import annotations

import argparse
import csv
import json
import shutil
import time
from datetime import datetime
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


SOURCE_ROOT = Path(r"C:\Users\jiach\题材雷达结果")
DATA_DIR = Path(__file__).resolve().parent
OUTPUT_JSON = DATA_DIR / "theme_radar_latest.json"
OUTPUT_JS = DATA_DIR / "theme_radar_latest.js"
STATUS_JSON = DATA_DIR / "theme_radar_status.json"
THEME_TOP_CSV = DATA_DIR / "full_market" / "theme_strength_daily_top.csv"
THEME_DETAIL_CSV = DATA_DIR / "full_market" / "theme_strength_daily_detail.csv"
THEME_XLSX = DATA_DIR / "theme_strength_latest.xlsx"


def as_float(value: Any) -> float | None:
    try:
        return round(float(value), 4)
    except (TypeError, ValueError):
        return None


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def latest_result_dir() -> Path:
    candidates = []
    for path in SOURCE_ROOT.iterdir():
        if not path.is_dir():
            continue
        raw = path / "原始数据"
        required = (
            raw / "当日题材强度_每日题材前五.csv",
            raw / "当日题材强度_五日题材汇总.csv",
            raw / "命中个股.csv",
            raw / "题材共振.csv",
        )
        if all(item.exists() for item in required):
            candidates.append(path)
    if not candidates:
        raise FileNotFoundError("没有可用的题材雷达结果目录")
    return sorted(candidates, key=lambda path: path.name)[-1]


def build_payload() -> dict[str, Any]:
    day_dir = latest_result_dir()
    raw_dir = day_dir / "原始数据"
    day = day_dir.name

    daily_rows = read_csv(raw_dir / "当日题材强度_每日题材前五.csv")
    daily_top = [
        {
            "date": row.get("交易日期", ""),
            "theme": row.get("合并题材", ""),
            "representative": row.get("代表题材", ""),
            "change_pct": as_float(row.get("题材涨幅%")),
            "constituents": int(as_float(row.get("合并成分数")) or 0),
            "members": row.get("组内题材", ""),
            "rank": int(as_float(row.get("排名")) or 0),
        }
        for row in daily_rows
        if row.get("交易日期") == day
    ]
    daily_top.sort(key=lambda row: row["rank"])

    five_day = [
        {
            "theme": row.get("概念", ""),
            "current_streak": int(as_float(row.get("当前连续")) or 0),
            "max_streak": int(as_float(row.get("最大连续")) or 0),
            "appearances": int(as_float(row.get("上榜次数")) or 0),
            "avg_change_pct": as_float(row.get("平均涨幅%")),
            "avg_rank": as_float(row.get("平均排名")),
            "latest_rank": int(as_float(row.get("最近排名")) or 0),
            "dates": row.get("出现日期", ""),
        }
        for row in read_csv(raw_dir / "当日题材强度_五日题材汇总.csv")
    ]
    five_day.sort(
        key=lambda row: (
            row["appearances"],
            row["current_streak"],
            -(row["avg_rank"] or 999),
        ),
        reverse=True,
    )

    strength_summary = day_dir / "题材雷达_当日题材强度_摘要.txt"
    source_mtime = max(
        path.stat().st_mtime
        for path in (strength_summary,)
        if path.exists()
    )
    return {
        "date": day,
        "generated_at": datetime.fromtimestamp(
            source_mtime,
            ZoneInfo("Asia/Shanghai"),
        ).isoformat(timespec="seconds"),
        "source": "当日题材强度",
        "daily_top": daily_top,
        "five_day": five_day,
    }


def write_payload() -> dict[str, Any]:
    payload = build_payload()
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    OUTPUT_JSON.write_text(text, encoding="utf-8")
    OUTPUT_JS.write_text(
        "window.THEME_RADAR_DATA = " + text + ";\n",
        encoding="utf-8",
    )
    source_dir = SOURCE_ROOT / payload["date"] / "原始数据"
    result_dir = SOURCE_ROOT / payload["date"]
    for source_name, target in (
        ("当日题材强度_每日题材前五.csv", THEME_TOP_CSV),
        ("当日题材强度_每日明细.csv", THEME_DETAIL_CSV),
        ("题材雷达_当日题材强度.xlsx", THEME_XLSX),
    ):
        target.parent.mkdir(parents=True, exist_ok=True)
        source = source_dir / source_name if source_name.endswith(".csv") else result_dir / source_name
        shutil.copy2(source, target)
    STATUS_JSON.write_text(
        json.dumps(
            {
                "updated_at": datetime.now(ZoneInfo("Asia/Shanghai")).isoformat(
                    timespec="seconds"
                ),
                "source_date": payload["date"],
                "daily_top_count": len(payload["daily_top"]),
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    return payload


def main() -> None:
    parser = argparse.ArgumentParser(description="题材雷达结果转网页数据")
    parser.add_argument("--watch", action="store_true")
    parser.add_argument("--interval", type=int, default=60)
    args = parser.parse_args()
    while True:
        payload = write_payload()
        print(
            f"[OK] 题材雷达 {payload['date']} 当日前五={len(payload['daily_top'])} "
            f"五日入榜={len(payload['five_day'])}",
            flush=True,
        )
        if not args.watch:
            return
        time.sleep(max(args.interval, 10))


if __name__ == "__main__":
    main()
