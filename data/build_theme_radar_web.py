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
INTRADAY_ROOT = Path(r"C:\Users\jiach\Desktop\今日盘中\题材雷达_当日题材强度")
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


def resolve_theme_source() -> dict[str, Any]:
    candidates: list[dict[str, Any]] = []
    daily_name = "当日题材强度_每日题材前五.csv"
    five_day_name = "当日题材强度_五日题材汇总.csv"
    detail_name = "当日题材强度_每日明细.csv"
    xlsx_name = "题材雷达_当日题材强度.xlsx"

    def add_candidate(
        raw_dir: Path,
        result_dir: Path,
        *,
        kind: str,
    ) -> None:
        required = (raw_dir / daily_name, raw_dir / five_day_name, raw_dir / detail_name)
        if not all(path.is_file() and path.stat().st_size > 100 for path in required):
            return
        daily_rows = read_csv(raw_dir / daily_name)
        dates = sorted(
            {
                str(row.get("交易日期") or "")
                for row in daily_rows
                if row.get("交易日期")
            }
        )
        if not dates:
            return
        xlsx = result_dir / xlsx_name
        summary = result_dir / "题材雷达_当日题材强度_摘要.txt"
        tracked = [*required, xlsx, summary]
        mtime = max(path.stat().st_mtime for path in tracked if path.exists())
        candidates.append(
            {
                "day": dates[-1],
                "raw_dir": raw_dir,
                "result_dir": result_dir,
                "xlsx": xlsx,
                "summary": summary,
                "mtime": mtime,
                "kind": kind,
            }
        )

    add_candidate(INTRADAY_ROOT / "原始数据", INTRADAY_ROOT, kind="intraday")
    for path in SOURCE_ROOT.iterdir():
        if path.is_dir():
            add_candidate(path / "原始数据", path, kind="archive")

    if not candidates:
        raise FileNotFoundError("没有可用的题材雷达结果目录")
    return max(candidates, key=lambda item: (str(item["day"]), item["mtime"]))


def build_payload() -> dict[str, Any]:
    source = resolve_theme_source()
    raw_dir = source["raw_dir"]
    day = str(source["day"])

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
    period_label = next(
        (
            str(row.get("交易日标签") or "")
            for row in daily_rows
            if row.get("交易日期") == day and row.get("交易日标签")
        ),
        "",
    )

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

    strength_summary = source["summary"]
    source_mtime = max(
        path.stat().st_mtime
        for path in (strength_summary,)
        if path.exists()
    ) if strength_summary.exists() else source["mtime"]
    return {
        "date": day,
        "generated_at": datetime.fromtimestamp(
            source_mtime,
            ZoneInfo("Asia/Shanghai"),
        ).isoformat(timespec="seconds"),
        "source": (
            "今日盘中 / 当日题材强度"
            if source["kind"] == "intraday"
            else "归档 / 当日题材强度"
        ),
        "source_kind": source["kind"],
        "period_label": period_label,
        "daily_top": daily_top,
        "five_day": five_day,
    }


def write_payload() -> dict[str, Any]:
    payload = build_payload()
    source = resolve_theme_source()
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    OUTPUT_JSON.write_text(text, encoding="utf-8")
    OUTPUT_JS.write_text(
        "window.THEME_RADAR_DATA = " + text + ";\n",
        encoding="utf-8",
    )
    source_dir = source["raw_dir"]
    result_dir = source["result_dir"]
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
                "source_kind": payload.get("source_kind"),
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
