@echo off
echo Starting local server at http://localhost:8080
echo You can also access via LAN at http://YOUR_IP:8080
echo Press Ctrl+C to stop the server

:: Change to the web-mobile directory
cd "Web Moblie Neon Digital Clock Smart Watch web-mobile"

:: Start Python server
python -m http.server 8080

:: Keep the window open if there's an error
pause