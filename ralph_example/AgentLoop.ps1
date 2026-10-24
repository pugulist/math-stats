param([int]$Max = 5)

$prompt = Get-Content "PROMPT.md" -Raw

for ($i = 1; $i -le $Max; $i++) {
    Write-Host "--- Iteration $i / $Max ---"

    $output = copilot -p $prompt --allow-all-tools 2>&1 | Out-String
    Write-Host $output

    if ($output -match "AGENT_COMPLETE") {
        Write-Host "Done." -ForegroundColor Green
        break
    }

    if ($output -match "AGENT_BLOCKED") {
        Write-Host "Blocked." -ForegroundColor Yellow
        break
    }
}
