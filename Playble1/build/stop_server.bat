@echo off
:: Stop Python server running on port 8000
set PORT=8000

echo Finding Python process using port %PORT%...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT%" ^| findstr "LISTENING"') do (
    set PID=%%a
    goto :kill
)

:kill
if defined PID (
    echo Stopping process PID %PID%...
    taskkill /PID %PID% /F
    echo Server stopped on port %PORT%.
) else (
    echo No server found running on port %PORT%.
)

pause
