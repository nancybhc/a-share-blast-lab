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
THEME_REFRESH_SCRIPT = DATA_DIR / "build_theme_radar_web.py"
THEME_REFRESH_PID_FILE = DATA_DIR / ".theme_refresh.pid"
THEME_REFRESH_LOG = DATA_DIR / "theme_refresh.log"
THEME_REFRESH_STATUS = DATA_DIR / "theme_radar_status.json"
LIVE_PIPELINE_SCRIPT = DATA_DIR / "live_intraday_pipeline.py"
LIVE_PIPELINE_PID_FILE = DATA_DIR / ".live_intraday_pipeline.pid"
LIVE_PIPELINE_LOG = DATA_DIR / "live_intraday_pipeline.log"
LIVE_PIPELINE_STATUS = DATA_DIR / "live_intraday_pipeline_status.json"
CHINA_TZ = ZoneInfo("Asia/Shanghai")
PROCESS_LOCK = threading.Lock()
THEME_REFRESH_LOCK = threading.Lock()
LIVE_PIPELINE_LOCK = threading.Lock()
PUBLISH_LOCK = threading.Lock()
MONITOR_REPAIR_LOCK = threading.Lock()
PUBLISH_INTERVAL_SECONDS = 60
LAST_ATTEMPTED_SLOT: str | None = None
PUBLISH_RUNNING = False
LAST_PUBLISH_ERROR: str | None = None
AUTO_MONITOR_START = clock_time(9, 15)
AUTO_MONITOR_STOP = clock_time(15, 0)
LAST_AUTO_START_ATTEMPT: datetime | None = None
LAST_AUTO_STOP_ATTEMPT: datetime | None = None
LAST_AUTO_REPAIR_ATTEMPT: datetime | None = None
FULL_MARKET_STALE_SECONDS = 3 * 60
THEME_STALE_SECONDS = 4 * 60
LIVE_PIPELINE_STALE_SECONDS = 9 * 60


def is_trading_window(now: datetime) -> bool:
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 15) <= current <= clock_time(11, 35)
        or clock_time(12, 55) <= current < clock_time(15, 0)
    )


def is_monitor_health_window(now: datetime) -> bool:
    """Only judge freshness while captures are expected to be advancing."""
    if now.weekday() >= 5:
        return False
    current = now.time()
    return (
        clock_time(9, 32) <= current <= clock_time(11, 35)
        or clock_time(12, 57) <= current < clock_time(15, 0)
    )


def parse_status_time(value: Any) -> datetime | None:
    if not value:
        return None
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=CHINA_TZ)
    return parsed.astimezone(CHINA_TZ)


def slot_datetime(now: datetime, slot: clock_time) -> datetime:
    return datetime.combine(now.date(), slot, tzinfo=CHINA_TZ)


def latest_due_slot(now: datetime) -> datetime | None:
    if not is_trading_window(now):
        return None
    return now.replace(second=0, microsecond=0)


def next_publish_slot(now: datetime) -> datetime:
    if is_trading_window(now):
        return now.replace(second=0, microsecond=0) + timedelta(
            seconds=PUBLISH_INTERVAL_SECONDS
        )
    for offset in range(0, 8):
        day = (now + timedelta(days=offset)).date()
        if day.weekday() >= 5:
            continue
        for start in (clock_time(9, 15), clock_time(12, 55)):
            candidate = datetime.combine(day, start, tzinfo=CHINA_TZ)
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
    try:
        PID_FILE.unlink(missing_ok=True)
    except OSError:
        pass
    return None


def write_pid_file(path: Path, pid: int) -> None:
    last_error: OSError | None = None
    for _ in range(12):
        try:
            path.write_text(str(pid), encoding="ascii")
            return
        except OSError as exc:
            last_error = exc
            time.sleep(0.1)
    raise last_error or OSError(f"cannot write pid file: {path}")


def collector_state() -> dict[str, Any]:
    pid = read_pid()
    now = datetime.now(CHINA_TZ)
    publish_status = read_publish_status()
    live_summary: dict[str, Any] = {}
    for summary_path in (
        DATA_DIR / "full_market_intraday_latest.json",
        FULL_DIR / "full_market_intraday_latest.json",
    ):
        if not summary_path.exists():
            continue
        try:
            live_summary = json.loads(summary_path.read_text(encoding="utf-8"))
            break
        except (OSError, json.JSONDecodeError):
            live_summary = {}
    capture_at = live_summary.get("last_capture_at")
    capture_date = str(capture_at or "")[:10]
    market_waiting_for_today = bool(
        pid
        and is_trading_window(now)
        and capture_date != now.date().isoformat()
    )
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
        "last_capture_at": capture_at,
        "market_waiting_for_today": market_waiting_for_today,
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
                "60",
                "--stock-interval",
                "60",
            ],
            cwd=BASE_DIR,
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=creation_flags,
        )
        log_handle.close()
        try:
            write_pid_file(PID_FILE, process.pid)
        except Exception:
            process.terminate()
            raise
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
        try:
            PID_FILE.unlink(missing_ok=True)
        except OSError:
            pass
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
                        or theme_refresh_state().get("running")
                        or live_pipeline_state().get("running")
                    )
                    if live_monitor_running:
                        publish_to_github(slot)
        time.sleep(5)


