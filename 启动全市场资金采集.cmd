@echo off
cd /d "%~dp0"
python -X utf8 "data\capture_full_market_fund_flow.py" --watch --interval 30 --stock-interval 60
pause
