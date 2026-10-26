from __future__ import annotations

import argparse
import ctypes
import json
import os
import subprocess
import sys
import threading
import time
import webbrowser
from datetime import datetime, time as clock_time, timedelta
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import urlparse
from zoneinfo import ZoneInfo


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
FULL_DIR = DATA_DIR / "full_market"
COLLECTOR = DATA_DIR / "capture_full_market_fund_flow.py"
PUBLISHER = BASE_DIR / "publish_github.py"
PID_FILE = DATA_DIR / ".collector.pid"
LOG_FILE = DATA_DIR / "collector.log"
PUBLISH_STATUS_FILE = DATA_DIR / "github_publish_status.json"
FIVE_BREAK_10_SCRIPT = (
    Path(r"C:\Users\jiach\Desktop\今日盘中") / "5break10_monitor.py"
)
FIVE_BREAK_10_PID_FILE = DATA_DIR / ".five_break_10_monitor.pid"
FIVE_BREAK_10_LOG = DATA_DIR / "five_break_10_monitor.log"
FIVE_BREAK_10_STATUS = DATA_DIR / "five_break_10_monitor.json"
THEME_REFRESH_SCRIPT = DATA_DIR / "build_theme_radar_web.py"
THEME_REFRESH_PID_FILE = DATA_DIR / ".theme_refresh.pid"
THEME_REFRESH_LOG = DATA_DIR / "theme_refresh.log"
THEME_REFRESH_STATUS = DATA_DIR / "theme_radar_status.json"
CHINA_TZ = ZoneInfo("Asia/Shanghai")
PROCESS_LOCK = threading.Lock()
FIVE_BREAK_10_LOCK = threading.Lock()
THEME_REFRESH_LOCK = threading.Lock()
PUBLISH_LOCK = threading.Lock()
PUBLISH_SLOTS = (
    clock_time(9, 30),
    clock_time(9, 50),
    clock_time(10, 10),
    clock_time(10, 30),
    clock_time(10, 50),
    clock_time(11, 10),
    clock_time(11, 30),
    clock_time(13, 0),
    clock_time(13, 20),
    clock_time(13, 40),
    clock_time(14, 0),
    clock_time(14, 20),
    clock_time(14, 40),
    clock_time(14, 55),
    clock_time(15, 0),
)
LAST_ATTEMPTED_SLOT: str | None = None
PUBLISH_RUNNING = False
LAST_PUBLISH_ERROR: str | None = None


def is_trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 20) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current <= clock_time(15, 5)
    )


def slot_datetime(now: datetime, slot: clock_time) -> datetime:
    return datetime.combine(now.date(), slot, tzinfo=CHINA_TZ)


def latest_due_slot(now: datetime) -> datetime | None:
    if now.weekday() >= 5:
        return None
    due = [
        slot_datetime(now, slot) + timedelta(seconds=15)
        for slot in PUBLISH_SLOTS
        if now >= slot_datetime(now, slot) + timedelta(seconds=15)
    ]
    return due[-1] if due else None


def next_publish_slot(now: datetime) -> datetime:
    for offset in range(0, 8):
        day = (now + timedelta(days=offset)).date()
        day_midnight = datetime.combine(day, clock_time(0, 0), tzinfo=CHINA_TZ)
        if day_midnight.weekday() >= 5:
            continue
        for slot in PUBLISH_SLOTS:
            candidate = slot_datetime(day_midnight, slot)
            if candidate > now:
                return candidate
    return now + timedelta(days=1)


def read_publish_status() -> dict[str, Any]:
    if not PUBLISH_STATUS_FILE.exists():
        return {}
    try:
        payload = json.loads(PUBLISH_STATUS_FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}
    return payload if isinstance(payload, dict) else {}


def pid_is_running(pid: int) -> bool:
    if pid <= 0:
        return False
    if os.name != "nt":
        try:
            os.kill(pid, 0)
            return True
        except OSError:
            return False

    process_query_limited_information = 0x1000
    still_active = 259
    kernel32 = ctypes.windll.kernel32
    handle = kernel32.OpenProcess(process_query_limited_information, False, pid)
    if not handle:
        return False
    try:
        exit_code = ctypes.c_ulong()
        if not kernel32.GetExitCodeProcess(handle, ctypes.byref(exit_code)):
            return False
        return exit_code.value == still_active
    finally:
        kernel32.CloseHandle(handle)


