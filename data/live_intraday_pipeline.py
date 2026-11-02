from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from datetime import datetime, time as clock_time
from pathlib import Path
from zoneinfo import ZoneInfo


CHINA_TZ = ZoneInfo("Asia/Shanghai")
SITE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = SITE_DIR / "data"
DESKTOP_ROOT = Path(r"C:\Users\jiach\Desktop\今日盘中")
INTRADAY_RUNNER = DESKTOP_ROOT / "_intraday_common.ps1"
CYCLE_DIR = DESKTOP_ROOT / "多空趋势"
LOG_PATH = DATA_DIR / "live_intraday_pipeline.log"
STATUS_PATH = DATA_DIR / "live_intraday_pipeline_status.json"


def now_text() -> str:
    return datetime.now(CHINA_TZ).strftime("%Y-%m-%d %H:%M:%S")


def log(message: str) -> None:
    line = f"[{now_text()}] {message}"
    print(line, flush=True)
    with LOG_PATH.open("a", encoding="utf-8") as handle:
        handle.write(line + "\n")


def write_status(payload: dict[str, object]) -> None:
    temp = STATUS_PATH.with_suffix(".tmp")
    temp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temp.replace(STATUS_PATH)


def trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 15) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current <= clock_time(15, 1)
    )


def run_command(name: str, command: list[str], timeout: int) -> bool:
    started = time.monotonic()
    log(f"[START] {name}")
    try:
        result = subprocess.run(
            command,
            cwd=SITE_DIR,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
        )
    except Exception as exc:  # noqa: BLE001
        log(f"[FAIL] {name}: {type(exc).__name__}: {exc}")
        return False

    for output in (result.stdout, result.stderr):
        for line in (output or "").splitlines():
            if line.strip():
                log(f"  {line.rstrip()}")
    elapsed = round(time.monotonic() - started, 1)
    if result.returncode != 0:
        log(f"[FAIL] {name}: exit={result.returncode} elapsed={elapsed}s")
        return False
    log(f"[OK] {name}: elapsed={elapsed}s")
    return True


def latest_report(day: str) -> Path | None:
    path = CYCLE_DIR / f"多空阶段_{day}.xlsx"
    return path if path.exists() and path.stat().st_size > 10_000 else None


def build_market_trend(day: str) -> bool:
    report = latest_report(day)
    if not report:
        log(f"[SKIP] structure: 今日盘中报告尚未生成 {day}")
        return False
    return run_command(
        "structure-web-data",
        [
            sys.executable,
            "-X",
            "utf8",
            str(DATA_DIR / "build_market_trend.py"),
            "--source-dir",
            str(CYCLE_DIR),
            "--brief-dir",
            str(CYCLE_DIR),
            "--date",
            day,
            "--session",
            "auto",
        ],
        180,
    )


def build_theme_web_data() -> bool:
    return run_command(
        "theme-web-data",
        [
            sys.executable,
            "-X",
            "utf8",
            str(DATA_DIR / "build_theme_radar_web.py"),
        ],
        180,
    )


def run_cycle(day: str) -> bool:
    ok = run_command(
        "structure-generator",
        [
            "powershell.exe",
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            str(INTRADAY_RUNNER),
            "-Task",
            "cycle",
        ],
        900,
    )
    if ok:
        build_market_trend(day)
    return ok


def run_theme(day: str) -> bool:
    ok = run_command(
        "theme-generator",
        [
            "powershell.exe",
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            str(INTRADAY_RUNNER),
            "-Task",
            "ranking",
        ],
        900,
    )
    if ok:
        build_theme_web_data()
    return ok


def main() -> int:
    parser = argparse.ArgumentParser(description="爆破实验室盘中全量刷新")
    parser.add_argument("--interval", type=int, default=180)
    parser.add_argument("--watch", action="store_true")
    args = parser.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    while True:
        now = datetime.now(CHINA_TZ)
        day = now.strftime("%Y-%m-%d")
        active = trading_window(now)
        if active:
            write_status(
                {
                    "updated_at": now.isoformat(timespec="seconds"),
                    "date": day,
                    "state": "running",
                    "stage": "starting",
                }
            )
            if latest_report(day):
                build_market_trend(day)
            cycle_ok = run_cycle(day)
            write_status(
                {
                    "updated_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
                    "date": day,
                    "state": "running",
                    "stage": "structure-complete" if cycle_ok else "structure-failed",
                }
            )
            theme_ok = run_theme(day)
            write_status(
                {
                    "updated_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
                    "date": day,
                    "state": "running",
                    "stage": "cycle-complete" if theme_ok else "theme-failed",
                    "structure_ok": cycle_ok,
                    "theme_ok": theme_ok,
                    "interval_seconds": max(args.interval, 30),
                }
            )
        else:
            write_status(
                {
                    "updated_at": now.isoformat(timespec="seconds"),
                    "date": day,
                    "state": "waiting",
                    "stage": "outside-market",
                    "interval_seconds": max(args.interval, 30),
                }
            )

        if not args.watch:
            return 0
        deadline = time.monotonic() + max(args.interval, 30)
        while time.monotonic() < deadline:
            time.sleep(min(10, deadline - time.monotonic()))


if __name__ == "__main__":
    raise SystemExit(main())
