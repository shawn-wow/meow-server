# meow-server

meow-server是Meow浏览器的一个后端服务，目前主要用于管理Meow浏览器的用户。
Meow浏览器是一个专注视频资源获取的浏览器。
"Meow-Server is a backend service for the Meow Browser, currently primarily used for managing its users.
Meow Browser is a web browser focused on video resource acquisition."

Meow浏览器
Meow Browser

## 1. 简介

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/logo.png)Meow（快喵）浏览器是基于Chromium开源内核开发的新一代浏览器，专注于提供极速、安全、便捷的网络浏览体验。界面语言支持**中文和英文**。【[B站视频演示](https://space.bilibili.com/247302096)】
Meow is a next-generation browser built on the open-source Chromium engine, designed for blazing-fast, secure and effortless web browsing. **Chinese** and **English** are supported as interface languages. 【[Deomo on Bilibili](https://space.bilibili.com/247302096)】

【[官方网站](https://shawn.free.nf/)】【[Meow用户指北--从下载到删除](https://shawn.free.nf/meow/)】【[最新版本下载链接](https://gitee.com/shawn-wow/meow/releases)】
[Official Site](https://shawn.free.nf/) | [User Guide: From Install to Uninstall](https://shawn.free.nf/meow/) | [Latest Release](https://gitee.com/shawn-wow/meow/releases)

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/features.png)
![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/settings-English.png)

**高效地广告拦截** ：Meow内置智能广告拦截引擎，能够有效屏蔽各类广告和跟踪器，减少干扰，提升页面加载速度，让您的浏览过程更加流畅。
Powerful Ad Blocker: Meow ships with an intelligent ad-blocking engine that wipes out ads and trackers, cutting page-load times and keeping your view clean.

**便捷地视频下载**：Meow内置实用的视频解析工具，支持全网主流的视频平台（1000+），只需简单操作，即可将视频一键解析并下载至本地，方便您随时收藏和学习。
One-Click Video Downloader: A built-in parser supports 1,000+ mainstream platforms—just one click to analyze and save videos locally for offline enjoyment or study.

**超强的资源抓取**：Meow内置超强的资源嗅探器，能轻松抓取网页中的音视频资源链接，并提供在线预览和一键下载功能。省去您在浏览器里不断F12+F5分析查找，然后再用其它下载工具下载。
Super Sniffer: Meow’s resource sniffer effortlessly captures audio & video URLs and offers instant preview plus one-tap download—no more F12 detective work.

**特殊平台的资源获取**：Meow内置系统代理的功能，可助您轻松获取某些平台的资源（如不能用浏览器访问的蝴蝶号）
Proxy for Special Platforms: Built-in system proxy lets you fetch resources from hard-to-reach platforms (e.g., “WeChat channel” live streams).

**直播录播**：Meow内置直播录播的功能，可助您在看主播激情表演的同时，也能将主播美妙的视频片段高质量地保存到你的电脑
Live Stream Recorder: Record live streams in high quality while you watch—never miss a highlight.

本软件提供了多个解析引擎，多种资源获取渠道，尽最大能力保障您喜欢的视频资源能够躺在您的硬盘里吃灰。**「Meow的终极奥义！」**
Multiple engines and channels ensure your favorite videos can rest safely on your hard drive. “The ultimate Meow power!”

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/video-features.png)

## 2. 界面
UI

### 2.1 程序主界面&新标签页
2.1 Main UI & New Tab

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/newtab.png)

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/meow-tools.png)

##### 按钮1： 广告拦截器
Button 1: Ad Blocker

**三种模式**：启用/关闭，正常模式（显示拦截广告的数量）、静默模式（默认，不显示拦截数）
Three modes: On/Off, Normal (shows blocked count), Silent (default, no count).

##### 按钮2： 视频解析&下载
Button 2: Video Parse & Download

可解析下载当前页面的视频。内置的解析引擎支持1000+国内外平台。
Parses and downloads videos from the current page, supporting 1,000+ sites worldwide.

**国内平台**：腾讯视频、优酷、搜狐、A站、B站、小红书、抖音、快手、西瓜、知乎、百度快看、微博、央视频、芒果TV、梨视频...
China: Tencent Video, Youku, Sohu, AcFun, Bilibili, Xiaohongshu, Douyin, Kuaishou, Xigua, Zhihu, Baidu Kuaikan, Weibo, CCTV, Mango TV, Pear Video…

**国际平台**：YouTube、DailyMotion、vimeo、VKonatakte、TikTok、Facebook、Twitch、Snapchat、...
International: YouTube, DailyMotion, Vimeo, VK, TikTok, Facebook, Twitch, Snapchat…

##### 按钮3：音频解析&下载
Button 3: Audio Parse & Download

可解析下载当前页面**视频中的音频数据**(MP3)，与视频解析同一个解析引擎。
Extracts MP3 audio from the current video using the same engine as video parsing.