def read_pid() -> int | None:
    try:
        pid = int(PID_FILE.read_text(encoding="ascii").strip())
    except (OSError, ValueError):
        return None
    if pid_is_running(pid):
        return pid
    PID_FILE.unlink(missing_ok=True)
    return None


def collector_state() -> dict[str, Any]:
    pid = read_pid()
    now = datetime.now(CHINA_TZ)
    publish_status = read_publish_status()
    live_summary: dict[str, Any] = {}
    summary_path = FULL_DIR / "full_market_intraday_latest.json"
    if summary_path.exists():
        try:
            live_summary = json.loads(summary_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            live_summary = {}
    return {
        "running": bool(pid),
        "state": (
            "running"
            if pid and is_trading_window(now)
            else "waiting"
            if pid
            else "stopped"
        ),
        "pid": pid,
        "trading_window": is_trading_window(now),
        "server_time": now.isoformat(timespec="seconds"),
        "capture_count": live_summary.get("capture_count", 0),
        "last_capture_at": live_summary.get("last_capture_at"),
        "log_file": str(LOG_FILE),
        "publish": {
            **publish_status,
            "running": PUBLISH_RUNNING,
            "last_error": LAST_PUBLISH_ERROR,
        },
        "next_publish_at": next_publish_slot(now).isoformat(timespec="seconds"),
    }


def start_collector() -> dict[str, Any]:
    with PROCESS_LOCK:
        current = collector_state()
        if current["running"]:
            return current

        DATA_DIR.mkdir(parents=True, exist_ok=True)
        log_handle = LOG_FILE.open("a", encoding="utf-8")
        creation_flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
        process = subprocess.Popen(
            [
                sys.executable,
                "-X",
                "utf8",
                str(COLLECTOR),
                "--watch",
                "--wait-for-open",
                "--interval",
                "30",
                "--stock-interval",
                "60",
            ],
            cwd=BASE_DIR,
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=creation_flags,
        )
        log_handle.close()
        PID_FILE.write_text(str(process.pid), encoding="ascii")
        time.sleep(0.25)
        return collector_state()


def stop_collector() -> dict[str, Any]:
    with PROCESS_LOCK:
        pid = read_pid()
        if pid:
            if os.name == "nt":
                subprocess.run(
                    ["taskkill", "/PID", str(pid), "/T", "/F"],
                    capture_output=True,
                    check=False,
                )
            else:
                os.kill(pid, 15)
        PID_FILE.unlink(missing_ok=True)
        return collector_state()


def publish_to_github(slot: datetime) -> bool:
    global PUBLISH_RUNNING, LAST_PUBLISH_ERROR
    with PUBLISH_LOCK:
        PUBLISH_RUNNING = True
        slot_key = slot.strftime("%Y-%m-%d %H:%M")
        log_path = DATA_DIR / "github_publish.log"
        try:
            with log_path.open("a", encoding="utf-8") as log:
                log.write(f"\n[{datetime.now(CHINA_TZ).isoformat()}] start {slot_key}\n")
                log.flush()
                process = subprocess.run(
                    [
                        sys.executable,
                        "-X",
                        "utf8",
                        str(PUBLISHER),
                        "--slot",
                        slot_key,
                    ],
                    cwd=BASE_DIR,
                    stdout=log,
                    stderr=subprocess.STDOUT,
                    timeout=300,
                    check=False,
                )
            if process.returncode == 0:
                LAST_PUBLISH_ERROR = None
                print(f"[PUBLISH] GitHub synced for {slot_key}", flush=True)
                return True
            LAST_PUBLISH_ERROR = f"publisher exited {process.returncode}"
        except Exception as exc:  # noqa: BLE001
            LAST_PUBLISH_ERROR = f"{type(exc).__name__}: {exc}"
        finally:
            PUBLISH_RUNNING = False
        print(f"[PUBLISH] failed for {slot_key}: {LAST_PUBLISH_ERROR}", flush=True)
        return False


def publish_scheduler_loop() -> None:
    global LAST_ATTEMPTED_SLOT
    while True:
        now = datetime.now(CHINA_TZ)
        if is_trading_window(now):
            slot = latest_due_slot(now)
            if slot is not None:
                slot_key = slot.strftime("%Y-%m-%d %H:%M")
                persisted = read_publish_status().get("last_slot")
                if slot_key != persisted and slot_key != LAST_ATTEMPTED_SLOT:
                    LAST_ATTEMPTED_SLOT = slot_key
                    live_monitor_running = (
                        collector_state().get("running")
                        or monitor_state().get("running")
                        or theme_refresh_state().get("running")
                    )
                    if live_monitor_running:
                        publish_to_github(slot)
        time.sleep(10)


def read_monitor_payload() -> dict[str, Any]:
    try:
        payload = json.loads(FIVE_BREAK_10_STATUS.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}
    return payload if isinstance(payload, dict) else {}


def monitor_state() -> dict[str, Any]:
    payload = read_monitor_payload()
    now = datetime.now(CHINA_TZ)
    heartbeat_at: datetime | None = None
    generated_at = str(payload.get("generated_at") or "")
    if generated_at:
        try:
            heartbeat_at = datetime.fromisoformat(generated_at)
            if heartbeat_at.tzinfo is None:
                heartbeat_at = heartbeat_at.replace(tzinfo=CHINA_TZ)
        except ValueError:
            heartbeat_at = None
    heartbeat_age = (
        max(0, int((now - heartbeat_at).total_seconds()))
        if heartbeat_at
        else None
    )

    payload_pid = int(payload.get("process_id") or 0)
    try:
        file_pid = int(FIVE_BREAK_10_PID_FILE.read_text(encoding="ascii").strip())
    except (OSError, ValueError):
        file_pid = 0
    running_pid = payload_pid if pid_is_running(payload_pid) else 0
    if not running_pid and pid_is_running(file_pid):
        running_pid = file_pid
    if not running_pid:
        FIVE_BREAK_10_PID_FILE.unlink(missing_ok=True)

    return {
        "running": bool(running_pid),
        "state": "running" if running_pid else "stopped",
        "pid": running_pid or None,
        "monitor_status": payload.get("status", "unavailable"),
        "heartbeat_age_seconds": heartbeat_age,
        "server_time": now.isoformat(timespec="seconds"),
        "signal_date": payload.get("signal_date"),
        "market_date": payload.get("market_date"),
        "generated_at": payload.get("generated_at"),
        "interval_seconds": payload.get("interval_seconds", 60),
        "plan_count": payload.get("plan_count", 0),
        "active_count": payload.get("active_count", 0),
    }


def start_monitor() -> dict[str, Any]:
    with FIVE_BREAK_10_LOCK:
        current = monitor_state()
        if current["running"]:
            return current
        if not FIVE_BREAK_10_SCRIPT.exists():
            raise FileNotFoundError(f"监控脚本不存在：{FIVE_BREAK_10_SCRIPT}")

        DATA_DIR.mkdir(parents=True, exist_ok=True)
        log_handle = FIVE_BREAK_10_LOG.open("a", encoding="utf-8")
        creation_flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
        process = subprocess.Popen(
            [
                sys.executable,
                "-X",
                "utf8",
                str(FIVE_BREAK_10_SCRIPT),
                "--interval",
                "60",
            ],
            cwd=str(FIVE_BREAK_10_SCRIPT.parent),
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=creation_flags,
        )
        log_handle.close()
        FIVE_BREAK_10_PID_FILE.write_text(str(process.pid), encoding="ascii")
        time.sleep(0.4)
        return monitor_state()


def stop_monitor() -> dict[str, Any]:
    with FIVE_BREAK_10_LOCK:
        state = monitor_state()
        pid = int(state.get("pid") or 0)
        if pid:
            if os.name == "nt":
                subprocess.run(
                    ["taskkill", "/PID", str(pid), "/T", "/F"],
                    capture_output=True,
                    check=False,
                )
            else:
                os.kill(pid, 15)
        FIVE_BREAK_10_PID_FILE.unlink(missing_ok=True)
        return monitor_state()


def theme_refresh_state() -> dict[str, Any]:
    try:
        pid = int(THEME_REFRESH_PID_FILE.read_text(encoding="ascii").strip())
    except (OSError, ValueError):
        pid = 0
    running = pid_is_running(pid)
    if not running:
        THEME_REFRESH_PID_FILE.unlink(missing_ok=True)
    try:
        payload = json.loads(THEME_REFRESH_STATUS.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        payload = {}
    return {
        "running": running,
        "state": "running" if running else "stopped",
        "pid": pid if running else None,
        "updated_at": payload.get("updated_at"),
        "source_date": payload.get("source_date"),
        "daily_top_count": payload.get("daily_top_count", 0),
        "reversal_hit_count": payload.get("reversal_hit_count", 0),
    }


def start_theme_refresh() -> dict[str, Any]:
    with THEME_REFRESH_LOCK:
        current = theme_refresh_state()
        if current["running"]:
            return current
        if not THEME_REFRESH_SCRIPT.exists():
            raise FileNotFoundError(f"题材刷新脚本不存在：{THEME_REFRESH_SCRIPT}")
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        log_handle = THEME_REFRESH_LOG.open("a", encoding="utf-8")
        creation_flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
        process = subprocess.Popen(
            [
                sys.executable,
                "-X",
                "utf8",
                str(THEME_REFRESH_SCRIPT),
                "--watch",
                "--interval",
                "60",
            ],
            cwd=BASE_DIR,
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=creation_flags,
        )
        log_handle.close()
        THEME_REFRESH_PID_FILE.write_text(str(process.pid), encoding="ascii")
        time.sleep(0.4)
        return theme_refresh_state()


def stop_theme_refresh() -> dict[str, Any]:
    with THEME_REFRESH_LOCK:
        state = theme_refresh_state()
        pid = int(state.get("pid") or 0)
        if pid:
            if os.name == "nt":
                subprocess.run(
                    ["taskkill", "/PID", str(pid), "/T", "/F"],
                    capture_output=True,
                    check=False,
                )
            else:
                os.kill(pid, 15)
        THEME_REFRESH_PID_FILE.unlink(missing_ok=True)
        return theme_refresh_state()


def all_monitor_state() -> dict[str, Any]:
    collector = collector_state()
    five_break = monitor_state()
    theme = theme_refresh_state()
    components = {
        "full_market": collector,
        "five_break_10": five_break,
        "theme_radar": theme,
    }
    running_count = sum(bool(item.get("running")) for item in components.values())
    return {
        "running_count": running_count,
        "total_count": len(components),
        "all_running": running_count == len(components),
        "any_running": running_count > 0,
        "components": components,
        "server_time": datetime.now(CHINA_TZ).isoformat(timespec="seconds"),
    }


def start_all_monitors() -> dict[str, Any]:
    errors: list[str] = []
    for name, starter in (
        ("full_market", start_collector),
        ("five_break_10", start_monitor),
        ("theme_radar", start_theme_refresh),
    ):
        try:
            starter()
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{name}: {type(exc).__name__}: {exc}")
    result = all_monitor_state()
    result["errors"] = errors
    return result


def stop_all_monitors() -> dict[str, Any]:
    errors: list[str] = []
    for name, stopper in (
        ("full_market", stop_collector),
        ("five_break_10", stop_monitor),
        ("theme_radar", stop_theme_refresh),
    ):
        try:
            stopper()
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{name}: {type(exc).__name__}: {exc}")
    result = all_monitor_state()
    result["errors"] = errors
    return result


class DashboardHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def send_json(self, payload: dict[str, Any], status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/collector/status":
            self.send_json(collector_state())
            return
        if path == "/api/five-break-10/status":
            self.send_json(monitor_state())
            return
        if path == "/api/monitors/status":
            self.send_json(all_monitor_state())
            return
        super().do_GET()

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        try:
            if path == "/api/collector/start":
                self.send_json(start_collector())
                return
            if path == "/api/collector/stop":
                self.send_json(stop_collector())
                return
            if path == "/api/five-break-10/start":
                self.send_json(start_monitor())
                return
            if path == "/api/five-break-10/stop":
                self.send_json(stop_monitor())
                return
            if path == "/api/monitors/start-all":
                self.send_json(start_all_monitors())
                return
            if path == "/api/monitors/stop-all":
                self.send_json(stop_all_monitors())
                return
            self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)
        except Exception as exc:  # noqa: BLE001
            self.send_json(
                {"error": f"{type(exc).__name__}: {exc}"},
                HTTPStatus.INTERNAL_SERVER_ERROR,
            )

    def log_message(self, fmt: str, *args: Any) -> None:
        print(f"[WEB] {self.address_string()} {fmt % args}", flush=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="大A爆破实验室本地服务")
    parser.add_argument("--port", type=int, default=8771)
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()

    url = f"http://127.0.0.1:{args.port}/"
    if not args.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    threading.Thread(target=publish_scheduler_loop, daemon=True).start()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), DashboardHandler)
    print(f"[READY] {url}", flush=True)
    print("[INFO] 关闭此窗口将停止网页服务；采集器可单独停止。", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
