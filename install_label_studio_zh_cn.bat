@echo off
setlocal

set "SCRIPT_DIR=%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
  py -3 "%SCRIPT_DIR%install_label_studio_zh_cn.py" %*
  exit /b %errorlevel%
)

where python >nul 2>nul
if %errorlevel%==0 (
  python "%SCRIPT_DIR%install_label_studio_zh_cn.py" %*
  exit /b %errorlevel%
)

echo 未找到 Python。请先安装 Python 3，再重新运行本脚本。
exit /b 1
