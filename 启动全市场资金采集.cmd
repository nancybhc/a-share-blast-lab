@echo off
cd /d "%~dp0"
python -X utf8 "data\capture_full_market_fund_flow.py" --watch --interval 300 --stock-interval 300
pause