def theme_refresh_state() -> dict[str, Any]:
    try:
        pid = int(THEME_REFRESH_PID_FILE.read_text(encoding="ascii").strip())
    except (OSError, ValueError):
        pid = 0
    running = pid_is_running(pid)
    if not running:
        try:
            THEME_REFRESH_PID_FILE.unlink(missing_ok=True)
        except OSError:
            pass
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
        try:
            write_pid_file(THEME_REFRESH_PID_FILE, process.pid)
        except Exception:
            process.terminate()
            raise
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
        try:
            THEME_REFRESH_PID_FILE.unlink(missing_ok=True)
        except OSError:
            pass
        return theme_refresh_state()


def live_pipeline_state() -> dict[str, Any]:
    try:
        pid = int(LIVE_PIPELINE_PID_FILE.read_text(encoding="ascii").strip())
    except (OSError, ValueError):
        pid = 0
    running = pid_is_running(pid)
    if not running:
        try:
            LIVE_PIPELINE_PID_FILE.unlink(missing_ok=True)
        except OSError:
            pass
    try:
        payload = json.loads(LIVE_PIPELINE_STATUS.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        payload = {}
    return {
        "running": running,
        "state": payload.get("state", "running" if running else "stopped"),
        "stage": payload.get("stage"),
        "pid": pid if running else None,
        "updated_at": payload.get("updated_at"),
        "date": payload.get("date"),
        "interval_seconds": payload.get("interval_seconds", 180),
    }


def start_live_pipeline() -> dict[str, Any]:
    with LIVE_PIPELINE_LOCK:
        current = live_pipeline_state()
        if current["running"]:
            return current
        if not LIVE_PIPELINE_SCRIPT.exists():
            raise FileNotFoundError(f"实时管线不存在：{LIVE_PIPELINE_SCRIPT}")
        log_handle = LIVE_PIPELINE_LOG.open("a", encoding="utf-8")
        creation_flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
        process = subprocess.Popen(
            [
                sys.executable,
                "-X",
                "utf8",
                str(LIVE_PIPELINE_SCRIPT),
                "--watch",
                "--interval",
                "180",
            ],
            cwd=BASE_DIR,
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=creation_flags,
        )
        log_handle.close()
        try:
            write_pid_file(LIVE_PIPELINE_PID_FILE, process.pid)
        except Exception:
            process.terminate()
            raise
        time.sleep(0.4)
        return live_pipeline_state()


def stop_live_pipeline() -> dict[str, Any]:
    with LIVE_PIPELINE_LOCK:
        state = live_pipeline_state()
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
        try:
            LIVE_PIPELINE_PID_FILE.unlink(missing_ok=True)
        except OSError:
            pass
        return live_pipeline_state()


def stale_monitor_components(
    state: dict[str, Any],
    now: datetime | None = None,
) -> list[str]:
    current = now or datetime.now(CHINA_TZ)
    if not is_monitor_health_window(current):
        return []

    thresholds = {
        "full_market": (FULL_MARKET_STALE_SECONDS, "last_capture_at"),
        "theme_radar": (THEME_STALE_SECONDS, "updated_at"),
        "live_pipeline": (LIVE_PIPELINE_STALE_SECONDS, "updated_at"),
    }
    components = state.get("components", {})
    stale: list[str] = []
    for name, (max_age, timestamp_key) in thresholds.items():
        component = components.get(name) or {}
        if not component.get("running"):
            stale.append(name)
            continue
        updated_at = parse_status_time(component.get(timestamp_key))
        if updated_at is None or (current - updated_at).total_seconds() > max_age:
            stale.append(name)
    return stale


def all_monitor_state() -> dict[str, Any]:
    collector = collector_state()
    theme = theme_refresh_state()
    live_pipeline = live_pipeline_state()
    components = {
        "full_market": collector,
        "theme_radar": theme,
        "live_pipeline": live_pipeline,
    }
    running_count = sum(bool(item.get("running")) for item in components.values())
    current = datetime.now(CHINA_TZ)
    state = {
        "components": components,
        "running_count": running_count,
        "total_count": len(components),
        "all_running": running_count == len(components),
        "any_running": running_count > 0,
    }
    stale = stale_monitor_components(state, current)
    return {
        **state,
        "stale_components": stale,
        "needs_repair": bool(stale),
        "health_window": is_monitor_health_window(current),
        "components": components,
        "schedule": monitor_schedule_state(current),
        "server_time": current.isoformat(timespec="seconds"),
    }


def monitor_schedule_state(now: datetime | None = None) -> dict[str, Any]:
    current = now or datetime.now(CHINA_TZ)
    weekday = current.weekday() < 5
    current_time = current.time()
    active = weekday and AUTO_MONITOR_START <= current_time < AUTO_MONITOR_STOP
    return {
        "enabled": True,
        "weekdays_only": True,
        "start": AUTO_MONITOR_START.strftime("%H:%M"),
        "stop": AUTO_MONITOR_STOP.strftime("%H:%M"),
        "active_window": active,
        "state": (
            "运行时段"
            if active
            else "等待启动"
            if weekday and current_time < AUTO_MONITOR_START
            else "已过停止时间"
            if weekday
            else "周末停用"
        ),
    }


def start_all_monitors() -> dict[str, Any]:
    errors: list[str] = []
    for name, starter in (
        ("full_market", start_collector),
        ("theme_radar", start_theme_refresh),
        ("live_pipeline", start_live_pipeline),
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
        ("theme_radar", stop_theme_refresh),
        ("live_pipeline", stop_live_pipeline),
    ):
        try:
            stopper()
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{name}: {type(exc).__name__}: {exc}")
    result = all_monitor_state()
    result["errors"] = errors
    return result


def repair_stale_monitors(now: datetime | None = None) -> dict[str, Any]:
    with MONITOR_REPAIR_LOCK:
        current = now or datetime.now(CHINA_TZ)
        before = all_monitor_state()
        stale = stale_monitor_components(before, current)
        errors: list[str] = []
        repaired: list[str] = []
        if stale:
            stoppers = {
                "full_market": stop_collector,
                "theme_radar": stop_theme_refresh,
                "live_pipeline": stop_live_pipeline,
            }
            starters = {
                "full_market": start_collector,
                "theme_radar": start_theme_refresh,
                "live_pipeline": start_live_pipeline,
            }
            for name in stale:
                component = before["components"].get(name, {})
                try:
                    if component.get("running"):
                        stoppers[name]()
                    starters[name]()
                    repaired.append(name)
                except Exception as exc:  # noqa: BLE001
                    errors.append(f"{name}: {type(exc).__name__}: {exc}")
        result = all_monitor_state()
        result.update(
            {
                "checked_at": current.isoformat(timespec="seconds"),
                "stale_before_repair": stale,
                "repaired_components": repaired,
                "errors": errors,
            }
        )
        return result


def monitor_schedule_loop() -> None:
    global LAST_AUTO_REPAIR_ATTEMPT, LAST_AUTO_START_ATTEMPT, LAST_AUTO_STOP_ATTEMPT
    while True:
        try:
            now = datetime.now(CHINA_TZ)
            current_time = now.time()
            weekday = now.weekday() < 5
            state = all_monitor_state()
            retry_ready = (
                LAST_AUTO_STOP_ATTEMPT is None
                or (now - LAST_AUTO_STOP_ATTEMPT).total_seconds() >= 60
            )
            start_retry_ready = (
                LAST_AUTO_START_ATTEMPT is None
                or (now - LAST_AUTO_START_ATTEMPT).total_seconds() >= 60
            )
            repair_retry_ready = (
                LAST_AUTO_REPAIR_ATTEMPT is None
                or (now - LAST_AUTO_REPAIR_ATTEMPT).total_seconds() >= 120
            )

            if weekday and AUTO_MONITOR_START <= current_time < AUTO_MONITOR_STOP:
                stale = stale_monitor_components(state, now)
                if stale and repair_retry_ready:
                    LAST_AUTO_REPAIR_ATTEMPT = now
                    print(
                        f"[AUTO] stale monitors detected: {', '.join(stale)}; repairing",
                        flush=True,
                    )
                    result = repair_stale_monitors(now)
                    if result["errors"]:
                        print(
                            f"[AUTO] repair errors: {'; '.join(result['errors'])}",
                            flush=True,
                        )
                    else:
                        print(
                            f"[AUTO] repair completed: "
                            f"{', '.join(result['repaired_components']) or 'none'}",
                            flush=True,
                        )
                elif not state["all_running"] and start_retry_ready:
                    LAST_AUTO_START_ATTEMPT = now
                    result = start_all_monitors()
                    print(
                        f"[AUTO] 09:15 自动启动完成 "
                        f"{result['running_count']}/{result['total_count']}",
                        flush=True,
                    )
            elif (weekday and current_time >= AUTO_MONITOR_STOP) or not weekday:
                if state["any_running"] and retry_ready:
                    LAST_AUTO_STOP_ATTEMPT = now
                    result = stop_all_monitors()
                    print(
                        f"[AUTO] {AUTO_MONITOR_STOP.strftime('%H:%M')} 自动停止完成 "
                        f"{result['running_count']}/{result['total_count']}",
                        flush=True,
                    )
        except Exception as exc:  # noqa: BLE001
            print(
                f"[AUTO] monitor scheduler error: {type(exc).__name__}: {exc}",
                flush=True,
            )
        time.sleep(30)


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
            if path == "/api/monitors/start-all":
                self.send_json(start_all_monitors())
                return
            if path == "/api/monitors/repair":
                self.send_json(repair_stale_monitors())
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
    threading.Thread(target=monitor_schedule_loop, daemon=True).start()
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
