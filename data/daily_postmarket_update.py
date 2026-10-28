from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import time
import zipfile
from datetime import datetime, time as clock_time
from pathlib import Path
from zoneinfo import ZoneInfo


CHINA_TZ = ZoneInfo("Asia/Shanghai")
SITE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = SITE_DIR / "data"
SOURCE_DIR = Path(r"C:\Users\jiach\多空趋势分析结果")
LOG_PATH = DATA_DIR / "daily_postmarket_update.log"
STATUS_PATH = DATA_DIR / "daily_postmarket_status.json"
LOCK_PATH = DATA_DIR / ".daily_postmarket_update.lock"
MIN_REPORT_TIME = clock_time(17, 30)
THEME_ROOT = Path(r"C:\Users\jiach\题材雷达结果")
THEME_FILES = (
    "当日题材强度_每日题材前五.csv",
    "当日题材强度_五日题材汇总.csv",
    "当日题材强度_每日明细.csv",
)


def now_text() -> str:
    return datetime.now(CHINA_TZ).strftime("%Y-%m-%d %H:%M:%S")


def log(message: str) -> None:
    line = f"[{now_text()}] {message}"
    print(line, flush=True)
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with LOG_PATH.open("a", encoding="utf-8") as handle:
        handle.write(line + "\n")


def run_step(
    name: str,
    command: list[str],
    *,
    required: bool = True,
    timeout: int = 900,
) -> tuple[bool, str]:
    log(f"[START] {name}: {' '.join(command)}")
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
        if required:
            raise
        return False, str(exc)

    output = "\n".join(
        part.strip()
        for part in (result.stdout, result.stderr)
        if part and part.strip()
    )
    if output:
        for line in output.splitlines():
            log(f"  {line}")
    if result.returncode != 0:
        message = output or f"exit code {result.returncode}"
        log(f"[FAIL] {name}: {message}")
        if required:
            raise RuntimeError(f"{name} failed: {message}")
        return False, message
    log(f"[OK] {name}")
    return True, output


def available_reports() -> list[Path]:
    if not SOURCE_DIR.is_dir():
        return []
    reports = []
    for path in SOURCE_DIR.glob("多空阶段_*.xlsx"):
        if path.name.startswith("~$"):
            continue
        match = re.search(r"(\d{4}-\d{2}-\d{2})", path.name)
        if match:
            reports.append(path)
    return sorted(
        reports,
        key=lambda path: (
            re.search(r"(\d{4}-\d{2}-\d{2})", path.name).group(1),
            path.stat().st_mtime,
        ),
    )


def report_is_ready(path: Path) -> bool:
    try:
        return path.stat().st_size > 10_000 and zipfile.is_zipfile(path)
    except OSError:
        return False


def resolve_report(target_date: str | None, wait_minutes: int) -> tuple[str, Path]:
    deadline = time.time() + max(wait_minutes, 0) * 60
    today = datetime.now(CHINA_TZ).strftime("%Y-%m-%d")
    while True:
        reports = available_reports()
        if target_date:
            matches = [
                path
                for path in reports
                if target_date in path.name and report_is_ready(path)
            ]
            if matches:
                path = max(matches, key=lambda item: item.stat().st_mtime)
                return target_date, path
        else:
            today_matches = [
                path
                for path in reports
                if today in path.name
                and report_is_ready(path)
                and datetime.fromtimestamp(
                    path.stat().st_mtime,
                    CHINA_TZ,
                ).time() >= MIN_REPORT_TIME
            ]
            if today_matches:
                path = max(today_matches, key=lambda item: item.stat().st_mtime)
                return today, path
            ready_reports = [path for path in reports if report_is_ready(path)]
            if ready_reports and datetime.now(CHINA_TZ).weekday() >= 5:
                path = ready_reports[-1]
                match = re.search(r"(\d{4}-\d{2}-\d{2})", path.name)
                return match.group(1), path

        if time.time() >= deadline:
            if reports and not target_date and report_is_ready(reports[-1]):
                path = reports[-1]
                match = re.search(r"(\d{4}-\d{2}-\d{2})", path.name)
                log(f"[WARN] 今日报告未就绪，回退到 {match.group(1)}")
                return match.group(1), path
            expected = target_date or today
            raise FileNotFoundError(f"等待超时，未找到 {expected} 多空阶段报告")
        log(
            f"[WAIT] 等待 {target_date or '今日 17:30 后生成的'}"
            "多空阶段报告"
        )
        time.sleep(30)


