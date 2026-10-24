# ralph.ps1 — Ralph loop for GitHub Copilot CLI (PowerShell)
#
# Usage:
#   .\ralph.ps1                    # default 10 iterations
#   .\ralph.ps1 -MaxIterations 15  # custom limit
#
# Prerequisites:
#   - Copilot CLI installed and authenticated
#   - Run from the repo root (where PRD.md and PROMPT.md live)
#   - npm install already done

param(
    [int]$MaxIterations = 10
)

$ErrorActionPreference = "Continue"

# Verify we're in the right place
if (-not (Test-Path "PROMPT.md") -or -not (Test-Path "PRD.md")) {
    Write-Host "ERROR: PROMPT.md and PRD.md must exist in the current directory." -ForegroundColor Red
    Write-Host "Copy them into your math-stats repo root first." -ForegroundColor Red
    exit 1
}

# Read the prompt
$prompt = Get-Content "PROMPT.md" -Raw

Write-Host ""
Write-Host "RALPH LOOP — math-stats" -ForegroundColor Cyan
Write-Host "Max iterations: $MaxIterations" -ForegroundColor Cyan
Write-Host "Tip: Watch the first 2-3 iterations before stepping away." -ForegroundColor DarkGray
Write-Host ""

for ($i = 1; $i -le $MaxIterations; $i++) {

    Write-Host ""
    Write-Host ("=" * 50) -ForegroundColor Cyan
    Write-Host "  ITERATION $i / $MaxIterations" -ForegroundColor Cyan
    Write-Host ("=" * 50) -ForegroundColor Cyan
    Write-Host ""

    # Each iteration = fresh context (the core Ralph principle)
    $output = copilot -p $prompt --allow-all-tools 2>&1 | Out-String

    Write-Host $output

    # Check for completion
    if ($output -match "RALPH_COMPLETE") {
        Write-Host ""
        Write-Host "ALL TASKS COMPLETE. Check PRD.md and run 'npm test' to verify." -ForegroundColor Green
        Write-Host ""

        # Show final status
        Write-Host "--- PRD Status ---" -ForegroundColor Cyan
        Get-Content "PRD.md" | Select-String "\[[ x]\]"

        Write-Host ""
        Write-Host "--- Git Log ---" -ForegroundColor Cyan
        git log --oneline -10

        exit 0
    }

    # Check for blocked
    if ($output -match "RALPH_BLOCKED") {
        Write-Host ""
        Write-Host "AGENT IS BLOCKED. Review the output above." -ForegroundColor Yellow
        exit 1
    }

    # Show quick progress
    $done = (Get-Content "PRD.md" | Select-String "\[x\]").Count
    $total = (Get-Content "PRD.md" | Select-String "\[[ x]\]").Count
    Write-Host "Progress: $done / $total tasks complete" -ForegroundColor DarkGray
    Write-Host ""
}

Write-Host ""
Write-Host "Hit max iterations ($MaxIterations). Check PRD.md for progress." -ForegroundColor Yellow
Write-Host "You can re-run .\ralph.ps1 to continue where it left off." -ForegroundColor Yellow
exit 1
