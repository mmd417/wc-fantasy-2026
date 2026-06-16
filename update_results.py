#!/usr/bin/env python3
"""
2026 FIFA World Cup results updater
Fetches scores from ESPN's public API and writes worldcup_data.js,
then commits and pushes to GitHub to trigger a Netlify redeploy.

No API key required. Run manually or via launchd:
  launchctl start com.mmd417.wc-results-updater
"""

import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone, timedelta
from urllib.request import urlopen
from urllib.error import URLError

# ── Config ──────────────────────────────────────────────────────────────────

SCRIPT_DIR = "/Users/matthewdziekonski/Library/Application Support/Claude/local-agent-mode-sessions/d57e01b1-bdc0-4c14-a60e-7b9d4906cca1/9e388beb-aadd-4b98-9122-07ac23ed25c2/local_ea7452c9-1776-40a6-9381-753a89da6d46/outputs/wc-fantasy-2026"
DATA_FILE  = SCRIPT_DIR + "/worldcup_data.js"

# GitHub PAT — read from environment variable (never hard-code in source)
# Set once in your shell profile: export GH_WC_TOKEN="ghp_..."
_GH_TOKEN  = os.environ.get("GH_WC_TOKEN", "")
GIT_REMOTE = f"https://{_GH_TOKEN}@github.com/mmd417/wc-fantasy-2026.git"

# Tournament date range
TOURNAMENT_START = datetime(2026, 6, 11)
TOURNAMENT_END   = datetime(2026, 7, 19)

# ESPN season slug → our stage key
SLUG_TO_STAGE = {
    "group-stage": "group",
    "round-of-32": "r32",
    "round-of-16": "r16",
    "quarterfinals": "qf",
    "semifinals":    "sf",
    "final":         "final",
}

# ESPN display name → exact app spelling
TEAM_NAME_MAP = {
    # Group A
    "Czech Republic":        "Czechia",
    "Korea Republic":        "South Korea",
    "Republic of Korea":     "South Korea",
    # Group B
    "Bosnia-Herzegovina":    "Bosnia and Herzegovina",
    "Bosnia & Herzegovina":  "Bosnia and Herzegovina",
    # Group D
    "United States":         "USA",
    "Turkey":                "Turkiye",
    "Türkiye":               "Turkiye",
    # Group E
    "Curaçao":               "Curacao",
    "Cote d'Ivoire":         "Ivory Coast",
    "Côte d'Ivoire":         "Ivory Coast",
    # Group H
    "Cabo Verde":            "Cape Verde",
}

def normalize(name: str) -> str:
    return TEAM_NAME_MAP.get(name, name)

# ── ESPN fetch ───────────────────────────────────────────────────────────────

def fetch_day(date: datetime) -> list[dict]:
    ds  = date.strftime("%Y%m%d")
    url = f"https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates={ds}"
    try:
        with urlopen(url, timeout=15) as r:
            data = json.load(r)
    except URLError as e:
        print(f"  WARNING: could not fetch {ds}: {e}", file=sys.stderr)
        return []

    matches = []
    for event in data.get("events", []):
        comp   = event["competitions"][0]
        status = comp["status"]["type"]["name"]
        if status != "STATUS_FULL_TIME":
            continue

        slug  = event.get("season", {}).get("slug", "group-stage")
        stage = SLUG_TO_STAGE.get(slug, "group")

        competitors = comp["competitors"]
        teamA = normalize(competitors[0]["team"]["displayName"])
        teamB = normalize(competitors[1]["team"]["displayName"])
        try:
            scoreA = int(competitors[0]["score"])
            scoreB = int(competitors[1]["score"])
        except (KeyError, ValueError):
            continue

        matches.append({"stage": stage, "teamA": teamA, "teamB": teamB,
                        "scoreA": scoreA, "scoreB": scoreB})
    return matches

