from __future__ import annotations

import argparse
import json
import re
import shutil
from datetime import date, datetime
from pathlib import Path

import openpyxl


DEFAULT_SOURCE_DIR = Path(r"C:\Users\jiach\Desktop\今日盘中\多空趋势")
DEFAULT_OUTPUT_DIR = Path(__file__).resolve().parent

GROUP_META = {
    "PCB": ("pcb", "PCB"),
    "CPO": ("cpo", "CPO"),
    "光上游": ("optics", "OPTICS"),
    "半导体芯片": ("semiconductor", "SEMICONDUCTOR"),
    "半导体设备": ("equipment", "SEMI CAP"),
    "半导体上游": ("semiconductor-upstream", "SEMI MATERIALS"),
    "MLCC": ("mlcc", "PASSIVE"),
    "算力": ("compute", "COMPUTE"),
    "存储": ("storage", "MEMORY"),
    "互金证券": ("fintech", "FINTECH"),
    "AI应用": ("ai-app", "AI APPS"),
    "机器人": ("robot", "ROBOTICS"),
    "药": ("pharma", "PHARMA"),
    "电力": ("power", "POWER"),
    "电网设备": ("grid-equipment", "GRID EQUIPMENT"),
    "商业航天": ("aerospace", "AEROSPACE"),
    "散热液冷": ("cooling", "LIQUID COOLING"),
}
EXCLUDED_GROUPS = {"黄金白银"}
PHASE_ORDER = (
    "空→多跳级",
    "转多兑现",
    "温和修复",
    "结构分化",
    "结构承压",
    "转空加速",
)
PHASE_DEFINITIONS = {
    "空→多跳级": {
        "badge": "修复加速",
        "tone": "lime",
        "description": "空头阶段直接进入多头，修复力度最强。",
    },
    "转多兑现": {
        "badge": "扩散确认",
        "tone": "lime",
        "description": "空转多转成多头，净转多强度不低于 15。",
    },
    "温和修复": {
        "badge": "边际改善",
        "tone": "amber",
        "description": "净转多强度为正，但尚未达到转多兑现。",
    },
    "结构分化": {
        "badge": "临界观察",
        "tone": "amber",
        "description": "净转多强度为零，多空力量暂处平衡。",
    },
    "结构承压": {
        "badge": "等待止跌",
        "tone": "cyan",
        "description": "净转多强度为负，但尚未进入加速转空。",
    },
    "转空加速": {
        "badge": "风险升高",
        "tone": "red",
        "description": "净转多强度不高于 -15，风险集中释放。",
    },
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="把最新多空阶段报告导出为网页数据。")
    parser.add_argument("--source-dir", type=Path, default=DEFAULT_SOURCE_DIR)
    parser.add_argument("--brief-dir", type=Path, help="简报 PPTX 所在目录；默认与 source-dir 相同。")
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT_DIR)
    parser.add_argument("--date", help="交易日 YYYY-MM-DD；默认选择最新报告。")
    parser.add_argument(
        "--session",
        choices=("auto", "intraday", "postmarket"),
        default="auto",
        help="行情阶段口径；日更任务固定使用 postmarket。",
    )
    return parser.parse_args()


def latest_file(directory: Path, pattern: str, target_date: str | None) -> Path:
    if target_date:
        path = directory / pattern.format(date=target_date)
        if not path.is_file():
            raise FileNotFoundError(path)
        return path
    candidates = sorted(directory.glob(pattern.format(date="*")), key=lambda path: path.stat().st_mtime)
    if not candidates:
        raise FileNotFoundError(f"未找到 {directory / pattern.format(date='*')}")
    return candidates[-1]


def date_text(value: object) -> str:
    if isinstance(value, (datetime, date)):
        return value.strftime("%Y-%m-%d")
    return str(value or "")[:10]


def read_group_rows(workbook: openpyxl.Workbook) -> list[dict[str, object]]:
    sheet = workbook["分组异动"]
    rows: list[dict[str, object]] = []
    for values in sheet.iter_rows(min_row=3, values_only=True):
        if not values[0] or not values[1]:
            continue
        if str(values[0]) in EXCLUDED_GROUPS:
            continue
        total = int(values[2] or 0)
        if total <= 0:
            continue
        rows.append(
            {
                "name": str(values[0]),
                "date": date_text(values[1]),
                "total": total,
                "bull": int(values[3]),
                "turnBull": int(values[4]),
                "turnBear": int(values[5]),
                "bear": int(values[6]),
                "bullPct": float(values[7]),
                "newBull": int(values[12]),
                "confirm": int(values[13]),
                "direct": int(values[14]),
                "positive": int(values[17]),
                "negative": int(values[18]),
                "state": str(values[19] or ""),
                "change": str(values[20] or ""),
                "action": str(values[21] or ""),
            }
        )
    return rows


