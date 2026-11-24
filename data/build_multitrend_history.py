from __future__ import annotations

import argparse
import json
from datetime import datetime
from pathlib import Path
from typing import Any

import numpy as np
import pandas as pd
from openpyxl import load_workbook


SITE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = SITE_DIR / "data"
REPORT_ROOT = Path(r"C:\Users\jiach\多空趋势分析结果")
DESKTOP_REPORT_ROOT = Path(r"C:\Users\jiach\Desktop\今日盘中\多空趋势")
HISTORY_CACHE_ROOT = Path(r"C:\Users\jiach\题材雷达工作流\cache")
SUMMARY_SHEETS = {"总览", "多空趋势", "量化5破10推演"}
EXCLUDED_GROUPS = {"黄金白银"}
SEMI_GROUPS = ("半导体芯片", "半导体设备", "半导体上游")
AI_POOL_GROUPS = (
    "PCB",
    "CPO",
    "光上游",
    *SEMI_GROUPS,
    "MLCC",
    "存储",
    "AIDC",
)
AI_COMPONENT_GROUPS = (
    "PCB",
    "CPO",
    "光上游",
    "半导体芯片",
    "半导体设备",
    "半导体上游",
    "MLCC",
    "存储",
)
SOLID_STORAGE_GROUPS = ("固态锂电", "储能")
POWER_GROUPS = ("电力", "电网设备")
KEY_GROUPS = (
    "AI硬件",
    "AI应用",
    "机器人",
    "商业航天",
    "互金证券",
    "药",
    "固态储能",
    "电",
    "算力",
)
TRADING_DAYS = 252


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="从全市场日线缓存生成爆破实验室近一年多空趋势数据"
    )
    parser.add_argument("--date", default="", help="交易日，默认取最新多空阶段报告")
    parser.add_argument("--days", type=int, default=TRADING_DAYS)
    return parser.parse_args()


def latest_report(target_date: str = "") -> tuple[str, Path]:
    if target_date:
        candidates = [
            root / f"多空阶段_{target_date}.xlsx"
            for root in (REPORT_ROOT, DESKTOP_REPORT_ROOT)
        ]
        existing = [path for path in candidates if path.is_file()]
        if not existing:
            raise FileNotFoundError("；".join(map(str, candidates)))
        return target_date, max(existing, key=lambda path: path.stat().st_mtime)
    reports = sorted(
        [
            *REPORT_ROOT.glob("多空阶段_*.xlsx"),
            *DESKTOP_REPORT_ROOT.glob("多空阶段_*.xlsx"),
        ],
        key=lambda path: path.stat().st_mtime,
        reverse=True,
    )
    if not reports:
        raise FileNotFoundError("没有找到多空阶段报告")
    path = reports[0]
    return path.stem.rsplit("_", 1)[-1], path


def latest_history_cache(target_date: str) -> Path:
    exact = HISTORY_CACHE_ROOT / f"history_wide_{target_date}.npz"
    if exact.is_file():
        return exact
    candidates = sorted(HISTORY_CACHE_ROOT.glob("history_wide_*.npz"), reverse=True)
    for path in candidates:
        try:
            loaded = np.load(path, allow_pickle=True)
            if target_date in {str(value) for value in loaded["dates"]}:
                return path
        except (OSError, ValueError, KeyError):
            continue
    raise FileNotFoundError(f"没有覆盖 {target_date} 的全市场日线缓存")


def load_memberships(report_path: Path) -> dict[str, list[str]]:
    workbook = load_workbook(report_path, read_only=True, data_only=True)
    groups: dict[str, list[str]] = {}
    for sheet in workbook.worksheets:
        if sheet.title in SUMMARY_SHEETS or sheet.title in EXCLUDED_GROUPS:
            continue
        codes: list[str] = []
        seen: set[str] = set()
        header: dict[str, int] | None = None
        for row in sheet.iter_rows(values_only=True):
            cleaned = [str(value or "").strip() for value in row]
            if header is None:
                if "代码" in cleaned:
                    header = {
                        name: index
                        for index, name in enumerate(cleaned)
                        if name
                    }
                continue
            code_index = header.get("代码")
            if code_index is None or code_index >= len(row):
                continue
            code = cleaned[code_index]
            if code.isdigit() and code not in seen:
                seen.add(code)
                codes.append(code)
        if codes:
            groups[sheet.title] = codes
    return groups


def read_report_current(
    report_path: Path,
    target_date: str,
) -> dict[str, dict[str, int | float]]:
    workbook = load_workbook(report_path, read_only=True, data_only=True)
    if "多空趋势" not in workbook.sheetnames:
        return {}
    sheet = workbook["多空趋势"]
    current: dict[str, dict[str, int | float]] = {}
    for row in sheet.iter_rows(min_row=5, values_only=True):
        label = str(row[0] or "").strip()
        raw_date = row[1]
        day = (
            raw_date.strftime("%Y-%m-%d")
            if isinstance(raw_date, datetime)
            else str(raw_date or "")[:10]
        )
        if not label or day != target_date:
            continue
        if label.startswith("AI硬件（"):
            label = "AI硬件"
        try:
            counts = {
                "bull": int(row[2]),
                "turnBull": int(row[3]),
                "turnBear": int(row[4]),
                "bear": int(row[5]),
                "total": int(row[8]),
            }
        except (TypeError, ValueError):
            continue
        current[label] = counts
    return current


