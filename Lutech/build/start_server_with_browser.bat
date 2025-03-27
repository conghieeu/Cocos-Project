@echo off
echo Starting local server at http://localhost:8080
echo You can also access via LAN at http://YOUR_IP:8080

:: Change to the web-mobile directory
cd "Web Moblie Neon Digital Clock Smart Watch web-mobile"

:: Start Chrome and server
start chrome http://localhost:8080
python -m http.server 8080

pause