def wait_for_theme(target_date: str, wait_minutes: int) -> None:
    deadline = time.time() + max(wait_minutes, 0) * 60
    raw_dir = THEME_ROOT / target_date / "原始数据"
    while True:
        files = [raw_dir / name for name in THEME_FILES]
        ready = all(
            path.is_file()
            and path.stat().st_size > 100
            and datetime.fromtimestamp(
                path.stat().st_mtime,
                CHINA_TZ,
            ).time() >= MIN_REPORT_TIME
            for path in files
        )
        if ready:
            return
        if time.time() >= deadline:
            raise FileNotFoundError(f"等待超时，题材强度文件未完整生成：{raw_dir}")
        log(f"[WAIT] 等待 {target_date} 题材强度文件完整落盘")
        time.sleep(30)


def refresh_index_data_refs(target_date: str) -> None:
    index_path = SITE_DIR / "index.html"
    html = index_path.read_text(encoding="utf-8")
    pattern = re.compile(
        r"(data/(?:full_market/)?"
        r"(?:group_fund_flows_|board_daily_fund_flows_|"
        r"full_market_daily_|chip_segments_))"
        r"\d{4}-\d{2}-\d{2}(\.(?:js|csv|json))"
    )
    updated = pattern.sub(
        lambda match: f"{match.group(1)}{target_date}{match.group(2)}",
        html,
    )
    index_path.write_text(updated, encoding="utf-8")
    log(f"[OK] index data references -> {target_date}")


def refresh_latest_aliases(target_date: str) -> None:
    aliases = (
        (
            DATA_DIR / f"group_fund_flows_{target_date}.js",
            DATA_DIR / "group_fund_flows_latest.js",
        ),
        (
            DATA_DIR / f"group_fund_flows_{target_date}.json",
            DATA_DIR / "group_fund_flows_latest.json",
        ),
        (
            DATA_DIR / f"board_daily_fund_flows_{target_date}.js",
            DATA_DIR / "board_daily_fund_flows_latest.js",
        ),
        (
            DATA_DIR / f"board_daily_fund_flows_{target_date}.json",
            DATA_DIR / "board_daily_fund_flows_latest.json",
        ),
        (
            DATA_DIR / f"full_market_daily_{target_date}.js",
            DATA_DIR / "full_market_daily_latest.js",
        ),
        (
            DATA_DIR / f"chip_segments_{target_date}.js",
            DATA_DIR / "chip_segments_latest.js",
        ),
        (
            DATA_DIR / f"chip_segments_{target_date}.json",
            DATA_DIR / "chip_segments_latest.json",
        ),
        (
            DATA_DIR / "full_market" / f"full_market_daily_{target_date}.csv",
            DATA_DIR / "full_market" / "full_market_daily_latest.csv",
        ),
        (
            DATA_DIR / "full_market" / f"full_market_daily_{target_date}.json",
            DATA_DIR / "full_market" / "full_market_daily_latest.json",
        ),
        (
            DATA_DIR / "full_market" / f"chip_segments_{target_date}.csv",
            DATA_DIR / "full_market" / "chip_segments_latest.csv",
        ),
    )
    for source, target in aliases:
        if source.is_file():
            shutil.copy2(source, target)
    log(f"[OK] latest data aliases -> {target_date}")


def write_status(payload: dict[str, object]) -> None:
    temp = STATUS_PATH.with_suffix(".tmp")
    temp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temp.replace(STATUS_PATH)