def unique_codes(*groups: str, memberships: dict[str, list[str]]) -> list[str]:
    picked: list[str] = []
    seen: set[str] = set()
    for group in groups:
        for code in memberships.get(group, []):
            if code not in seen:
                seen.add(code)
                picked.append(code)
    return picked


def classify_matrices(close: pd.DataFrame) -> tuple[pd.DataFrame, dict[str, pd.DataFrame]]:
    ma5 = close.rolling(5, min_periods=5).mean()
    ma10 = close.rolling(10, min_periods=10).mean()
    up5 = ma5 > ma5.shift(1)
    up10 = ma10 > ma10.shift(1)
    above = ma5 > ma10
    valid = (
        close.notna()
        & ma5.notna()
        & ma5.shift(1).notna()
        & ma10.notna()
        & ma10.shift(1).notna()
    )
    bull = valid & up5 & up10 & above
    bear = valid & (~up5) & (~up10) & (~above)
    turn_bear = valid & (~up5) & (~bear)
    turn_bull = valid & up5 & (~bull)
    return valid, {
        "bull": bull,
        "turnBull": turn_bull,
        "turnBear": turn_bear,
        "bear": bear,
    }


def series_payload(
    codes: list[str],
    valid: pd.DataFrame,
    stages: dict[str, pd.DataFrame],
) -> dict[str, list[float | int]]:
    available = [code for code in codes if code in valid.columns]
    if not available:
        length = len(valid.index)
        return {
            "total": [0] * length,
            "bull": [0] * length,
            "turnBull": [0] * length,
            "turnBear": [0] * length,
            "bear": [0] * length,
            "bullPct": [0.0] * length,
            "turnBullPct": [0.0] * length,
            "turnBearPct": [0.0] * length,
            "bearPct": [0.0] * length,
        }
    selected_valid = valid[available]
    totals = selected_valid.sum(axis=1).to_numpy(dtype=int)
    counts = {
        name: matrix[available].sum(axis=1).to_numpy(dtype=int)
        for name, matrix in stages.items()
    }

    def pct(values: np.ndarray) -> list[float]:
        return [
            round(float(value) / total * 100, 2) if total else 0.0
            for value, total in zip(values, totals)
        ]

    return {
        "total": totals.tolist(),
        "bull": counts["bull"].tolist(),
        "turnBull": counts["turnBull"].tolist(),
        "turnBear": counts["turnBear"].tolist(),
        "bear": counts["bear"].tolist(),
        "bullPct": pct(counts["bull"]),
        "turnBullPct": pct(counts["turnBull"]),
        "turnBearPct": pct(counts["turnBear"]),
        "bearPct": pct(counts["bear"]),
    }


