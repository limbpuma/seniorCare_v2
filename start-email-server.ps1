# PowerShell script to start the PHP Email Backend Server
# Usage: .\start-email-server.ps1

Write-Host "Starting PHP Email Backend Server..." -ForegroundColor Green
Write-Host ""

# Check if PHP is available
Write-Host "Checking if PHP is available..." -ForegroundColor Yellow
try {
    $phpVersion = php -v 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "PHP command failed"
    }
    Write-Host "PHP found!" -ForegroundColor Green
    Write-Host $phpVersion.Split("`n")[0] -ForegroundColor Cyan
} catch {
    Write-Host "ERROR: PHP is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install PHP from https://www.php.net/downloads.php" -ForegroundColor Yellow
    Write-Host "and add it to your system PATH" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Starting server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Email API will be available at: http://localhost:8080/send-email.php" -ForegroundColor Cyan
Write-Host "Test page available at: http://localhost:8080/index.htm" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Change to the email backend directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$emailDir = Join-Path $scriptPath "integra-old-on-php\mail.pflegedienst-integra.de"

if (Test-Path $emailDir) {
    Set-Location $emailDir
    php -S localhost:8080
} else {
    Write-Host "ERROR: Email backend directory not found: $emailDir" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
