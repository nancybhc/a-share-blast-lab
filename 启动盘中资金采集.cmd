@echo off
cd /d "%~dp0"
python -X utf8 "data\capture_intraday_fund_flow.py" --watch --interval 60
pause