def read_detail_groups(workbook: openpyxl.Workbook) -> dict[str, dict[str, str]]:
    groups: dict[str, dict[str, str]] = {}
    valid_stages = {"多", "空转多", "多转空", "空"}
    for sheet in workbook.worksheets[3:]:
        if sheet.title in EXCLUDED_GROUPS:
            continue
        members: dict[str, str] = {}
        for values in sheet.iter_rows(min_row=5, values_only=True):
            stage = str(values[0] or "").strip()
            code = str(values[3] or "").strip() if len(values) > 3 else ""
            if stage in valid_stages and re.fullmatch(r"\d{6}", code):
                members[code] = stage
        if members:
            groups[sheet.title] = members
    return groups


def previous_cycle_path(source_dir: Path, current_date: str) -> Path | None:
    candidates: list[tuple[str, Path]] = []
    for path in source_dir.rglob("多空阶段_*.xlsx"):
        if path.name.startswith("~$"):
            continue
        match = re.search(r"(\d{4}-\d{2}-\d{2})", path.name)
        if match and match.group(1) < current_date:
            candidates.append((match.group(1), path))
    return max(candidates, default=(None, None), key=lambda item: item[0])[1]


def detail_counts(members: dict[str, str]) -> dict[str, int]:
    counts = {
        stage: sum(value == stage for value in members.values())
        for stage in ("多", "空转多", "多转空", "空")
    }
    return {
        "total": len(members),
        "bull": counts["多"],
        "turnBull": counts["空转多"],
        "turnBear": counts["多转空"],
        "bear": counts["空"],
    }


def detail_transitions(
    current: dict[str, str],
    previous: dict[str, str],
) -> dict[str, int]:
    shared = current.keys() & previous.keys()
    new_bull = sum(previous[code] == "空" and current[code] == "空转多" for code in shared)
    confirm = sum(
        previous[code] == "空转多" and current[code] == "多"
        for code in shared
    )
    direct = sum(previous[code] == "空" and current[code] == "多" for code in shared)
    negative = sum(
        (
            previous[code] == "多" and current[code] in {"多转空", "空"}
        )
        or (
            previous[code] == "多转空" and current[code] == "空"
        )
        or (
            previous[code] == "空转多" and current[code] == "空"
        )
        for code in shared
    )
    return {
        "newBull": new_bull,
        "confirm": confirm,
        "direct": direct,
        "positive": new_bull + confirm + direct,
        "negative": negative,
    }


def read_histories(workbook: openpyxl.Workbook, names: set[str]) -> dict[str, list[dict[str, object]]]:
    sheet = workbook["多空趋势"]
    records: dict[str, list[dict[str, object]]] = {}
    for values in sheet.iter_rows(values_only=True):
        name = str(values[0] or "").strip()
        if name not in names or not values[1]:
            continue
        records.setdefault(name, []).append(
            {
                "date": date_text(values[1]),
                "bull": int(values[2]),
                "turnBull": int(values[3]),
                "turnBear": int(values[4]),
                "bear": int(values[5]),
                "bullPct": float(values[7]),
            }
        )
    for rows in records.values():
        rows.sort(key=lambda item: item["date"])
    return records


def phase_for(row: dict[str, object], score: float) -> tuple[str, str, str]:
    if row["direct"] > 0:
        phase = "空→多跳级"
    elif score >= 15:
        phase = "转多兑现"
    elif score > 0:
        phase = "温和修复"
    elif score <= -15:
        phase = "转空加速"
    elif score < 0:
        phase = "结构承压"
    else:
        phase = "结构分化"
    definition = PHASE_DEFINITIONS[phase]
    return phase, str(definition["badge"]), str(definition["tone"])


def make_thesis(row: dict[str, object]) -> str:
    return (
        f"多头 {row['bull']}/{row['total']}，空头 {row['bear']}；"
        f"空转多候选 {row['turnBull']}，今日转多确认 {row['confirm']}，反向转空 {row['turnBear']}。"
        f"{row['change']}，{row['action']}。"
    )


