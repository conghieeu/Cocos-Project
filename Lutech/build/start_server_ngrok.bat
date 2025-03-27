@echo off
start chrome http://localhost:8080
python -m http.server 8080
ngrok http http://localhost:8080



