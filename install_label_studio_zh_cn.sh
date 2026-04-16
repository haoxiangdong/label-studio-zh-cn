#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if command -v python3 >/dev/null 2>&1; then
  PYTHON_BIN="python3"
elif command -v python >/dev/null 2>&1; then
  PYTHON_BIN="python"
else
  echo "未找到 Python。请先安装 Python 3，或直接运行 install_label_studio_zh_cn.py。" >&2
  exit 1
fi

exec "$PYTHON_BIN" "$SCRIPT_DIR/install_label_studio_zh_cn.py" "$@"
