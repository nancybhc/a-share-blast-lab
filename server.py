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
from datetime import datetime, time as clock_time
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
PID_FILE = DATA_DIR / ".collector.pid"
LOG_FILE = DATA_DIR / "collector.log"
CHINA_TZ = ZoneInfo("Asia/Shanghai")
PROCESS_LOCK = threading.Lock()


def is_trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 20) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current <= clock_time(15, 5)
    )


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
                "300",
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
