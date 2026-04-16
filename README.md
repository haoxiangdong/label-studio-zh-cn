# Label Studio 中文界面补丁

***Author：hhao***

***联系作者：hao1027767860\@163.com***

这是一套适用于 Label Studio 的中文界面补丁。
<img width="733" height="388" alt="image" src="https://github.com/user-attachments/assets/877a05b9-428b-4424-a85d-c7d18d1fe53a" />

它支持：

- Windows
- macOS
- Linux

这套补丁的目标是：

1. 尽量不改 Label Studio 的后端业务逻辑
2. 主要通过前端脚本把英文界面替换成中文
3. 方便复制到其他电脑继续使用


## 补丁包含哪些文件

当前目录里有这些文件：

- `zh-cn-ui.js`
  - 中文界面脚本本体
- `install_label_studio_zh_cn.py`
  - 跨平台安装器
  - Windows / macOS / Linux 都能用
- `install_label_studio_zh_cn.sh`
  - macOS / Linux 便捷启动脚本
- `install_label_studio_zh_cn.bat`
  - Windows 便捷启动脚本
- `README.md`
  - 当前说明文档

## 汉化逻辑说明

`zh-cn-ui.js` 主要通过这几层规则工作：

### 1. 精确替换

使用 `exactTextMap` 替换固定文案，例如：

- 按钮
- 菜单
- 标题
- 表头
- tooltip

### 2. 正则替换

使用 `patternReplacements` 处理带变量的动态文案，例如：

- `Source for task 36`
- `Copied "image" for Task 36 to clipboard`
- `less than a minute ago`

### 3. 片段替换

使用 `fragmentReplacements` 处理被前端拆成多段的文案，例如：

- 带链接的说明句
- 组件拆分后的半中半英文案
- 多节点拼接出来的按钮文字

### 4. 动态监听页面变化

脚本使用 `MutationObserver`，所以后续动态渲染出来的内容也会继续汉化。

### 5. 替换文本和属性

不仅替换普通文本，还会替换：

- `title`
- `placeholder`
- `aria-label`
- `data-tooltip`
- `alt`

## 这套补丁会改什么

会改：

- Label Studio 安装目录里的前端静态脚本
- 模板里的脚本注入位置（如果还没有注入）

不会改：

- 数据库
- Python 接口逻辑
- 业务流程
- 模型逻辑
- 数据内容

## 适用前提

使用前请确认：

1. 你的电脑已经安装了 Label Studio
2. 你能找到 `label_studio` 包目录
3. 你对安装目录有读写权限
4. 电脑安装了 Python 3

典型的安装目录一般长这样：

```text
/path/to/site-packages/label_studio
```

或者 Windows 上类似：

```text
C:\path\to\site-packages\label_studio
```

## 安装方式

***

## Windows 安装

### 方法一：双击批处理脚本

直接双击：

```text
install_label_studio_zh_cn.bat
```

如果脚本能自动找到 Label Studio 目录，就会直接安装。

### 方法二：命令行指定目录

在命令提示符或 PowerShell 中执行：

```bat
install_label_studio_zh_cn.bat C:\path\to\site-packages\label_studio
```

### 方法三：直接运行 Python 安装器

```bat
python install_label_studio_zh_cn.py C:\path\to\site-packages\label_studio
```

如果系统装了 `py`，也可以：

```bat
py -3 install_label_studio_zh_cn.py C:\path\to\site-packages\label_studio
```

***

## macOS 安装

### 方法一：直接运行 shell 脚本

```bash
bash install_label_studio_zh_cn.sh
```

### 方法二：指定 Label Studio 目录

```bash
bash install_label_studio_zh_cn.sh /path/to/site-packages/label_studio
```

### 方法三：直接运行 Python 安装器

```bash
python3 install_label_studio_zh_cn.py /path/to/site-packages/label_studio
```

***

## Linux 安装

### 方法一：直接运行 shell 脚本

```bash
bash install_label_studio_zh_cn.sh
```

### 方法二：指定 Label Studio 目录

```bash
bash install_label_studio_zh_cn.sh /path/to/site-packages/label_studio
```

### 方法三：直接运行 Python 安装器

```bash
python3 install_label_studio_zh_cn.py /path/to/site-packages/label_studio
```

## 安装器会做什么

安装器会自动执行这些步骤：

1. 备份原文件
2. 复制 `zh-cn-ui.js` 到：
   - `core/static/js/zh-cn-ui.js`
   - `core/static_build/js/zh-cn-ui.js`
3. 检查模板里是否已注入中文脚本
4. 如果没有，就自动补上：

```html
<script src="/static/js/zh-cn-ui.js"></script>
```

## 安装完成后要做什么

安装完成后建议执行这两步：

1. 重启 Label Studio
2. 浏览器强制刷新页面

## 如果自动识别失败怎么办

自动识别失败很常见，通常是因为：

- 当前 Python 不是 Label Studio 所在的 Python 环境
- 当前终端没有激活对应虚拟环境

这时最简单的办法就是手动传入 `label_studio` 目录。

## 如何手动安装

如果你不想跑脚本，也可以手动做：

1. 把 `zh-cn-ui.js` 复制到：
   - `<label_studio>/core/static/js/zh-cn-ui.js`
   - `<label_studio>/core/static_build/js/zh-cn-ui.js`
2. 检查这两个模板：
   - `<label_studio>/templates/base.html`
   - `<label_studio>/templates/simple.html`
3. 确保模板里有这句：

```html
<script src="/static/js/zh-cn-ui.js"></script>
```

1. 重启 Label Studio
2. 强制刷新浏览器

## 如何确认补丁生效

安装成功后，下面这些区域应该大部分变成中文：

- 项目列表
- 创建项目
- 数据管理
- 标注设置
- 成员管理
- 云存储
- 模型
- 预测
- tooltip
- 弹窗按钮

## 如何回滚

安装器会先备份原文件，备份文件名类似：

```text
原文件名.bak.zh-cn-时间戳
```

如果需要回滚，直接把这些备份文件覆盖回原文件即可。

## 升级 Label Studio 后怎么办

如果以后升级了 Label Studio，通常按下面顺序检查：

1. 模板里脚本注入位置是否还在
2. `core/static/js/` 和 `core/static_build/js/` 是否还存在
3. 页面里是否新增了英文文案

如果只是普通升级，通常重新执行一次安装器就行。

## 维护建议

如果以后继续补汉化，建议只维护：

- `zh-cn-ui.js`

改完后再重新执行安装器即可。

