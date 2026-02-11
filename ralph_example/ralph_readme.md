# Ralph Loop — math-stats

Adds 6 new statistical functions to `math-stats` autonomously using a Copilot CLI Ralph loop.

## Setup

```powershell
# 1. Clone and enter the repo
git clone https://github.com/pugulist/math-stats.git
cd math-stats
npm install

# 2. Create a working branch
git checkout -b feat/new-stats-functions

# 3. Copy the ralph files into the repo root
#    (PRD.md, PROMPT.md, ralph.ps1 — all three)

# 4. Commit the ralph scaffolding
git add PRD.md PROMPT.md ralph.ps1
git commit -m "chore: add ralph loop scaffolding"

# 5. Run the loop
.\ralph.ps1
```

## What it builds

| Function | Description |
|----------|-------------|
| `range(arr)` | Max - Min |
| `percentile(arr, p)` | Value at the p-th percentile |
| `interquartileRange(arr)` | Q3 - Q1 |
| `zScore(arr, value)` | Standard deviations from mean |
| `skewness(arr)` | Sample skewness (Fisher) |
| `kurtosis(arr)` | Excess kurtosis |

## Monitoring progress

```powershell
# Check which tasks are done
Select-String "\[[ x]\]" PRD.md

# See commits the agent made
git log --oneline

# Undo last iteration if something went wrong
git reset --hard HEAD~2   # ~2 because each iteration = code commit + PRD update commit

# Continue after stopping
.\ralph.ps1
```

## After the loop finishes

```powershell
# Verify everything works
npm test

# Review the diff
git diff master..feat/new-stats-functions

# Clean up the ralph files before merging
git rm PRD.md PROMPT.md ralph.ps1 RALPH_README.md
git commit -m "chore: remove ralph loop scaffolding"
```
