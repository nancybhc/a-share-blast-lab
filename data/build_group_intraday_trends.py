from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


CHINA_TZ = ZoneInfo("Asia/Shanghai")
DATA_DIR = Path(__file__).resolve().parent
MARKET_PATH = DATA_DIR / "market_trend_latest.json"
LOG_PATH = DATA_DIR / "live_intraday_pipeline.log"
OUTPUT_JSON = DATA_DIR / "group_intraday_trends_latest.json"
OUTPUT_JS = DATA_DIR / "group_intraday_trends_latest.js"

LOG_PATTERN = re.compile(
    r"^\[(?P<stamp>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]"
    r"\s+\[INFO\]\s+(?P<name>[^：:]+)[：:]\s*"
    r"(?P<total>\d+)\s*只｜多\s*(?P<bull>\d+)、"
    r"多转空\s*(?P<turn_bear>\d+)、空转多\s*(?P<turn_bull>\d+)、"
    r"空\s*(?P<bear>\d+)"
)


def load_market() -> dict:
    return json.loads(MARKET_PATH.read_text(encoding="utf-8"))


def collect_log_points(market: dict) -> dict[str, list[dict]]:
    date = str(market.get("dataDate") or "")
    ids = {group["name"]: group["id"] for group in market.get("groups", [])}
    grouped: dict[str, dict[str, dict]] = {}
    if not LOG_PATH.exists():
        return {}

    for line in LOG_PATH.read_text(encoding="utf-8", errors="replace").splitlines():
        match = LOG_PATTERN.match(line)
        if not match:
            continue
        stamp = match.group("stamp")
        if not stamp.startswith(date):
            continue
        name = match.group("name").strip()
        group_id = ids.get(name)
        if not group_id:
            continue
        total = int(match.group("total"))
        if total <= 0:
            continue
        bull = int(match.group("bull"))
        point = {
            "time": stamp[11:16],
            "timestamp": stamp.replace(" ", "T") + "+08:00",
            "bullPct": round(bull / total * 100, 2),
            "bull": bull,
            "total": total,
            "turnBull": int(match.group("turn_bull")),
            "turnBear": int(match.group("turn_bear")),
            "bear": int(match.group("bear")),
        }
        grouped.setdefault(group_id, {})[stamp] = point
    return {
        key: [values[stamp] for stamp in sorted(values)]
        for key, values in grouped.items()
    }


def main() -> int:
    market = load_market()
    date = str(market.get("dataDate") or "")
    grouped = collect_log_points(market)

    current_stamp = str(market.get("generatedAt") or "")
    if re.fullmatch(r"\d{4}-\d{2}-\d{2} \d{2}:\d{2}", current_stamp):
        for group in market.get("groups", []):
            total = int(group.get("total") or 0)
            if total <= 0:
                continue
            point = {
                "time": current_stamp[11:16],
                "timestamp": current_stamp.replace(" ", "T") + "+08:00",
                "bullPct": float(group.get("bullPct") or 0),
                "bull": int(group.get("bull") or 0),
                "total": total,
                "turnBull": int(group.get("turnBull") or 0),
                "turnBear": int(group.get("turnBear") or 0),
                "bear": int(group.get("bear") or 0),
            }
            values = grouped.setdefault(group["id"], [])
            values.append(point)
            grouped[group["id"]] = sorted(
                {item["timestamp"]: item for item in values}.values(),
                key=lambda item: item["timestamp"],
            )

    payload = {
        "date": date,
        "updated_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        "source": "real-time multi-stage snapshots",
        "groups": grouped,
    }
    text = json.dumps(payload, ensure_ascii=False, indent=2)
    OUTPUT_JSON.write_text(text + "\n", encoding="utf-8")
    OUTPUT_JS.write_text(
        "window.GROUP_INTRADAY_TRENDS = " + text + ";\n",
        encoding="utf-8",
    )
    print(
        f"[OK] 分组当日趋势 {date}："
        f"{len(grouped)} 组，"
        f"{sum(len(points) for points in grouped.values())} 个截面"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
