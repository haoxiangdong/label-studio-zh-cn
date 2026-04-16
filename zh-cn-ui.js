(function () {
  const exactTextMap = new Map([
    ["Label Studio", "Label Studio 标注平台"],
    ["Projects", "项目"],
    ["Project", "项目"],
    ["Recent Projects", "最近项目"],
    ["Resources", "资源"],
    ["Welcome", "欢迎"],
    ["View All", "查看全部"],
    ["Invite Members", "邀请成员"],
    ["Add Members", "添加成员"],
    ["Actions", "操作"],
    ["Retrieve Predictions", "获取AI预测"],
    ["Create Annotations From Predictions", "从预测创建标注"],
    ["Remove Duplicated Tasks", "移除重复任务"],
    ["Columns", "列"],
    ["Columns:", "列数："],
    ["Order by", "排序方式"],
    ["Tasks:", "任务："],
    ["Submitted annotations:", "已提交标注："],
    ["Predictions:", "预测："],
    ["Completed", "已完成"],
    ["Annotated by", "标注人"],
    ["Export", "导出"],
    ["Default", "默认"],
    ["Compare All", "比较全部"],
    ["Compare All Annotations", "比较全部标注"],
    ["Auto", "自动"],
    ["Light", "浅色"],
    ["Dark", "深色"],
    ["API Documentation", "API 文档"],
    ["Documentation", "文档"],
    ["Release Notes", "版本说明"],
    ["LabelStud.io Blog", "LabelStud.io 博客"],
    ["Slack Community", "Slack 社区"],
    ["Learn, explore and get help", "学习、探索并获取帮助"],
    ["Label Studio Version:", "Label Studio 版本："],
    ["Label Studio Version: Community", "Label Studio 版本：社区版"],
    ["Community", "社区版"],
    ["Enterprise", "企业版"],
    ["Create", "创建"],
    ["Create Project", "创建项目"],
    ["Create project", "创建项目"],
    ["Project Name", "项目名称"],
    ["Description", "描述"],
    ["Import", "导入"],
    ["Import Data", "导入数据"],
    ["Data Import", "数据导入"],
    ["Upload Files", "上传文件"],
    ["Upload files", "上传文件"],
    ["Upload", "上传"],
    ["Browse", "浏览"],
    ["From Files", "从文件导入"],
    ["From URL", "从链接导入"],
    ["Start Labeling", "开始标注"],
    ["Data Manager", "数据管理"],
    ["All", "全部"],
    ["Labeling Setup", "标注设置"],
    ["Instructions", "说明"],
    ["Settings", "设置"],
    ["General", "通用"],
    ["General Settings", "通用设置"],
    ["Webhooks", "网络钩子"],
    ["See all tags.", "查看全部标签。"],
    ["See all templates", "查看全部模板"],
    ["Members", "成员"],
    ["Storage", "存储"],
    ["Cloud Storage", "云存储"],
    ["Connect Source Storage", "连接源存储"],
    ["Connect Target Storage", "连接目标存储"],
    ["Tasks", "任务"],
    ["Annotations", "标注"],
    ["Predictions", "预测"],
    ["Prediction score", "预测分数"],
    ["Prediction model versions", "预测模型版本"],
    ["Prediction results", "预测结果"],
    ["Annotation ID", "标注 ID"],
    ["Prediction Score", "预测分数"],
    ["Last Updated", "最后更新时间"],
    ["Prediction", "预测"],
    ["Comments", "评论"],
    ["Drafts", "草稿"],
    ["Review", "审核"],
    ["Explore", "浏览"],
    ["Overview", "概览"],
    ["Save", "保存"],
    ["Submit", "提交"],
    ["Update", "更新"],
    ["Delete", "删除"],
    ["Cancel", "取消"],
    ["Close", "关闭"],
    ["Done", "完成"],
    ["Continue", "继续"],
    ["Back", "返回"],
    ["Next", "下一条"],
    ["Previous", "上一条"],
    ["Skip", "跳过"],
    ["Search", "搜索"],
    ["Filters", "筛选"],
    ["Sync", "同步"],
    ["Open", "打开"],
    ["Name", "名称"],
    ["Type", "类型"],
    ["Task ID", "任务 ID"],
    ["Copy Task ID", "复制任务 ID"],
    ["Task Inner ID", "任务内部 ID"],
    ["Ground truth", "真值"],
    ["Ground truth status of the tasks", "任务的真值状态"],
    ["Annotation results", "标注结果"],
    ["Prediction score for the task", "任务的预测分数"],
    ["Model version used for the predictions", "预测结果使用的模型版本"],
    ["Prediction results for the tasks", "任务的预测结果"],
    ["Upload filename", "上传文件名"],
    ["Storage filename", "存储文件名"],
    ["Name of the file uploaded to create the tasks", "用于创建任务的上传文件名"],
    ["Created at", "创建时间"],
    ["Updated at", "更新时间"],
    ["Updated by", "更新人"],
    ["Time the task was created at", "任务创建时间"],
    ["Time the task was updated at (e.g. new annotation was created, review added, etc)", "任务更新时间（例如创建了新标注、添加了审核等）"],
    ["Annotators", "标注员"],
    ["Annotators that completed the task (Community). Can include assigned annotators (Enterprise only).", "完成任务的标注员（社区版）。也可能包含被分配的标注员（仅企业版）。"],
    ["Total predictions", "预测总数"],
    ["Total number of predictions for the task", "任务的预测总数"],
    ["Cancelled annotations", "已取消标注"],
    ["Number of cancelled or skipped annotations for the task", "任务中已取消或跳过的标注数量"],
    ["Total annotations", "标注总数"],
    ["Total number of annotations on a task", "任务上的标注总数"],
    ["Completed at", "完成时间"],
    ["Time when a task was fully annotated", "任务被完整标注的时间"],
    ["Agreement", "一致性"],
    ["Reviewers", "审核员"],
    ["Reviews rejected", "审核驳回数"],
    ["Reviews accepted", "审核通过数"],
    ["Comments", "评论数"],
    ["Unresolved comment count", "未解决评论数"],
    ["Lead Time", "耗时"],
    ["Required", "必填"],
    ["Storage Provider", "存储提供方"],
    ["Storage Provider Required", "存储提供方 必填"],
    ["Optional", "可选"],
    ["Home", "首页"],
    ["Workspace", "工作区"],
    ["Organization", "组织"],
    ["Log in", "登录"],
    ["Log In", "登录"],
    ["Sign Up", "注册"],
    ["Sign up", "注册"],
    ["Log Out", "退出登录"],
    ["Logout", "退出登录"],
    ["Email Address", "邮箱地址"],
    ["Email", "邮箱"],
    ["Phone Number", "电话号码"],
    ["Password", "密码"],
    ["Keep me logged in this browser", "在此浏览器中保持登录"],
    ["Don't have an account?", "还没有账号？"],
    ["Already have an account?", "已经有账号了？"],
    ["Create Account", "创建账号"],
    ["How did you hear about Label Studio?", "你是如何知道 Label Studio 的？"],
    ["Select an option", "请选择一项"],
    ["Please elaborate", "请补充说明"],
    ["Account & Settings", "账号与设置"],
    ["Account & Settings page", "账号与设置页面"],
    ["Account", "账号"],
    ["Your Avatar", "你的头像"],
    ["Personal Information", "个人信息"],
    ["E-mail", "邮箱"],
    ["First Name", "名"],
    ["Last Name", "姓"],
    ["Phone", "电话"],
    ["Access Token", "访问令牌"],
    ["Docs", "文档"],
    ["Use this token to authenticate with our API:", "使用此令牌通过 API 进行身份验证："],
    ["Authenticate with our API using your personal access token. See Docs", "使用你的个人访问令牌通过 API 进行身份验证。查看文档"],
    ["Security note:", "安全提示："],
    ["Copy", "复制"],
    ["Copy JSON", "复制 JSON"],
    ["Copy link", "复制链接"],
    ["Search keys or values", "搜索键或值"],
    ["Renew", "刷新"],
    ["Create New Token", "创建新令牌"],
    ["Copy your new access token from below and keep it secure.", "请复制下面的新访问令牌并妥善保管。"],
    ["Manage your access tokens securely", "请安全管理你的访问令牌"],
    ["Do not share this key with anyone. If you suspect any keys have been compromised, you should revoke them and create new ones.", "不要将此密钥分享给任何人。如果你怀疑任何密钥已泄露，应立即撤销并重新创建新的令牌。"],
    ["Please check new notification settings in the Account & Settings page", "请前往账号与设置页面查看新的通知设置"],
    ["Example fetch projects data:", "获取项目数据示例："],
    ["Documentation", "文档"],
    ["Your active organization", "你当前所在的组织"],
    ["Your role", "你的角色"],
    ["Created Projects", "创建的项目数"],
    ["Contributed to", "参与贡献"],
    ["Annotations completed by you", "你完成的标注数"],
    ["Projects contributed by you", "你参与的项目数"],
    ["Organization ID", "组织 ID"],
    ["Organization owner", "组织所有者"],
    ["Organization created at", "组织创建时间"],
    ["Notifications", "通知"],
    ["Email and other notifications", "邮件及其他通知"],
    ["Get the latest news & tips from Heidi", "接收 Heidi 的最新消息和使用技巧"],
    ["No tasks available", "暂无任务"],
    ["Label all tasks", "标注全部任务"],
    ["Label All Tasks", "标注全部任务"],
    ["标注 全部 Tasks", "全部标注任务"],
    ["Create new project", "创建新项目"],
    ["New project", "新项目"],
    ["Back to projects", "返回项目列表"],
    ["Project options", "项目选项"],
    ["Project deleted successfully", "项目删除成功"],
    ["Project has been created and is ready for configuration", "项目已创建，可以开始配置"],
    ["Project is completed - all tasks are done", "项目已完成，所有任务都已处理"],
    ["Optional description of your project", "项目描述，可选填写"],
    ["Select an option", "请选择一项"],
    ["Import data", "导入数据"],
    ["Import your data", "导入你的数据"],
    ["Import your data and set up the labeling interface to start annotating", "导入你的数据并设置标注界面以开始标注"],
    ["Import your data from cloud storage providers", "从云存储提供方导入你的数据"],
    ["Upload More", "上传更多"],
    ["Upload More Files", "上传更多文件"],
    ["or", "或"],
    ["Cancel import", "取消导入"],
    ["Finish import", "完成导入"],
    ["Dataset URL", "数据集链接"],
    ["Add URL", "添加链接"],
    ["Upload file", "上传文件"],
    ["Files", "文件"],
    ["Expected Input Preview", "预期输入预览"],
    ["Imported file is too big", "导入文件过大"],
    ["Fit images to width", "按宽度适配图像"],
    ["Grid view", "网格视图"],
    ["List view", "列表视图"],
    ["Video format support depends on your browser. Click to learn more.", "视频格式支持取决于你的浏览器，点击了解更多。"],
    ["Learn more about video format support (opens in a new tab)", "了解更多视频格式支持信息（新标签页打开）"],
    ["Cloud Storage documentation (opens in a new tab)", "云存储文档（新标签页打开）"],
    ["Upload limitations documentation (opens in a new tab)", "上传限制文档（新标签页打开）"],
    ["Multi-image labeling documentation (opens in a new tab)", "多图标注文档（新标签页打开）"],
    ["Choose a dataset from your computer to get started", "从你的电脑选择一个数据集开始使用"],
    ["Drag & drop files here", "将文件拖放到这里"],
    ["click to browse", "或点击浏览"],
    ["Images", "图像"],
    ["Audio", "Audio"],
    ["Video", "Video"],
    ["HTML / HyperText", "HTML / 超文本"],
    ["Text", "Text"],
    ["Structured data", "结构化数据"],
    ["PDF", "PDF"],
    ["Important", "重要"],
    ["Important:", "重要："],
    ["Cloud storage", "云存储"],
    ["JSONL or Parquet (Enterprise only) files require cloud storage.", "JSONL 或 Parquet 文件需要通过云存储导入（仅企业版）。"],
    ["For PDFs, use multi-image labeling.", "对于 PDF，请使用多图标注。"],
    ["Enterprise only", "仅企业版"],
    ["direct uploads", "直接上传"],
    ["upload limitations", "上传限制"],
    ["We recommend", "我们建议"],
    ["See docs", "查看文档"],
    ["See docs on importing data", "查看导入数据文档"],
    ["Please upload a CSV, JSON, or XML file", "请上传 CSV、JSON 或 XML 文件"],
    ["Please enter JSON data to import", "请输入要导入的 JSON 数据"],
    ["Labeling", "标注"],
    ["Labeling Instructions", "标注说明"],
    ["Labeling Interface", "标注界面"],
    ["Labeling Interface Settings", "标注界面设置"],
    ["Update Preview", "更新预览"],
    ["Updating...", "更新中..."],
    ["Browse templates", "浏览模板"],
    ["Create custom template", "创建自定义模板"],
    ["Code", "代码"],
    ["Visual", "可视化"],
    ["Add choices", "添加选项"],
    ["Add label names", "添加标签名称"],
    ["Add labels", "添加标签"],
    ["Validate and Save", "校验并保存"],
    ["Save configuration", "保存配置"],
    ["Saving...", "保存中..."],
    ["Template parsing error:", "模板解析错误："],
    ["Parser error", "解析错误"],
    ["Display labels:", "显示标签："],
    ["Filter", "筛选"],
    ["Save and Leave", "保存并离开"],
    ["Save changes", "保存更改"],
    ["You have unsaved changes.", "你有未保存的更改。"],
    ["Would you like to save them before leaving?", "离开前是否保存这些更改？"],
    ["Discard and leave", "放弃并离开"],
    ["Drag to resize", "拖动以调整大小"],
    ["Data Manager", "数据管理"],
    ["Task ID:", "任务 ID："],
    ["Project ID:", "项目 ID："],
    ["Back to projects", "返回项目列表"],
    ["Settings", "设置"],
    ["Instructions", "说明"],
    ["My Account", "我的账号"],
    ["Personal Info", "个人信息"],
    ["Email Preferences", "邮件偏好"],
    ["Membership Info", "成员信息"],
    ["Personal Access Token", "个人访问令牌"],
    ["Legacy Token", "旧版令牌"],
    ["Keyboard Shortcuts", "快捷键"],
    ["Global Hotkeys", "全局快捷键"],
    ["Global", "全局"],
    ["Shortcut", "快捷键"],
    ["Description", "描述"],
    ["Settings", "设置"],
    ["Copied!", "已复制！"],
    ["Example CURL Request", "CURL 请求示例"],
    ["Owner", "所有者"],
    ["Deactivated", "已停用"],
    ["Administrator", "管理员"],
    ["Manager", "经理"],
    ["Annotator", "标注员"],
    ["Reviewer", "审核员"],
    ["Pending", "待处理"],
    ["Subscribe for news and tips", "订阅新闻和技巧"],
    ["Subscribe to HumanSignal news and tips from Heidi", "订阅来自 Heidi 的 HumanSignal 新闻和使用技巧"],
    ["Revoke Token", "撤销令牌"],
    ["Revoke", "撤销"],
    ["New Auth Token", "新认证令牌"],
    ["Token Expiry Date", "令牌过期时间"],
    ["You can only have one active token", "你只能保留一个有效令牌"],
    ["Click to record keyboard shortcut", "点击录制快捷键"],
    ["Disable", "禁用"],
    ["Enable", "启用"],
    ["Click to edit hotkey", "点击编辑快捷键"],
    ["Text editing shortcuts", "文本编辑快捷键"],
    ["Reset Hotkeys to Defaults?", "重置快捷键为默认值？"],
    ["Reset to Defaults", "恢复默认"],
    ["Reset Link", "重置链接"],
    ["All hotkeys and settings have been reset to defaults and saved", "所有快捷键和设置已恢复默认并保存"],
    ["Hotkeys exported successfully", "快捷键导出成功"],
    ["Hotkeys imported successfully", "快捷键导入成功"],
    ["Failed to save imported hotkeys", "保存导入的快捷键失败"],
    ["Unknown error", "未知错误"],
    ["Cloud Storage Settings", "云存储设置"],
    ["Source Cloud Storage", "源云存储"],
    ["Target Cloud Storage", "目标云存储"],
    ["Add Source Storage", "添加源存储"],
    ["Add Target Storage", "添加目标存储"],
    ["Add your first cloud storage", "添加你的第一个云存储"],
    ["Learn more about cloud storage (opens in new window)", "了解更多云存储信息（新窗口打开）"],
    ["API Tokens Settings", "API 令牌设置"],
    ["Add Storage", "添加存储"],
    ["Storage Type", "存储类型"],
    ["Test storage connection", "测试存储连接"],
    ["Save storage settings", "保存存储设置"],
    ["Storage options", "存储选项"],
    ["Storage Name", "存储名称"],
    ["Sync Storage", "同步存储"],
    ["Storage Sync Error Log", "存储同步错误日志"],
    ["Type", "类型"],
    ["Status", "状态"],
    ["Annotations", "标注"],
    ["Last Sync", "上次同步"],
    ["Last Activity", "最近活动"],
    ["Not synced yet", "尚未同步"],
    ["Bucket", "存储桶"],
    ["Bucket Prefix", "存储桶前缀"],
    ["Container", "容器"],
    ["Container Prefix", "容器前缀"],
    ["Path", "路径"],
    ["Host", "主机"],
    ["File Filter Regex", "文件过滤正则"],
    ["Edit", "编辑"],
    ["Edit Model", "编辑模型"],
    ["Connect", "连接"],
    ["Target", "目标"],
    ["Source", "来源"],
    ["Deleting storage", "正在删除存储"],
    ["This action cannot be undone. Are you sure?", "此操作不可撤销，确定继续吗？"],
    ["Configure Connection", "配置连接"],
    ["Import Settings & Preview", "导入设置与预览"],
    ["Review & Confirm", "审核并确认"],
    ["Select Provider", "选择提供方"],
    ["Connection Verified", "连接已验证"],
    ["Test Connection", "测试连接"],
    ["Preview Loaded", "预览已加载"],
    ["Test connection before continuing", "继续前请先测试连接"],
    ["This provider is not available in the current version", "当前版本不支持此提供方"],
    ["Choose your cloud storage provider", "选择你的云存储提供方"],
    ["Select the cloud storage service where your data is stored", "选择存放你数据的云存储服务"],
    ["Save & Sync", "保存并同步"],
    ["Storage Title", "存储标题"],
    ["Storage title is required", "存储标题不能为空"],
    ["Can delete objects from storage", "允许从存储中删除对象"],
    ["If unchecked, annotations will not be deleted from storage", "取消勾选后，标注结果不会从存储中删除"],
    ["Failed to auto-sync storage:", "自动同步存储失败："],
    ["Amazon S3", "Amazon S3"],
    ["Amazon S3 with IAM Role", "Amazon S3（IAM 角色）"],
    ["Google Cloud Storage", "Google Cloud Storage"],
    ["Google Cloud Storage (WIF Auth)", "Google Cloud Storage（WIF 认证）"],
    ["Azure Blob Storage", "Azure Blob Storage"],
    ["Azure Blob Storage with Service Principal", "Azure Blob Storage（服务主体）"],
    ["Redis Storage", "Redis 存储"],
    ["Local Files", "本地文件"],
    ["Databricks Files (UC Volumes)", "Databricks 文件（UC 卷）"],
    ["Configure your Azure Blob Storage connection with all required Label Studio settings", "配置 Azure Blob 存储连接及其必需的 Label Studio 设置"],
    ["Container Name", "容器名称"],
    ["Container name is required", "容器名称不能为空"],
    ["Bucket prefix", "前缀路径"],
    ["Account Name", "账户名称"],
    ["Account Key", "账户密钥"],
    ["Your storage account key", "你的存储账户密钥"],
    ["Expire pre-signed URLs (minutes)", "预签名链接过期时间（分钟）"],
    ["Configure your Google Cloud Storage connection with all required Label Studio settings", "配置 Google Cloud Storage 连接及其必需的 Label Studio 设置"],
    ["Bucket Name", "存储桶名称"],
    ["Bucket name is required", "存储桶名称不能为空"],
    ["Google Application Credentials", "Google 应用凭据"],
    ["Paste the contents of credentials.json in this field OR leave it blank to use ADC.", "将 credentials.json 内容粘贴到这里，或留空以使用 ADC。"],
    ["Google Project ID", "Google 项目 ID"],
    ["Leave blank to inherit from Google Application Credentials.", "留空则继承自 Google 应用凭据。"],
    ["Configure your local file storage connection with all required Label Studio settings", "配置本地文件存储连接及其必需的 Label Studio 设置"],
    ["Absolute local path", "本地绝对路径"],
    ["Configure your Redis storage connection with all required Label Studio settings", "配置 Redis 存储连接及其必需的 Label Studio 设置"],
    ["Database Number (db)", "数据库编号（db）"],
    ["Host is required", "主机不能为空"],
    ["Port", "端口"],
    ["Configure your AWS S3 connection with all required Label Studio settings", "配置 AWS S3 连接及其必需的 Label Studio 设置"],
    ["Region Name", "区域名称"],
    ["S3 Endpoint", "S3 端点"],
    ["SSE KMS Key ID", "SSE KMS 密钥 ID"],
    ["Access Key ID", "访问密钥 ID"],
    ["Access Key ID is required", "访问密钥 ID 不能为空"],
    ["Secret Access Key", "秘密访问密钥"],
    ["Secret Access Key is required", "秘密访问密钥不能为空"],
    ["Session Token", "会话令牌"],
    ["Session token (optional)", "会话令牌（可选）"],
    ["Import method", "导入方式"],
    ["Files - Automatically creates a task for each storage object (e.g. JPG, MP3, TXT)", "文件 - 为存储中的每个对象自动创建一个任务（例如 JPG、MP3、TXT）"],
    ["Tasks - Treat each JSON or JSONL file as a task definition (one or more tasks per file)", "任务 - 将每个 JSON 或 JSONL 文件视为一个任务定义（每个文件可包含一个或多个任务）"],
    ["Use pre-signed URLs (On)\n Proxy through the platform (Off)", "使用预签名 URL（开启）\n 通过平台代理（关闭）"],
    ["Scan all sub-folders", "扫描所有子文件夹"],
    ["Save", "保存"],
    ["Submit Annotation", "提交标注"],
    ["Submit the current annotation", "提交当前标注"],
    ["Skip Task", "跳过任务"],
    ["Skip the current task", "跳过当前任务"],
    ["Undo", "撤销"],
    ["Undo last action", "撤销上一步操作"],
    ["Redo", "重做"],
    ["Redo previously undone action", "重做上一步已撤销的操作"],
    ["Focus Previous Task", "聚焦上一任务"],
    ["Move focus to the previous task", "将焦点移动到上一个任务"],
    ["Focus Next Task", "聚焦下一任务"],
    ["Move focus to the next task", "将焦点移动到下一个任务"],
    ["Focus Closed Task", "聚焦已关闭任务"],
    ["Focus on the closed task column", "将焦点移动到已关闭任务列"],
    ["Focus Open Task", "聚焦未关闭任务"],
    ["Focus on the open task column", "将焦点移动到未关闭任务列"],
    ["Toggle Bulk Sidebar", "切换批量侧栏"],
    ["Delete All Regions", "删除全部区域"],
    ["Remove all regions", "移除所有区域"],
    ["Focus First Region", "聚焦第一个区域"],
    ["Focus first focusable region", "聚焦第一个可聚焦区域"],
    ["Create Region Relation", "创建区域关系"],
    ["Create relation between regions", "在区域之间创建关系"],
    ["Create a relation between selected regions", "在所选区域之间创建关系"],
    ["Toggle Region Visibility", "切换区域可见性"],
    ["Toggle selected region visibility", "切换所选区域可见性"],
    ["Toggle All Region Visibility", "切换全部区域可见性"],
    ["Toggle all regions visibility", "切换全部区域可见性"],
    ["Lock Region", "锁定区域"],
    ["Lock selected region", "锁定所选区域"],
    ["Lock or unlock the selected region", "锁定或解锁所选区域"],
    ["Edit Region Metadata", "编辑区域元数据"],
    ["Edit metadata for selected region", "编辑所选区域的元数据"],
    ["Unselect Region", "取消选择区域"],
    ["Deselect the currently selected region", "取消当前选中的区域"],
    ["Exit Region Mode", "退出区域模式"],
    ["Delete Selected Region", "删除所选区域"],
    ["Delete currently selected region", "删除当前选中的区域"],
    ["Cycle Regions", "循环切换区域"],
    ["Duplicate Region", "复制区域"],
    ["Create a copy of the selected region", "复制所选区域"],
    ["Delete Segment", "删除分段"],
    ["Delete selected segment", "删除选中的分段"],
    ["Rewind 1 Second", "后退 1 秒"],
    ["Toggle audio playback", "切换音频播放"],
    ["Step Back", "后退一步"],
    ["Step Forward", "前进一步"],
    ["Toggle video playback", "切换视频播放"],
    ["Previous Keyframe", "上一关键帧"],
    ["Jump to previous keyframe", "跳转到上一关键帧"],
    ["Next Keyframe", "下一关键帧"],
    ["Jump to next keyframe", "跳转到下一关键帧"],
    ["No data available", "暂无数据"],
    ["Click to load", "点击加载"],
    ["There are no records to display at this time", "当前没有可显示的记录"],
    ["File format not supported", "文件格式不受支持"],
    ["Unable to connect to the server. Please check your internet connection.", "无法连接到服务器，请检查你的网络连接。"],
    ["No predictions uploaded yet", "还没有上传预测结果"],
    ["No model or predictions available", "没有可用模型或预测结果"],
    ["No provider selected", "尚未选择提供方"],
    ["Reviewer", "审核者"],
    ["Needs Review", "待审核"],
    ["In Review", "审核中"],
    ["Cancelled", "已取消"],
    ["Created", "已创建"],
    ["Delete unsuccessful", "删除失败"],
    ["Delete Annotation", "删除标注"],
    ["Delete annotation?", "删除标注？"],
    ["Delete Project", "删除项目"],
    ["Delete Tasks", "删除任务"],
    ["Delete Annotations", "删除标注"],
    ["Copy Annotation ID", "复制标注 ID"],
    ["Duplicate Annotation", "复制标注"],
    ["Copy Annotation Link", "复制标注链接"],
    ["Copy Region Link", "复制区域链接"],
    ["Show Other Annotations", "显示其他标注"],
    ["Delete webhook", "删除 Webhook"],
    ["Cancel webhook deletion", "取消删除 Webhook"],
    ["Cancel webhook edit", "取消编辑 Webhook"],
    ["Delete ML Backend", "删除 ML 后端"],
    ["Delete Predictions", "删除预测"],
    ["Error occurred while loading data", "加载数据时发生错误"],
    ["Failed to load data", "加载数据失败"],
    ["Failed to fetch state history", "获取状态历史失败"],
    ["Open Reader View", "打开阅读视图"],
    ["Open Annotation Tab", "打开标注标签页"],
    ["Clear Search", "清空搜索"],
    ["Copy Cell Contents", "复制单元格内容"],
    ["View Task Source", "查看任务源"],
    ["Resolve URIs", "解析 URI"],
    ["Reset filters", "重置筛选"],
    ["New data!", "有新数据！"],
    ["All work on this project is completed", "该项目的所有工作已完成"],
    ["Annotation", "标注"],
    ["Annotation Actions", "标注操作"],
    ["Annotation Settings", "标注设置"],
    ["Labeling hotkeys", "标注快捷键"],
    ["Enables quick selection of labels using hotkeys", "启用后可使用快捷键快速选择标签"],
    ["Show hotkeys on labels", "在标签上显示快捷键"],
    ["Displays keybindings on labels", "在标签上显示快捷键绑定"],
    ["Show hotkeys on tooltips", "在提示信息中显示快捷键"],
    ["Displays keybindings on tools and actions tooltips", "在工具和操作提示中显示快捷键绑定"],
    ["Show region labels", "显示区域标签"],
    ["Display region label names", "显示区域标签名称"],
    ["Keep label selected after creating a region", "创建区域后保持标签选中"],
    ["Allows continuous region creation using the selected label", "允许使用当前选中的标签连续创建区域"],
    ["Select region after creating it", "创建后选中区域"],
    ["Automatically selects newly created regions", "自动选中新创建的区域"],
    ["Show line numbers", "显示行号"],
    ["Identify and reference specific lines of text in your document", "标识并引用文档中的特定文本行"],
    ["Keep selected tool", "保持所选工具"],
    ["Persists the selected tool across tasks", "在多个任务之间保持当前选中的工具"],
    ["Pixel smoothing on zoom", "缩放时平滑像素"],
    ["Smooth image pixels when zoomed in", "放大时平滑图像像素"],
    ["Invert zoom direction", "反转缩放方向"],
    ["Invert the direction of scroll-to-zoom", "反转滚轮缩放方向"],
    ["Write instructions to help users complete labeling tasks.", "编写说明，帮助用户完成标注任务。"],
    ["The instruction field supports HTML markup and it allows use of images, iframes (pdf).", "说明字段支持 HTML 标记，并允许使用图像、iframe（pdf）。"],
    ["Prelabeling", "预标注"],
    ["Auto-Annotation", "自动标注"],
    ["Auto-Accept Suggestions", "自动接受建议"],
    ["Accept Suggestions", "接受建议"],
    ["Enable and select which set of predictions to use for prelabeling.", "启用并选择要用于预标注的预测结果集。"],
    ["Select which predictions or which model you want to use:", "选择你要使用的预测结果或模型："],
    ["Show before labeling", "标注前显示"],
    ["Use predictions to prelabel tasks", "使用预测结果预标注任务"],
    ["Save annotation settings", "保存标注设置"],
    ["Labeling Interface Settings", "标注界面设置"],
    ["Labeling Interface", "标注界面"],
    ["Task Sampling", "任务抽样"],
    ["Sequential sampling", "顺序抽样"],
    ["Sequential", "顺序"],
    ["Tasks are ordered by Task ID", "任务按任务 ID 排序"],
    ["Uniform", "均匀"],
    ["Random", "随机"],
    ["Random sampling", "随机抽样"],
    ["Tasks are chosen with uniform random", "任务以均匀随机方式选择"],
    ["Uncertainty sampling", "不确定性抽样"],
    ["Tasks are chosen according to model uncertainty score (active learning mode).", "任务会根据模型不确定性分数进行选择（主动学习模式）。"],
    ["Available on Label Studio Enterprise", "Label Studio 企业版可用"],
    ["Simplify project management by organizing projects into workspaces.", "通过将项目组织到工作区中来简化项目管理。"],
    ["Color", "颜色"],
    ["Save general settings", "保存通用设置"],
    ["Project Name", "项目名称"],
    ["Description", "描述"],
    ["Annotation has been created", "标注已创建"],
    ["Annotation is completed and finalized", "标注已完成并已确认"],
    ["Annotation In Progress", "标注进行中"],
    ["Annotation work is in progress on this project", "该项目的标注工作正在进行中"],
    ["Model", "模型"],
    ["Models", "模型"],
    ["Model Settings", "模型设置"],
    ["Machine Learning", "机器学习"],
    ["Machine learning model options", "机器学习模型选项"],
    ["Add machine learning model", "添加机器学习模型"],
    ["Let's connect your first model", "连接你的第一个模型"],
    ["Learn more about machine learning models (opens in new window)", "了解更多机器学习模型信息（新窗口打开）"],
    ["Configuration", "配置"],
    ["Start model training on annotation submission", "在提交标注时启动模型训练"],
    ["Save machine learning settings", "保存机器学习设置"],
    ["Delete ML Backend", "删除 ML 后端"],
    ["Name", "名称"],
    ["Enter a name", "输入名称"],
    ["Backend URL", "后端地址"],
    ["Select authentication method", "选择认证方式"],
    ["No Authentication", "无认证"],
    ["Basic Authentication", "基础认证"],
    ["Basic auth user", "基础认证用户名"],
    ["Basic auth pass", "基础认证密码"],
    ["Any extra params to pass during model connection", "模型连接时附加传递的参数"],
    ["Interactive preannotations", "交互式预标注"],
    ["If enabled some labeling tools will send requests to the ML Backend interactively during the annotation process.", "启用后，部分标注工具会在标注过程中向 ML 后端交互式发送请求。"],
    ["Save machine learning form", "保存机器学习表单"],
    ["Test Request", "测试请求"],
    ["Send Test Request", "发送测试请求"],
    ["Start Training", "开始训练"],
    ["Start Model Training", "启动模型训练"],
    ["Edit", "编辑"],
    ["Connect", "连接"],
    ["Predictions Settings", "预测设置"],
    ["Learn more about predictions (opens in new window)", "了解更多预测功能（新窗口打开）"],
    ["Predictions", "预测"],
    ["Delete Predictions", "删除预测"],
    ["Model version is undefined. Likely means that model_version field was missing when predictions were imported.", "模型版本未定义，通常表示导入预测时缺少 model_version 字段。"],
    ["No model or predictions available", "没有可用模型或预测结果"],
    ["Please select model or predictions", "请选择模型或预测结果"],
    ["Danger Zone", "危险操作区"],
    ["Reset Cache", "重置缓存"],
    ["Drop All Tabs", "丢弃全部标签页"],
    ["Cache reset successfully", "缓存重置成功"],
    ["All tabs dropped successfully", "所有标签页已成功丢弃"],
    ["Reset Cache may help in cases like if you are unable to modify the labeling configuration due to validation errors concerning existing labels, but you are confident that the labels don't exist. You can use this action to reset the cache and try again.", "如果你因为与现有标签相关的校验错误而无法修改标注配置，但你确认这些标签并不存在，可以尝试重置缓存后再试。"],
    ["If the Data Manager is not loading, dropping all Data Manager tabs can help.", "如果数据管理页无法加载，丢弃所有数据管理标签页可能会有帮助。"],
    ["Deleting a project removes all tasks, annotations, and project data from the database.", "删除项目会从数据库中移除所有任务、标注和项目数据。"],
    ["Personal Access Tokens", "个人访问令牌"],
    ["Legacy Tokens", "旧版令牌"],
    ["Enable increased token authentication security", "启用更严格的令牌认证安全策略"],
    ["Enable legacy access tokens, these do not expire", "启用旧版访问令牌，这类令牌不会过期"],
    ["Time-to-Live (optional, Personal Access Token only)", "有效期（可选，仅适用于个人访问令牌）"],
    ["Keyboard Shortcuts", "快捷键"],
    ["Hotkeys", "快捷键"],
    ["Beta", "测试版"],
    ["Customize", "自定义"],
    ["View all available keyboard shortcuts.", "查看所有可用快捷键。"],
    ["Customize your keyboard shortcuts to speed up your workflow.", "自定义你的键盘快捷键以提升工作效率。"],
    ["Click on any hotkey below to assign a new key combination that works best for you.", "点击下方任一快捷键，为它分配更适合你的新按键组合。"],
    ["Editor", "编辑器"],
    ["Text editing shortcuts", "文本编辑快捷键"],
    ["Click to record keyboard shortcut", "点击录制快捷键"],
    ["Click to edit hotkey", "点击编辑快捷键"],
    ["Disable", "禁用"],
    ["Enable", "启用"],
    ["Invalid hotkey object", "无效的快捷键对象"],
    ["Invalid format: hotkeys property must be an array", "格式无效：hotkeys 属性必须是数组"],
    ["Invalid format: expected an array of hotkeys or an object with a hotkeys property", "格式无效：应为快捷键数组，或包含 hotkeys 属性的对象"],
    ["No hotkeys found in the imported data", "导入数据中未找到快捷键"],
    ["Unknown validation error", "未知校验错误"],
    ["Unknown error occurred", "发生未知错误"],
    ["Failed to update hotkeys:", "更新快捷键失败："],
    ["Error loading hotkeys from API:", "从 API 加载快捷键失败："],
    ["Could not load custom hotkeys from server, using cached settings", "无法从服务器加载自定义快捷键，已使用缓存设置"],
    ["Authentication required", "需要登录验证"],
    ["Server error - please try again later", "服务器错误，请稍后重试"],
    ["Network error - please check your connection", "网络错误，请检查连接"],
    ["Reset Hotkeys to Defaults?", "重置快捷键为默认值？"],
    ["Are you sure you want to reset all hotkeys and settings to their default values? This action cannot be undone.", "确定要将所有快捷键和设置重置为默认值吗？此操作不可撤销。"],
    ["hotkeys-export.json", "快捷键导出.json"],
    ["Submit Annotation", "提交标注"],
    ["Submit the current annotation", "提交当前标注"],
    ["Skip Task", "跳过任务"],
    ["Skip the current task", "跳过当前任务"],
    ["Focus Previous Task", "聚焦上一任务"],
    ["Move focus to the previous task", "将焦点移动到上一个任务"],
    ["Focus Next Task", "聚焦下一任务"],
    ["Move focus to the next task", "将焦点移动到下一个任务"],
    ["Focus Closed Task", "聚焦已关闭任务"],
    ["Focus on the closed task column", "将焦点移动到已关闭任务列"],
    ["Focus Open Task", "聚焦未关闭任务"],
    ["Focus on the open task column", "将焦点移动到未关闭任务列"],
    ["Toggle Bulk Sidebar", "切换批量侧栏"],
    ["Minimize or expand bulk actions sidebar", "最小化或展开批量操作侧栏"],
    ["Move focus to the first focusable region", "将焦点移动到第一个可聚焦区域"],
    ["Show or hide the selected region", "显示或隐藏选中的区域"],
    ["Show or hide all regions", "显示或隐藏全部区域"],
    ["Exit relation mode and unselect region", "退出关系模式并取消选择区域"],
    ["Cycle through all regions", "循环切换所有区域"],
    ["Rewind the audio by 1 second", "将音频后退 1 秒"],
    ["Step back one frame", "后退一帧"],
    ["Step forward one frame", "前进一帧"],
    ["Step one frame backward", "后退一帧"],
    ["Step one frame forward", "前进一帧"],
    ["Seek Backward", "向后定位"],
    ["Seek video backward", "向后定位视频"],
    ["First Frame", "第一帧"],
    ["Jump to first frame", "跳转到第一帧"],
    ["Seek Forward", "向前定位"],
    ["Seek video forward", "向前定位视频"],
    ["Last Frame", "最后一帧"],
    ["Jump to last frame", "跳转到最后一帧"],
    ["Hop Backward", "快速后跳"],
    ["Hop backward quickly", "快速向后跳转"],
    ["Hop Forward", "快速前跳"],
    ["Hop forward quickly", "快速向前跳转"],
    ["Extend Left", "向左扩展"],
    ["Extend the region to the left", "将区域向左扩展"],
    ["Extend Right", "向右扩展"],
    ["Extend the region to the right", "将区域向右扩展"],
    ["Shrink Left", "左侧收缩"],
    ["Shrink the region from the left", "从左侧收缩区域"],
    ["Shrink Right", "右侧收缩"],
    ["Shrink the region from the right", "从右侧收缩区域"],
    ["Extend Left (Large)", "大幅向左扩展"],
    ["Extend region left significantly", "大幅向左扩展区域"],
    ["Extend Right (Large)", "大幅向右扩展"],
    ["Extend region right significantly", "大幅向右扩展区域"],
    ["Shrink Left (Large)", "大幅左侧收缩"],
    ["Shrink region from left significantly", "从左侧大幅收缩区域"],
    ["Shrink Right (Large)", "大幅右侧收缩"],
    ["Shrink region from right significantly", "从右侧大幅收缩区域"],
    ["Previous Image", "上一张图像"],
    ["View previous image", "查看上一张图像"],
    ["Next Image", "下一张图像"],
    ["View next image", "查看下一张图像"],
    ["Zoom In", "放大"],
    ["Zoom in on the image", "放大图像"],
    ["Pan Image", "平移图像"],
    ["Pan around the image", "在图像中平移查看"],
    ["Zoom to Fit", "缩放至适应"],
    ["Zoom to fit the full image in view", "缩放以完整显示图像"],
    ["Zoom to 100%", "缩放到 100%"],
    ["Zoom to actual image size (100%)", "缩放到图像实际大小（100%）"],
    ["Zoom Out", "缩小"],
    ["Zoom out of the image", "缩小图像"],
    ["Move Tool", "移动工具"],
    ["Select the move tool to reposition annotations", "选择移动工具以重新定位标注"],
    ["Brush Tool", "画笔工具"],
    ["Select the brush tool", "选择画笔工具"],
    ["Ellipse Tool", "椭圆工具"],
    ["Select the ellipse tool", "选择椭圆工具"],
    ["Eraser Tool", "橡皮工具"],
    ["Select the eraser tool", "选择橡皮工具"],
    ["Auto Detect", "自动检测"],
    ["Use the auto-detect tool to automatically suggest regions", "使用自动检测工具自动建议区域"],
    ["Key Point Tool", "关键点工具"],
    ["Select the key point annotation tool", "选择关键点标注工具"],
    ["Magic Wand", "魔术棒"],
    ["Select the magic wand tool for smart region selection", "选择魔术棒工具进行智能区域选择"],
    ["Polygon Tool", "多边形工具"],
    ["Select the polygon annotation tool", "选择多边形标注工具"],
    ["Rectangle Tool", "矩形工具"],
    ["Select the rectangle annotation tool", "选择矩形标注工具"],
    ["3-Point Rectangle", "三点矩形"],
    ["Draw a rotated rectangle using 3-point selection", "通过三点选择绘制旋转矩形"],
    ["Rotate Left", "向左旋转"],
    ["Rotate the image 90° to the left", "将图像向左旋转 90°"],
    ["Rotate Right", "向右旋转"],
    ["Rotate the image 90° to the right", "将图像向右旋转 90°"],
    ["Decrease Tool Size", "减小工具尺寸"],
    ["Decrease tool size", "减小工具尺寸"],
    ["Increase Tool Size", "增大工具尺寸"],
    ["Increase tool size", "增大工具尺寸"],
    ["Next Phrase", "下一短语"],
    ["Navigate to the next phrase in paragraph view", "在段落视图中跳转到下一短语"],
    ["Previous Phrase", "上一短语"],
    ["Navigate to the previous phrase in paragraph view", "在段落视图中跳转到上一短语"],
    ["Select All and Annotate", "全选并标注"],
    ["Select all text in current phrase and create annotation", "选中当前短语中的全部文本并创建标注"],
    ["Next Region in Phrase", "短语中的下一个区域"],
    ["Navigate to the next region within current phrase", "跳转到当前短语中的下一个区域"],
    ["Paragraph Navigation", "段落导航"],
    ["Shortcuts for navigating phrases and regions in paragraph/dialogue view", "用于在段落/对话视图中导航短语和区域的快捷键"],
    ["Previous Region in Phrase", "短语中的上一个区域"],
    ["Navigate to the previous region within current phrase", "跳转到当前短语中的上一个区域"],
    ["Interactive", "交互式"],
    ["Create a new annotation", "创建新标注"],
    ["Select label and click the image to start", "选择标签并点击图像开始标注"],
    ["Shortcuts for common annotation tasks like submit, skip, undo and redo", "用于提交、跳过、撤销和重做等常见标注任务的快捷键"],
    ["Shortcuts for navigating and managing tasks in Project's Data Manager", "用于在项目数据管理器中浏览和管理任务的快捷键"],
    ["Shortcuts for creating, selecting and manipulating annotation regions", "用于创建、选择和操作标注区域的快捷键"],
    ["Shortcuts for controlling tools panel when labeling images", "用于图像标注时控制工具面板的快捷键"],
    ["Shortcuts for controlling audio playback and navigation", "用于控制音频播放和导航的快捷键"],
    ["Shortcuts for controlling video playback and navigation", "用于控制视频播放和导航的快捷键"],
    ["Shortcuts for manipulating time series data regions", "用于操作时间序列数据区域的快捷键"],
    ["Shortcuts for navigating between images in multi-image tasks", "用于在多图任务中切换图像的快捷键"],
    ["Label Tasks As Displayed", "按当前显示任务标注"],
    ["Info", "信息"],
    ["History", "历史"],
    ["Regions", "区域"],
    ["Relations", "关系"],
    ["Manual", "手动"],
    ["By Time", "按时间"],
    ["View region details", "查看区域详情"],
    ["Select a region to view its properties, metadata and available actions", "选择一个区域以查看其属性、元数据和可用操作"],
    ["Labeled regions will appear here", "已标注区域将显示在这里"],
    ["Start labeling and track your results using this panel", "开始标注，并通过此面板跟踪你的结果"],
    ["Start labeling and track your results", "开始标注，并跟踪你的结果"],
    ["using this panel", "使用此面板"],
    ["Learn more", "了解更多"],
    ["View annotation activity", "查看标注活动"],
    ["See a log of user actions for this annotation", "查看该标注的用户操作日志"],
    ["Create relations between regions", "在区域之间创建关系"],
    ["Link regions to define relationships between them", "连接区域以定义它们之间的关系"],
    ["Group Manually", "手动分组"],
    ["Group by Tool", "按工具分组"],
    ["Group by Label", "按标签分组"],
    ["Order by Score", "按分数排序"],
    ["Order by Time", "按时间排序"],
    ["Order by Media Start Time", "按媒体开始时间排序"],
    ["Comfortable density", "舒适密度"],
    ["Compact density", "紧凑密度"],
    ["There was an issue loading URL from $image value", "从 $image 值加载 URL 时出现问题"],
    ["Things to look out for:", "请检查以下内容："],
    ["URL is valid", "URL 有效"],
    ["URL scheme matches the service scheme, i.e. https and https", "URL 协议与服务协议一致，例如 https 对 https"],
    ["The static server has wide-open CORS, more on that here", "静态服务器需要开放 CORS，更多说明请见这里"],
    ["Technical description:", "技术说明："],
    ["Let's get you started.", "开始使用吧。"],
    ["Video Project", "视频项目"],
    ["Video Project Clean", "视频项目（清理版）"],
    ["Region Management", "区域管理"],
    ["Tools", "工具"],
    ["Audio Controls", "音频控制"],
    ["Video Controls", "视频控制"],
    ["Time Series Controls", "时间序列控制"],
    ["Image Gallery Navigation", "图像画廊导航"],
    ["Play / Pause Audio", "播放 / 暂停音频"],
    ["Play / Pause Video", "播放 / 暂停视频"],
    ["Text Tag", "文本标签"],
    ["Image Tag", "图像标签"],
    ["Export data", "导出数据"],
    ["You can export dataset in one of the following formats:", "你可以按以下格式之一导出数据集："],
    ["Read more about supported export formats in the Documentation.", "在文档中阅读更多关于支持的导出格式的信息。"],
    ["sequence labeling", "序列标注"],
    ["text tagging", "文本标注"],
    ["named entity recognition", "命名实体识别"],
    ["image segmentation", "图像分割"],
    ["object detection", "目标检测"],
    ["keypoints", "关键点"],
    ["speech recognition", "语音识别"],
    ["brush annotations", "画笔标注"],
    ["Popular format used for the CoNLL-2003 named entity recognition challenge.", "常见格式，用于 CoNLL-2003 命名实体识别挑战。"],
    ["COCO with Images", "带图像的 COCO"],
    ["Popular XML format used for object detection and polygon image segmentation tasks.", "常见 XML 格式，用于目标检测和多边形图像分割任务。"],
    ["YOLO", "YOLO"],
    ["YOLO with Images", "带图像的 YOLO"],
    ["Popular TXT format is created for each image file. Each txt file contains annotations for the corresponding image file, that is object class, object coordinates, height & width.", "会为每张图像生成常见的 TXT 格式文件。每个 txt 文件包含对应图像的标注信息，例如目标类别、目标坐标、高度和宽度。"],
    ["YOLO format with images downloaded.", "带已下载图像的 YOLO 格式。"],
    ["YOLOv8 OBB", "YOLOv8 OBB"],
    ["Popular TXT format is created for each image file. Each txt file contains annotations for the corresponding image file. The YOLO OBB format designates bounding boxes by their four corner points with coordinates normalized between 0 and 1, so it is possible to export rotated objects.", "会为每张图像生成常见的 TXT 格式文件。每个 txt 文件包含对应图像的标注信息。YOLO OBB 格式通过四个角点来表示边界框，坐标会归一化到 0 到 1 之间，因此可以导出旋转目标。"],
    ["YOLOv8 OBB with Images", "带图像的 YOLOv8 OBB"],
    ["YOLOv8 OBB format with images downloaded.", "带已下载图像的 YOLOv8 OBB 格式。"],
    ["Brush labels to NumPy", "画笔标签导出为 NumPy"],
    ["Export your brush labels as NumPy 2d arrays. Each label outputs as one image.", "将画笔标签导出为 NumPy 二维数组。每个标签导出为一张图像。"],
    ["Brush labels to PNG", "画笔标签导出为 PNG"],
    ["Export your brush labels as PNG images. Each label outputs as one image.", "将画笔标签导出为 PNG 图像。每个标签导出为一张图像。"],
    ["ASR Manifest", "ASR 清单"],
    ["Export audio transcription labels for automatic speech recognition as the JSON manifest format expected by NVIDIA NeMo models.", "将音频转写标签导出为 NVIDIA NeMo 模型所需的 JSON manifest 格式，用于自动语音识别。"],
    ["Brush labels to COCO", "画笔标签导出为 COCO"],
    ["Export your brush labels as COCO format for segmentation tasks. Converts RLE encoded masks to COCO polygons.", "将画笔标签导出为适用于分割任务的 COCO 格式，并将 RLE 编码掩码转换为 COCO 多边形。"],
    ["Can't find an export format?", "找不到需要的导出格式？"],
    ["Please let us know in Slack or submit an issue to the Repository", "请在 Slack 告诉我们，或向代码仓库提交 issue"],
    ["Check the documentation to import preannotated data.", "查看文档以导入预标注数据。"],
    ["Having a timeout or trouble exporting large projects?", "导出大型项目时遇到超时或其他问题？"],
    ["Copy command", "复制命令"],
    ["List of items in raw JSON format stored in one JSON file. Use to export both the data and the annotations for a dataset. It's Label Studio Common Format", "以原始 JSON 格式将条目列表存储到一个 JSON 文件中。用于同时导出数据集的数据和标注。这是 Label Studio 通用格式。"],
    ["List of items where only \"from_name\", \"to_name\" values from the raw JSON format are exported. Use to export only the annotations for a dataset.", "导出条目列表时，仅导出原始 JSON 中的 \"from_name\"、\"to_name\" 等值。用于仅导出数据集的标注。"],
    ["Results are stored as comma-separated values with the column names specified by the values of the \"from_name\" and \"to_name\" fields.", "结果会以逗号分隔值形式存储，列名由 \"from_name\" 和 \"to_name\" 字段的值指定。"],
    ["Results are stored in tab-separated tabular file with column names specified by \"from_name\" \"to_name\" values", "结果会以制表符分隔的表格文件形式存储，列名由 \"from_name\"、\"to_name\" 的值指定。"],
    ["Popular machine learning format used by the COCO dataset for object detection and image segmentation tasks with polygons and rectangles.", "常见机器学习格式，COCO 数据集使用它来处理目标检测和带多边形、矩形的图像分割任务。"],
    ["COCO format with images downloaded.", "带已下载图像的 COCO 格式。"],
    ["Pascal VOC XML", "Pascal VOC XML"],
    ["Add Webhook", "添加网络钩子"],
    ["Setup integrations that subscribe to certain events using webhooks. When an event is triggered, app name sends an HTTP POST request to the configured webhook URL.", "配置用于订阅特定事件的网络钩子。事件触发时，应用会向已配置的 Webhook URL 发送 HTTP POST 请求。"],
    ["Use cloud or database storage as the source for your labeling tasks or the target of your completed annotations.", "将云存储或数据库存储用作标注任务的数据源，或已完成标注的目标存储。"],
    ["Initialized", "已初始化"],
    ["Predictions List", "预测列表"],
    ["List of predictions available in the project. Each card is associated with a separate model version. To learn about how to import predictions,", "这里列出了项目中的预测结果。每张卡片对应一个单独的模型版本。想了解如何导入预测结果，请"],
    ["see the documentation.", "查看文档。"],
    ["Connected", "已连接"],
    ["A connected model has been detected! If you wish to fetch predictions from this model, please follow these steps:", "已检测到已连接的模型！如果你希望从该模型获取预测结果，请按照以下步骤操作："],
    ["Navigate to the Data Manager.", "前往数据管理。"],
    ["Select the desired tasks.", "选择需要的任务。"],
    ["Batch predictions", "批量预测"],
    ["Click on Batch predictions from the Actions menu.", "在“操作”菜单中点击“批量预测”。"],
    ["If you want to use the model predictions for prelabeling, please configure this in the Labeling Setup.", "如果你希望将模型预测用于预标注，请在“标注设置”中进行配置。"],
    ["This option will send a request to /train with information about annotations. You can use this to enable an Active Learning loop. You can also manually start training through model menu in its card.", "启用后会向 `/train` 发送包含标注信息的请求。你可以借此开启主动学习循环，也可以在模型卡片的菜单中手动启动训练。"],
    ["Configure data", "配置数据"],
    ["Use image from field", "从字段中使用图像"],
    ["Configure the labeling interface with tags. See all tags.", "使用标签配置标注界面。查看全部标签。"],
    ["< set manually >", "< 手动设置 >"],
    ["Use new line as a separator to add multiple labels", "使用换行作为分隔符以添加多个标签"],
    ["Add", "添加"],
    ["Preview", "预览"],
    ["Labels", "标签"],
    ["Configure settings", "配置设置"],
    ["Width of region borders", "区域边框宽度"],
    ["Allow image zoom (ctrl+wheel)", "允许图像缩放（ctrl+滚轮）"],
    ["Show controls to zoom in and out", "显示放大和缩小控件"],
    ["Show controls to rotate image", "显示图像旋转控件"],
    ["bottom", "底部"],
    ["Add filter for long list of labels", "为长标签列表添加筛选"],
    ["User ID", "用户 ID"],
    ["Registration date", "注册时间"],
    ["Annotations Submitted", "已提交标注数"],
    ["Projects contributed to", "参与项目数"],
    ["My role", "我的角色"],
    ["Computer Vision", "计算机视觉"],
    ["Natural Language Processing", "自然语言处理"],
    ["Audio/Speech Processing", "音频/语音处理"],
    ["Conversational AI", "对话式 AI"],
    ["Chat", "聊天"],
    ["Ranking & Scoring", "排序与评分"],
    ["Structured Data Parsing", "结构化数据解析"],
    ["Time Series Analysis", "时间序列分析"],
    ["Videos", "视频"],
    ["Generative AI", "生成式 AI"],
    ["Community Contributions", "社区贡献"],
    ["Custom template", "自定义模板"],
    ["Semantic Segmentation with Polygons", "多边形语义分割"],
    ["Semantic Segmentation with Masks", "掩码语义分割"],
    ["Object Detection with Bounding Boxes", "边界框目标检测"],
    ["OCR Labeling for PDFs", "PDF OCR 标注"],
    ["Keypoint Labeling", "关键点标注"],
    ["Inventory Tracking", "库存跟踪"],
    ["Image Classification", "图像分类"],
    ["Optical Character Recognition", "光学字符识别"],
    ["Select text to correct", "选择要纠正的文本"],
    ["This will delete all existing regions. Are you sure you want to delete them? This action cannot be undone.", "这将删除所有现有区域。你确定要删除它们吗？此操作无法撤销。"],
    ["This will delete all existing regions.", "这将删除所有现有区域。"],
    ["Are you sure you want to delete them?", "你确定要删除它们吗？"],
    ["Invite members to join your Label Studio instance. People that you invite have full access to all of your projects.", "邀请成员加入你的 Label Studio 实例。你邀请的人将拥有你所有项目的完整访问权限。"],
    ["Invite members to join your Label Studio instance.", "邀请成员加入你的 Label Studio 实例。"],
    ["People that you invite have full access to all of your projects.", "你邀请的人将拥有你所有项目的完整访问权限。"],
    ["Perform these actions at your own risk. Actions you take on this page can't be reverted. Make sure your data is backed up.", "执行此页面上的操作需自行承担风险。你在此页执行的操作无法撤销。请确保你的数据已完成备份。"],
    ["Perform these actions at your own risk.", "执行此页面上的操作需自行承担风险。"],
    ["Actions you take on this page can't be reverted.", "你在此页执行的操作无法撤销。"],
    ["Make sure your data is backed up.", "请确保你的数据已完成备份。"],
    ["Label", "标注"],
    ["Label Studio Logo", "Label Studio 标志"],
    ["Human Signal Logo", "Human Signal 标志"],
    ["Logs", "日志"],
    ["Go Back", "返回上一页"],
    ["Go to Home", "回到首页"],
    ["Refresh", "刷新"],
    ["Uh oh, this is not permitted.", "哎呀，这个操作不被允许。"],
    ["Here’s a few things you can try:", "你可以尝试以下方法："],
    ["Uh oh, something went wrong.", "哎呀，出了点问题。"],
    ["Uh oh, this page doesn’t exist.", "哎呀，这个页面不存在。"],
    ["Total cancelled (skipped) annotations", "已取消（跳过）的标注总数"],
    ["Last annotation date", "最后标注时间"],
    ["All users who completed the task", "完成该任务的所有用户"],
    ["Total predictions per task", "每个任务的预测总数"],
    ["Total annotations per task", "每个任务的标注总数"],
  ]);

  const patternReplacements = [
    [/^Registered (.+), user ID (\d+)$/, "注册于 $1，用户 ID $2"],
    [/^Welcome\s*👋$/, "欢迎 👋"],
    [/^New Project #(\d+)$/, "新项目 #$1"],
    [/^Labels\s*\((\d+)\)$/, "标签（$1）"],
    [/^Columns:\s*(\d+)$/, "列数：$1"],
    [/^(\d+)\s+files uploaded$/, "已上传 $1 个文件"],
    [/^(\d+)\s+file uploaded$/, "已上传 $1 个文件"],
    [/^(\d+)\s+of\s+(\d+)\s+Tasks?\s+\((\d+)%\)$/, "$1 / $2 个任务（$3%）"],
    [/^(\d+)\s+Tasks$/, "$1 个任务"],
    [/^Tasks:\s*(\d+\s*\/\s*\d+)$/, "任务：$1"],
    [/^Submitted annotations:\s*(\d+)$/, "已提交标注：$1"],
    [/^Predictions:\s*(\d+)$/, "预测：$1"],
    [/^标注\s*全部\s*Tasks$/, "全部标注任务"],
    [/^标注\s*全部\s*任务$/, "全部标注任务"],
    [/^Last prediction created\s+(\d+)\s+seconds ago$/, "上次预测创建于 $1 秒前"],
    [/^Last prediction created\s+(\d+)\s+minutes ago$/, "上次预测创建于 $1 分钟前"],
    [/^Last prediction created\s+(\d+)\s+hours ago$/, "上次预测创建于 $1 小时前"],
    [/^Last prediction created\s+about\s+(\d+)\s+hours ago$/, "上次预测创建于约 $1 小时前"],
    [/^Created\s+(\d+)\s+seconds ago$/, "已创建 $1 秒前"],
    [/^Created\s+(\d+)\s+minutes ago$/, "已创建 $1 分钟前"],
    [/^Created\s+(\d+)\s+hours ago$/, "已创建 $1 小时前"],
    [/^Created\s+about\s+(\d+)\s+hours ago$/, "已创建约 $1 小时前"],
    [/^(\d+)\s+seconds ago$/, "$1 秒前"],
    [/^(\d+)\s+minutes ago$/, "$1 分钟前"],
    [/^(\d+)\s+hours ago$/, "$1 小时前"],
    [/^about\s+(\d+)\s+hours ago$/, "约 $1 小时前"],
    [/^about\s+(\d+)\s+minutes ago$/, "约 $1 分钟前"],
    [/^less than a minute ago$/, "不到 1 分钟前"],
    [/^just now$/, "刚刚"],
    [/^this hour$/, "1 小时内"],
    [/^today$/, "今天"],
    [/^a hour ago$/, "1 小时前"],
    [/^hours ago$/, "数小时前"],
    [/^a day ago$/, "1 天前"],
    [/^three days ago$/, "3 天前"],
    [/^a week ago$/, "1 周前"],
    [/^weeks ago$/, "数周前"],
    [/^a month ago$/, "1 个月前"],
    [/^Source for task (\d+)$/, "任务 $1 的源数据"],
    [/^Copied "([^"]+)" for Task (\d+) to clipboard$/, '已将任务 $2 的 "$1" 复制到剪贴板'],
    [/^(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4}),\s*(\d{1,2}:\d{2})(?::(\d{2}))?$/, (_, d, m, y, hm, s) => `${y}年${({
      Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
      Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
    })[m]}月${Number(d)}日 ${s ? `${hm}:${s}` : hm}`],
    [/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})\s*[∙·-]\s*(\d{1,2}:\d{2}:\d{2})$/, (_, m, d, y, hms) => `${y}年${({
      January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
      July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
    })[m]}月${Number(d)}日 ${hms}`],
  ];

  const attributeNames = ["placeholder", "title", "aria-label", "aria-description", "aria-roledescription", "data-tooltip", "data-title", "data-description", "data-content", "alt"];
  const skippedTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"]);
  const pendingRoots = new Set();
  const observedRoots = new WeakSet();
  let scheduled = false;
  const lowerTextMap = new Map(
    Array.from(exactTextMap.entries()).map(([key, value]) => [key.toLowerCase(), value]),
  );
  const fragmentReplacements = [
    ["Data Import", "数据导入"],
    ["Upload More", "上传更多"],
    ["Upload More Files", "上传更多文件"],
    ["Upload", "上传"],
    ["Label All Tasks", "标注全部任务"],
    ["All Tasks", "全部任务"],
    ["标注 全部任务", "全部标注任务"],
    ["标注 全部 Tasks", "全部标注任务"],
    ["标注 全部Tasks", "全部标注任务"],
    ["Label Tasks As Displayed", "按当前显示任务标注"],
    ["API Tokens Settings", "API 令牌设置"],
    ["Add Members", "添加成员"],
    ["Reset Link", "重置链接"],
    ["Copy link", "复制链接"],
    ["Connect Source Storage", "连接源存储"],
    ["Connect Target Storage", "连接目标存储"],
    ["Choose your cloud storage provider", "选择你的云存储提供方"],
    ["Select the cloud storage service where your data is stored", "选择存放你数据的云存储服务"],
    ["Storage Provider", "存储提供方"],
    ["Amazon S3 with IAM Role", "Amazon S3（IAM 角色）"],
    ["Google Cloud Storage (WIF Auth)", "Google Cloud Storage（WIF 认证）"],
    ["Azure Blob Storage with Service Principal", "Azure Blob Storage（服务主体）"],
    ["Databricks Files (UC Volumes)", "Databricks 文件（UC 卷）"],
    ["Auto-Annotation", "自动标注"],
    ["Auto-Accept Suggestions", "自动接受建议"],
    ["Last prediction created", "上次预测创建于"],
    ["Batch predictions", "批量预测"],
    ["Last annotation date", "最后标注时间"],
    ["All users who completed the task", "完成该任务的所有用户"],
    ["Setup integrations that subscribe to certain events using ", "配置用于订阅特定事件的"],
    [". When an event is triggered, app name sends an HTTP POST request to the configured webhook URL.", "。事件触发时，应用会向已配置的 Webhook URL 发送 HTTP POST 请求。"],
    ["Please let us know in ", "请在 "],
    [" or submit an issue to the ", " 或向 "],
    ["Repository", "代码仓库"],
    ["Check the documentation to ", "查看文档以"],
    ["Check the documentation to", "查看文档以"],
    ["import preannotated data", "导入预标注数据"],
    ["For PDFs, use ", "对于 PDF，请使用"],
    ["For PDFs, use", "对于 PDF，请使用"],
    ["multi-image labeling", "多图标注"],
    ["over 直接上传 due to", "而不是直接上传，因为"],
    ["over direct uploads due to", "而不是直接上传，因为"],
    ["Navigate to the ", "前往"],
    ["Click on ", "在“"],
    [" from the ", "”所在的"],
    [" menu.", "菜单中点击。"],
    ["If you want to use the model predictions for prelabeling, please configure this in the ", "如果你希望将模型预测用于预标注，请在"],
    ["Configure the labeling interface with tags. ", "使用标签配置标注界面。"],
    ["This will delete all existing regions.", "这将删除所有现有区域。"],
    ["Are you sure you want to delete them?", "你确定要删除它们吗？"],
    ["or click to browse", "或点击浏览"],
    ["Drag & drop files here", "将文件拖放到这里"],
    ["click to browse", "或点击浏览"],
    ["Images", "图像"],
    ["Audio", "Audio"],
    ["Video", "Video"],
    ["HTML / HyperText", "HTML / 超文本"],
    ["Text", "Text"],
    ["Structured data", "结构化数据"],
    ["PDF", "PDF"],
    ["Important:", "重要："],
    ["Cloud storage", "云存储"],
    ["direct uploads", "直接上传"],
    ["upload limitations", "上传限制"],
    ["Hotkeys", "快捷键"],
    ["Customize your keyboard shortcuts to speed up your workflow.", "自定义你的键盘快捷键以提升工作效率。"],
    ["Click on any hotkey below to assign a new key combination that works best for you.", "点击下方任一快捷键，为它分配更适合你的新按键组合。"],
    ["View all available keyboard shortcuts.", "查看所有可用快捷键。"],
    ["Customize", "自定义"],
    ["Shortcuts for common annotation tasks like submit, skip, undo and redo", "用于提交、跳过、撤销和重做等常见标注任务的快捷键"],
    ["Shortcuts for navigating and managing tasks in Project's Data Manager", "用于在项目数据管理器中浏览和管理任务的快捷键"],
    ["Shortcuts for creating, selecting and manipulating annotation regions", "用于创建、选择和操作标注区域的快捷键"],
    ["Shortcuts for controlling tools panel when labeling images", "用于图像标注时控制工具面板的快捷键"],
    ["Shortcuts for controlling audio playback and navigation", "用于控制音频播放和导航的快捷键"],
    ["Shortcuts for controlling video playback and navigation", "用于控制视频播放和导航的快捷键"],
    ["Shortcuts for manipulating time series data regions", "用于操作时间序列数据区域的快捷键"],
    ["Shortcuts for navigating between images in multi-image tasks", "用于在多图任务中切换图像的快捷键"],
    ["Columns:", "列数："],
    ["files uploaded", "个文件已上传"],
    ["file uploaded", "个文件已上传"],
    ["View region details", "查看区域详情"],
    ["Select a region to view its properties, metadata and available actions", "选择一个区域以查看其属性、元数据和可用操作"],
    ["Labeled regions will appear here", "已标注区域将显示在这里"],
    ["Start labeling and track your results using this panel", "开始标注，并通过此面板跟踪你的结果"],
    ["Start labeling and track your results", "开始标注，并跟踪你的结果"],
    ["using this panel", "使用此面板"],
    ["Learn more", "了解更多"],
    ["Info", "信息"],
    ["History", "历史"],
    ["Regions", "区域"],
    ["Relations", "关系"],
    ["By Time", "按时间"],
    ["Manual", "手动"],
    ["View annotation activity", "查看标注活动"],
    ["See a log of user actions for this annotation", "查看该标注的用户操作日志"],
    ["Create relations between regions", "在区域之间创建关系"],
    ["Link regions to define relationships between them", "连接区域以定义它们之间的关系"],
    ["There was an issue loading URL from $image value", "从 $image 值加载 URL 时出现问题"],
    ["Things to look out for:", "请检查以下内容："],
    ["URL is valid", "URL 有效"],
    ["URL scheme matches the service scheme, i.e. https and https", "URL 协议与服务协议一致，例如 https 对 https"],
    ["The static server has wide-open CORS, more on that here", "静态服务器需要开放 CORS，更多说明请见这里"],
    ["Technical description:", "技术说明："],
    ["Region Management", "区域管理"],
    ["Tools", "工具"],
    ["Audio Controls", "音频控制"],
    ["Video Controls", "视频控制"],
    ["Sequential sampling", "顺序抽样"],
    ["Random sampling", "随机抽样"],
    ["Uncertainty sampling", "不确定性抽样"],
    ["Available on Label Studio Enterprise", "Label Studio 企业版可用"],
    ["Simplify project management by organizing projects into workspaces.", "通过将项目组织到工作区中来简化项目管理。"],
    ["JSONL or Parquet (Enterprise only) files require cloud storage.", "JSONL 或 Parquet 文件需要通过云存储导入（仅企业版）。"],
    ["Webhooks", "网络钩子"],
    ["Enterprise", "企业版"],
    ["Enterprise only", "仅企业版"],
    ["Export data", "导出数据"],
    ["You can export dataset in one of the following formats:", "你可以按以下格式之一导出数据集："],
    ["Read more about supported export formats in the Documentation.", "在文档中阅读更多关于支持的导出格式的信息。"],
    ["sequence labeling", "序列标注"],
    ["text tagging", "文本标注"],
    ["named entity recognition", "命名实体识别"],
    ["image segmentation", "图像分割"],
    ["object detection", "目标检测"],
    ["keypoints", "关键点"],
    ["speech recognition", "语音识别"],
    ["brush annotations", "画笔标注"],
    ["COCO with Images", "带图像的 COCO"],
    ["YOLO with Images", "带图像的 YOLO"],
    ["YOLOv8 OBB with Images", "带图像的 YOLOv8 OBB"],
    ["Brush labels to NumPy", "画笔标签导出为 NumPy"],
    ["Brush labels to PNG", "画笔标签导出为 PNG"],
    ["ASR Manifest", "ASR 清单"],
    ["Brush labels to COCO", "画笔标签导出为 COCO"],
    ["Can't find an export format?", "找不到需要的导出格式？"],
    ["Please let us know in Slack or submit an issue to the Repository", "请在 Slack 告诉我们，或向代码仓库提交 issue"],
    ["Having a timeout or trouble exporting large projects?", "导出大型项目时遇到超时或其他问题？"],
    ["Play / Pause Audio", "播放 / 暂停音频"],
    ["Play / Pause Video", "播放 / 暂停视频"],
    ["Docs", "文档"],
    ["See Docs", "查看文档"],
    ["Authenticate with our API using your personal access token.", "使用你的个人访问令牌通过 API 进行身份验证。"],
    ["Create New Token", "创建新令牌"],
    ["We'll send you sms with code if you change your number", "如果你修改电话号码，我们会通过短信向你发送验证码"],
    ["Incorrect phone number!", "电话号码不正确！"],
    ["Copy your new access token from below and keep it secure.", "请复制下面的新访问令牌并妥善保管。"],
    ["Manage your access tokens securely", "请安全管理你的访问令牌"],
    ["Do not share this key with anyone. If you suspect any keys have been compromised, you should revoke them and create new ones.", "不要将此密钥分享给任何人。如果你怀疑任何密钥已泄露，应立即撤销并重新创建新的令牌。"],
    ["Auto", "自动"],
    ["Light", "浅色"],
    ["Dark", "深色"],
  ];

  function preserveWhitespace(original, replacement) {
    const leading = (original.match(/^\s*/) || [""])[0];
    const trailing = (original.match(/\s*$/) || [""])[0];
    return leading + replacement + trailing;
  }

  function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function applyFragmentReplacements(value) {
    let updated = value;

    for (const [from, to] of fragmentReplacements) {
      if (!updated.includes(from)) continue;
      const pattern = new RegExp(`(?<![A-Za-z])${escapeRegex(from)}(?![A-Za-z])`, "g");
      updated = updated.replace(pattern, to);
    }

    updated = updated.replace(
      /(\d+)\s+files uploaded/g,
      (_, count) => `已上传 ${count} 个文件`,
    );
    updated = updated.replace(
      /(\d+)\s+file uploaded/g,
      (_, count) => `已上传 ${count} 个文件`,
    );
    updated = updated.replace(
      /Columns:\s*(\d+)/g,
      (_, count) => `列数：${count}`,
    );
    updated = updated.replace(
      /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4}),\s*(\d{1,2}:\d{2})(?::(\d{2}))?/g,
      (_, d, m, y, hm, s) => `${y}年${({
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
        Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
      })[m]}月${Number(d)}日 ${s ? `${hm}:${s}` : hm}`,
    );
    updated = updated.replace(
      /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})\s*[∙·-]\s*(\d{1,2}:\d{2}:\d{2})/g,
      (_, m, d, y, hms) => `${y}年${({
        January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
        July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
      })[m]}月${Number(d)}日 ${hms}`,
    );
    updated = updated.replace(
      /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\s+(\d{4}),\s*(\d{1,2}:\d{2})(?::(\d{2}))?/g,
      (_, m, d, y, hm, s) => `${y}年${({
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
        Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
      })[m]}月${Number(d)}日 ${s ? `${hm}:${s}` : hm}`,
    );
    updated = updated.replace(
      /(\d{1,2}:\d{2})\s*AM/g,
      (_, hm) => `上午 ${hm}`,
    );
    updated = updated.replace(
      /(\d{1,2}:\d{2})\s*PM/g,
      (_, hm) => `下午 ${hm}`,
    );
    updated = updated.replace(
      /(\d+)\s*\((\d+)\s+new\)/g,
      (_, total, count) => `${total}（新增 ${count}）`,
    );
    updated = updated.replace(
      /We recommend\s+(Cloud storage|云存储)\s+over direct uploads due to upload limitations\./g,
      (_, storage) => `由于${storage}更稳定，我们建议使用${storage}而不是直接上传，因为直接上传存在上传限制。`,
    );
    updated = updated.replace(
      /We recommend\s+(Cloud storage|云存储)\s+over\s+(direct uploads|直接上传)\s+due to\s+(upload limitations|上传限制)\./g,
      (_, storage) => `由于${storage}更稳定，我们建议使用${storage}而不是直接上传，因为直接上传存在上传限制。`,
    );
    updated = updated.replace(
      /over\s+(direct uploads|直接上传)\s+due to/g,
      "而不是直接上传，因为",
    );
    updated = updated.replace(
      /For PDFs, use\s+(multi-image labeling|多图标注)\./g,
      "对于 PDF，请使用多图标注。",
    );
    updated = updated.replace(
      /For PDFs,\s*use/g,
      "对于 PDF，请使用",
    );
    updated = updated.replace(
      /Check the documentation to\s+(import preannotated data|导入预标注数据)\./g,
      "查看文档以导入预标注数据。",
    );
    updated = updated.replace(
      /Check the documentation to/g,
      "查看文档以",
    );
    updated = updated.replace(
      /Please let us know in\s+Slack\s+or submit an issue to the\s+Repository\./g,
      "请在 Slack 告诉我们，或向代码仓库提交 issue。",
    );
    updated = updated.replace(
      /For PDFs,\s*use\s+(multi-image labeling|多图标注)\.\s*JSONL\s+或\s+Parquet\s+文件需要通过云存储导入（仅企业版）。/g,
      "对于 PDF，请使用多图标注。JSONL 或 Parquet 文件需要通过云存储导入（仅企业版）。",
    );
    updated = updated.replace(
      /Check the documentation to\s*(import preannotated data|导入预标注数据)\./g,
      "查看文档以导入预标注数据。",
    );
    updated = updated.replace(
      /about\s+(\d+)\s+hours ago/g,
      (_, count) => `约 ${count} 小时前`,
    );
    updated = updated.replace(
      /about\s+(\d+)\s+minutes ago/g,
      (_, count) => `约 ${count} 分钟前`,
    );
    updated = updated.replace(
      /There was an issue loading URL from\s+/g,
      "从图片字段加载 URL 时出现问题：",
    );
    updated = updated.replace(
      /Things to look out for:/g,
      "请检查以下内容：",
    );
    updated = updated.replace(
      /URL is valid/g,
      "URL 有效",
    );
    updated = updated.replace(
      /URL scheme matches the service scheme, i\.e\. https and https/g,
      "URL 协议与服务协议一致，例如 https 对 https",
    );
    updated = updated.replace(
      /The static server has wide-open CORS,\s*more on that here/g,
      "静态服务器需要开放 CORS，更多说明请见这里",
    );
    updated = updated.replace(
      /Technical description:/g,
      "技术说明：",
    );
    updated = updated.replace(
      /Error while loading audio\. Check\s+/g,
      "加载音频时出错，请检查 ",
    );
    updated = updated.replace(
      /field in task\./g,
      " 字段。",
    );
    updated = updated.replace(
      /URL:\s+/g,
      "URL：",
    );

    return updated;
  }

  function translateExact(value) {
    if (!value) return value;

    const trimmed = value.trim();

    if (!trimmed) return value;

    if (exactTextMap.has(trimmed)) {
      return preserveWhitespace(value, exactTextMap.get(trimmed));
    }

    const lowered = trimmed.toLowerCase();

    if (lowerTextMap.has(lowered)) {
      return preserveWhitespace(value, lowerTextMap.get(lowered));
    }

    for (const [pattern, replacement] of patternReplacements) {
      if (pattern.test(trimmed)) {
        return preserveWhitespace(value, trimmed.replace(pattern, replacement));
      }
    }

    return applyFragmentReplacements(value);
  }

  function shouldSkip(element) {
    if (!element) return true;
    if (skippedTags.has(element.tagName)) return true;
    return Boolean(element.closest("script, style, noscript, textarea, code, pre, svg, [data-no-zh-cn='true']"));
  }

  function shouldKeepEnglishTypeOption(element, value) {
    if (!element || !value) return false;

    const trimmed = value.trim();

    if (!["Audio", "Video", "Text", "音频", "视频", "文本"].includes(trimmed)) return false;

    let scope = element;

    for (let i = 0; i < 6 && scope; i += 1) {
      const context = (scope.textContent || "").replace(/\s+/g, " ");
      if (["String", "Number", "Image", "Time"].every((word) => context.includes(word))) {
        return true;
      }
      scope = scope.parentElement;
    }

    return false;
  }

  function restoreEnglishTypeOption(value) {
    const trimmed = value.trim();
    const map = new Map([
      ["音频", "Audio"],
      ["视频", "Video"],
      ["文本", "Text"],
    ]);

    if (!map.has(trimmed)) return value;

    return preserveWhitespace(value, map.get(trimmed));
  }

  function replaceElementTextNodes(element, replacement) {
    if (!element) return;

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node = walker.nextNode();

    while (node) {
      if (node.nodeValue && node.nodeValue.trim()) {
        textNodes.push(node);
      }
      node = walker.nextNode();
    }

    if (!textNodes.length) return;

    const first = textNodes.shift();
    first.nodeValue = preserveWhitespace(first.nodeValue, replacement);

    for (const extra of textNodes) {
      extra.nodeValue = extra.nodeValue.replace(/\S+/g, "");
    }
  }

  function normalizeSpecialElementText(element) {
    if (!element || shouldSkip(element)) return;

    const text = (element.textContent || "").replace(/\s+/g, " ").trim();

    if (/标注\s*全部\s*(Tasks|Task\s*s|任务)/.test(text)) {
      replaceElementTextNodes(element, "全部标注任务");
      return;
    }

    const typePatterns = [
      [/^(aud\s*)?音频$/i, "Audio"],
      [/^(vid\s*)?视频$/i, "Video"],
      [/^(txt\s*)?文本$/i, "Text"],
    ];

    for (const [pattern, replacement] of typePatterns) {
      if (pattern.test(text)) {
        replaceElementTextNodes(element, replacement);
        return;
      }
    }
  }

  function normalizeSpecialElementTree(element) {
    let current = element;

    for (let i = 0; i < 5 && current; i += 1) {
      normalizeSpecialElementText(current);
      current = current.parentElement;
    }
  }

  function translateTextNode(node) {
    const parent = node.parentElement;

    if (!parent || shouldSkip(parent)) return;
    if (shouldKeepEnglishTypeOption(parent, node.nodeValue)) {
      const restored = restoreEnglishTypeOption(node.nodeValue);
      if (restored !== node.nodeValue) {
        node.nodeValue = restored;
      }
      normalizeSpecialElementTree(parent);
      return;
    }

    const translated = translateExact(node.nodeValue);

    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }

    normalizeSpecialElementTree(parent);
  }

  function translateAttributes(element) {
    if (shouldSkip(element)) return;

    for (const name of attributeNames) {
      if (!element.hasAttribute(name)) continue;

      const value = element.getAttribute(name);
      const translated = translateExact(value);

      if (translated !== value) {
        element.setAttribute(name, translated.trim());
      }
    }

    if (element instanceof HTMLInputElement && /^(button|submit)$/.test(element.type || "")) {
      const translated = translateExact(element.value);
      if (translated !== element.value) {
        element.value = translated.trim();
      }
    }
  }

  function translateRoot(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    if (
      root.nodeType !== Node.ELEMENT_NODE &&
      root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
      root !== document.body &&
      root !== document.documentElement
    ) return;

    const elementRoot =
      root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? root
        : document.body;

    if (!elementRoot) return;

    if (elementRoot.nodeType === Node.ELEMENT_NODE) {
      translateAttributes(elementRoot);
      normalizeSpecialElementText(elementRoot);
    }

    const allElements = elementRoot.querySelectorAll ? elementRoot.querySelectorAll("*") : [];

    for (const element of allElements) {
      translateAttributes(element);
      normalizeSpecialElementText(element);
    }

    const walker = document.createTreeWalker(elementRoot, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      translateTextNode(node);
      node = walker.nextNode();
    }
  }

  function flush() {
    scheduled = false;
    const roots = Array.from(pendingRoots);
    pendingRoots.clear();

    if (!roots.length) {
      roots.push(document.body);
    }

    for (const root of roots) {
      translateRoot(root);
    }
  }

  function schedule(root) {
    pendingRoots.add(root || document.body);

    if (scheduled) return;

    scheduled = true;
    window.requestAnimationFrame(flush);
  }

  function observeRoot(root, observerFactory) {
    if (!root || observedRoots.has(root)) return;
    observedRoots.add(root);
    const observer = observerFactory();
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  function scheduleShadowRoots(root, observerFactory) {
    if (!root) return;

    const elements = [];

    if (root.nodeType === Node.ELEMENT_NODE) {
      elements.push(root);
    }

    if (root.querySelectorAll) {
      elements.push(...root.querySelectorAll("*"));
    }

    for (const element of elements) {
      if (element.shadowRoot) {
        observeRoot(element.shadowRoot, observerFactory);
        schedule(element.shadowRoot);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    schedule(document.body);
    const makeObserver = () => new MutationObserver(function (mutations) {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          schedule(mutation.target);
          continue;
        }

        if (mutation.type === "childList") {
          for (const node of mutation.addedNodes) {
            schedule(node);
            scheduleShadowRoots(node, makeObserver);
          }
        }
      }
    });

    observeRoot(document.documentElement, makeObserver);
    scheduleShadowRoots(document.documentElement, makeObserver);
  });

  window.addEventListener("load", function () {
    schedule(document.body);
  });

  window.addEventListener("hashchange", function () {
    schedule(document.body);
  });
})();