def fetch_all_results() -> list[dict]:
    today = datetime.now()
    end   = min(TOURNAMENT_END, today)
    all_matches, seen = [], set()
    current = TOURNAMENT_START
    while current <= end:
        for m in fetch_day(current):
            key = (m["teamA"], m["teamB"])
            if key not in seen:
                seen.add(key)
                all_matches.append(m)
        current += timedelta(days=1)
    return all_matches

# ── File update ──────────────────────────────────────────────────────────────

def build_match_js(matches: list[dict]) -> str:
    if not matches:
        return "window.WC_MATCH_DATA = [];"
    lines = ["window.WC_MATCH_DATA = ["]
    for m in matches:
        lines.append(
            f'  {{ stage: "{m["stage"]}", teamA: "{m["teamA"]}", teamB: "{m["teamB"]}", '
            f'scoreA: {m["scoreA"]}, scoreB: {m["scoreB"]} }},'
        )
    lines.append("];")
    return "\n".join(lines)

def update_file(matches: list[dict]) -> None:
    now_utc = datetime.now(timezone.utc)
    iso_ts  = now_utc.strftime("%Y-%m-%dT%H:%M:%SZ")
    ct_time = now_utc - timedelta(hours=5)
    human   = ct_time.strftime("Updated %B %-d, %Y %-I:%M%p CT").replace("AM", "am").replace("PM", "pm")

    with open(DATA_FILE, "r") as f:
        content = f.read()

    content = re.sub(
        r"// LAST_UPDATED_START.*?// LAST_UPDATED_END",
        f"// LAST_UPDATED_START\nwindow.WC_LAST_UPDATED = \"{human}\";\n"
        f"window.WC_LAST_VERIFIED_AT = \"{iso_ts}\";\n// LAST_UPDATED_END",
        content, flags=re.DOTALL,
    )
    content = re.sub(
        r"// MATCH_DATA_START.*?// MATCH_DATA_END",
        f"// MATCH_DATA_START\n{build_match_js(matches)}\n// MATCH_DATA_END",
        content, flags=re.DOTALL,
    )

    with open(DATA_FILE, "w") as f:
        f.write(content)
    print(f"  Wrote {DATA_FILE}")

# ── Git push ─────────────────────────────────────────────────────────────────

def git_push() -> bool:
    today = datetime.now().strftime("%Y-%m-%d")

    # Stage data file, then pull remote changes to avoid divergence conflicts
    subprocess.run(["git", "-C", SCRIPT_DIR, "add", "worldcup_data.js"],
                   capture_output=True, text=True)
    pull = subprocess.run(
        ["git", "-C", SCRIPT_DIR, "pull", "--rebase", GIT_REMOTE, "main"],
        capture_output=True, text=True
    )
    if pull.returncode != 0:
        print(f"  Git pull error: {pull.stderr.strip()}", file=sys.stderr)
        return False

    for cmd in [
        ["git", "-C", SCRIPT_DIR, "add", "worldcup_data.js"],
        ["git", "-C", SCRIPT_DIR, "commit", "-m", f"results update {today}"],
        ["git", "-C", SCRIPT_DIR, "push", GIT_REMOTE, "main"],
    ]:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            if "nothing to commit" in result.stdout + result.stderr:
                print("  Git: nothing new to commit.")
                return True
            print(f"  Git error: {result.stderr.strip()}", file=sys.stderr)
            return False

    print("  Git: pushed to GitHub ✓")
    return True

# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("Fetching 2026 World Cup results from ESPN...")
    matches = fetch_all_results()
    print(f"  Found {len(matches)} completed match(es).")
    for m in matches:
        print(f"    {m['teamA']} {m['scoreA']}–{m['scoreB']} {m['teamB']}  [{m['stage']}]")

    print("Updating worldcup_data.js...")
    update_file(matches)

    print("Pushing to GitHub...")
    if git_push():
        print("Done! Netlify will redeploy shortly.")
    else:
        print("Push failed — check git output above.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if not _GH_TOKEN:
        print("ERROR: GH_WC_TOKEN environment variable not set.", file=sys.stderr)
        sys.exit(1)
    main()