def build_payload(
    cycle_path: Path,
    migration_path: Path,
    session: str = "auto",
) -> dict[str, object]:
    cycle = openpyxl.load_workbook(cycle_path, read_only=True, data_only=True)
    migration = openpyxl.load_workbook(migration_path, read_only=True, data_only=True)
    migration_rows = read_group_rows(migration)
    detail_groups = read_detail_groups(cycle)
    summary_date = (
        date_text(migration_rows[0]["date"])
        if migration_rows
        else datetime.fromtimestamp(cycle_path.stat().st_mtime).strftime("%Y-%m-%d")
    )
    previous_path = previous_cycle_path(cycle_path.parent, summary_date)
    previous_groups: dict[str, dict[str, str]] = {}
    if previous_path:
        previous = openpyxl.load_workbook(
            previous_path,
            read_only=True,
            data_only=True,
        )
        previous_groups = read_detail_groups(previous)
        previous.close()

    histories = read_histories(cycle, set(detail_groups))
    migration_by_name = {
        str(row["name"]): row
        for row in migration_rows
    }

    groups: list[dict[str, object]] = []
    for name, members in detail_groups.items():
        current = detail_counts(members)
        previous_members = previous_groups.get(name, {})
        previous_counts = (
            detail_counts(previous_members)
            if previous_members
            else dict(current)
        )
        transitions = detail_transitions(members, previous_members)
        total = int(current["total"])
        if total <= 0:
            continue
        row: dict[str, object] = {
            "name": name,
            "date": summary_date,
            **current,
            **transitions,
            "bullPct": round(int(current["bull"]) / total * 100, 2),
        }
        direct = int(transitions["direct"])
        confirm = int(transitions["confirm"])
        new_bull = int(transitions["newBull"])
        negative = int(transitions["negative"])
        if direct:
            row["state"] = "空→多跳级"
            row["action"] = "跳级修复，优先确认持续性"
        elif confirm:
            row["state"] = "转多确认"
            row["action"] = "修复进入确认，观察扩散"
        elif new_bull:
            row["state"] = "空转多试探"
            row["action"] = "候选回升，等待 5破10 推进"
        elif negative:
            row["state"] = "转空扩散"
            row["action"] = "先处理跌破 MA5 / MA10 的标的"
        else:
            row["state"] = "结构分化"
            row["action"] = "等下一次候选池方向变化"
        row["change"] = (
            f"多 {previous_counts['bull']}→{current['bull']}；"
            f"空转多 {previous_counts['turnBull']}→{current['turnBull']}；"
            f"多转空 {previous_counts['turnBear']}→{current['turnBear']}；"
            f"空 {previous_counts['bear']}→{current['bear']}"
        )
        group_id, code = GROUP_META.get(name, (re.sub(r"\W+", "-", name).lower(), name))
        raw_score = (
            row["newBull"] + row["confirm"] * 2 + row["direct"] * 3 - row["negative"]
        ) / row["total"] * 100
        score = round(max(-50.0, min(80.0, raw_score)), 1)
        phase, badge, tone = phase_for(row, score)
        history = [
            item
            for item in histories.get(name, [])
            if item["date"] != summary_date
        ]
        history.append(
            {
                "date": summary_date,
                **current,
                "bullPct": row["bullPct"],
            }
        )
        groups.append(
            {
                **row,
                "id": group_id,
                "code": code,
                "score": score,
                "fulfilled": row["confirm"],
                "netBias": row["bull"] - row["bear"],
                "phase": phase,
                "badge": badge,
                "tone": tone,
                "setup": str(row["turnBull"]),
                "setupCaption": "空转多候选",
                "confirmValue": str(row["confirm"]),
                "confirmCaption": "今日转多确认",
                "thesis": make_thesis(row),
                "history": history[-7:],
            }
        )

    groups.sort(key=lambda group: (-group["score"], -group["bullPct"], str(group["name"])))
    visible_dates = sorted({item["date"] for group in groups for item in group["history"]})[-3:]
    movers = []
    for group in groups:
        by_date = {item["date"]: item for item in group["history"]}
        values = [
            int(by_date[day]["turnBull"]) if day in by_date else 0
            for day in visible_dates
        ]
        delta = values[-1] - values[0] if values else 0
        movers.append({"group": group, "values": values, "delta": delta})

    repair_candidates = sorted(
        (item for item in movers if item["delta"] > 0),
        key=lambda item: (item["delta"], item["group"]["score"]),
        reverse=True,
    )
    pressure_candidates = sorted(
        (item for item in movers if item["delta"] < 0),
        key=lambda item: (item["delta"], item["group"]["score"]),
    )
    selected = []
    if repair_candidates:
        selected.append(("repair", "#bf2f45", repair_candidates[0]))
    if pressure_candidates:
        selected.append(("pressure", "#187348", pressure_candidates[0]))
    if len(selected) < 2:
        used_names = {item[2]["group"]["name"] for item in selected}
        fallback = sorted(
            (item for item in movers if item["group"]["name"] not in used_names),
            key=lambda item: abs(item["delta"]),
            reverse=True,
        )
        while len(selected) < 2 and fallback:
            item = fallback.pop(0)
            selected.append(
                ("repair" if item["delta"] >= 0 else "pressure", "#bf2f45" if item["delta"] >= 0 else "#187348", item)
            )

    series = [
        {
            "id": f"{kind}:{item['group']['id']}",
            "kind": kind,
            "name": item["group"]["name"],
            "group_id": item["group"]["id"],
            "color": color,
            "delta": item["delta"],
            "values": item["values"],
        }
        for kind, color, item in selected
    ]

    summary_lines = [str(cycle["多空趋势"].cell(2, 1).value or "")]
    summary_date = groups[0]["date"]
    detailed_codes: set[str] = set()
    for sheet in cycle.worksheets[3:]:
        if sheet.title in EXCLUDED_GROUPS:
            continue
        for values in sheet.iter_rows(min_row=4, values_only=True):
            code = str(values[3] or "").strip() if len(values) > 3 else ""
            if re.fullmatch(r"\d{6}", code):
                detailed_codes.add(code)

    positive_groups = sum(1 for group in groups if group["score"] > 0)
    negative_groups = sum(1 for group in groups if group["score"] < 0)
    summary_text = "\n".join(
        str(values[0])
        for values in cycle["总览"].iter_rows(values_only=True)
        if values and values[0] is not None
    )
    runtime_match = re.search(
        r"运行时间\s+([0-9-]+\s+[0-9:]+)",
        summary_text,
    )
    source_run_at = ""
    if runtime_match:
        source_run_at = runtime_match.group(1)
    else:
        source_run_at = datetime.fromtimestamp(cycle_path.stat().st_mtime).strftime("%Y-%m-%d %H:%M")

    detected_intraday = any(word in summary_text for word in ("盘中", "午间"))
    is_intraday = (
        detected_intraday if session == "auto" else session == "intraday"
    )
    snapshot_at = source_run_at if is_intraday else f"{summary_date} 15:00"

    payload = {
        "dataDate": summary_date,
        "generatedAt": snapshot_at,
        "reportGeneratedAt": source_run_at,
        "isIntraday": is_intraday,
        "session": "intraday" if is_intraday else "postmarket",
        "sourceReport": cycle_path.name,
        "sourcePath": str(cycle_path),
        "sourceBrief": f"assets/多空阶段简报_{summary_date}.pptx",
        "summary": "\n".join(line for line in summary_lines if line),
        "overview": {
            "groups": len(groups),
            "uniqueStocks": len(detailed_codes),
            "positiveGroups": positive_groups,
            "negativeGroups": negative_groups,
            "positiveTransitions": sum(int(group["positive"]) for group in groups),
            "negativeTransitions": sum(int(group["negative"]) for group in groups),
        },
        "phaseLegend": [
            {
                "phase": phase,
                "description": PHASE_DEFINITIONS[phase]["description"],
                "tone": PHASE_DEFINITIONS[phase]["tone"],
            }
            for phase in PHASE_ORDER
        ],
        "groups": groups,
        "transition": {
            "window": 3,
            "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
            "labels": [day[5:].replace("-", ".") for day in visible_dates],
            "series": series,
        },
    }
    cycle.close()
    migration.close()
    return payload


