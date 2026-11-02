from __future__ import annotations

import argparse
import json
from pathlib import Path


DATA_DIR = Path(__file__).resolve().parent
DAILY_JSON = DATA_DIR / "full_market" / "full_market_daily_latest.json"
INTRADAY_JS = DATA_DIR / "full_market_intraday_latest.js"
INTRADAY_JSON = DATA_DIR / "full_market_intraday_latest.json"
FULL_DIR_INTRADAY_JSON = (
    DATA_DIR / "full_market" / "full_market_intraday_latest.json"
)


def load_intraday() -> dict:
    if INTRADAY_JSON.is_file():
        return json.loads(INTRADAY_JSON.read_text(encoding="utf-8"))
    text = INTRADAY_JS.read_text(encoding="utf-8")
    start = text.find("{")
    end = text.rfind("}")
    if start < 0 or end <= start:
        raise ValueError("full_market_intraday_latest.js 格式不正确")
    return json.loads(text[start : end + 1])


def main() -> int:
    parser = argparse.ArgumentParser(description="把全市场收盘快照写入盘中末帧")
    parser.add_argument("--date", required=True)
    args = parser.parse_args()

    dated_json = DATA_DIR / "full_market" / f"full_market_daily_{args.date}.json"
    daily_path = dated_json if dated_json.is_file() else DAILY_JSON
    daily = json.loads(daily_path.read_text(encoding="utf-8"))
    if str(daily.get("date")) != args.date:
        raise ValueError(
            f"收盘快照日期不匹配：{daily.get('date')} != {args.date}"
        )

    intraday = load_intraday()
    daily_rows: dict[tuple[str, str], dict] = {}
    for scope in ("industry", "concept"):
        for row in (daily.get(scope) or {}).get("all", []):
            daily_rows[(scope, str(row.get("code") or ""))] = row

    updated = 0
    for board in intraday.get("boards") or []:
        scope = str(board.get("kind") or "")
        row = daily_rows.get((scope, str(board.get("code") or "")))
        if not row:
            continue
        flow = row.get("flow_yi")
        board["close_yi"] = flow
        board["close_time"] = "15:00:00"
        board["change_pct"] = row.get("change_pct")
        board["main_ratio"] = row.get("main_ratio")
        board["up_count"] = row.get("up_count")
        board["down_count"] = row.get("down_count")
        board["flat_count"] = row.get("flat_count")
        board["breadth_pct"] = row.get("breadth_pct")
        if flow is not None:
            board["minimum_yi"] = min(
                float(board.get("minimum_yi", flow)),
                float(flow),
            )
            board["maximum_yi"] = max(
                float(board.get("maximum_yi", flow)),
                float(flow),
            )
        updated += 1

    daily_market = daily.get("market") or {}
    market = intraday.setdefault("market", {})
    market.update(
        {
            "count": daily_market.get("count"),
            "close_yi": daily_market.get("main_net_yi"),
            "close_time": "15:00:00",
            "top_inflow": daily_market.get("top_inflow"),
            "top_outflow": daily_market.get("top_outflow"),
            "inflow_count": daily_market.get("inflow_count"),
            "outflow_count": daily_market.get("outflow_count"),
        }
    )
    close_value = daily_market.get("main_net_yi")
    if close_value is not None:
        market["minimum_yi"] = min(
            float(market.get("minimum_yi", close_value)),
            float(close_value),
        )
        market["maximum_yi"] = max(
            float(market.get("maximum_yi", close_value)),
            float(close_value),
        )

    close_stamp = f"{args.date}T15:00:00+08:00"
    intraday["date"] = args.date
    intraday["available"] = True
    intraday["last_capture_at"] = close_stamp
    intraday["close_capture_at"] = close_stamp
    intraday["is_close"] = True
    intraday["close_source"] = "东方财富收盘快照"

    text = json.dumps(intraday, ensure_ascii=False, indent=2)
    INTRADAY_JSON.write_text(text + "\n", encoding="utf-8")
    FULL_DIR_INTRADAY_JSON.write_text(text + "\n", encoding="utf-8")
    INTRADAY_JS.write_text(
        "window.FULL_MARKET_INTRADAY = " + text + ";\n",
        encoding="utf-8",
    )
    print(
        f"[OK] 收盘末帧 {args.date} 15:00："
        f"市场 {close_value} 亿，板块更新 {updated} 个"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
