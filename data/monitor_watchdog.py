from __future__ import annotations

import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, time as clock_time
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


CHINA_TZ = ZoneInfo("Asia/Shanghai")
SITE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = SITE_DIR / "data"
LOG_PATH = DATA_DIR / "monitor_watchdog.log"
STATUS_PATH = DATA_DIR / "monitor_watchdog_status.json"
BASE_URL = "http://127.0.0.1:8771"
MONITOR_START = clock_time(9, 15)
MONITOR_STOP = clock_time(15, 0)


def now_china() -> datetime:
    return datetime.now(CHINA_TZ)


def in_monitor_window(now: datetime) -> bool:
    return now.weekday() < 5 and MONITOR_START <= now.time() < MONITOR_STOP


def append_log(message: str) -> None:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with LOG_PATH.open("a", encoding="utf-8") as handle:
        handle.write(f"[{now_china():%Y-%m-%d %H:%M:%S}] {message}\n")


def write_status(payload: dict[str, Any]) -> None:
    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    temp = STATUS_PATH.with_suffix(".tmp")
    temp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temp.replace(STATUS_PATH)


def request_json(path: str, method: str = "GET", timeout: int = 15) -> dict[str, Any]:
    request = urllib.request.Request(
        BASE_URL + path,
        method=method,
        data=b"" if method == "POST" else None,
        headers={"Accept": "application/json"},
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        payload = json.loads(response.read().decode("utf-8"))
    if not isinstance(payload, dict):
        raise RuntimeError(f"unexpected response from {path}")
    return payload


def server_ready() -> bool:
    try:
        request_json("/api/monitors/status", timeout=3)
        return True
    except (OSError, ValueError, urllib.error.URLError, RuntimeError):
        return False


def ensure_server() -> None:
    if server_ready():
        return
    append_log("server unavailable; starting local server")
    log_handle = (DATA_DIR / "server.autostart.log").open("a", encoding="utf-8")
    flags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
    try:
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
            stdout=log_handle,
            stderr=subprocess.STDOUT,
            creationflags=flags,
            close_fds=True,
        )
    finally:
        log_handle.close()
    for _ in range(30):
        if server_ready():
            return
        time.sleep(1)
    raise RuntimeError("local server did not become ready within 30 seconds")


def component_summary(status: dict[str, Any]) -> dict[str, Any]:
    return {
        name: {
            "running": bool(component.get("running")),
            "last_update": component.get("last_capture_at")
            or component.get("updated_at"),
        }
        for name, component in (status.get("components") or {}).items()
    }


def main() -> int:
    current = now_china()
    if not in_monitor_window(current):
        write_status(
            {
                "checked_at": current.isoformat(timespec="seconds"),
                "window_active": False,
                "action": "skipped-outside-window",
            }
        )
        return 0

    payload: dict[str, Any] = {
        "checked_at": current.isoformat(timespec="seconds"),
        "window_active": True,
        "server_ready": False,
        "action": "checking",
    }
    try:
        ensure_server()
        status = request_json("/api/monitors/status")
        payload["server_ready"] = True
        payload["stale_components"] = status.get("stale_components", [])
        payload["components_before"] = component_summary(status)
        if status.get("needs_repair"):
            append_log(
                "stale monitors detected: "
                + (", ".join(status.get("stale_components", [])) or "unknown")
            )
            repaired = request_json("/api/monitors/repair", "POST", timeout=60)
            payload.update(
                {
                    "action": "repaired",
                    "repaired_components": repaired.get("repaired_components", []),
                    "repair_errors": repaired.get("errors", []),
                    "components_after": component_summary(repaired),
                }
            )
            append_log(
                "repair requested; repaired="
                + (", ".join(repaired.get("repaired_components", [])) or "none")
            )
            if repaired.get("errors"):
                raise RuntimeError("; ".join(repaired["errors"]))
        else:
            payload.update(
                {
                    "action": "healthy",
                    "components_after": component_summary(status),
                }
            )
        payload["success"] = True
        write_status(payload)
        return 0
    except Exception as exc:  # noqa: BLE001
        payload.update(
            {
                "success": False,
                "action": "failed",
                "error": f"{type(exc).__name__}: {exc}",
            }
        )
        append_log(f"watchdog failed: {payload['error']}")
        write_status(payload)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