def main() -> int:
    parser = argparse.ArgumentParser(description="每日盘后更新大A爆破实验室")
    parser.add_argument("--date", help="指定交易日；默认使用最新报告")
    parser.add_argument("--wait-minutes", type=int, default=15)
    parser.add_argument("--skip-publish", action="store_true")
    args = parser.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if LOCK_PATH.exists():
        try:
            old_pid = int(LOCK_PATH.read_text(encoding="ascii").strip())
        except (OSError, ValueError):
            old_pid = 0
        if old_pid:
            probe = subprocess.run(
                ["powershell", "-NoProfile", "-Command", f"Get-Process -Id {old_pid}"],
                capture_output=True,
                text=True,
            )
            if probe.returncode == 0:
                log(f"[SKIP] 已有更新任务运行，PID={old_pid}")
                return 0
        LOCK_PATH.unlink(missing_ok=True)

    LOCK_PATH.write_text(str(os.getpid()), encoding="ascii")
    started_at = now_text()
    status: dict[str, object] = {
        "started_at": started_at,
        "finished_at": None,
        "success": False,
        "date": None,
        "report": None,
        "steps": [],
    }
    try:
        target_date, report = resolve_report(args.date, args.wait_minutes)
        report_date = re.search(
            r"(\d{4}-\d{2}-\d{2})", report.name
        ).group(1)
        target_date = report_date
        wait_for_theme(target_date, args.wait_minutes)
        status["date"] = target_date
        status["report"] = str(report)
        log(f"[INFO] target={target_date} report={report}")

        steps: list[tuple[str, list[str], bool, int]] = [
            (
                "structure",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/build_market_trend.py",
                    "--source-dir",
                    str(SOURCE_DIR),
                    "--date",
                    target_date,
                ],
                True,
                300,
            ),
            (
                "theme",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/build_theme_radar_web.py",
                ],
                True,
                300,
            ),
            (
                "board-daily",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/capture_intraday_fund_flow.py",
                    "--backfill-daily",
                    "--date",
                    target_date,
                ],
                True,
                300,
            ),
            (
                "group-fund",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/fetch_group_fund_flows.py",
                    "--date",
                    target_date,
                    "--workbook",
                    str(report),
                ],
                True,
                900,
            ),
            (
                "filter-groups",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/exclude_market_groups.py",
                    "--date",
                    target_date,
                ],
                True,
                300,
            ),
        ]

        for name, command, required, timeout in steps:
            ok, output = run_step(
                name,
                command,
                required=required,
                timeout=timeout,
            )
            status["steps"].append({"name": name, "ok": ok})

        full_ok, _ = run_step(
            "full-market-close",
            [
                sys.executable,
                "-X",
                "utf8",
                "data/capture_full_market_fund_flow.py",
                "--snapshot",
                "--date",
                target_date,
            ],
            required=False,
            timeout=600,
        )
        status["steps"].append({"name": "full-market-close", "ok": full_ok})
        if not full_ok:
            run_step(
                "full-market-close-fallback",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/capture_full_market_fund_flow.py",
                    "--from-live",
                    "--date",
                    target_date,
                ],
                required=True,
                timeout=300,
            )

        chip_ok, _ = run_step(
            "chip-segments",
            [
                sys.executable,
                "-X",
                "utf8",
                "data/build_chip_segment_strength.py",
                "--date",
                target_date,
            ],
            required=False,
            timeout=600,
        )
        status["steps"].append({"name": "chip-segments", "ok": chip_ok})
        if not chip_ok:
            run_step(
                "chip-segments-fallback",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "data/build_chip_segment_strength.py",
                    "--date",
                    target_date,
                    "--from-live",
                ],
                required=True,
                timeout=300,
            )

        refresh_index_data_refs(target_date)
        refresh_latest_aliases(target_date)
        if not args.skip_publish:
            run_step(
                "github-publish",
                [
                    sys.executable,
                    "-X",
                    "utf8",
                    "publish_github.py",
                    "--slot",
                    f"{target_date} daily-18:05",
                ],
                required=True,
                timeout=900,
            )

        status["success"] = True
        log("[DONE] 盘后网页更新完成")
        return 0
    except Exception as exc:  # noqa: BLE001
        log(f"[ERROR] {type(exc).__name__}: {exc}")
        status["error"] = f"{type(exc).__name__}: {exc}"
        return 1
    finally:
        status["finished_at"] = now_text()
        write_status(status)
        LOCK_PATH.unlink(missing_ok=True)


if __name__ == "__main__":
    raise SystemExit(main())
