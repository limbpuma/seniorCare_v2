@echo off
echo Starting PHP Email Backend Server...
echo.
echo Checking if PHP is available...
php -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: PHP is not installed or not in PATH
    echo Please install PHP from https://www.php.net/downloads.php
    echo and add it to your system PATH
    pause
    exit /b 1
)

echo PHP found! Starting server...
echo.
echo Email API will be available at: http://localhost:8080/send-email.php
echo Test page available at: http://localhost:8080/index.htm
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d "%~dp0integra-old-on-php\mail.pflegedienst-integra.de"
php -S localhost:8080