对于音频与视频分离的平台数据（例如YouTube），Meow将直接下载音频部分。若平台提供的视频数据为音视频合一格式，Meow先下载整个视频文件，随后精准提取其中的音频内容（已下载的视频文件也会保留）。
For platforms where audio & video are separate (e.g., YouTube), the audio stream is downloaded directly; otherwise, the full video is fetched first, then the audio is extracted while keeping the original file.

##### 按钮4：嗅探器&下载
Button 4: Sniffer & Download

可抓取当前页面的音视频资源链接
Captures audio & video URLs on the current page.

在当前网页点击嗅探器按钮，即可刷新页面并实时监听该页面的HTTP请求与应答。此功能与使用F12键打开浏览器开发者工具类似，但嗅探器能够自动为您筛选出音视频资源的链接，简化操作流程。
Clicking the sniffer refreshes the page and monitors HTTP traffic, filtering out media links—no need to open DevTools.

在线预览：嗅探器捕获的资源支持在线预览功能。通常情况下，能够在线预览的资源均可下载，而无法预览的资源则可能无法下载。
Online preview: resources that can be previewed are usually downloadable; otherwise, they may be protected.

##### 按钮5：超级嗅探器&下载
Button 5: Super Sniffer & Download

具备与嗅探器相同的功能，但能够对页面中的多次请求进行全面分析，实现深度搜索。
Same as the sniffer but performs deep analysis across multiple requests.

相较于嗅探器，超级嗅探器可能搜索出更多的资源链接（结果非绝对），但相应地，您需要花费更多时间进行挑选和区分。
May yield more links, but you’ll spend extra time distinguishing the valid ones.

##### 按钮6：启动代理&下载
Button 6: Enable Proxy & Download

此功能将Meow设置为系统代理服务器，可用于获取某些软件资源， 如**蝴蝶号**。首次使用时，请按照提示安装代理所需的证书。Meow正常关闭时，代理将自动关闭。
Turns Meow into a system proxy to fetch resources from restricted platforms like “Butterfly.” Certificates are installed on first use; the proxy auto-closes when Meow quits normally.

**注：启动代理时，可能会影响到嗅探器资源的下载，此时需要您暂时关闭代理。建议当只有在获取特殊平台资源（蝴蝶号）时才启动代理。**
Note: Enabling proxy may interfere with sniffer downloads—disable it when not needed.

▓▓▓▓▓▓**若在启动代理时Meow被强制关闭**（任务管理器->结束任务），Meow代理可能不会被关闭。此时可能会影响到你的上网，若遇到此情况，可按如下方法关闭系统代理：
If Meow is force-closed while proxy is on, the system proxy may remain active. To restore:

方法一：重新启动Meow，点击启动代理/关闭代理
Method 1: Restart Meow and toggle the proxy off.

方法二：在操作系统关闭代理（Windows11：【网络和Internet】-【代理】-【手动设置代理】-【设置】-关闭【使用代理服务器】）
Method 2: Windows Settings → Network & Internet → Proxy → Manual proxy setup → turn off “Use a proxy server.”

##### 按钮7：直播录播
Button 7: Live Stream Recording

在支持的直播平台页面，用户可点击“直播录制”按钮，实时保存当前直播内容，满足回看、剪辑或存档需求。
On supported live platforms, click “Record Live” to save streams in real time for replay, editing, or archiving.

**多平台覆盖**：哔哩哔哩、抖音、快手、淘宝、虎牙、斗鱼、YY、CC、AcFun、微信小程序、Twitch、TikTok（持续扩展中）
Platforms: Bilibili, Douyin, Kuaishou, Taobao, Huya, Douyu, YY, CC, AcFun, WeChat Mini-Programs, Twitch, TikTok (and more).

**多任务并行录制**：支持同时开启多个直播间录制，轻松管理不同主播的直播内容。（并行数受限于电脑性能和网络宽带）
Multi-stream recording: record several rooms at once—only limited by your hardware and bandwidth.

**自定义分辨率**：原画、高清、标清等，按需选择高清画面满足视觉盛宴或标清画面节省存储空间。
Resolution choice: original, HD, or SD to balance quality vs. storage.

**智能自动录制**：开启自动模式后，系统将实时监测主播状态，开播即录，无需手动操作。
Auto-record: monitors streamers and starts recording automatically when they go live.

**智能分片**：录制过程中，视频数据按固定时间间隔自动分割为独立分片。每个分片数据边生成边写入磁盘，避免在内存中堆积，降低内存占用峰值。录制结束后，Meow自动按时间顺序拼接所有分片，生成完整视频文件。这样可以高效利用系统资源，保障录制稳定性，实现“零卡顿、零丢失”的**长时间录制**体验。
Smart chunking: splits recordings into small segments that are written to disk on the fly, keeping memory usage low and ensuring zero-drop long recordings.

**便捷管理界面**：在录制管理页面自由移除直播间，查看和删除录播文件。
Management panel: add/remove rooms, view or delete recordings with ease.

##### 按钮8：媒体工具集
Button 8: Media Toolbox

这是一个下拉菜单，里面提供了更多的实用的音视频功能：
Dropdown menu with additional audio/video utilities:

合并音视频：当使用嗅探器嗅探到某些平台的资源链接时，音频和视频资源可能是分开的。您可分别下载后，利用此功能将其合并为一个完整文件。  
Merge audio & video: combine separate tracks into one file.
提取视频：支持从视频中提取纯视频内容（去除声音）。  
Extract video only: strip audio to get clean video.
提取音频：支持从视频中提取音频内容（MP3格式）。如提取某个视频的背景音乐。
Extract audio: save the soundtrack as MP3.

##### 按钮9：下载对话框
Button 9: Download Dialog

这是一个下拉对话框，里面提供了简单的下载管理功能：
Simple download manager:

快捷按钮：下载页面按钮；下载目录按钮；清除失败记录按钮；清除所有记录按钮。
Quick buttons: open downloads page, open download folder, clear failed tasks, clear all records.

下载任务列表：显示下载任务详细信息
Task list: detailed download progress.

##### 按钮10：直播录播管理界面入口
Button 10: Live Recording Manager

点击后可以进入直播录播管理界面
Opens the centralized live-recording manager.

##### 按钮11：“设置及其它”下拉菜单
Button 11: Settings & More

这是一个下拉菜单，相当于Meow的主菜单
Main menu with quick access to settings and other utilities.

#### **诸多资源获取姿势，如何选择？？？**
Which Method Should I Use?

**首选**视频解析/音频解析、启动代理（特殊平台）。视频质量通常会比较高（非绝对）。
First choice: video/audio parser or proxy for restricted platforms—usually the highest quality.

**次选**嗅探器
Second choice: sniffer.

**再选**超级嗅探器
Last choice: super sniffer.

*因各视频平台技术架构各异，且各平台一直在更新迭代，可能会导致某些资源获取姿势失效。只有充分变换各种姿势，才能让您的硬盘占用空间越来越大*。
Platform tech changes constantly—rotate methods as needed to keep your disk space shrinking… or growing!

### 2.2 首次启动引导页

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/landing.png)

### 2.3 设置

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/settings.png)

### 2.4 下载管理

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/downloads.png)

### 2.5 直播录播管理

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/live-recording.png)

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/live-recording2.png)

### 2.6 书签管理

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/bookmarks.png)

### 2.7 历史记录管理

![vidkit](https://gitee.com/shawn-wow/meow/raw/master/images/history.png)

# 开发

## 运行（开发模式）

在运行 meow 之前，请确保你的机器上安装了**最新版本**的 [`Node.js`](https://nodejs.org/en/) 和 [`YARN`]。  
meow 项目**不支持**使用 NPM。你**需要**使用最新的 Yarn v2/v3 版本。

### Windows 系统

确保你已经安装了构建工具。你可以以**管理员身份**运行以下命令来安装它们：

```bash
$ npm i -g windows-build-tools
```

Yarn：  
你需要确保安装了最新版本的 YARN（Yarn Berry）。

```bash
$ yarn install # Install node modules
$ yarn build # Compile meow code and rebuild modules.
$ yarn dev # Run meow in development mode
```

NPM：不再支持

### 更多命令

```bash
$ yarn compile-win32 # Package meow for Windows
$ yarn compile-linux # Package meow for Linux
$ yarn compile-darwin # Package meow for macOS
$ yarn lint # Runs linter
$ yarn lint-fix # Runs linter and automatically applies fixes
$ yarn copyright # Generates auto headers for copyright.
```

更多命令可以在 `package.json` 文件中找到。

## 运行（非开发模式（稳定版））

在运行 meow 之前，请确保你的机器上安装了**最新版本**的 [`Node.js`](https://nodejs.org/en/) 和 [`YARN`]。你可以使用 NPM，但**不推荐**。

### Windows 系统

确保你已经安装了构建工具。你可以以**管理员身份**运行以下命令来安装它们：

```bash
$ npm i -g windows-build-tools
```

Yarn:

```bash
$ yarn install # Install node modules
$ yarn build # Compile meow code and rebuild modules.
$ yarn start # Run meow in development mode
```

NPM: 不推荐

```bash
$ npm install --save --legacy-peer-deps # Install needed depedencies. If you can, please, use yarn install.
$ npm run build # Compile meow code and rebuild modules.
$ npm run start # Run meow in development mode
```

# 版权说明

本软件提供的便捷的本地视频存储功能，旨在方便您收集个人喜爱的视频资料或获取合法创作素材，仅供学习交流使用，请勿用于非法用途。我们坚决反对并禁止任何非法用途的使用。虽然本软件为您提供了从各种平台下载视频的服务，但您有责任尊重并遵守相关法律法规和各个视频平台或内容创作者的版权政策。  
我们强烈建议您将下载的视频内容仅限于个人欣赏与学习之用，并在下载后的24小时内及时删除。我们鼓励您访问资源的原始发布网站进行观看，并支持原创作品。未经原作者明确授权，请勿用于其它任何目的。

# 联系与支持

- 代码仓库：[Gitee: shawn-wow/meow](https://gitee.com/shawn-wow/meow)
- 版本更新：软件会提示更新或手动检查更新（注：开源代码不再更新，软件包持续更新中）
- 使用交流：B站[九漏非鱼]
