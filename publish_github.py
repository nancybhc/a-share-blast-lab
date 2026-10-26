from __future__ import annotations

import argparse
import base64
import hashlib
import json
import re
import subprocess
import time
from datetime import datetime
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

import requests


SITE = Path(__file__).resolve().parent
DATA_DIR = SITE / "data"
RUNTIME_STATUS = DATA_DIR / "runtime_status.js"
PUBLISH_STATUS = DATA_DIR / "github_publish_status.json"
REPO_NAME = "a-share-blast-lab"
BRANCH = "main"
API = "https://api.github.com"
USER_AGENT = "Codex-Blast-Lab-Deploy"
EXCLUDED_PARTS = {".git", "__pycache__", ".pytest_cache"}
EXCLUDED_NAMES = {
    ".collector.pid",
    "collector.log",
    "server.pid",
    "server.stdout.log",
    "server.stderr.log",
    "five_break_10_monitor.log",
    ".five_break_10_monitor.pid",
    "theme_refresh.log",
    ".theme_refresh.pid",
    "theme_radar_status.json",
    "github_publish_status.json",
    "github_publish.log",
    "daily_postmarket_update.log",
    "daily_postmarket_status.json",
    ".daily_postmarket_update.lock",
    "monitor_auto_schedule.log",
    "monitor_auto_schedule_status.json",
    "server.autostart.log",
}
EXCLUDED_SUFFIXES = {".pyc", ".pyo", ".tmp"}


def git_credential() -> str:
    result = subprocess.run(
        ["git", "credential", "fill"],
        input="protocol=https\nhost=github.com\n\n",
        text=True,
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr or "git credential fill failed")
    for line in result.stdout.splitlines():
        if line.startswith("password="):
            return line.removeprefix("password=")
    raise RuntimeError("GitHub credential not found")


TOKEN = git_credential()
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": USER_AGENT,
}


def api(
    method: str,
    path: str,
    *,
    expected: tuple[int, ...] = (200,),
    **kwargs: Any,
) -> requests.Response:
    last_error: Exception | None = None
    for attempt in range(1, 5):
        try:
            response = requests.request(
                method,
                f"{API}{path}",
                headers=HEADERS,
                timeout=60,
                **kwargs,
            )
            if response.status_code in expected:
                return response
            if response.status_code in (429, 500, 502, 503, 504):
                last_error = RuntimeError(
                    f"GitHub HTTP {response.status_code}: {response.text}"
                )
            else:
                raise RuntimeError(
                    f"GitHub {method} {path} -> {response.status_code}: "
                    f"{response.text[:1000]}"
                )
        except (requests.ConnectionError, requests.Timeout) as exc:
            last_error = exc
        if attempt < 4:
            time.sleep(attempt * 2)
    raise RuntimeError(f"GitHub request failed: {last_error}")


def public_files() -> list[Path]:
    files: list[Path] = []
    for path in sorted(SITE.rglob("*")):
        if not path.is_file():
            continue
        relative = path.relative_to(SITE)
        if any(part in EXCLUDED_PARTS for part in relative.parts):
            continue
        if path.name in EXCLUDED_NAMES or path.suffix.lower() in EXCLUDED_SUFFIXES:
            continue
        if (
            path.name.startswith("full_market_intraday_")
            and path.suffix.lower() == ".json"
        ):
            continue
        files.append(path)
    return files


def blob_sha(content: bytes) -> str:
    header = f"blob {len(content)}\0".encode("ascii")
    return hashlib.sha1(header + content).hexdigest()


