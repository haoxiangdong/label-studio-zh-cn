#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path


SCRIPT_TAG = '<script src="/static/js/zh-cn-ui.js"></script>'


def detect_target_dir() -> Path | None:
    try:
        import label_studio  # type: ignore
    except Exception:
        return None
    return Path(label_studio.__file__).resolve().parent


def backup_file(path: Path, stamp: str) -> None:
    backup_path = path.with_name(f"{path.name}.bak.zh-cn-{stamp}")
    shutil.copy2(path, backup_path)


def normalize_template(path: Path) -> None:
    text = path.read_text(encoding="utf-8", errors="ignore")
    text = re.sub(
        r'<script src="/static/js/zh-cn-ui\.js(?:\?[^"]*)?"></script>',
        SCRIPT_TAG,
        text,
    )

    if SCRIPT_TAG not in text:
        if "</body>" not in text:
            raise RuntimeError(f"模板中未找到 </body>: {path}")
        text = text.replace("</body>", f"{SCRIPT_TAG}\n\n</body>")

    path.write_text(text, encoding="utf-8")


def install(target_dir: Path, bundle_js: Path) -> None:
    stamp = datetime.now().strftime("%Y%m%d%H%M%S")

    static_js = target_dir / "core" / "static" / "js" / "zh-cn-ui.js"
    static_build_js = target_dir / "core" / "static_build" / "js" / "zh-cn-ui.js"
    base_html = target_dir / "templates" / "base.html"
    simple_html = target_dir / "templates" / "simple.html"

    required = [static_js, static_build_js, base_html, simple_html]
    missing = [str(p) for p in required if not p.exists()]
    if missing:
        raise FileNotFoundError("缺少目标文件：\n" + "\n".join(missing))

    print(f"目标 Label Studio 目录: {target_dir}")
    print("开始备份原文件...")
    for path in required:
        backup_file(path, stamp)

    print("复制汉化脚本...")
    shutil.copy2(bundle_js, static_js)
    shutil.copy2(bundle_js, static_build_js)

    print("检查模板注入...")
    normalize_template(base_html)
    normalize_template(simple_html)

    print()
    print("汉化安装完成。")
    print()
    print("已更新：")
    for path in required:
        print(f"- {path}")
    print()
    print("建议下一步：")
    print("1. 重启 Label Studio")
    print("2. 浏览器强制刷新页面")
    print()
    print("如果想回滚，备份文件名格式为：")
    print(f"*.bak.zh-cn-{stamp}")


def main() -> int:
    script_dir = Path(__file__).resolve().parent
    bundle_js = script_dir / "zh-cn-ui.js"

    parser = argparse.ArgumentParser(
        description="安装 Label Studio 中文界面补丁（Windows / macOS / Linux 通用）"
    )
    parser.add_argument(
        "target_dir",
        nargs="?",
        help="Label Studio 包目录，例如 /path/to/site-packages/label_studio",
    )
    args = parser.parse_args()

    if not bundle_js.exists():
        print(f"未找到汉化脚本: {bundle_js}", file=sys.stderr)
        return 1

    target_dir = Path(args.target_dir).resolve() if args.target_dir else detect_target_dir()
    if target_dir is None:
        print(
            "自动识别 Label Studio 安装目录失败。\n"
            "请手动传入 label_studio 包目录，例如：\n\n"
            "python install_label_studio_zh_cn.py /path/to/site-packages/label_studio",
            file=sys.stderr,
        )
        return 1

    try:
        install(target_dir, bundle_js)
    except Exception as exc:  # pragma: no cover
        print(f"安装失败: {exc}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