def main() -> None:
    args = parse_args()
    cycle_path = latest_file(args.source_dir, "多空阶段_{date}.xlsx", args.date)
    report_date = args.date or re.search(r"(\d{4}-\d{2}-\d{2})", cycle_path.name).group(1)
    migration_path = latest_file(args.source_dir, "多空阶段迁移日报_{date}.xlsx", report_date)
    brief_path = latest_file(
        args.brief_dir or args.source_dir,
        "多空阶段简报_{date}.pptx",
        report_date,
    )

    payload = build_payload(cycle_path, migration_path, args.session)
    output_dir = args.output_dir.resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    json_path = output_dir / "market_trend_latest.json"
    js_path = output_dir / "market_trend_latest.js"
    json_text = json.dumps(payload, ensure_ascii=False, indent=2)
    json_path.write_text(json_text + "\n", encoding="utf-8")
    js_path.write_text(
        "window.MARKET_TREND_DATA = " + json_text + ";\n",
        encoding="utf-8",
    )

    assets_dir = output_dir.parent / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(brief_path, assets_dir / brief_path.name)
    print(f"[OK] {json_path}")
    print(f"[OK] {js_path}")
    print(
        f"[OK] {payload['dataDate']} / {payload['generatedAt']} / "
        f"{payload['overview']['groups']} groups / {payload['overview']['uniqueStocks']} stocks"
    )


if __name__ == "__main__":
    main()