def write_runtime_status() -> dict[str, Any]:
    now = datetime.now(ZoneInfo("Asia/Shanghai"))
    capture_path = DATA_DIR / "full_market_intraday_latest.json"
    capture: dict[str, Any] = {}
    if capture_path.exists():
        try:
            capture = json.loads(capture_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            capture = {}
    payload = {
        "published_at": now.isoformat(timespec="seconds"),
        "published_at_display": now.strftime("%Y-%m-%d %H:%M:%S"),
        "last_collector_capture_at": capture.get("last_capture_at"),
        "capture_count": capture.get("capture_count", 0),
        "schedule": [
            "09:30",
            "09:50",
            "10:10",
            "10:30",
            "10:50",
            "11:10",
            "11:30",
            "13:00",
            "13:20",
            "13:40",
            "14:00",
            "14:20",
            "14:40",
            "14:55",
            "15:00",
        ],
    }
    RUNTIME_STATUS.write_text(
        "window.SITE_RUNTIME_STATUS = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    return payload


def stamp_asset_urls() -> str:
    version = datetime.now(ZoneInfo("Asia/Shanghai")).strftime("%Y%m%d%H%M%S")
    index_path = SITE / "index.html"
    html = index_path.read_text(encoding="utf-8")
    html = re.sub(
        r'(<script\b[^>]*\bsrc="[^"]+\.js)(?:\?v=[^"]*)?"',
        rf'\1?v={version}"',
        html,
    )
    html = re.sub(
        r'(<link\b[^>]*\bhref="styles\.css)(?:\?v=[^"]*)?"',
        rf'\1?v={version}"',
        html,
    )
    index_path.write_text(html, encoding="utf-8")
    return version


def main() -> None:
    parser = argparse.ArgumentParser(description="Publish A-Share Blast Lab to GitHub Pages")
    parser.add_argument(
        "--slot",
        default="manual",
        help="Scheduled slot key, for example 2026-10-26 09:30",
    )
    args = parser.parse_args()
    asset_version = stamp_asset_urls()
    runtime_status = write_runtime_status()
    print(f"[VERSION] asset_version={asset_version}", flush=True)

    user = api("GET", "/user").json()
    owner = user["login"]
    repo_path = f"/repos/{owner}/{REPO_NAME}"

    lookup = api("GET", repo_path, expected=(200, 404))
    if lookup.status_code == 404:
        created = api(
            "POST",
            "/user/repos",
            expected=(201,),
            json={
                "name": REPO_NAME,
                "description": "大A爆破实验室：全市场资金流与多空阶段研究站",
                "homepage": f"https://{owner}.github.io/{REPO_NAME}/",
                "private": False,
                "has_issues": True,
                "has_wiki": False,
                "auto_init": False,
            },
        ).json()
        print(f"[REPO] created {created['html_url']}", flush=True)
    else:
        repo = lookup.json()
        print(f"[REPO] existing {repo['html_url']}", flush=True)

    commits = api(
        "GET",
        f"{repo_path}/commits?per_page=1",
        expected=(200, 409),
    )
    if commits.status_code == 409 or not commits.json():
        readme = b"# A-Share Blast Lab\n\nDeployment initialized by Codex.\n"
        api(
            "PUT",
            f"{repo_path}/contents/README.md",
            expected=(200, 201),
            json={
                "message": "Initialize A-Share Blast Lab",
                "content": base64.b64encode(readme).decode("ascii"),
                "branch": BRANCH,
            },
        )

    reference = api(
        "GET",
        f"{repo_path}/git/ref/heads/{BRANCH}",
        expected=(200,),
    ).json()
    parent_sha = reference["object"]["sha"]
    parent_commit = api(
        "GET",
        f"{repo_path}/git/commits/{parent_sha}",
    ).json()
    remote_tree = api(
        "GET",
        f"{repo_path}/git/trees/{parent_commit['tree']['sha']}",
        params={"recursive": "1"},
    ).json()
    remote_blobs = {
        item["path"]: item["sha"]
        for item in remote_tree.get("tree", [])
        if item.get("type") == "blob"
    }

    tree_items: list[dict[str, Any]] = []
    uploaded = 0
    reused = 0
    for path in public_files():
        relative = path.relative_to(SITE).as_posix()
        content = path.read_bytes()
        local_sha = blob_sha(content)
        remote_sha = remote_blobs.get(relative)
        if remote_sha != local_sha:
            blob = api(
                "POST",
                f"{repo_path}/git/blobs",
                expected=(201,),
                json={
                    "content": base64.b64encode(content).decode("ascii"),
                    "encoding": "base64",
                },
            ).json()
            remote_sha = blob["sha"]
            uploaded += 1
        else:
            reused += 1
        tree_items.append(
            {
                "path": relative,
                "mode": "100644",
                "type": "blob",
                "sha": remote_sha,
            }
        )

    tree = api(
        "POST",
        f"{repo_path}/git/trees",
        expected=(201,),
        json={"tree": tree_items},
    ).json()
    commit = api(
        "POST",
        f"{repo_path}/git/commits",
        expected=(201,),
        json={
            "message": f"Update A-Share Blast Lab / {args.slot}",
            "tree": tree["sha"],
            "parents": [parent_sha],
        },
    ).json()
    api(
        "PATCH",
        f"{repo_path}/git/refs/heads/{BRANCH}",
        json={"sha": commit["sha"], "force": False},
    )
    print(
        f"[PUSH] uploaded={uploaded} reused={reused} total={len(tree_items)} "
        f"commit={commit['sha'][:10]}",
        flush=True,
    )

    pages = api(
        "GET",
        f"{repo_path}/pages",
        expected=(200, 404),
    )
    page_payload = {
        "source": {"branch": BRANCH, "path": "/"},
        "build_type": "legacy",
    }
    if pages.status_code == 404:
        api(
            "POST",
            f"{repo_path}/pages",
            expected=(201, 204),
            json=page_payload,
        )
    else:
        api(
            "PUT",
            f"{repo_path}/pages",
            expected=(200, 204),
            json=page_payload,
        )

    pages_url = f"https://{owner}.github.io/{REPO_NAME}/"
    pages_ready = False
    for attempt in range(1, 13):
        try:
            response = requests.get(pages_url, timeout=20)
            if response.status_code == 200 and "大A爆破实验室" in response.text:
                print(f"[PAGES] ready {pages_url}", flush=True)
                pages_ready = True
                break
        except requests.RequestException:
            pass
        print(f"[WAIT] Pages deployment check {attempt}/12", flush=True)
        time.sleep(5)
    if not pages_ready:
        print(f"[PAGES] submitted {pages_url}", flush=True)

    PUBLISH_STATUS.write_text(
        json.dumps(
            {
                "last_slot": args.slot,
                "last_publish_at": runtime_status["published_at"],
                "commit": commit["sha"],
                "pages_url": pages_url,
                "pages_ready": pages_ready,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