def build_payload(
    target_date: str,
    days: int,
    report_path: Path,
) -> dict[str, Any]:
    cache_path = latest_history_cache(target_date)
    memberships = load_memberships(report_path)
    required = {
        *AI_POOL_GROUPS,
        *SOLID_STORAGE_GROUPS,
        *POWER_GROUPS,
        "AI应用",
        "机器人",
        "商业航天",
        "互金证券",
        "药",
        "算力",
    }
    missing = sorted(required - set(memberships))
    if missing:
        raise RuntimeError(f"报告缺少趋势分组：{', '.join(missing)}")

    cache = np.load(cache_path, allow_pickle=True)
    dates = [str(value) for value in cache["dates"]]
    close = pd.DataFrame(
        cache["close"],
        index=pd.Index(dates),
        columns=pd.Index([str(value) for value in cache["codes"]]),
    )
    eligible_dates = [day for day in dates if day <= target_date][-max(days, 22) :]
    close = close.loc[eligible_dates]
    valid, stages = classify_matrices(close)

    groups: dict[str, list[str]] = {
        name: codes for name, codes in memberships.items() if name not in EXCLUDED_GROUPS
    }
    groups["半导体"] = unique_codes(*SEMI_GROUPS, memberships=memberships)
    groups["AI硬件"] = unique_codes(*AI_POOL_GROUPS, memberships=memberships)
    groups["固态储能"] = unique_codes(*SOLID_STORAGE_GROUPS, memberships=memberships)
    groups["电"] = unique_codes(*POWER_GROUPS, memberships=memberships)

    series = {
        name: series_payload(codes, valid, stages)
        for name, codes in groups.items()
    }
    report_current = read_report_current(report_path, target_date)
    append_current_day = eligible_dates[-1] != target_date
    if append_current_day:
        eligible_dates.append(target_date)
        for values in series.values():
            for key in (
                "total",
                "bull",
                "turnBull",
                "turnBear",
                "bear",
            ):
                values[key].append(int(values[key][-1]) if values[key] else 0)
            for key in (
                "bullPct",
                "turnBullPct",
                "turnBearPct",
                "bearPct",
            ):
                values[key].append(float(values[key][-1]) if values[key] else 0.0)

    for label, values in series.items():
        current = report_current.get(label)
        if not current:
            continue
        total = int(current["total"])
        for key in ("bull", "turnBull", "turnBear", "bear"):
            values[key][-1] = int(current[key])
            pct_key = f"{key}Pct"
            values[pct_key][-1] = (
                round(int(current[key]) / total * 100, 2) if total else 0.0
            )
        values["total"][-1] = total

    if len(eligible_dates) > max(days, 22):
        trim = len(eligible_dates) - max(days, 22)
        eligible_dates = eligible_dates[trim:]
        for values in series.values():
            for key, items in values.items():
                values[key] = items[trim:]

    actual_groups = [
        name for name in memberships if name in groups and name not in EXCLUDED_GROUPS
    ]
    all_groups = sorted(
        set(actual_groups) | {"AI硬件", "半导体", "固态储能", "电"},
        key=lambda name: (
            KEY_GROUPS.index(name) if name in KEY_GROUPS else len(KEY_GROUPS),
            actual_groups.index(name) if name in actual_groups else 999,
            name,
        ),
    )
    market_time: str | None = None
    data_mode = "postmarket"
    market_payload_path = DATA_DIR / "market_trend_latest.json"
    if market_payload_path.is_file():
        try:
            market_payload = json.loads(
                market_payload_path.read_text(encoding="utf-8")
            )
            if market_payload.get("dataDate") == target_date:
                market_time = market_payload.get("generatedAt")
                data_mode = (
                    "intraday" if market_payload.get("isIntraday") else "postmarket"
                )
        except (OSError, json.JSONDecodeError):
            pass

    return {
        "dataDate": target_date,
        "generatedAt": datetime.now().astimezone().isoformat(timespec="seconds"),
        "marketTime": market_time or target_date,
        "dataMode": data_mode,
        "tradingDays": len(eligible_dates),
        "dates": eligible_dates,
        "series": series,
        "meta": {
            "sourceReport": str(report_path),
            "sourceCache": str(cache_path),
            "allGroups": all_groups,
            "actualGroups": actual_groups,
            "aiComponents": [name for name in AI_COMPONENT_GROUPS if name in series],
            "keyGroups": [name for name in KEY_GROUPS if name in series],
            "stages": [
                {"id": "bull", "label": "多"},
                {"id": "turnBull", "label": "空转多"},
                {"id": "turnBear", "label": "多转空"},
                {"id": "bear", "label": "空"},
            ],
            "definition": (
                "多=MA5、MA10 同升且 MA5 在 MA10 上方；"
                "空=MA5、MA10 同降且 MA5 在 MA10 下方；"
                "其余按 MA5 拐头方向归入空转多或多转空。"
            ),
        },
    }


def write_payload(payload: dict[str, Any]) -> tuple[Path, Path]:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    target_date = payload["dataDate"]
    json_path = DATA_DIR / f"multitrend_history_{target_date}.json"
    js_path = DATA_DIR / f"multitrend_history_{target_date}.js"
    json_text = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    js_text = "window.MULTITREND_DATA = " + json_text + ";\n"
    for path, text in (
        (json_path, json_text + "\n"),
        (js_path, js_text),
        (DATA_DIR / "multitrend_history_latest.json", json_text + "\n"),
        (DATA_DIR / "multitrend_history_latest.js", js_text),
    ):
        temp = path.with_suffix(path.suffix + ".tmp")
        temp.write_text(text, encoding="utf-8")
        temp.replace(path)
    return json_path, js_path


def rebuild_latest(
    target_date: str = "",
    days: int = TRADING_DAYS,
) -> tuple[dict[str, Any], Path, Path]:
    resolved_date, report_path = latest_report(target_date)
    if not report_path.is_file():
        raise FileNotFoundError(report_path)
    payload = build_payload(resolved_date, days, report_path)
    json_path, js_path = write_payload(payload)
    return payload, json_path, js_path


def main() -> None:
    args = parse_args()
    payload, json_path, js_path = rebuild_latest(args.date, args.days)
    print(
        f"[OK] 多空趋势 {payload['dataDate']} {payload['marketTime']} "
        f"{payload['dataMode']} / {payload['tradingDays']} 个交易日 / "
        f"{len(payload['series'])} 条分组序列"
    )
    print(f"[DONE] {json_path}")
    print(f"[DONE] {js_path}")


if __name__ == "__main__":
    main()
