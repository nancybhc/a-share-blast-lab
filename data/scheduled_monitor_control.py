from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, time as clock_time
from pathlib import Path
from zoneinfo import ZoneInfo


CHINA_TZ = ZoneInfo("Asia/Shanghai")
SITE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = SITE_DIR / "data"
LOG_PATH = DATA_DIR / "monitor_auto_schedule.log"
STATUS_PATH = DATA_DIR / "monitor_auto_schedule_status.json"
PID_FILES = (
    DATA_DIR / ".collector.pid",
    DATA_DIR / ".five_break_10_monitor.pid",
    DATA_DIR / ".theme_refresh.pid",
)
BASE_URL = "http://127.0.0.1:8771"


def log(message: str) -> None:
    line = f"[{datetime.now(CHINA_TZ):%Y-%m-%d %H:%M:%S}] {message}"
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with LOG_PATH.open("a", encoding="utf-8") as handle:
        handle.write(line + "\n")


def request_api(path: str, method: str = "GET", timeout: int = 5):
    request = urllib.request.Request(
        BASE_URL + path,
        method=method,
        data=b"" if method == "POST" else None,
        headers={"Accept": "application/json"},
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def server_is_ready() -> bool:
    try:
        request_api("/api/monitors/status", timeout=2)
        return True
    except Exception:  # noqa: BLE001
        return False


def start_server() -> None:
    if server_is_ready():
        return
    log("网页服务未运行，正在自动启动")
    log_path = DATA_DIR / "server.autostart.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    handle = log_path.open("a", encoding="utf-8")
    flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
    subprocess.Popen(
        [
            sys.executable,
            "-X",
            "utf8",
            "server.py",
            "--no-browser",
            "--port",
            "8771",
        ],
        cwd=SITE_DIR,
        stdout=handle,
        stderr=subprocess.STDOUT,
        creationflags=flags,
        close_fds=True,
    )
    handle.close()
    for _ in range(40):
        if server_is_ready():
            return
        time.sleep(0.5)
    raise RuntimeError("网页服务启动超时")


def stop_orphan_monitors() -> None:
    stopped = []
    for path in PID_FILES:
        try:
            pid = int(path.read_text(encoding="ascii").strip())
        except (OSError, ValueError):
            path.unlink(missing_ok=True)
            continue
        result = subprocess.run(
            ["taskkill", "/PID", str(pid), "/T", "/F"],
            capture_output=True,
            check=False,
        )
        if result.returncode == 0:
            stopped.append(pid)
        path.unlink(missing_ok=True)
    return stopped


def write_status(mode: str, success: bool, detail: dict) -> None:
    payload = {
        "action": mode,
        "success": success,
        "updated_at": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
        **detail,
    }
    temp = STATUS_PATH.with_suffix(".tmp")
    temp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temp.replace(STATUS_PATH)


def main() -> int:
    parser = argparse.ArgumentParser(description="爆破实验室监控定时启停")
    parser.add_argument("--start", action="store_true")
    parser.add_argument("--stop", action="store_true")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    if args.start == args.stop:
        raise SystemExit("必须且只能指定 --start 或 --stop")

    now = datetime.now(CHINA_TZ)
    if args.start and not args.force:
        if now.weekday() >= 5:
            log("周末跳过自动启动")
            write_status("start", True, {"skipped": "weekend"})
            return 0
        if not (clock_time(9, 15) <= now.time() < clock_time(15, 1)):
            log("不在 09:15-15:01 自动启动时段，跳过")
            write_status("start", True, {"skipped": "outside_window"})
            return 0

    try:
        if args.start:
            start_server()
            result = request_api("/api/monitors/start-all", "POST", timeout=45)
        else:
            if server_is_ready():
                result = request_api("/api/monitors/stop-all", "POST", timeout=45)
            else:
                stopped = stop_orphan_monitors()
                result = {"running_count": 0, "orphan_stopped": stopped}
        success = int(result.get("running_count", 0)) == (
            3 if args.start else 0
        )
        write_status("start" if args.start else "stop", success, {"result": result})
        log(
            f"{'启动' if args.start else '停止'}完成："
            f"running_count={result.get('running_count', 0)}"
        )
        return 0 if success else 1
    except Exception as exc:  # noqa: BLE001
        write_status(
            "start" if args.start else "stop",
            False,
            {"error": f"{type(exc).__name__}: {exc}"},
        )
        log(f"执行失败：{type(exc).__name__}: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
