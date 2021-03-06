# HBuilder X - Release Notes
======================================
## 3.2.3.20210825
* 【uni-app插件】
  + App平台 修复 3.2.2 版本引出的资源重复编译的Bug [详情](https://ask.dcloud.net.cn/question/129157)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为4.400.1270版，iOS为4.13.02版；快手广告SDK iOS为3.3.14版；快手内容联盟SDK iOS为3.3.22版
  + Android平台 修复 图片选择不设置 sizeType 时默认不显示`原图`按钮，选择图片会进行压缩的Bug [详情](https://ask.dcloud.net.cn/question/129156)
  + iOS平台 修复 3.2.2 版本引出的 微信登录、分享、支付，QQ登录、分享在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129378)
  + iOS平台 修复 新浪分享模块在某些安全平台检测可能误报使用 UIWebview APIs 的Bug

## 3.2.2.20210818
* 【重要】新增 uni-app项目在 manifest-基础配置中 切换项目的 vue版本 使用2或3 （vue3版暂不支持app） [详情](https://ask.dcloud.net.cn/article/37834)
* 【重要】新增 uni-app 支持运行和发布到 快手小程序
* 新增 Git插件 支持在项目管理器上显示Git分支并可点击进行快捷操作 [详情](https://hx.dcloud.net.cn/Tutorial/SourceControl/git)
* 新增 左下角账号快捷切换
* 新增 设置项 选择自动换行方式 按单词截取、按字符截取 （【设置 - 编辑器配置】，选择自动换行方式）
* 新增 插件API 插件command支持声明快捷键 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=keybindings)
* 新增 插件API 新增when表达式 isMac、isWindows、editorHasSelection [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 修复 插件开发 Windows 控制台日志部分路径无法打开的Bug
* 修复 自定义主题 编辑器上某些颜色无法自定义的Bug
* 修复 项目管理器 单击预览文件，文件缩进和.editorconfig缩进配置不一致的Bug
* 新增 项目管理器 对被自定义编辑器关联的文件，增加“打开方式”菜单（【设置】源码视图，增加自定义编辑器文件关联配置）
* 修复 某些情况下，因.editorconfig文件内容不合法，打开后编辑器出现崩溃的Bug
* 修复 多屏情况下并且界面在第二个屏幕上，快捷键冲突时，冲突菜单显示位置不对的Bug
* 修复 Windows 多屏DPI不一致时，导致编辑器文字排版错乱的Bug
* 修复 当编辑器标签卡存在搜索结果页时，ctrl+tab切换最近的标签卡，切换列表，出现多条名称为“搜索结果”的Bug
* 修复 某些编程语言(Python)，安装相应代码块插件后，无法提示代码块的Bug
* 修复 某些情况下，转到定义激活后, 文字无法恢复普通状态的Bug
* 修复 JavaScript `switch case`语句 换行会自动加逗号的Bug [详情](https://ask.dcloud.net.cn/question/113434)
* 修复 JavaScript Vue模板字符串 换行会自动加逗号的Bug [详情](https://ask.dcloud.net.cn/question/126186)
* 修复 编辑器启动后，已打开的文件，右键菜单【重排代码格式】菜单置灰的Bug
* 修复 条件编译，鼠标双击注释内容，选区不正确的Bug
* 修复 Markdown折叠 文件换行符为'\r'时折叠计算错误的Bug
* 修复 MacOSX，双击uni-app、uniCloud加密文件在编辑器打开后，编辑器无法最小化的Bug
* 优化 MacOSX，新建项目界面，增加模板列表显示条目数量
* 调整 原生App-云打包，原生插件包名校验不分区大小写
* 修复 原生App-云打包，打包结果控制台，一键上传到uniCloud，协作者无法上传安装包到uniCloud服务空间的Bug
* 修复 iOS安心打包 某些情况下，App安装包mainfest.json文件不是最新的Bug
* 新增 插件市场 导入uniapp原生SDK项目 导入HBuilderX后，自动将appid和pluginID绑定
* 修复 uni_modules 插件市场导入`uni_modules`插件，某些情况下，提示`处理外部应用请求未能完成`的Bug
* 优化 uniCloud clientDB的field代码提示
* 新增 uniCloud 初始化向导 增加【部署项目下的DB Schema及扩展校验函数】选项
* 新增 uniCloud 前端网页托管 支持协作者上传网站到服务器
* 优化 uniCloud 前端网页托管 优化上传网站到服务器的界面
* 修复 uniCloud 创建公共模块、uni-clientDB-actions、schema、validateFunction时，同类资源本地存在同名时提示语不正确的Bug
* 优化 uni-app 发行到H5、制作wgt，增加校验
* 优化 uni-app 新建项目 包含付费云函数的项目 自动拉起初始化向导
* 新增 uni-app 插件大赛一等奖获奖作品内置到新建项目模板中 [详情](https://ask.dcloud.net.cn/article/39133)
* 新增 App manifest.json 一键生成iOS通用链接 支持QQ登录、QQ分享、新浪微博登录、新浪微博分享 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)
* 修复 App 真机运行 某些情况下，获取iOS自定义基座版本号错误，导致每次修改代码都会重新安装基座到手机的Bug
* 【uni-app插件】
  + App平台、H5平台 新增 input 组件 type 支持 tel 类型
  + App平台、H5平台 新增 input 组件支持 text-content-type 属性
  + App平台、H5平台 修复 3.1.22 版本引出的 scroll-view 组件下拉刷新失效的Bug
  + App-Andriod平台 优化 uni.chooseImage 图片选择界面增加`原图`按钮
  + App-Android平台 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug [详情](https://ask.dcloud.net.cn/question/128442)
  + App-iOS平台 修复 压缩后的视频无法通过 plus.io 接口操作的Bug
  + App-iOS平台 修复 nvue map 组件 marker 设置 label 的 bgColor 为透明值无效的Bug [详情](https://ask.dcloud.net.cn/question/126459)
  + App-iOS平台 修复 uni.chooseImage 图片选择界面`原图`按钮操作逻辑不正确的Bug
  + H5平台 优化 导航栏搜索框增加清除按钮
  + 小程序平台 修复 作用域插槽内使用事件后默认使用新版作用域插槽编译模式的Bug [详情](https://ask.dcloud.net.cn/question/127297)
  + 支付宝小程序平台 修复 部分内置组件事件当做自定义事件处理的Bug
  + 【重要】 uniad广告的ad组件 支持h5平台  [详情](https://uniapp.dcloud.net.cn/component/ad)
  + 【重要】 uni ui 支持 vue3 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + HBuilder官方预置项目全面支持 vue3，包括hello uni-app、hello uniCloud、uniCloud admin、uni-starter等
  + 新增 VUE3 条件编译，方便一套代码同时兼容vue2和vue3 [详情](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + uni-ui uni-collapse 修复 由1.2.0版本引起的 change 事件返回 undefined 的Bug
  + uni-ui uni-collapse 优化 组件示例
  + uni-ui uni-collapse 新增 组件折叠动画
  + uni-ui uni-collapse 新增 value\v-model 属性 ，动态修改面板折叠状态
  + uni-ui uni-collapse 新增 title 插槽 ，可定义面板标题
  + uni-ui uni-collapse 新增 border 属性 ，显示隐藏面板内容分隔线
  + uni-ui uni-collapse 新增 title-border 属性 ，显示隐藏面板标题分隔线
  + uni-ui uni-collapse 修复 resize 方法失效的Bug
  + uni-ui uni-collapse 修复 change 事件返回参数不正确的Bug
  + uni-ui uni-collapse 优化 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
  + uni-ui uni-data-checkbox 优化 在uni-forms组件，与label不对齐的问题
  + uni-ui uni-data-checkbox 修复 单选默认值为0不能选中的Bug
  + uni-ui uni-easyinput 优化 errorMessage 属性支持 Boolean 类型
  + uni-ui uni-file-picker 修复 return-type为object下，返回值不正确的Bug
  + uni-ui uni-file-picker 修复（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
  + uni-ui uni-file-picker 优化 h5平台下上传文件导致页面卡死的问题
  + uni-ui uni-forms 修复 vue2 下条件编译导致destroyed生命周期失效的Bug
  + uni-ui uni-forms 修复 1.2.1 引起的示例在小程序平台报错的Bug
  + uni-ui uni-forms 修复 动态校验表单，默认值为空的情况下校验失效的Bug
  + uni-ui uni-forms 修复 不指定name属性时，运行报错的Bug
  + uni-ui uni-forms 优化 label默认宽度从65调整至70，使required为true且四字时不换行
  + uni-ui uni-forms 优化 组件示例，新增动态校验示例代码
  + uni-ui uni-forms 优化 组件文档，使用方式更清晰
  + uni-ui uni-list 修复 与其他组件嵌套使用时，点击失效的Bug
  + uni-ui uni-swipe-action 修复 跨页面修改组件数据 ，导致不能滑动的问题
  + hello-uniapp 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 应用管理功能，管理用户可登录的应用，如某账户只能登录管理端、不能登录用户端（uni-id@3.3.1+ 支持）
  + uniCloud admin 新增 升级系统管理 list 页的表格功能，支持数据排序、筛选、搜索等功能
  + uniCloud admin 修复 刷新页面时，左侧菜单丢失高亮状态的 bug
  + uniCloud admin 修复 修改密码失败的 bug
  + 新增 插件市场 支持前端文件加密 限付费的云端一体项目类型的前端文件 [详情](https://ask.dcloud.net.cn/article/35408)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
  + 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
  + 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
  + 【重要】Android平台 新增 androidPrivacy.json 文件配置隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK为3.8.0.6版；腾讯优量汇广告SDK为4.380.1250版；快手广告联盟SDK为3.3.12版，快手内容联盟SDK为3.3.20版
  + Android平台 更新 腾讯X5内核版本为 4.3.0.176_44076，解决在部分设备无法加载使用X5内核的问题
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.2.0，个推核心组件SDK版本为3.1.2.0
  + Android平台 修复 3.1.22 版本引出的 template 原生隐私政策提示框内容过多时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/127582)
  + Android平台 修复 3.1.19 版本引出的 UniPush 云端打包设置 GooglePlay(AAB) 渠道，getClientInfo 无法获取推送标识信息的Bug [详情](https://ask.dcloud.net.cn/question/127434)
  + Android平台 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug [详情](https://ask.dcloud.net.cn/question/127987)
  + Android平台 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug [详情](https://ask.dcloud.net.cn/question/126498)
  + Android平台 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug [详情](https://ask.dcloud.net.cn/question/128369)
  + Android平台 修复 页面中 input 标签 type 为 file 时，应用没有读写手机存储权限不会主动申请导致无法正常使用的Bug
  + Android平台 修复 VideoPlayer 播放带方向信息的视频源，暂停时显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/125783)
  + Android平台 修复 VideoPlayer 播放部分视频源，暂停时可能显示黑边的Bug [详情](https://github.com/dcloudio/uni-app/issues/2779)
  + Android平台 修复 LivePusher 推流设置的本地缓冲池过大导致延迟时间过长的Bug
  + iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
  + iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
  + iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
  + iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
  + iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug
  + iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
  + iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug
* 【uniCloud】
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
    * 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定

## 3.1.22.20210709
* 【重要】MacOSX 升级内置浏览器版本到Chrome 69、升级QT引擎到5.12.10
* 修复 插件卸载 某些插件卸载重装后，不重启HBuilderX，插件无法激活的Bug
* 修复 插件卸载 使用自定义编辑器的插件卸载后，没有恢复文件默认打开方式的Bug
* 优化 插件开发 控制台日志输出，增加文件行号的点击跳转
* 优化 大文档选择行数比较多时的性能问题
* 修复 MacOSX vue-cli项目，当电脑本身没有安装node环境时，运行项目到内置终端，相关npm命令执行失败的Bug
* 新增 底部控制台标签卡，支持鼠标滚轮翻动
* 修复 当设置中没有勾选`Ctrl+鼠标滚轮缩放编辑器`设置项时，底部控制台，鼠标滚轮缩放依然生效的Bug
* 修复 未命名标签卡收藏时，提示需要保存，但是选择了保存后仍然没有收藏成功的Bug
* 修复 编辑器 选中整行，按下tab, 行内容消失的Bug
* 新增 Markdown 列表内容为`[]()` 支持锚点跳转
* 新增 Markdown <>标签，支持转到邮箱
* 新增 Markdown 图片语法`![]()`和链接语法`[]()` 支持相对路径
* 修复 Markdown添加列表快捷键，在其它非Markdown文件也生效的Bug
* 修复 代码提示 代码助手处于数字模式时，当按下的数字大于可选项的个数时无法输入的Bug
* 优化 代码提示改为异步获取提示数据 避免某些情况计算时间过长卡UI
* 新增 支持自定义编辑器代码颜色 [详情](https://hx.dcloud.net.cn/Tutorial/themes?id=自定义编辑器代码颜色)
* 调整 json文件代码的高亮逻辑
* 修复 雅蓝、酷黑主题 HTML无效标签被加上背景色的Bug
* 修复 标签栏空白处，右键菜单，关闭所有标签卡功能无效的Bug
* 修复 底部区域标签卡过多时（比如启动多个运行项目，打开多个终端），导致窗口被撑大，并且无法缩放的Bug
* 修复 真机运行 某些Android 11系统真机运行同步文件失败的Bug
* 新增 App 原生App-云打包 Android打包 支持使用云端证书 [详情](https://ask.dcloud.net.cn/article/35985#server) 
* 新增 uni-app vue3 支持以SSR方式运行、发行H5
* 新增 代码提示 uniCloud 支持提示关联项目的schema、collection
* 修复 uniCloud 云服务空间初始化向导 当加密云函数时，某些情况下初始化失败的Bug
* 【uni-app插件】
  + 【重要】调整 App平台、H5平台 input 组件 number 类型在 iOS 平台改用仅数字键盘（九宫格），如需输入负数和小数请改用 digit 类型
  + App平台、H5平台 修复 editor 组件 insertImage 多次触发 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/124809)
  + App平台、H5平台 修复 image 组件使用 transform 样式后，大小计算错误的Bug [详情](https://ask.dcloud.net.cn/question/125987)
  + App平台、H5平台 修复 scroll-view 下拉刷新错误触发的Bug [详情](https://ask.dcloud.net.cn/question/124430)
  + App平台、H5平台 修复 input 组件同时设置 type=number 和 maxlength 时，部分情况 value 同步错误的Bug
  + App平台、H5平台 修复 textarea 组件设置 min-height 后高度异常的Bug
  + App平台 新增 一键登录自定义按钮添加 provider 属性，用于动态生成 buttons 时区分按钮 [详情](https://uniapp.dcloud.io/univerify?id=用户点击一键登录自定义按钮)
  + App平台 新增 uni.chooseImage 支持 crop 裁剪配置 [详情](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App平台 新增 video 组件支持 header 配置 [详情](https://uniapp.dcloud.io/component/video)
  + App平台 新增 uni.showToast 接口 icon 支持 error 类型
  + App平台 优化 nvue 页面中去除 display:flex 相关警告
  + App平台 优化 uni.chooseLocation 搜索结果按综合排序 [详情](https://ask.dcloud.net.cn/question/125044)
  + App-Android平台 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
  + App-Android平台 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug [详情](https://ask.dcloud.net.cn/question/123961)
  + App-Android平台 修复 uni.previewImage 长按保存图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 websocket 请求过多可能引起崩溃的Bug
  + App-Android平台 修复 tabBar 列表项不设置 selectedIconPath 在部分手机可能引起`trying to use a recycled bitmap android.graphics.Bitmap`崩溃的Bug
  + App-Android平台 修复 nvue 页面 webview 组件设置 background 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/117845)
  + App-Android平台 修复 nvue 页面 video 组件暂定播放后可能出现黑边的Bug [详情](https://ask.dcloud.net.cn/question/124152)
  + App-Android平台 修复 nvue 页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug [详情](https://ask.dcloud.net.cn/question/121039)
  + App-iOS平台 修复 调用 uni.hideKeyboard 后点击页面任意位置 input 组件自动聚焦的Bug [详情](https://ask.dcloud.net.cn/question/125233)
  + App-iOS平台 修复 nvue 页面 textarea 组件不设置 padding 时 placeholder 显示位置不正常的Bug [详情](https://ask.dcloud.net.cn/question/122376)
  + App-iOS平台 修复 iOS14.6 键盘弹出卡顿的Bug [详情](https://ask.dcloud.net.cn/question/125870)
  + H5平台 修复 input 组件设置 confirm-type 为 search 时，无法自动获取焦点的Bug
  + 小程序平台 优化 作用域插槽内支持使用作用域外数据 [#495](https://github.com/dcloudio/uni-app/issues/495)
  + 小程序平台 修复 v-for 中含有复杂表达式时，事件接收的 item 参数错误的Bug
  + 小程序平台 修复 部分数值变更无法更新的Bug [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + 百度小程序平台 修复 基础库 3.290.33 以上页面 mounted 执行两次的Bug [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + 百度小程序平台 修复 使用 usingComponents 后代码上传报错的Bug [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + 百度小程序平台 修复 部分 class 写法编译后失效的Bug
  + 支付宝小程序平台 优化 支持 useDynamicPlugins 配置 [详情](https://ask.dcloud.net.cn/article/39114)
  + QQ小程序 修复 默认启用 nodeModules 导致作用域插槽编译后运行报错的Bug
  + 字节小程序平台 修复 基础库 2.0 以上组件关系错乱的Bug [#2651](https://github.com/dcloudio/uni-app/issues/2651)
  + 字节小程序平台 修复 新版开发者工具中 uni.request 发送请求失败的Bug
* 【uniCloud】
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + uni-id 调整 3.1.1版本发布，使用兼容 uniCloud 响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17 引出的 db.on("error") 回调不执行的Bug
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + 客户端 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
  + DB Schema 调整 enum 属性最大可枚举500条数据
* 【App插件(含5+App和uni-app的App端)】
  + 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片 [规范](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + 更新 uni-AD 穿山甲SDK Android为3.7.0.2版；快手广告联盟SDK Android为3.3.10.2版，iOS为3.3.10版；快手内容联盟SDK Android为3.3.18.1版，iOS为3.3.19版；腾讯优量汇SDK iOS为4.12.71版
  + Android平台 更新 LivePusher 直播推流模块基于开源项目[yasea](https://github.com/begeekmyfriend/yasea)，支持 srs4.x
  + Android平台 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题 [详情](https://ask.dcloud.net.cn/question/126207)
  + Android平台 优化 template 原生隐私政策提示框UI样式
  + Android平台 修复 template 原生隐私政策提示框点击同意按钮前可能读取设备标识的Bug
  + Android平台 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug [详情](https://ask.dcloud.net.cn/question/124914)
  + Android平台 修复 H5页面中 intent:// 协议无法拉起三方App的Bug [详情](https://ask.dcloud.net.cn/question/124597)
  + Android平台 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug [详情](https://ask.dcloud.net.cn/question/125203)
  + Android平台 修复 getVideoInfo 方法调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/122739)
  + Android平台 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/125273)
  + Android平台 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
  + Android平台 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug [详情](https://ask.dcloud.net.cn/question/124440)
  + Android平台 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug
  + iOS平台 新增 安全区域配置 safearea 支持 backgroundDark 属性设置暗黑模式的背景颜色 [详情](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS平台 更新 云端打包环境为XCode12.5.1，解决在 iOS15 设备无法安装的Bug
  + iOS平台 更新 视频播放控件 VideoPlayer 使用的 FFmpeg 版本为 ff4.0--ijk0.8.8--20210426--001
  + iOS平台 修复 uni-AD 开屏广告在部分应用中可能引起曝光率较低的Bug
  + iOS平台 修复 uni-AD 应用从后台切换到前台开屏广告可能被其它界面覆盖的Bug
  + iOS平台 修复 uni-AD 显示穿山甲开屏广告时在部分手机上可能`跳过`按钮无法点击的Bug
  + iOS平台 修复 plus.sqlite.isOpenDatabase 不传入参数可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/114091)
  + iOS平台 修复 Geolocation 定位模块在用户未授权或设备关闭定位功能时返回错误码与规范不一致的Bug
  + iOS平台 修复 在部分情况下 WKWebView 同步共享 cookie 可能引起崩溃的Bug
* 【UniMPSDK】
  + iOS平台 修复 push 方式打开小程序手势返回关闭后偶现无法再次打开小程序页面的Bug
  + iOS平台 修复 动态设置 titleNView 样式后可能导致胶囊菜单按钮弹出的 actionSheet 部分 item 显示空白的Bug

## 3.1.18.20210609
* 修复 MacOSX 3.1.17引出的 自带中文输入法输入英文会造成部分类型的文件着色失效的Bug
* 修复 MacOSX 3.1.17引出的 10.13.6操作系统，某些情况下，HBuilderX无法启动的Bug
* 修复 Windows 3.1.17引出的 vue-cli项目，当电脑本身没有安装node环境时，运行项目到内置终端，相关npm命令执行失败的Bug
* 优化 酷黑、雅蓝主题 代码助手 选中文本颜色
* 修复 代码助手 数字模式 sass文件，某些css属性值无法正确输入数字的Bug

## 3.1.17.20210608
* 【重要】升级 HBuilderX 内置node版本升级为12.22，内置npm版本升级为6.4
* 【重要】调整 alt+鼠标滚动的行为从横向滚动调整为竖向滚动一屏。横向滚动为shift+鼠标滚轮
* 强化 各种鼠标滚轮功能，横向竖向滚动、滚3行滚一屏 [详情](https://hx.dcloud.net.cn/Tutorial/keybindings?id=鼠标滚轮)
* 新增 区域内搜索 选中一段文字，在顶部搜索栏选中区域搜索【Ctrl+Shift+f】，可以在特殊背景区内搜索、替换、全选相同词 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/find?id=区域内搜索)
* 新增 自定义右键菜单。编辑器和内置资源管理器 `Alt + 鼠标右键`弹出自定义右键菜单
* 新增 设置 增加启用自动匹配字符功能 （【设置 - 编辑器配置】，启用自动匹配字符功能）
* 新增 Git托管服务。集成CSDN CodeChina插件。新建项目或对老项目点右键可一键托管到Git [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 新增 从Git导入项目 托管在 csdn codechina 的项目可以快速导入 [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 新增 打通csdn和HBuilder的账户，在csdn web界面可使用HBuilder账户登录，并管理 code china 的Git项目
* 新增 apk、ipa文件 支持直接安装到手机 (项目管理器，选中文件，右键菜单，安装到手机)
* 【重要】优化 Vue、JavaScript(ES6+)、HTML(ES6+)、Markdown、Typescript等语言的语法着色速度、及相关大文档打开速度
* 调整 js文件的默认编辑器从JavaScript调整为JavaScript(ES6+)
* 调整 html文件的默认编辑器从HTML调整为HTML(ES6+)
* 【重要】优化 编辑器内长行的渲染性能，解决存在长行时编辑文字、滚动以及选择区域卡顿的Bug
* 优化 html/css/js/vue等文件 右键菜单，内置菜单【验证本文档语法】入口，当插件未安装时提示安装
* 修复 某些情况下，因配置文件损坏，导致HBuilderX无法启动的Bug
* 优化 插件安装 NodeJS插件npm安装失败时，提示具体失败原因
* 新增 代码助手窗口 匹配项高亮功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手匹配项高亮)
* 优化 代码助手窗口 选择模式切换功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手窗口切换选择模式)
* 修复 代码提示 try catch内，没有代码提示的Bug
* 优化 支持自定义设置折叠展开方式，可设置是否展开子行（【设置 - 编辑器配置】，代码展开方式）
* 修复 HTML标签属性 在引号内，按下tab，引号内容变成为html标签的Bug
* 优化 MacOSX 代码提示窗口 支持ctrl+p/n，上下移动选中代码
* 修复 vue-cli项目 template内，无法提示html标签代码块的Bug
* 修复 vue-cli项目 某些情况下，当转到定义的内容处于折叠区域，转到定义，没有展开折叠的Bug
* 新增 插件扩展示例webviewdialog 用于演示插件API webviewdialog的基本操作（新建插件项目时可选择相应项目模板）
* 优化 插件API registerUriHandler schema请求，浏览器调起HBuilderX后，当本地未安装相应插件时，支持直接在编辑器内安装插件，无需再跳转到插件市场
* 修复 插件API hx.workspace.getConfiguration() update操作，无法更新值为Object的Bug
* 修复 插件API hx.window.setStatusBarMessage, 带有url的消息无法跳转的Bug
* 修复 插件API setSelection 当文件中存在中文时，设置主选择区域错误的Bug
* 新增 HBuilderX CLI 支持命令行打开指定文件，并跳转到指定行列 [详情](https://hx.dcloud.net.cn/cli/file)
* 修复 HBuilderX CLI 终端执行多条CLI命令，不同CLI命令行日志相互串连的Bug
* 修复 HBuilderX CLI pack 命令行参数--iscustom没有生效的Bug
* 修复 HBuilderX CLI 新创建的项目，Android第一次打包，终端打印警告提示语后cli程序退出的Bug
* 优化 HBuilderX 插件项目类型识别
* 修复 项目管理器 项目执行Git初始化后，项目文件状态没有刷新的Bug
* 修复 项目管理器 已关闭项目窗口，当拖动控制台时，已关闭项目窗口高度被撑高的Bug
* 优化 项目管理器 悬浮收起和展开按钮增加tips
* 修复 项目管理器 Windows 当目录名称包含括号等特殊字符时，右键菜单，在外部资源管理器打开失败的Bug
* 修复 MacOSX 项目管理器，右键菜单，点击【打开文件所在目录】出现卡顿的Bug
* 修复 内置浏览器 预览html文件，重命名项目后，内置浏览器解析错误显示404的Bug
* 修复 内置浏览器 开发者工具控制台，自动记忆上次位置
* 修复 内置浏览器 拖曳HBuilderX到分屏 分屏主屏缩放不一样，导致内置浏览器页面及调试窗口被放大的Bug [详情](https://ask.dcloud.net.cn/question/110194)
* 优化 内置浏览器 地址栏单独显示一行 [详情](https://ask.dcloud.net.cn/article/37703)
* 优化 内置资源管理器 大图标模式 svg文件 图标显示图像
* 修复 内置资源管理器 新建文件夹或文件，会闪过其它图标的Bug
* 修复 内置资源管理器 某些没有预设图标的文件，显示txt图标的Bug
* 修复 内置资源管理器 无法显示以点开头的隐藏文件的Bug
* 修复 内置资源管理器 uni-app项目，右键菜单，新建组件，编辑器出现崩溃的Bug
* 修复 终端 将操作系统资源管理器文件夹拖入终端，终端变成文件浏览器的Bug
* 修复 Windows 终端 因执行策略引发的内置终端无法执行某些命令的Bug [详情](https://ask.dcloud.net.cn/question/86935)
* 修复 Windows 终端 上下来回拖动，终端底部出现空白的Bug
* 修复 Windows 控制台 分割线太细，很难选中的Bug
* 修复 Windows 编辑器标签卡，拖出一个标签卡到桌面最右边，某些情况下，无法再次拖动的Bug
* 修复 Windows 从360压缩软件里拖动目录到HBuilderX的内置资源管理器，HBuilderX没有激活到前台的Bug
* 修复 Windows 上下拖动编辑器 内置浏览器、终端窗口闪烁的Bug
* 修复 插件安装窗口 某些情况下，提醒的红色数字数量显示不准确的Bug
* 修复 MacOSX 插件安装窗口 某些情况下，显示到其它软件窗口上面的Bug
* 修复 MacOSX 检查更新弹窗 某些情况下，显示到内置刘浏览器后面的Bug
* 优化 MacOSX HBuilderX顶部菜单 第一个菜单列表 增加检查更新
* 修复 MacOSX git导入HBuilderX插件项目，导入后，直接按command+R， 编辑器闪退Bug
* 修复 MacOSX 当编辑器打开插件安装等模态窗口时，点击关闭右下角弹窗没有反应的Bug
* 修复 MacOSX 将焦点置于Git项目下的文件上，点击菜单【git 推送】，调起终端后，终端显示异常的Bug
* 修复 MacOSX 全屏幕状态下，关闭HBuilderX，重新启动后，没有进入全屏幕状态的Bug
* 修复 MacOSX HBuilderX连接并拖动到外接显示器后，某些情况下，搜索框没有光标、搜索下拉列表点击后没有反应的Bug
* 修复 切换最近的标签卡 内置资源管理器 某些情况下，标签卡列表跟已打开的标签卡对应不上的Bug
* 优化 切换最近的标签卡 当文件名相同时，标签卡列表显示项目文件路径
* 修复 标签卡 关闭所有标签卡 当标签卡数量很多时，卡顿、耗时的Bug
* 修复 标签卡 当文件名包含&符号时，标签卡文件名中的&显示不出来的Bug [详情](https://ask.dcloud.net.cn/question/81108)
* 修复 当编辑器打开的未保存文件过多时，导致HBuilderX启动速度变慢的Bug
* 修复 同时拖入多个文件（10个左右）到编辑器，编辑器打开文件，响应慢的Bug
* 优化 编辑器 失去焦点，高亮的代码变灰
* 优化 扩展视图 SFTP视图 增加文件夹图标
* 修复 选中一段代码 按下双引号，ctrl+z撤销错误的Bug
* 修复 选中一段代码 智能双击包围操作，ctrl+z撤销逻辑错误的Bug
* 修复 vue文件 某些情况下，双击等号，无法选中整个属性的Bug
* 修复 vue文件 某些情况下，双击引号内侧，无法选中引号内文字的Bug
* 修复 MacOSX 选中某行内容，上下移动行，行首出现灰色方块的Bug
* 优化 跳转 跳转行 输入0跳转到首行，输入$跳转到最后一行
* 优化 跳转 {}[]()括号 括号内输入}]) 自动跳出括号 [详情](https://ask.dcloud.net.cn/question/62646)
* 修复 搜索 字符搜索（多文件），搜索到结果后，状态栏提示`未查找到xxx`的Bug
* 修复 替换 工具栏上没有全选功能的Bug
* 新增 自定义快捷键 默认设置 增加“验证本文档语法”命令，即editor.action.validation
* 修复 快捷键 vscode快捷键方案 Ctrl+L (MacOSX: Command+L) 快捷键功能对应vscode功能错误的Bug
* 修复 快捷键 vscode快捷键方案 eslint校验 状态栏消息 跳转到下一个错误，快捷键显示错误的Bug
* 修复 快捷键 eclipse快捷键方案 Ctrl+Alt+上箭头（MacOSX: Command+Alt+上箭头），快捷键功能对应eclipse功能错误的Bug
* 修复 迷你地图 屏幕放大后，迷你地图消失后，迷你地图原先区域出现空白的Bug
* 修复 深色主题 代码助手窗口，某些文字颜色无法看清的Bug
* 修复 SVG图片 点击工具栏【预览】按钮，出现无关弹窗的Bug
* 优化 颜色预览窗口文字及UI
* 修复 颜色预览 十六进制颜色，带Alpha通道的颜色无法在编辑器预览，且不能通过Alt快捷打开颜色选择器的Bug
* 修复 搜狗输入法 设置为中文时使用英文标点，在辑器中输入`' " ( { [`不会成对出现的Bug [详情](https://ask.dcloud.net.cn/question/116356)
* 修复 MarkDown 文档结构图 代码区中`#注释`在文档结构图中显示为标题的Bug
* 优化 MarkDown 代码块不再显示缩进
* 修复 插件市场 导入uniCloud相关插件，切换云厂商时，已选好的项目名称被重置的Bug
* 优化 视图 显示前端网页托管 本地拖曳多个文件上传，每个文件上传后，文件列表实时刷新
* 修复 前端网页托管 在文件上传过程中，点击HBuilderX关闭按钮，导致HBuilderX失去响应的Bug
* 修复 前端网页托管 当文件上传确认弹窗和标签卡拖曳动作重叠时，导致编辑器UI异常的Bug
* 优化 前端网页托管 控制台日志，当有跳过的文件时，最后汇总显示跳过的文件数量
* 优化 前端网页托管 上传网站到服务器，自动记住上次选择的云服务空间
* 修复 uni-app 新建页面 某些分辨率的电脑，新建页面窗口显示不全的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1YP5O)
* 修复 uniapp-cli 创建uniCloud云开发环境 自动创建的uni_modules目录位置不对的Bug
* 修复 uniapp-cli 插件市场导入uniCloud插件，pages等目录创建错误的Bug
* 优化 uniCloud schema文件，右键菜单，增加【schema2code】，且支持schema2code插件随着HBuilderX的升级而升级
* 优化 uniCloud schema2Code 不生成pages.json，而改成pages_init.json，差量合并新页面
* 修复 uniCloud 初始化数据库，在网络不好或其他情况下，连续多次点击，导致HBuilderX闪退的Bug
* 修复 uniCloud 某些情况下，从插件市场导入云函数插件，导入到本地后，创建的目录无法展开，刷新后也没反应的Bug
* 修复 uniCloud JQL文件 按住Alt，某些情况下，导致编辑器闪退的Bug
* 修复 App 发行小程序 windows 在输入框中，按下tab，焦点跳转到取消按钮上的Bug
* 新增 App 原生App-云打包，打包日志中，增加【一键上传到uniCloud】功能，提供免费cdn
* 优化 App 原生App-云打包，代码编译中、或提交打包过程中，打包窗口底部打包按钮设为禁用状态，避免重复点击
* 修复 App 原生App-云打包，打包过程中，手动关闭打包窗口，HBuilderX崩溃的Bug
* 优化 App 制作应用wgt包 原生混淆 记住上次勾选状态
* 修复 App 安心打包，当勾选原生混淆时，第二次安心打包失败的Bug
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板，大幅节省开发工作量 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 快手广告联盟支持插屏广告
  + 新增 一键登录 全屏模式支持在登录界面添加自定义登录按钮 [详情](https://uniapp.dcloud.io/univerify)
  + 新增 获取视频信息 getVideoInfo 支持获取画面方向 orientation、视频格式 type、视频码率 bitrate [文档](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + 更新 uni-AD 快手广告联盟SDK 为3.3.9 版；快手内容联盟SDK 为3.3.16 版；腾讯优量汇SDK Android为4.360.1230版；穿山甲SDK Android为3.6.1.3版，iOS为3.6.1.2版
  + Android平台 优化 原生模板隐私政策提示框逻辑，解决部分应用市场检测到弹出隐私政策框之前读取mac地址和应用列表的问题 [文档](https://ask.dcloud.net.cn/article/36937)
  + Android平台 优化 云端打包googleplay渠道使用 Android App Bundle (AAB) 格式 [详情](https://ask.dcloud.net.cn/article/39052)
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.0.0，提升在Android高版本设备上的推送消息到达率
  + Android平台 更新 新浪微博分享、授权登录 SDK 为 10.10.0 版，适配支持 Android11 设备
  + Android平台 更新 高德地图 SDK 为 7.9.1 版，高德定位 SDK 为 5.3.1 版，友盟统计 SDK 为 9.3.8 版
  + Android平台 修复 腾讯云等安全检测平台报的部分高风险漏洞 [详情](https://ask.dcloud.net.cn/article/39020)
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android平台 修复 uni原生插件在原生模板隐私政策提示框之前可能进行初始化违规读取用户数据的Bug
  + Android平台 修复 QQ登录获取用户信息 getUserInfo 返回的昵称可能出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/120265)
  + iOS平台 优化 相册目录选择操作界面
  + iOS平台 更新 高德地图 SDK 为 1.6.4无IDFA版，适配 iOS14.5 开始 AppStore 审核要求用户许可访问IDFA数据
  + iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 playbackRate 方法设置倍数播放值为 1.25、1.5 不生效的Bug [详情](https://ask.dcloud.net.cn/question/107802)
  + iOS平台 修复 扫码时息屏后再次打开引起扫描线动画停止的Bug [详情](https://ask.dcloud.net.cn/question/124001)
  + iOS平台 修复 保存文件名称中存在中文时报错的Bug 
  + iOS平台 修复 一键登录 授权登录时需要读取IDFA的Bug

## 3.1.13.20210514
* 【uni-app插件】
  + App平台、H5平台 修复 3.1.11 版本引出的 textarea 组件固定 box-sizing 导致部分情况显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121893)
  + App平台 修复 3.1.11 版本引出的 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/122328)
  + App平台 修复 3.1.2 版本引出的 dataset 使用驼峰写法时获取数据格式与其他平台不一致的Bug [详情](https://ask.dcloud.net.cn/question/119034)
  + H5平台 修复 3.1.2 版本引出的样式中包含媒体查询时部分 rpx 单位失效的Bug [#2600](https://github.com/dcloudio/uni-app/issues/2600)
* 【uniCloud】
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 腾讯X5内核版本为 4.3.0.93，解决X5内核渲染页面时获取的UA中不包含 MQQBrowser 关键字的Bug
  + 【重要】iOS平台 优化 广告标识 IDFA 操作逻辑，适配从 iOS14.5 开始 AppStore 审核要求用户许可收集跟踪数据 [详情](https://ask.dcloud.net.cn/article/36107)
  + iOS平台 修复 3.1.11 版本引出的 横屏状态 toast 消息提示框 和 loading 提示框显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121979)
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 微信授权登录调用 authorize 动态传入 appid 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/121292)

## 3.1.12.20210428
* 修复 3.1.4版本引出的 新设备 某些情况下，首次启动，第一次点击编辑器没有反应，第二次点击才能启动的Bug
* 修复 App 原生App-云打包 服务器返回警告弹窗，用户点击取消，仍继续打包的Bug
* 优化 App 安心打包 使用原生插件时打包的App体积减小
* 修复 Windows App 制作应用wgt包 由于文件被占用，第二次制作失败的Bug
* 【uni-app插件】
  + App平台 修复 3.1.11 版本引出的 uni.chooseVideo 选取视频失败的Bug
  + App-Android平台 修复 3.1.11 版本引出的 nvue 页面在项目配置 nvueCompiler 为 weex 时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/121905)
  + App-iOS平台 修复 3.1.11 版本引起的 web-view 组件中 video 标签无法内联播放的Bug [详情](https://ask.dcloud.net.cn/question/121996)
  + uni-ui 优化 为依赖 uni-icons 的 ui 组件添加依赖, 导入后自动下载依赖
  + uni-ui 修复 uni-data-picker 非树形数据有 where 属性查询报错的问题
  + uni-ui 新增 uni-datetime-picker 日历形式日期时间选择
  + uni-ui 新增 uni-number-box v-model 双向绑定
  + uni-ui 修复 uni-number-box 浮点数运算不精确的 bug
  + uni-ui 修复 uni-number-box change 事件触发不正确的 bug
  + uni-ui 修复 uni-rate 布局变化后 uni-rate  星星计算不准确的 bug
  + uni-ui 新增 uni-transition 通过方法自定义动画
  + uni-ui 新增 uni-transition custom-class 非 NVUE 平台支持自定义 class 定制样式
  + uni-ui 优化 uni-transition 动画触发逻辑，使动画更流畅
  + uni-ui 优化 uni-transition 支持单独的动画类型
  + uni-ui 优化 uni-transition 文档示例
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug

## 3.1.11.20210423
* 【重要】新增 vue3 代码提示、转到定义，仅支持vue-cli项目
* 【重要】新增 HBuilderX CLI 部署云函数、管理云服务空间 [详情](https://hx.dcloud.net.cn/cli/uniCloud)
* 【重要】新增 HBuilderX CLI 部署和管理前端网页托管 [详情](https://hx.dcloud.net.cn/cli/uniCloud-hosting)
* 修复 HBuilderX CLI pack 命令行参数--iscustom没有生效的Bug
* 新增 在Windows资源管理器的目录点右键 使用HBuilderX打开（需要在【设置】中勾选关联右键菜单选项)
* 新增 项目管理器 悬浮显示收起和展开按钮
* 优化 项目管理器 修改项目别名窗口样式
* 修复 内置资源管理器 SVN更新操作后，文件修改时间没有更新的Bug
* 新增 插件API when表达式变量支持'-'中划线
* 优化 插件API hx.authorize.login 增加description字段，用于显示申请权限描述 [详情](http://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=login)
* 优化 MacOSX 右键菜单样式
* 修复 文件编辑状态指示器，撤销后状态异常的Bug
* 修复 关闭所有标签卡，当存在未保存文件时弹窗提示没有聚焦到文件的Bug
* 新增 插件安装 安装失败弹窗，增加重试按钮
* 新增 切换到上一个版本 增加确认弹窗
* 新增 编辑器中存在超链接时，鼠标悬停出现相关操作提示语
* 修复 HBuilderX 登录窗口 忘记密码功能失效的Bug
* 修复 uniCloud udb代码块 data没有提示的Bug
* 新增 uniCloud JQL查询 增加查看【全部信息】、【只看data】功能
* 新增 uniCloud 公共模块 增加可视化管理公共模块依赖 （对公共模块点右键->管理公共模块依赖）
* 调整 uniCloud 项目运行 默认连接本地云函数
* 新增 uniCloud 创建uniCloud云开发环境时，同时在项目下创建uni-id公共模块
* 移除 uniCloud cloudfunctions目录 右键菜单 移除“同步云端函数列表”
* 修复 uniCloud 某些情况下，uni_modules下的云函数上传没有反应的Bug
* 修复 uniCloud 单项目窗体下，关联云服务空间或项目，绑定其它项目的服务空间，项目列表显示不完整的Bug
* 新增 App 原生打包 打包控制台 打开所在目录，改为打开内置资源管理器
* 修复 App Android安心打包，打包多个渠道时，只有第一个渠道打包成功，剩余渠道包打包失败的Bug
* 修复 App Android安心打包，Windows电脑，某些情况下，因JAVA虚拟机内存问题，导致打包失败的Bug
* 新增 App manifest.json 一键生成iOS通用链接 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)
* 优化 App manifest.json AppID增加选择复制功能
* 【uni-app插件】
  + App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
  + App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
  + App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
  + App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug 
  + App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App平台 优化 uni.chooseVideo 支持 compressed 参数
  + App平台 优化 video 组件支持 enable-play-gesture 属性
  + App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
  + App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug
  + App-Android平台 修复 部分设备 input 组件设置 focus 属性为 true 时键盘收回的Bug
  + App-Android平台 修复 nvue onLoad 事件调用 plus.navigator.hideSystemNavigation 可能出现页面高度异常的Bug
  + App-Android平台 修复 nvue list 组件中加载大量图片上下滚动可能引起崩溃的Bug
  + App-Android平台 修复 nvue map 组件中多个 marker 切换后 callout 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100883)
  + App-Android平台 修复 nvue map 组件 marker 执行移动动画时 callout 可能不会跟随的Bug [详情](https://ask.dcloud.net.cn/question/120985)
  + App-Android平台 修复 nvue map 组件与页面拖拽滚动手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/120600)
  + App-Android平台 修复 nvue picker-view 组件在部分设备可能显示不正常的Bug
  + App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
  + H5平台 优化 uni.getSystemInfo 返回的 system 信息支持 Windows、Mac、Linux
  + H5平台 修复 picker-view-column 中的元素无法触发 click 等事件的Bug [详情](https://ask.dcloud.net.cn/question/119346)
  + H5平台 修复 innerAudio.stop 触发 onCanplay 的Bug [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + 小程序平台 修复 含有逻辑运算的复杂表达式编译后和预期不一致的Bug [详情](https://ask.dcloud.net.cn/question/118651)
  + 支付宝小程序平台 修复 默认插槽默认内容一直显示的Bug [详情](https://ask.dcloud.net.cn/question/116404)
  + uni-ui 新增 uni-data-picker 支持云端非树形表结构数据 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-data-checkbox nvue 下无法选中的问题 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 uni-data-picker 根节点 parent_field 字段等于null时选择界面错乱问题 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-file-picker 选择的文件非 file-extname 字段指定的扩展名报错的Bug [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-file-picker file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 修复 微信小程序 nv_navigator is not defined 报错的bug
  + uni-ui 修复 uni-load-more 在首页使用时，h5 平台报 'uni is not defined' 的 bug [详情](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui 优化 uni-pagination PC 和 移动端适配不同的 ui [详情](https://ext.dcloud.net.cn/plugin?id=32)
  + uni升级中心 App端 新增 call-check-version.js，可用于单独检测是否有更新 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + uni-id 调整 默认对用户名邮箱去除两端空格、忽略大小写 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=case-sensitive)
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
  + 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
  + 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
  + 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
  + Android平台 更新 公共测试证书，解决某些检测机构报病毒的问题 [文档](https://ask.dcloud.net.cn/article/36522)
  + Android平台 更新 gif图片库 android-gif-drawable 为 1.2.23 版，解决安全检测报存在远程代码执行漏洞的问题
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android平台 修复 UniPush个推模块过度申请权限的Bug [详情](https://ask.dcloud.net.cn/question/119240)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频的 cookie 与 X5 内核 webview 页面没有同步共享的Bug
  + Android平台 修复 一键登录 在部分设备上服务协议文本字体显示过大的Bug
  + Android平台 修复 一键登录 显示和关闭授权界面动画时间过长的Bug
  + Android平台 修复 Downloader 下载较大文件时可能引起页面无法更新的Bug
  + Android平台 修复 部分华为手机调用相机录像成功后无法找到视频文件的Bug
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
  + iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
  + iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
  + iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug

## 3.1.9.20210413
* 修复 项目管理器 uni_modules目录，某些情况下，展开目录卡顿的Bug
* 【uni-app插件】
  + App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 申请权限被用户拒绝后可能无法再次正常申请权限的Bug [详情](https://ask.dcloud.net.cn/question/120747)
  + iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
  + iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
* 【uniCloud】
  + 新增 [schema2code HBuilderX插件](https://ext.dcloud.net.cn/plugin?id=4684)，对项目下的schema文件点右键，快速生成数据的增删改查页面。[详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

## 3.1.8.20210406
* 修复 uniCloud `uni_modules`公共模块，依赖另一个`uni_modules`公共模块，上传所有云函数、公共模块及actions，公共模块依赖关系丢失的Bug
* 【uniCloud】
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度，减少冷启动概率 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引，自动删除临时数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 激励视频播放超过30秒的穿山甲广告点击跳过按钮 onClose 回调中 isEnd 属性值为 false 的Bug

## 3.1.7.20210330
* 【uni-app插件】
  + App-Android平台 修复 3.1.6 版本引出的 nvue scroll-view组件设置 scroll-x 为 true 时可能引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/119858)
  + App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 一键登录 授权登录界面使用浅色背景可能看不到 loading 显示效果的Bug

## 3.1.6.20210326
* 【重要】新增 HBuilderX CLI 支持命令行调用App打包、启动HBuilderX等操作 [详情](https://hx.dcloud.net.cn/cli/README)
* 【重要】新增 uniCloud JQL查询调试器 (uniCloud/database目录下打开JQL文件，若无文件可以右键菜单【新建JQL查询文件】) [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-runner)
* 新增 文件编辑状态指示。当行内容发生未保存变动，行首显示相应色块，鼠标悬浮色块上可预览编辑前的内容
* 修复 js语句，某些情况下，回车没有自动补充行尾逗号的Bug [详情](https://ask.dcloud.net.cn/question/118525)
* 修复 MacOSX M1芯片的电脑，svn操作，提示`svn: command not found`的Bug
* 修复 MacOSX 内置浏览器 右键菜单【查找代码中对应的DOM节点】菜单丢失的Bug [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/built-in-browser)
* 修复 插件市场 云端一体页面模板 导入HBuilderX，某些情况下，页面路径创建错误的Bug
* 修复 前端网页托管 文件上传过程中，新建页面，某些情况下，编辑器闪退的Bug
* 修复 App 原生打包 某些情况下，获取基座版本号失败，导致打包失败的Bug
* 修复 App 原生打包 带有原生插件的App，打包时，没有拷贝nativeplugins目录下android、ios目录外的文件的Bug
* 优化 uni-app 新建项目，启用uniCloud，自动创建cloudfunctions和database目录
* 修复 uniCloud 初始化向导，某些情况下，没有上传云函数，直接提示`上传uni-client-actions结束`的Bug
* 修复 uniCloud 云函数 公共模块依赖使用`\\`时，上传失败的Bug
* 优化 uniCloud目录的右键菜单内容
* 优化 uniCloud clientDB 支持collection、field 转到定义
* 优化 uniCloud clientDB 代码提示 支持提示聚合函数
* 修复 uni_modules 发布到插件市场，插件过大时上传失败的Bug
* 优化 插件API hx.authorize.login 授权登录，去掉5分钟code有效期判断
* 【uni-app插件】
  + App平台、H5平台 优化 uni.showModal、uni.showActionSheet 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 应用退出提示内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 uni.scanCode、uni.previewImage 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 修复 SelectorQuery.exec 在安卓 4.x 系统报错的 Bug
  + App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
  + App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
  + App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
  + App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
  + App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  + H5平台 优化 picker、video 组件内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + 百度小程序平台 修复 使用基础库 3.260+ 时，复杂表达式不显示的Bug [详情](https://ask.dcloud.net.cn/question/118213)
  + 百度小程序平台 修复 使用 usingComponents 引入部分动态库组件无效的Bug [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + 【重要】uni-ui 新增 调整为uni_modules目录规范，支持在HBuilderX里直接发布、更新、删除等; 
  + uni-ui 新增 uni-row 组件，栅格系统; 
  + uni-ui 新增 uni-datetime-picker 的 hide-second 属性、border 属性; 
  + uni-ui 修复 uni-datetime-picker 选择跟显示的日期不一样的 bug， 
  + uni-ui 修复 uni-datetime-picker change事件触发2次的 bug
  + uni-ui 修复 uni-datetime-picker 分、秒 end 范围错误的 bug
  + uni-ui 新增 uni-tr selectable 属性，用于 type=selection 时，设置某行是否可由全选按钮控制
  + uni-ui 新增 uni-data-checkbox 新增 disabled属性，支持nvue
  + uni-ui 优化 uni-data-checkbox  无选项时提示“暂无数据”
  + uni-ui 优化 uni-data-checkbox  默认颜色显示
  + uni-ui 新增 uni-link href 属性支持 tel:|mailto:
  + uni-ui 新增 uni-table 示例demo
  + uni-ui 修复 uni-data-picker 微信小程序某些情况下无法选择的问题，事件无法触发的问题
  + uni-ui 修复 uni-nav-bar easycom 下，找不到 uni-status-bar 的bug
  + uni-ui 修复 uni-easyinput 示例在 qq 小程序上的bug
  + uni-ui 修复 uni-forms 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
  + uni-ui 修复 uni-forms schema 默认提示语不准确的问题
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 修复 uni-forms 校验 uni-data-picker value 为 0 时，返回值错误的Bug
  + uni-ui 修复 uni-forms uni-forms-item 组件隐藏时依然触发校验的bug
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 调整 cli 项目 建议使用 easycom 方式引用组件，如使用按需引用，需手动维护组件内部引用
  + 【重要】新增 uni-app升级中心，提供完善的App升级和免费的下载CDN。前端插件 [详见](https://ext.dcloud.net.cn/plugin?id=4542)、admin端插件 [详见](https://ext.dcloud.net.cn/plugin?id=4470)
* 【uniCloud】
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + unicloud-db组件 新增 load 事件支持 pagination [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题
  + uniCloud本地调试插件 修复 公共模块修改之后无法立即生效的Bug
  + schema2code 新增 导出 uni_modules
  + schema2code 新增 format 配置 tel|email 时，支持拨打电话或调起本机邮件应用
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
* 【App插件(含5+App和uni-app的App端)】
  + 新增 相册选择界面的预览界面底部补充图片编辑功能，支持裁剪、涂鸦、马赛克、添加文字等。无需调用API，升级新版即可。
  + 新增 一键登录 支持全屏模式 [详情](https://uniapp.dcloud.io/univerify?id=fullscreen)
  + 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
  + Android平台 更新 QQ 分享、登录SDK版本为3.5.2，解决在 Android11 设备无法分享图片的Bug [详情](https://ask.dcloud.net.cn/question/118510)
  + Android平台 优化 云端打包 启动界面样式为自定义启动图时的显示速度
  + Android平台 优化 一键登录 服务协议复选框勾选操作不灵敏的Bug [详情](https://ask.dcloud.net.cn/question/118305)
  + Android平台 修复 一键登录 在部分设备服务协议项超过两行可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/116873)
  + Android平台 优化 视频播放控件 设置 playStrategy 属性m3u8视频播放速度 [详情](https://ask.dcloud.net.cn/question/117115)
  + Android平台 修复 视频播放控件 动态设置 controls 属性延时生效的Bug [详情](https://ask.dcloud.net.cn/question/117457)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Android平台 修复 Webview窗口在部分场景加载 html 页面可能出现 plus 对象为空的Bug
  + iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
  + iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
  + iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug
* 【UniMPSDK】
  + Android平台 修复 部分直达nvue页面中本地路径图片无法正常加载显示的Bug

## 3.1.4.20210305
* 修复 当焦点不在编辑器或项目管理器，点击菜单，新建文件，编辑器闪退的Bug [详情](https://ask.dcloud.net.cn/question/117347)
* 修复 Windows Git导入项目 拉起外部工具TortoiseGit，导入未完成时，HBuilderX无法操作的Bug
* 修复 曲面屏125%缩放，搜索栏字体大小异常的Bug
* 修复 内置资源管理器 非项目管理器的空文件夹，删除操作，导致编辑器闪退的Bug 
* 修复 关闭“编辑器向下滚动一屏”配置项后，迷你地图无法拖动的Bug
* 修复 javascript 对象解构赋值语句，在行尾部按下回车后，自动添加逗号的Bug [详情](https://ask.dcloud.net.cn/question/117270)
* 修复 javascript 当文件中存在`?.`和`??`操作符时，jsbeautify格式化出错的Bug
* 修复 字符搜索 正则表达式, 分组无效的Bug [详情](https://ask.dcloud.net.cn/question/57338)
* 修复 字符搜索 正则表达式, 只输入`$`, 搜索后编辑器无响应的Bug [详情](https://ask.dcloud.net.cn/question/57338)
* 修复 MacOSX 当电脑同时安装HBuilderX Alpha和正式版, 插件市场导入插件，无法正确拉起HBuilderX的Bug
* 修复 MacOSX 内置浏览器 某些情况下，开发者工具显示空白的Bug
* 修复 HBuilderX 某些情况下，更新失败的Bug
* 修复 HBuilderX 用户登录，当用户状态异常，登录提示语提示不准确的Bug
* 修复 真机运行 iOS 当手机安装的应用数量超过200时，某些情况下，同步数据失败的Bug
* 修复 App 原生打包 勾选渠道打包，后续不勾选，仍提交渠道打包的Bug
* 修复 uni-app manifest.json App原生插件配置 云端插件 含输入框配置项没有显示的Bug
* 修复 uni-app manifest.json 原生插件选择窗口 某些情况下，无法关闭的Bug
* 优化 uni-app 新建组件，模板文件自动添加组件名称
* 新增 uniCloud 关联云服务空间或项目窗口，增加新建服务空间、刷新服务空间功能
* 修复 uniCloud 初始化向导 数据库初始化窗口，点击取消按钮、或关闭窗口后，再次上传云函数，弹出数据库初始化窗口的Bug
* 调整 为兼容hbuilderx 3.1.0+，openDB 表uni-id-address字段名：default，改为：is_default [详情](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-address/collection.json)
* 修复 uniCloud 初始化向导 某些情况下，没有执行初始化数据库的Bug
* 修复 uniCloud uni_modules下的云函数, 依赖项目根目录uniCloud下的公共模块时，上传失败的Bug
* 修复 uni_modules 项目模板无法从插件市场更新的Bug
* 【uni-app插件】
  + App平台、H5平台 修复 3.1.2 版本引出的 canvasGetImageData、canvasToTempFilePath 获取高度错误Bug [详情](https://ask.dcloud.net.cn/question/117082)
  + App平台、H5平台 修复 3.1.2 版本引出的获取自定义组件 dataset 数据缺失的Bug [详情](https://ask.dcloud.net.cn/question/117206)
  + App平台 修复 input 组件在安卓设备上 focus 事件触发错乱的Bug [详情](https://ask.dcloud.net.cn/question/116576)
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 subNvue 页面根节点 class 无效的 Bug
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 nvue 页面样式中 !important 前不含空格时报错的Bug [详情](https://ask.dcloud.net.cn/question/117212)
  + App-Android平台 修复 3.1.2 版本引出的 nvue input 组件设置 ajust-position 为 false 后，keyboardheightchange 事件返回软键盘高度为0的Bug [详情](https://ask.dcloud.net.cn/question/117295)
  + App-Android平台 修复 nvue input 组件 focus 事件可能触发两次的Bug
  + H5平台 修复 部分情况下获取 wxs 实例错误的的Bug [详情](https://ask.dcloud.net.cn/question/117097)
* 【uniCloud】
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB 优化 部分场景下getCount性能
  + clientDB 优化 部分场景下jql联表查询性能
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 项目真机运行页面标题栏无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/117278)
  + Android平台 修复 微信分享本地图片在部分 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/117050)
  + Android平台 修复 页面中 input 标签 type 为 tel/email 时，弹出软键盘上方的辅助输入栏内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/118051)
  + iOS平台 修复 保存 gif 图片到系统相册可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/117814)

## 3.1.2.20210206
* 【重要】新增 uni_modules。uni-app生态的重要模块化方案。[详情](https://uniapp.dcloud.net.cn/uni_modules)
* 【重要】新增 文件内容对比合并功能。文件覆盖前提供内容级的差异对比界面，支持内容编辑。（插件市场插件导入、schema2code导入时可见）
* 修复 插件API 当编辑器开启迷你地图时，文档修改事件执行两次的Bug
* 修复 插件API 内置资源管理器 执行command时传参不对的Bug
* 修复 插件API 自定义编辑器的持久化对象可能造成内存泄漏的Bug
* 优化 插件API 注册菜单 when表达式，优化计算性能
* 修复 插件API 当插件package.json activationEvents没有配置onUri时，某些情况下，编辑器出现闪退的Bug
* 修复 HBuilderX插件 某些情况下，项目类型识别错误的Bug
* 修复 颜色预览 某些rgb颜色值显示错误的Bug
* 修复 转到定义 当vue文件带有`beforeRouteLeave`方法时，转到定义失败的Bug [详情](https://ask.dcloud.net.cn/question/114628)
* 修复 MacOSX 内置资源管理器 某些情况下，点击目录，编辑器出现闪退的Bug
* 修复 uni-app cli项目 新建页面，选择分包，点击创建按钮没有反应的Bug
* 修复 App manifest.json 当文件存在语法错误，某些情况下，打开manifest.json，导致编辑器闪退的Bug
* 修复 App 原生打包 某些情况下，打包窗口，应用版本号与manifest.json显示不一致的Bug
* 修复 App 原生打包 iOS 设置自定义storyboard启动界面 某些情况下，提交打包，弹出自定义启动图相关弹窗的Bug
* 新增 uniCloud 创建云函数、action、公共模块、schema、validateFunction，云端校验是否存在，如果存在提示用户选择本地创建/云端拉取
* 新增 uniCloud cloudfunctions目录 右键菜单 增加下载云端所有资源
* 修复 uniCloud 弱网状态，上传云函数，某些情况下，界面卡顿导致编辑器崩溃的Bug
* 修复 uniCloud 批量上传公共模块，选择跳过云端已存在的模块，其它公共模块没有继续上传的Bug
* 新增 uniCloud 支持对schema、action文件转到定义
* 优化 uniCloud 前端网页托管 文件上传效率，速度提升数倍
* 【uni-app插件】
  + 新增 uni.getSystemInfo 支持获取 deviceId 作为设备标识。App 端根据设备信息生成，非 App 端由 uni-app 框架生成基于随机数的 id
  + App平台、H5平台 优化 dataset 获取逻辑，完善非 string 类型支持
  + App平台、H5平台 修复 css 媒体查询内的 rpx 单位不生效的Bug [详情](https://ask.dcloud.net.cn/question/112279)
  + App平台、H5平台 修复 picker 组件特定情况下设置 start、end 表现异常的Bug [详情](https://ask.dcloud.net.cn/question/114223)
  + App平台、H5平台 修复 部分时机获取 input、textarea 组件值不正确的Bug [详情](https://ask.dcloud.net.cn/question/115897)
  + 【重要】App平台 新增 nvue 组件支持 render-whole 属性。可以按组件整体渲染，而不是从上到下逐行渲染 [详情](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + 【重要】App平台 新增 nvue 增加 nvueStyleCompiler 配置，支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）[详情](https://ask.dcloud.net.cn/article/38751)
  + App平台 新增 manifest.json 支持全屏配置 app-plus -> fullscreen
  + App平台 新增 支持 uni.offNetworkStatusChange 方法
  + App平台 新增 支持 uni.offKeyboardHeightChange 方法
  + App平台 新增 input、textarea 组件支持 keyboardheightchange 事件
  + App平台 新增 nvue map 组件支持展示 POI 点、建筑物、个性化地图等新特性 [详情](https://uniapp.dcloud.io/component/map)
  + App平台 新增 video 组件新增属性 codec、http-cache、play-strategy
  + 【重要】App平台 优化 nvue 支持更多简写样式：border、border-top、border-right、border-bottom、border-left、border-style、border-width、border-color、border-radius、flex-flow、font、background
  + App平台 优化 uni.getNetworkType 支持获取 5g 网络类型
  + App平台 优化 uni.saveImageToPhotosAlbum 支持返回保存路径
  + App平台 修复 uni.canvasToTempFilePath 配置的大小超过 canvas 大小时获取的图像空白的Bug [详情](https://ask.dcloud.net.cn/question/111225)
  + App平台 修复 cover-view 样式动态变更未生效的Bug
  + App平台 修复 部分情况下组件递归调用内部 v-for 报错的Bug
  + App平台 修复 特定分辨率（iPhone12 Pro）下文字换行错误的Bug [详情](https://ask.dcloud.net.cn/question/114636)
  + App平台 修复 部分情况下 v-for 渲染列表事件错乱的Bug [详情](https://ask.dcloud.net.cn/question/112100)
  + App平台 修复 v-for 渲染 Map、Set 数据类型错乱的Bug [详情](https://ask.dcloud.net.cn/question/115506)
  + App平台 修复 uni.compressImage 传入本地路径失败的Bug [详情](https://ask.dcloud.net.cn/question/115315)
  + App平台 修复 纯 nvue 编译模式下 pages.json 缺少 style 节点编译报错的Bug
  + App-Android平台 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
  + App-Android平台 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
  + App-Android平台 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug [详情](https://ask.dcloud.net.cn/question/115772)
  + App-Android平台 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/115727)
  + App-Android平台 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug [详情](https://ask.dcloud.net.cn/question/114631)
  + App-Android平台 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug [详情](https://ask.dcloud.net.cn/question/115728)
  + App-Android平台 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/115673)
  + App-Android平台 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug [详情](https://ask.dcloud.net.cn/question/90676)
  + App-Android平台 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
  + App-Android平台 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
  + App-iOS平台 修复 nvue css 中设置 transform 执行动画可能引起崩溃的Bug
  + App-iOS平台 修复 nvue 使用 animation 对组件执行动画期间，组件绑定的点击事件可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/98554)
  + App-iOS平台 修复 nvue ad-draw 组件加载快手联盟广告时，在 list 中滚动后可能无法正常显示的Bug
  + App-iOS平台 修复 nvue image 组件在 iOS14 系统设置 placeholder 后无法正常显示 src 图片的Bug [详情](https://ask.dcloud.net.cn/question/115531)
  + App-iOS平台 修复 nvue video 组件使用 exitFullScreen 无法正常退出全屏的Bug [详情](https://ask.dcloud.net.cn/question/111855)
  + App-iOS平台 修复 nvue web-view 组件加载的网页中 a 标签 target 属性值为 _blank 时，点击 a 标签链接无反应的Bug [详情](https://github.com/dcloudio/hello-uniapp/issues/37)
  + H5平台 新增 EditorContext 支持 blur、getSelectionText、scrollIntoView 方法
  + H5平台 新增 getTopWindowStyle、getLeftWindowStyle、getRightWindowStyle 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5平台 新增 image 组件支持 draggable 属性
  + H5平台 优化 swiper、movable 组件拖动时禁止 click 事件触发
  + H5平台 修复 ActionSheet 数据量多无法滚动的Bug
  + H5平台 修复 特定情况下 uni.showModal 内容区域出现横向滚动条的Bug
  + H5平台 修复 image 组件使用 require 方式引用的资源在配置基础路径为相对路径时，编译后不显示的Bug
  + H5平台 修复 应用初始化以前调用 uni.getSystemInfoSync 报错的Bug [详情](https://ask.dcloud.net.cn/question/116612)
  + 【重要】小程序平台 新增 发行时支持混合分包模式，将 uni-app 项目发行为小程序分包，集成到已有的原生开发的小程序 [详情](https://uniapp.dcloud.net.cn/hybrid)
  + 小程序平台 修复 事件回调内 arguments 获取到多余参数的Bug [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + 小程序平台 修复 修复 v-for 循环 wxs 模块内容报错的Bug [详情](https://ask.dcloud.net.cn/question/115658)
  + 支付宝平台、头条小程序平台 修复 部分情况下无法正确编译模板中 class 的Bug [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + 支付宝小程序平台 优化 组件支持 vue 事件监听方式（需启用 component2）[详情](https://ask.dcloud.net.cn/question/110978)
  + 支付宝小程序平台 修复 内置组件部分事件无法监听的Bug [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + 【重要】百度小程序平台 新增 支持 onInit 生命周期
  + 百度小程序平台 优化 支持使用 usingComponents 引入插件（原名称 usingSwanComponents 仍然保留）
  + 【重要】uni-ui 新增 所有组件适配 PC 端，适配宽屏、拖动、支持enter和esc按键响应 [详情](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
  + uni-ui 新增 uni-file-picker 文件直传uniCloud云空间的组件 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-forms、uni-easyinput、uni-group 兼容 nvue 页面
  + 【重要】新增 云端一体搜索模板。无需自行开发搜索 [详情](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【重要】新增 uni-captcha 基于uniCloud的图片验证码 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【重要】新增 网赚游戏合成猫项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【重要】hello uniCloud 新增 clientDB、schema2code示例 [详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + 新增 uniCloud-banner模板 支持管理员上传修改banner [详情](https://ext.dcloud.net.cn/plugin?id=4117)
  + 云端一体登录模板 新增 用户名密码连续登录失败时要求输入图形验证码
* 【uniCloud】
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + uniCloud本地调试插件 新增 支持 uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + uniCloud本地调试插件 修复 3.0.7版本引出的某些情况下客户端连接本地云函数时报模块冲突的Bug
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 腾讯优量汇SDK Android为4.332.1202版、iOS为4.12.3版；穿山甲SDK iOS为3.4.2.3版；快手联盟SDK iOS为3.3.6版
  + 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
  + 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
  + Android平台 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题 [详情](https://ask.dcloud.net.cn/question/95568)
  + Android平台 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题 [详情](https://ask.dcloud.net.cn/question/105515)
  + Android平台 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题 [详情](https://ask.dcloud.net.cn/question/116249)
  + Android平台 修复 视频播放控件 seek 跳转不准确的Bug [详情](https://ask.dcloud.net.cn/question/115171)
  + Android平台 修复 微信分享图片在 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/115153)
  + Android平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 优化 uni-AD 信息流广告内存管理机制，解决显示广告过多时内存泄露引起崩溃的Bug
  + iOS平台 修复 uni-AD 调用 plus.ad.releaseAdData 释放广告数据可能引起崩溃的Bug
  + iOS平台 更新 高德地图SDK为 7.8.0 版，解决在 iOS14 系统拖动地图时卡顿的Bug [详情](https://ask.dcloud.net.cn/question/113674)
  + iOS平台 修复 QQ分享音乐，点击分享内容跳转到的是音乐播放页面而不是 href 设置的音乐网页的Bug
  + iOS平台 修复 图片轮播控件 ImageSlider 设置样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/116068)
  + iOS平台 修复 从系统相册选择 iCloud 视频文件没有触发回调的Bug [详情](https://ask.dcloud.net.cn/question/115448)
  + iOS平台 修复 视频播放控件横向全屏播放后，调用 exitFullScreen 退出全屏可能界面显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/115775)
  + iOS平台 修复 视频播放控件拖动进度条可能引起进度显示不正常，不触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/115300)
* 【UniMPSDK】
  + iOS平台 修复 关闭当前小程序立刻打开另一个小程序后，小程序可能无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/115243)
  + iOS平台 新增 小程序页面关闭时支持动态设置原生导航栏的显隐方法 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)

## 3.0.7.20210123
* 【重要】新增 iOS App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 (仅支持MacOSX，不支持windows) [详情](https://ask.dcloud.net.cn/article/37979)
* 【uni-app插件】
  + App平台 修复 windows 系统部分情况下，查找 Chrome 失败，导致无法正常 debug 的Bug
  + App平台 修复 包含微信小程序组件时，部分情况下首次编译触发热刷新的Bug
  + App-Android平台 修复 nvue list 组件调用 setSpecialEffects 设置吸顶后，input 子组件无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/114511)
  + App-Android平台 修复 nvue list/waterfall 组件使用 refresh 并设置 background-color 属性后会出现白边的Bug [详情](https://ask.dcloud.net.cn/question/105800)
  + App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  + 快应用 修复 华为快应用IDE V3.0.2无法识别项目类型的Bug
* 【uniCloud】
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB 修复 field 中包含`-`时报错的Bug
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + schema2code 支持生成list、detail页面
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
  + Android平台 更新 腾讯X5内核版本为 v4.3.0.67_43967 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android平台 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+ [详情](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android平台 调整 应用的主 Activity 为 FragmentActivity [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android平台 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/101035)
  + Android平台 修复 监听按键事件 keydown、keyup 不触发回调的Bug
  + Android平台 修复 video 封面图片 poster 拉伸变形显示的Bug [详情](https://ask.dcloud.net.cn/question/114952)
  + Android平台 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
  + Android平台 修复 previewImage 预览图片可能显示模糊的Bug [详情](https://ask.dcloud.net.cn/question/113520)
  + Android平台 修复 3.0.4版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug [详情](https://ask.dcloud.net.cn/article/38648)
  + iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
  + iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
  + iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
  + iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
  + iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug

## 3.0.5.20210107
* 修复 插件API hx.window.createWebViewDialog 设置窗口大小无效的Bug
* 修复 3.0.4 版本引出的 当编辑器没有打开项目下任何文件，直接在项目管理器选中项目，按下Ctrl+R，HBuilderX闪退的Bug [详情](https://ask.dcloud.net.cn/question/114619)
* 修复 App 真机运行，某些情况下，HBuilderX闪退的Bug
* 修复 App manifest.json App原生插件配置，本地插件，带`.`的key值写入文件异常的Bug
* 修复 App Android 安心打包，某些情况下，打包失败的Bug
* 【uni-app插件】
  + H5平台 新增 uni.setLeftWindowStyle、uni.setTopWindowStyle、uni.setRightWindowStyle 三个为窗体（leftWindow、rightWindow、topWindow）设置样式的API [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
* 【uniCloud】
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB 修复 field 中包含`-`时报错的Bug
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
* 【uni-app插件】
  + uni-ui 新增 uni-data-picker 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
* 【App插件(含5+App和uni-app的App端)】
  + 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + Android平台 修复 native.js 调用 requestPermissions 请求的权限已被允许可能引起其它功能无法正常申请系统权限的Bug [详情](https://ask.dcloud.net.cn/question/114645)
  + Android平台 修复 云端打包 更新 com.android.tools.build:gradle 版本后可能引起安装包文件变大、运行显示白屏的Bug [详情](https://ask.dcloud.net.cn/question/114496)

## 3.0.4.20201231
* 【重要】新增 Android App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 [详情](https://ask.dcloud.net.cn/article/37979)
* 【重要】DCloud开发者开放平台上线。向开发者服务商开放账户和流量。 [详情](https://open.dcloud.net.cn/)
* 【重要】新增 插件API hx.authorize 插件可获取HBuilderX登录用户的授权。类似于微信小程序中的微信登录。三方开发者服务商（如Git服务商）可与HBuilderX账户打通。 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize)
* 新增 插件API hx.window.showMessageBox 创建简单的对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=showmessagebox)
* 新增 插件API hx.workspace.copyFileWithPrompt 可将指定文件或文件夹拷贝到目标文件夹下 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=copyfilewithprompt)
* 新增 插件API hx.window.createWebViewDialog 创建内容区可由HTML编写的模态对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebviewdialog)
* 优化 插件API when表达式，支持正则匹配 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 优化 MacOSX iOS模拟器列表展示方式，按操作系统版本展示
* 修复 MacOSX Big Sur 11系统，运行菜单列表样式显示异常的Bug
* 修复 MacOSX 设备运行列表，三级菜单编辑启动页面配置，鼠标滑过时，某些情况下造成iOS模拟器列表卡顿的Bug
* 修复 MacOSX 新版SVN，命令行输出为中文时，解析出错，导致SVN文件对比等功能异常的Bug [详情](https://ask.dcloud.net.cn/question/72358)
* 修复 MacOSX 当SVN仓库URL超长时，导致SVN提交窗口超出屏幕的Bug
* 修复 MacOSX 当html文件存在中文或空格等特殊字符时，运行html到外部浏览器失败的Bug
* 修复 插件市场 uniCloud Admin插件 某些情况下，导入插件到HBuilderX，pages.json没有合并的Bug
* 修复 某些情况下，内置资源管理器外部文件，点击右键菜单，造成编辑器崩溃的Bug
* 修复 某些情况下，转到定义丢失位置记录，导致后退时跳转位置不对的Bug
* 新增 新建同名项目，增加合并、替换操作
* 优化 控制台 消息通知 当控制台产生新日志时，右上角显示消息通知
* 修复 控制台 某些数据类型的日志无法打印的Bug
* 修复 uni-app 新建页面 选择分包，复选框`在pages.json中注册`，去掉勾选再次点击，导致HBuilderX崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113869)
* 修复 App 原生打包窗口 勾选广告后，manifest.json中自定义的广告数据被清除的Bug
* 新增 App manifest.json iOS设置 关联域，用于配置通用链接域名 [详情](https://ask.dcloud.net.cn/article/36393)
* 【uni-app插件】
  + App、H5平台 新增 vue 页面中的 input、textarea 在新版浏览器内核（Chrome81+、Safari13.7+）中 confirm-type 即键盘右下角按钮文字，支持更多配置（send、next、done）
  + App、H5平台 新增 网络请求相关接口 uni.request、uni.uploadFile、uni.downloadFile 支持 timeout 参数
  + App、H5平台 优化 input 组件 number 和 digit 类型支持输入负数（注意之前依赖键盘不能输入负数而没有校验输入内容应用应补充校验规则） [详情](https://ask.dcloud.net.cn/question/62987)
  + App、H5平台 修复 slider 组件显示最大值时拖动不跟手的Bug
  + App、H5平台 修复 slider 组件 step 设置为小数时精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/112749)  
  + App平台 新增 uni.login 支持一键登录 [详情](https://uniapp.dcloud.io/univerify)
  + App平台 新增 uni-AD 支持 Draw信息流广告 [详情](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App平台 新增 uni-AD ad 组件支持 adclicked 事件
  + App平台 优化 input、textarea 组件去除隐藏键盘自动失去焦点的逻辑并开放相关属性：auto-blur [详情](https://ask.dcloud.net.cn/question/111152)
  + App平台 优化 uni.compressImage 支持 width、height 设置
  + App平台 优化 uni.canvasGetImageData、uni.canvasSetImageData 等接口执行效率（注意：需更新自定义基座或离线SDK） [详情](https://ask.dcloud.net.cn/question/110948)
  + App平台 优化 uni.previewImage 弹出菜单底部的取消按钮文字根据系统语言进行国际化适配
  + App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)
  + App平台 修复 uni.setNavigationBarColor 部分时机不生效的Bug [详情](https://ask.dcloud.net.cn/question/110894)
  + App平台 修复 非 popup 类型的 subnvue 对象调用 setStyle 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/110922)
  + App平台 修复 nvue progress 组件 设置属性 active=true 时报错的Bug [详情](https://ask.dcloud.net.cn/question/113041)
  + App平台 修复 mainfest.json 配置 flex-direction:row 时部分内置组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/102195)
  + App-Android平台 修复 uni 原生插件扩展 Component 组件 bindData 回调不触发的Bug
  + App-Android平台 修复 华为更新系统后 canvas 绘制本地图像跨域的Bug [详情](https://ask.dcloud.net.cn/question/110676)
  + App-Android平台 修复 uni.request 请求超时不准确的Bug，优化请求最大并发数为10 [详情](https://ask.dcloud.net.cn/question/109996)
  + App-Android平台 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug [详情](https://ask.dcloud.net.cn/question/112326)
  + App-Android平台 修复 websocket 在5.0以下设备强制使用 LTSv1.2 导致无法建立连接的Bug [详情](https://ask.dcloud.net.cn/question/110367)
  + App-Android平台 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug [详情](https://ask.dcloud.net.cn/question/111213)
  + App-Android平台 修复 nvue input组件设置 focus 属性值为 false 时依然会自动获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/110553)
  + App-Android平台 修复 nvue ad 组件频繁打开、关闭页面操作可能引起崩溃的Bug
  + App-Android平台 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/85722)
  + App-Android平台 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/112729)
  + App-Android平台 修复 nvue image 组件加载图片过多可能引起内存溢出导致页面滚动卡顿的Bug
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
  + App-iOS平台 修复 生物认证 人脸识别 在未录入FaceID的情况下可能检查为已录入的Bug [详情](https://ask.dcloud.net.cn/question/112383)
  + App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug
  + App-iOS平台 修复 调用 getScreenBrightness、setScreenBrightness 会触发 onShow、onHide 的Bug
  + App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
  + App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
  + App-iOS平台 修复 nvue text 组件设置相同的字体大小，不同文字内容高度不一致的Bug [详情](https://ask.dcloud.net.cn/question/112175)
  + App-iOS平台 修复 nvue video 组件动态更新 src 属性无法播放本地视频的Bug [详情](https://ask.dcloud.net.cn/question/113920)
  + H5平台 新增 custom-tab-bar 组件，可自由定义 tabBar 的位置和样式，比如在宽屏浏览器上显示在 topWindow 中 [详情](https://uniapp.dcloud.io/component/custom-tab-bar)
  + H5平台 新增 uni.chooseFile 接口。用于替代 input type=file [详情](https://uniapp.dcloud.io/api/media/file)
  + H5平台 优化 uni.getLocation 支持通过 IP 定位
  + H5平台 优化 uni.chooseLocation、uni.openLocation 在大屏模式的显示效果
  + H5平台 优化 日期类型 picker 组件在PC版Chrome和FireFox上使用浏览器自带日期选择控件
  + H5平台 优化 单列 picker 组件在大屏设备默认使用 select 样式
  + H5平台 优化 tabBar 支持配置更多属性，如：fontSize、height、midButton
  + H5平台 修复 tabBar 的 iconPath 使用带协议的图像路径不显示的Bug
  + H5平台 修复 topWindow 存在时，下方window页面的 navigationBar 无法显示的Bug
  + H5平台 修复 picker-view 组件 indicator-class 设置不生效的Bug
  + H5平台 修复 iOS9 平台浏览器访问报错的Bug [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + 小程序平台 修复 for 循环中遍历数组表达式时部分事件编译后执行报错的Bug [详情](https://ask.dcloud.net.cn/question/110706)
  + 微信小程序平台 优化 跳转页面路径中不再自动增加 __id__ 参数
  + uni-ui 新增 uni-easyinput 组件，提供更强大、易用的输入框封装组件，内置表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui 新增 uni-data-checkbox 组件，简化单选复选框的使用 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 forms、list、dateformat、indexed-list等组件的问题 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + hello uni-app 新增 App端一键登录示例（API分类login示例中）
  + hello uni-app 优化 适配PC宽屏，参考：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
  + hello uni-app 修复 在 H5 下【设置 tabBar】示例页面设置背景色时颜色错误的Bug
  + 前后一体登录项目模板 新增 App端一键登录、修改密码
* 【uniCloud】
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + HBuilderX【重要】新增 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + HBuilderX【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率 
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + HBuilderX 新增 uni-clientDB-actions 支持单文件上传、删除
  + HBuilderX 优化 db_init.json 当云数据库存在同名数据表时，提示覆盖的窗口UI
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + 阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
  + 阿里云 修复 本地运行云函数向云数据库插入值为 null 的字段会报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
  + 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标[参考插件](https://ext.dcloud.net.cn/plugin?id=1680)
  + 新增 uni-AD 编程控制开屏广告的开启或关闭 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + 新增 uni-AD 激励视频、全屏视频、信息流广告支持监听点击广告事件
  + 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
    * 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    * 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    * 新增 plus.navigator.isRoot 判断设备是否被root [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    * 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
  + 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + 更新 uni-AD 快手联盟SDK为3.3.5版
  + Android平台 更新 支付宝SDK为15.8.00，解决提交 GooglePlay 审核报存在不安全的加密模式的Bug [详情](https://ask.dcloud.net.cn/question/114053)
  + Android平台 优化 应用启动时申请读写手机存储权限策略默认值为 once [详情](https://ask.dcloud.net.cn/article/36549) 
  + Android平台 修复 uni-AD 开屏广告在部分设备可能触发崩溃的Bug
  + Android平台 修复 uni-AD 开屏基础广告展示gif图片可能引起应用崩溃的Bug
  + Android平台 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/111836)
  + Android平台 修复 在Android10及以上设备无法保存视频文件到相册的Bug [详情](https://ask.dcloud.net.cn/question/112970)
  + Android平台 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug 
  + Android平台 修复 UniPush 第一次启动可能无法获取clientid的Bug [详情](https://ask.dcloud.net.cn/question/112318)
  + Android平台 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
  + Android平台 修复 Downloader 下载的链接地址无效时不会触发回调的Bug [详情](https://ask.dcloud.net.cn/question/111826)
  + Android平台 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/111426)
  + Android平台 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + Android平台 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug [详情](https://ask.dcloud.net.cn/question/112882)
  + Android平台 更新 云端打包 com.android.tools.build:gradle 版本为 4.1.1，适配Android11，修复无法准确检查uni原生插件需要兼容启用AndroidX [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
  + iOS平台 修复 uni-AD 快手联盟 激励视频广告的奖励倒计时完成后关闭广告事件 onClose 的 isEnded 属性值可能为 false 的Bug
  + iOS平台 修复 QQ分享进入安全校验后，可能无法再次拉起手机QQ完成分享操作的Bug [详情](https://ask.dcloud.net.cn/question/103383)
  + iOS平台 修复 iPhone12、iPad 系列设备获取手机设备信息的 model 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/112922)
  + iOS平台 修复 iOS14 第一次获取位置信息弹出系统授权提示框时无法获取详细地址的Bug  [详情](https://ask.dcloud.net.cn/question/111570)
  + iOS平台 修复 iOS13 打开文档文件名称没有后缀时无任何响应的Bug
  + iOS平台 修复 真机运行时 plus.runtime.getProperty 返回的 appid 属性值不正确的Bug
  + iOS平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 修复 从微信小程序打开App时，plus.runtime.launcher 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/111212)
  + iOS平台 修复 设置窗口标题栏搜索框失去焦点时，搜索框内容会被清除掉的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放时进度条可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/112150)
  + iOS平台 修复 uni原生插件开发可能出现 SimplePing 类冲突的Bug
  + iOS平台 修复 保存路径中包含特殊字符的图片到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/113990)
* 【uni小程序SDK】
  + iOS平台 新增 小程序的打开方式支持 push 方式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
  + iOS平台 新增 支持开启侧滑手势关闭小程序 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 修复 小程序跳转其他原生页面再返回小程序时，对应生命周期事件 onShow、onHide 没有触发的Bug

## 2.9.8.20201110
* 修复 MacOSX 10.13.6系统，运行app到iOS真机，mdb崩溃的Bug
* 修复 MacOSX Big Sur 11.0.1 Beta系统，运行app到iOS模拟器、Android出错的Bug
* 修复 Windows 某些情况下，插件市场导入插件，打开新HBuilder窗体的Bug
* 修复 uniapp-cli项目，新建页面，提示pages.json存在错误的Bug
* 【uni-app插件】
  + App-Android平台 修复 uni原生插件扩展Component组件 bindData 回调不触发的Bug
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110303)
  + iOS平台 修复 2.8.13版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)

## 2.9.7.20201106
* 优化 无边框窗口（新建项目、新建页面等窗口），支持鼠标拖曳移动
* 修复 选择所有相同词，文档尾部有匹配结果时，搜索范围设置越界导致编辑器崩溃的Bug
* 修复 当本地存在遗留文件或同名文件时，插件安装失败的Bug
* 修复 多文件搜索，搜索结果窗口内容过长时导致编辑器闪退的Bug
* 修复 某些情况下，点击对话框上按钮后，切换主题、新建窗体后编辑器闪退的Bug
* 修复 新建HBuilder窗体，工具栏显示异常的Bug
* 修复 Windows 隐藏操作系统任务栏，HBuilderX窗体最大化后，鼠标移动到屏幕底部，无法自动弹出任务栏的Bug
* 修复 MacOSX Big Sur 11 Beta系统，无法检测到ios真机的Bug
* 修复 MacOSX Big Sur 11 Beta系统，uniCloud，关联云服务空间，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，鼠标滑过扩展插件视图后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，多次按下`添加收藏`快捷键后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，云端打包窗口，tab标签卡显示空白的Bug
* 修复 SFTP 当SFTP视图已打开时，再次点击`浏览远程文件`，没有跳转到SFTP视图的Bug
* 修复 插件API 某些情况下，因线程问题，导致插件扩展菜单失效的Bug
* 修复 插件API 某些情况下，自定义编辑器重复打开，导致webView创建失败的Bug
* 优化 插件API getActiveTextEditor lineFromPosition方法，返回lineNumber，可以获取到当前光标所在行行号
* 修复 插件市场导入项目到HBuilderX, 编辑器弹出付费协议窗口的Bug
* 优化 插件导入加入对HBuilderX版本号的判断，当本地版本小于要求时，提醒用户升级
* 修复 新建项目 某些情况下，普通项目模板，第二次创建失败的Bug
* 调整 新建项目 移除微信小程序项目的创建，请在微信工具中创建项目。HBuilderX 仍然可以导入和编辑微信小程序项目
* 优化 uni-app 新建页面 选择单页面模板，创建页面前，检查pages.json是否存在语法错误
* 修复 uni-app 新建页面 当项目已存在云服务空间，选择云端一体列表页面模板，仍弹窗提示选择云服务空间的Bug
* 修复 uni-app easycom规则没有配置的情况下，代码提示时组件不提示的Bug
* 修复 uniCloud 单项目窗体上，新建项目后，重复弹出初始化向导窗体的Bug
* 优化 uniCloud 前端网页托管 增加上传文件超过设定大小（50MB）限制的提示
* 优化 uniCloud 前端网页托管 当已配置自定义域名时，上传网站到服务器、MarkDown一键分享，控制台日志显示自定义域名路径
* 修复 uniCloud 某些情况下，上传公共模块或云函数，控制台日志出现`云端运行`文字的Bug
* 新增 uniCloud 未实名认证用户，支持创建阿里云体验服务空间（cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】）
* 新增 代码块 udb，快速创建`<uni-clientdb>`组件
* 【uni-app插件】
  + 【重要】 更新文档 2.9.0+ 后 rpx、rem 样式变形的处理办法 [详情](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.offCompassChange、uni.offAccelerometerChange 用于移除相关事件监听
  + App平台、H5平台 修复 Safari 14 输入组件禁用状态文字颜色变浅的Bug [详情](https://ask.dcloud.net.cn/question/109013)
  + App平台 新增 全屏视频 uni.createFullScreenVideoAd [详情](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App平台 优化 uni.connectSocket 支持配置 header
  + App-Android平台 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/108639)
  + App-Android平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
  + App-Android平台 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug [详情](https://ask.dcloud.net.cn/question/95239)
  + App-Android平台 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
  + App-Android平台 修复 部分设备 uni.chooseVideo 无法选择视频的Bug [详情](https://ask.dcloud.net.cn/question/109301)
  + App-Android平台 修复 nvue map 组件 markers 的 width、height属性不生效的bug [详情](https://ask.dcloud.net.cn/question/108778)
  + App-iOS平台 修复 canvas 组件绘制 uni.getImageInfo 临时路径跨域的Bug [详情](https://ask.dcloud.net.cn/question/108817)
  + App-iOS平台 修复 nvue scroll-view 组件使用下拉刷新 refresh 隐藏时没有动画效果的Bug [详情](https://ask.dcloud.net.cn/question/108681)
  + App-iOS平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 时透明区域填充红色背景的Bug [详情](https://ask.dcloud.net.cn/question/108774)
  + App-iOS平台 修复 web-view 组件加载的页面 title 为空时，返回按钮不显示的Bug [详情](https://ask.dcloud.net.cn/question/108887)
  + App-iOS平台 修复 iOS14 上新页面自动获取焦点导致页面变形的Bug [详情](https://ask.dcloud.net.cn/question/107820)
  + App-iOS平台 修复 nvue web-view 组件加载 html 页面中 js 调用 alert 不显示提示框的Bug [详情](https://ask.dcloud.net.cn/question/109791)
  + H5平台 优化 鼠标事件支持返回坐标信息
  + H5平台 优化 uni.showToast 在 宽屏的显示效果
  + H5平台 优化 弹出类接口和组件支持响应 esc、enter 按键
  + H5平台 修复 Chrome 使用自动填充时 placeholder 仍然可见的Bug
  + H5平台 修复 启用 leftWindow 后 web-view 组件显示错位的Bug
  + uni-ui 新增 uni-forms 组件，支持表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui 新增 uni-group 组件，用于表单项分组显示 [详情](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui 新增 uni-table 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui 新增 uni-dateformat 组件，支持各种日期格式化，以及1分钟前、刚刚等形式 [详情](https://ext.dcloud.net.cn/plugin?id=3279)
* 【uniCloud】
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率。 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
  + 新增 web控制台 云数据库支持导出db_init.json
  + 新增 web控制台 服务空间改名
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持全屏视频广告 [详情](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
  + Android平台 更新 高德地图SDK为7.6.0版
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.4.2版
  + Android平台 修复 uni-AD 腾讯广点通视频开屏广告可能造成应用闪退，或关闭广告后点击屏幕部分区域仍然打开落地页的Bug
  + Android平台 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
  + Android平台 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug [详情](https://ask.dcloud.net.cn/question/108776)
  + Android平台 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug [详情](https://ask.dcloud.net.cn/question/108691)
  + Android平台 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
  + Android平台 修复 UniPush 云端打包 GooglePlay 渠道默认添加定位权限的Bug [详情](https://ask.dcloud.net.cn/question/105068)
  + Android平台 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug [详情](https://ask.dcloud.net.cn/question/109442)
  + iOS平台 更新 uni-AD 快手联盟SDK为3.3.3版
  + iOS平台 更新 云端打包环境XCode为12.1版，uni原生插件兼容支持swift代码
  + iOS平台 修复 微信登录用户选择拒绝授权可能不触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/109305)
  + iOS平台 优化 本地相册选择照片界面，新增支持 permissionAlert 参数配置权限检测，适配 iOS14 上用户设置为访问`选中的照片`权限时引导修改为访问`所有照片` [文档](http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + iOS平台 修复 本地相册选择照片界面，在 iOS14 上如果选中的图片在 iCloud 会触发刷新导致排序混乱的Bug [详情](https://ask.dcloud.net.cn/question/108502)
  + iOS平台 修复 本地相册选择照片界面，选择视频文件出现错误提示框，预览视频文件只显示首帧的Bug
  + iOS平台 修复 本地相册选择照片界面，设置 filename 参数后选中多张图片后返回路径不正确的Bug
  + iOS平台 修复 无法保存文件路径包含中文的图片到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/109168)
  + iOS平台 修复 获取当前地理位置设置 geocode 为 true 时可能无法返回数据的Bug [详情](https://ask.dcloud.net.cn/question/109170)
  + iOS平台 修复 获取图片信息 getImageInfo 返回的 width、height 值类型不正确的Bug [详情](https://ask.dcloud.net.cn/question/108893)
  + iOS平台 修复 视频播放控件横向全屏时唤起软键盘还是竖屏模式的Bug [详情](https://ask.dcloud.net.cn/question/107036)
  + iOS平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS平台 修复 蓝牙同时读取和订阅特征值可能引起数据返回混乱的Bug [详情](https://ask.dcloud.net.cn/question/108107)
  + iOS平台 修复 Webview窗口标题栏搜索框的光标在 iOS13+ 上显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/103205)

## 2.9.3.20201014
* 新增 插件API CustomEditor 支持自定义编辑器  [详情](https://hx.dcloud.net.cn/customeditor)
* 修复 插件API registerUriHandler拼写错误的Bug
* 优化 快捷键-VSCode方案的全部保存, 修改为`ctrl+k, s`
* 修复 已打开的文件，改变文件后缀名，状态栏语言类型没有改变的Bug
* 修复 MacOS SVN 1.14.0版本 项目管理器文件内容变化后，SVN状态图标没有显示的Bug
* 修复 打开前端网页托管时，点击菜单【工具】-【外部命令】，造成编辑器闪退的Bug
* 修复 内部资源管理器 地址栏下拉列表，切换目录，导致编辑器闪退的Bug
* 优化 uni-app 新建页面功能。支持在新建页面时直接配置 pages.json 内容，输入标题等。可选更多页面模板，并支持预览内容或图片
* 优化 uni-app 在分包的目录上，右键菜单点击新建页面，自动在新建页面选择对应的分包目录
* 修复 uni-app 运行到内置浏览器，某些情况下，控制台日志显示不全的Bug
* 新增 uniCloud 云服务空间初始化向导，提升使用便利度 （cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】
* 新增 uniCloud 初始化云函数配置 cloudfunctions_init.json，可在插件市场的插件中配置云函数的参数（如云函数url参数），使用者可在HBuilderX中一键完成配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=init)
* 修复 uniCloud 真机运行 调用腾讯云云函数时，控制台不打印云函数运行日志的Bug
* 修复 uniCloud 上传公共模块 没有上传依赖的公共模块的Bug
* 修复 uniCloud 某些情况下，关联服务空间，导致HBuilderX编辑器闪退的Bug
* 【uni-app插件】
  + 【重要】新增 大屏适配指南 [详情](https://uniapp.dcloud.net.cn/adapt)
  + 【重要】新增 leftWindow、rightWindow、topWindow，用于宽屏适配 [详情](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【重要】新增 match-media 媒体查询适配组件，用于动态屏幕适配 [详情](https://uniapp.dcloud.net.cn/component/match-media)
  + 新增 支持 uni.createMediaQueryObserver 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + 【重要】App平台、H5平台 新增 rpx 配置，默认限定了 rpx 生效的最大屏幕宽度为 px。可在 pages.json -> globalStyle 配置 rpxCalcMaxDeviceWidth、rpxCalcBaseDeviceWidth、rpxCalcIncludeWidth 等参数 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【重要】App平台、H5平台 优化 调整根字体大小为系统默认大小与微信小程序平台一致
  + App平台、H5平台 新增 支持 uni.getSelectedTextRange 方法 [详情](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App平台、H5平台 修复 部分 base64 路径的图像无法显示的Bug [详情](https://ask.dcloud.net.cn/question/106591)
  + App平台、H5平台 修复 获取节点信息未包含 computedStyle 的Bug [详情](https://ask.dcloud.net.cn/question/108387)
  + App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
  + App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
  + App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
  + App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
  + App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
  + App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
  + App平台 修复 高频调用 uni.saveFile 保存失败的Bug [详情](https://ask.dcloud.net.cn/question/106233)
  + App-Android平台 修复 系统 webview 更新到 Chrome84+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/103303)
  + App-Android平台 修复 web-view 组件内 input 被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/92008)
  + App-Android平台 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
  + App-Android平台 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug [详情](https://ask.dcloud.net.cn/question/106697)
  + App-Android平台 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/106258)
  + App-Android平台 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug [详情](https://ask.dcloud.net.cn/question/108527)
  + App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
  + App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
  + App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
  + App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
  + App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
  + App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS平台 修复 nvue image 组件 mode 设置 widthFix、heightFix 不生效的Bug [详情](https://ask.dcloud.net.cn/question/98827)
  + App-iOS平台 修复 nvue map 组件中添加 polyline 边线总是带个箭头的Bug [详情](https://ask.dcloud.net.cn/question/91041)
  + H5平台 调整 picker 组件宽屏下默认垂直居中
  + H5平台 调整 uni.showActionSheet 宽屏下默认垂直居中，支持 popover 参数调节位置
  + H5平台 修复 video 组件全屏时 slot 不显示的Bug [详情](https://ask.dcloud.net.cn/question/105724)
  + H5平台 修复 iOS9 系统 uni.uploadFile 传入 base64 报错的Bug
  + H5平台 修复 image 组件 mode="heightFix" 图像变形的Bug [详情](https://ask.dcloud.net.cn/question/107022)
  + H5平台 修复 rich-text 组件无法渲染 section 等标签的Bug
  + 小程序平台 新增 cli版本支持 vue3 [详情](https://ask.dcloud.net.cn/article/37834)
  + 小程序平台 修复 部分事件使用箭头函数表达式执行报错的Bug [#2132](https://github.com/dcloudio/uni-app/issues/2132)
  + 小程序平台 修复 属性值为空的对象表达式时编译报错的Bug
  + 新闻模版 适配PC宽屏 (新建uni-app项目可选择该模板体验)
* 【uniCloud】
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 适配 Android10+系统 `分区存储` 机制 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、腾讯广告联盟SDK为4.270.1140版、快手联盟SDK3.3.4版
  + Android平台 更新 高德定位SDK版本为5.2.0
  + Android平台 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/106150)
  + Android平台 修复 Webview窗口设置 videoFullscreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/106499)
  + Android平台 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug [详情](https://ask.dcloud.net.cn/question/104931)
  + Android平台 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug [详情](https://ask.dcloud.net.cn/question/106427)
  + Android平台 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 `多文件分享只支持照片` 的Bug
  + Android平台 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug [详情](https://ask.dcloud.net.cn/question/108010)
  + Android平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、腾讯广点通SDK为4.11.11版
  + iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
  + iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
  + iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
  + iOS平台 修复 wgt热更新后 plus.runtime.getProperty 获取的 versionCode 不正确的Bug [详情](https://ask.dcloud.net.cn/question/108425)
  + iOS平台 修复 云端打包不支持最新WWDR中间证书生成的企业版证书的Bug [详情](https://ask.dcloud.net.cn/question/106866)
* 【uni小程序SDK】
  + iOS平台 修复 小程序前后台切换或跳转其他原生页面再返回小程序页面时，对应的应用生命周期 onShow、onHide 没有触发的Bug
  + iOS平台 修复 安装App后偶现首次无法正常启动小程序的Bug

## 2.8.13.2020927
* 【uni-app插件】
  + App-iOS平台 修复 2.8.12版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
  + App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
  + iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)

## 2.8.12.20200926
* 【uni-app插件】
  + App-Android平台 修复 2.8.4版引出的 uni.request tcp连接没有复用的Bug [详情](https://ask.dcloud.net.cn/question/106167)
  + App-Android平台 修复 2.8.11版引出的 uni-AD 腾讯广点通SDK更新后在X86模拟器上无法正常启动的Bug [详情](https://ask.dcloud.net.cn/question/106532)
  + App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
  + iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
  + iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)

## 2.8.11.20200907
* 新增 前端网页托管视图 (菜单【视图】【显示前端网页托管】)
* 新增 HBuilderX 支持跳转到指定的行和列 [详情](https://ask.dcloud.net.cn/article/37732)
* 新增 Git插件 增加`编辑.gitignore`和`添加到.gitignore`功能
* 修复 Windows 某些AMD显卡的电脑，无法启动HBuilderX的Bug
* 修复 Windows 资源管理器，选中多个文件，右键点击Open with HBuilderX，造成编辑器崩溃的Bug
* 优化 内置浏览器 手机扫码预览界面
* 修复 项目管理器 某些情况下，右键菜单卡顿的Bug
* 修复 搜索 搜索类型下拉列表 某些情况下，造成编辑器崩溃的Bug
* 修复 跨高分屏缩放引起的窗口拖拽的Bug
* 修复 颜色预览 颜色后面还存其它值时，颜色无法预览的Bug
* 修复 颜色预览 某些hsl、hsla颜色值，预览错误的Bug
* 修复 颜色预览 rgba 当alpha=1的时候，颜色无法预览的Bug
* 修复 markdown一键分享 某些情况下，上传失败后，提示信息仍然提示成功的Bug
* 优化 App manifest.json 调整文件图标
* uni-app 发行 h5界面 uniCloud云服务空间 增加新建和刷新功能
* 【uni-app插件】
  + 新增 uni.navigateTo 增加参数 events 支持页面间通信 [详情](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + 修复 编译时提示 caniuse-lite 过期的Bug
  + App平台、H5平台 优化 image 组件支持 mode="heightFix"
  + App平台 优化 uni.canvasToTempFilePath 提高执行速度
  + App平台 修复 app.vue 生命周期 onshow 某些情况下无参数的Bug [详情](https://ask.dcloud.net.cn/question/103903)
  + App平台 修复 input 组件修改 password 属性后 adjust-position 配置失效的Bug [详情](https://ask.dcloud.net.cn/question/103435)
  + App平台 修复 临时文件未清理的Bug [详情](https://ask.dcloud.net.cn/question/103456)
  + App平台 修复 nvue refresh 组件偶现下拉刷新结束后不复位的Bug [详情](https://github.com/dcloudio/uni-app/issues/1107)
  + App-Android平台 修复 Android11 设备运行白屏的Bug [详情](https://ask.dcloud.net.cn/question/105319)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 与 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/103956)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求默认超时时间过长的Bug
  + App-Android平台 修复 2.8.4版引出的 nvue 无法加载网络字体图标文件 iconfont 的Bug [详情](https://ask.dcloud.net.cn/question/104655)
  + App-Android平台 修复 调用监听加速度、陀螺仪等 API 可能报`e.setInterval is not a function`错误的Bug [详情](https://ask.dcloud.net.cn/question/105584)
  + App-Android平台 修复 没有获取到位置权限时，调用 uni.chooseLocation 可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/105312)
  + App-iOS平台 修复 scroll-view 组件在 iOS13 触摸交互卡顿的Bug [详情](https://ask.dcloud.net.cn/question/98881)
  + App-iOS平台 修复 nvue map 组件 controltap 事件返回数据参数名不正确的Bug [详情](https://ask.dcloud.net.cn/question/99769)
  + H5平台 优化 uni.previewImage 支持手势缩放
  + H5平台 修复 多个 editor 组件会重复加载依赖的Bug
  + H5平台 修复 从首页调用 uni.redirectTo 切换其他页面后首页未销毁的Bug [详情](https://ask.dcloud.net.cn/question/103503)
  + H5平台 修复 切换页面导致 textarea 组件 auto-height 属性失效的Bug
  + 小程序平台 修复 v-for 遍历复杂表达式不显示的Bug [#2012](https://github.com/dcloudio/uni-app/issues/2012)
* 【uniCloud】
  + 新增 本地运行 加入显示调试行号等信息
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持快手联盟的开屏和激励视频广告
  + 修复 下载文件设置的临时存储文件名过长时无法正常下载的Bug [详情](https://ask.dcloud.net.cn/question/103336)
  + Android平台 修复 UniPush 在部分魅族手机可能无法获取cid的Bug [详情](https://ask.dcloud.net.cn/question/102774)
  + Android平台 修复 设置targetversion为29时，从相册选择图片返回路径不正确的Bug [详情](https://ask.dcloud.net.cn/question/105269)
  + Android平台 修复 设置targetversion为29时，在部分 Android10 设备无法正常定位的Bug
  + iOS平台 更新 QQ 分享、登录SDK版本为3.3.9-Lite，解决分享到 QQ 显示未授权应用的问题
  + iOS平台 修复 设置页面横屏 landscape 显示时，在 iPad 设备上不显示状态栏的Bug [详情](https://ask.dcloud.net.cn/question/103386)
  + iOS平台 修复 视频播放控件 VideoPlayer 动态修改 objectFit 属性不生效的Bug

## 2.8.8.20200820
* 新增 MarkDown 一键分享 [详情](https://ask.dcloud.net.cn/article/37573)
* 修复 文档结构图 显示隐藏操作 导致编辑器焦点丢失的Bug
* 修复 外部命令 当命令数组为空时保存，编辑器崩溃以及无法启动的Bug
* 修复 未命名文件保存和其它文件另存为操作，没有更新导航栏的Bug
* 新增 控制台 URL链接内容 右键菜单 增加复制链接
* 修复 uniCloud进行上传操作后，内置浏览器、内置终端运行异常的Bug
* 【uni-app插件】
  + App-Android平台 修复 调用 plus.io.requestFileSystem 概率性出现`Failed to find taskCenter`错误信息的Bug [详情](https://ask.dcloud.net.cn/question/103902)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 未正确处理可能引起网络请求失败的Bug [详情](https://ask.dcloud.net.cn/question/105139)
  + App-Android平台 修复 2.8.4版引出的 Android4.4系统设备运行崩溃的Bug
  + 小程序平台 修复 修复部分自定义事件无参数时报错的Bug [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + 小程序平台 修复 v-for 嵌套 v-if 内使用到全局方法处理当前作用域内数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/105010)
* 【uniCloud】
  + 阿里云 升级mongoDB到4.0版本，现已支持地理位置
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + 短信发送 新增 3个通知类短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 新增 信息流和激励视频的多广告源在App同次启动时随机穿插，可提升广告收益
  + uni-AD 新增 设置开屏全屏显示
  + Android平台 修复 uni-AD 开屏显示穿山甲广告点击跳过按钮后，再点击splash页面可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/103601)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.10，今日头条穿山甲SDK版本为3.1.0.5
  + iOS平台 修复 直播推流 LivePusher 监听事件后不触发回调的Bug

## 2.8.6.20200814
* 【uni-app插件】
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求返回的 http 响应头数据中 key 名称变成小写的Bug [详情](https://ask.dcloud.net.cn/question/103995)
  + 小程序平台 修复 v-for 中事件使用部分复杂的表达式编译报错的Bug
  + 小程序平台 修复 v-for 中嵌套 v-if 时部分复杂表达式编译后运行报错的Bug [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + 微信小程序平台 修复 属性使用复杂的对象表达式小程序开发工具编译报错的Bug [详情](https://ask.dcloud.net.cn/question/103944)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 UniPush 使用的个推SDK版本为2.4.5.1，解决在部分设备上获取唯一标识可能重复的问题

## 2.8.5.20200812
* 修复 windows 内置浏览器 2.8.1版引出的 右键菜单无法显示的Bug
* 修复 文档结构图 同时打开多个文件，文档结构图出现跳转错误，并造成编辑器崩溃的Bug
* 修复 文档结构图 缩小宽度到0时，造成编辑器崩溃的Bug
* 修复 某些情况下，启动HBuilderX后，立即关闭内置资源管理器标签卡导致编辑器崩溃的Bug
* 【uni-app插件】
  + 【重要】App-Android平台 修复 targetSdkVersion 设置为 29 时在 Android10 运行白屏的Bug，满足谷歌应用商店上架对targetSdkVersion的要求 [详情](https://ask.dcloud.net.cn/question/103166)
  + App平台、H5平台 优化 uni.setTabBarItem 支持 pagePath 配置
  + App平台、H5平台 修复 picker 组件设置 value 为 -1 时表现异常的Bug [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App平台、H5平台 修复 editor 组件粘贴文字报错的Bug [详情](https://ask.dcloud.net.cn/question/102948)
  + App平台 新增 支持蓝牙相关接口 uni.setBLEMTU、uni.getBLEDeviceRSSI
  + App平台 优化 uni.request 支持返回 cookies 属性与微信小程序拉齐（基础库版本 2.10.0+）
  + App平台 修复 ibeacon 相关事件回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/102136)
  + App平台 修复 当前 tab 页面不是配置的首页时，热刷新后 tabBar 消失的Bug [详情](https://ask.dcloud.net.cn/question/101612)
  + App平台 修复 从 nvue 页面调用 uni.reLaunch 切换到 vue 页面后无法设置状态栏的Bug [详情](https://ask.dcloud.net.cn/question/102594)
  + App-Android平台 更新 网络请求底层实现库 OKHttp 版本为3.12.11，提升 websocket 传输效率
  + App-Android平台 修复 nvue input组件绑定值带小数点时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/97745)
  + App-iOS平台 修复 nvue 页面 在 iOS9 系统白屏的Bug
  + H5平台 修复 picker 组件配置 mode="date" 且 fields="year" 时报错的Bug [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + 小程序平台 修复 v-for 中方法使用复杂表达式报错的Bug [#373](https://github.com/dcloudio/uni-app/issues/373)
  + 小程序平台 修复 v-for 中模板插值使用复杂表达式报错的Bug [详情](https://ask.dcloud.net.cn/question/102443)
  + 小程序平台 修复 v-for 遍历对象表达式报错的Bug [#449](https://github.com/dcloudio/uni-app/issues/449)
  + 小程序平台 修复 v-for 中属性值为对象表达式报错的Bug [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + 小程序平台 修复 v-for 遍历数值时模板中有复杂表达式不显示的Bug
  + 小程序平台 修复 v-if="false" 时标签内部的方法和过滤器仍然会执行的Bug [#334](https://github.com/dcloudio/uni-app/issues/334)
  + 微信小程序平台、QQ小程序平台、字节跳动小程序平台 优化 自定义组件支持 v-show 指令 [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + 支付宝小程序平台 修复 v-for 部分情况 key 不生效的Bug
  + 支付宝小程序平台 修复 支持 uni.getSavedFileList 接口
  + 支付宝小程序平台 修复 sjs 中 callMethod 不能正确调用的Bug
  + 头条小程序平台 修复 修复解构插槽不显示的Bug [详情](https://ask.dcloud.net.cn/question/80187)
  + uni-ui 新增 uni-list 组件的 clickable 属性，是否开启点击反馈
  + uni-ui 新增 uni-list 组件的 link 属性，显示右侧箭头并开启点击反馈
  + uni-ui 新增 uni-list 组件的 to 属性，直接跳转到指定页面
  + uni-ui 新增 uni-list 组件的 border 属性，是否显示列表分割线
  + uni-ui 新增 uni-rate 组件的 disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
  + uni-ui 新增 uni-rate 组件的 disabledColor 属性，可设置禁用颜色
  + uni-ui 新增 uni-rate 组件的 readonly 属性，可设置组件只读属性
  + uni-ui 新增 uni-rate 组件的 allowHalf 属性，可设置组件是否开启半星选择
  + uni-ui 新增 uni-rate 组件的 touchable 属性，可设置组件是否支持滑动手势
  + uni-ui 修复 uni-rate 组件动态传值不更新的问题
  + uni-ui 优化 uni-rate 组件的 value 属性可使用 v-model 双向绑定数据
  + uni-ui 优化 uni-popup 组件的扩展组件支持 easycom
  + uni-ui 新增 uni-swipe-action 组件的左侧滑动使用方式
  + uni-ui 新增 uni-swipe-action 组件的插槽使用方式
  + uni-ui 新增 uni-swipe-action 组件的 threshold 属性，可以控制滑动缺省值
  + uni-ui 修复 uni-swipe-aciotn 组件的滚动页面时触发滑动的Bug
  + uni-ui 优化 uni-swipe-action 组件的长列表滚动性能
* 【uniCloud】
  + 阿里云 新增 支持协作者本地运行云函数
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 蓝牙设置最大传输单元 setBLEMTU，获取设备信号强度 getBLEDeviceRSSI 等功能 [文档](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + 修复 Webview窗口标题栏 titleNView 设置为透明样式时按钮的背景区域无法自适应的Bug
  + Android平台 更新 UniPush 使用的个推SDK国内渠道版本为2.14.1.0，提升消息推送到达率
  + Android平台 调整 UniPush 和 个推推送 谷歌渠道默认不显示隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android平台 修复 UniPush 谷歌渠道设置不显示隐私政策提示框可能导致获取推送标识信息失败的Bug
  + Android平台 优化 native.js 自动回收对象 autoCollection 机制，避免应用长时间运行内存回收不及时的问题
  + Android平台 修复 从相册图片中扫描二维码识别率低的Bug [详情](https://ask.dcloud.net.cn/question/88500)
  + Android平台 修复 保存部分视频文件添加至相册可能无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/102669)
  + Android平台 修复 自定义基座 wap2app 真机运行 tab 无法切换的Bug [详情](https://ask.dcloud.net.cn/question/102492)
  + iOS平台 修复 直播推流 LivePusher 设置 whiteness 美白属性值不生效的Bug [详情](https://ask.dcloud.net.cn/question/102761)
  + iOS平台 修复 状态栏样式设置为非沉浸式在 iPad 设备上横屏时状态栏显示不正常的Bug
* 【uni小程序SDK】
  + Android平台 优化 小程序后台运行功能，支持关闭多任务窗口 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android平台 修复 小程序在manifest.json配置固定横屏或竖屏方向无效的Bug

## 2.8.3.20200728
* 修复 目录内字符搜索结果界面右侧预览的vue、less等语言不着色的Bug [详情](https://ask.dcloud.net.cn/question/102438)
* 修复 菜单 显示左侧视图，菜单名称出现错别字的Bug
* 修复 插件API webView，引出的SFTP视图，右键菜单无法显示的Bug [详情](https://ask.dcloud.net.cn/question/102493)
* 【uni-app插件】
  + H5平台 修复 启用摇树优化后 audio 组件编译报错的Bug [#1943](https://github.com/dcloudio/uni-app/issues/1943)

## 2.8.2.20200726
* 【重要】新增 前端网页托管 提供免费、高速、安全、免运维的网页部署云服务 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
    + 入口1：选中web项目，点击菜单发行-上传网站到服务器
    + 入口2：uni-app发布为H5时，勾选 直接部署到前端网页托管
* 【重要】新增 uniCloud 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出
* 优化 兼容自定义代码块配置body时不是数组的情况
* 修复 jsx后缀的文件没有代码提示的Bug
* 修复 某些情况下，编辑器右键菜单【重排代码格式】置灰了的Bug
* 优化 修改插件配置规范，支持插件配置文件独立 (菜单【设置】【插件配置】)
* 修复 内部资源管理器 项目名称过长时，地址栏文件名宽度错误的Bug
* 新增 底部控制台 右键菜单，支持自定义快捷键 [详情](https://ask.dcloud.net.cn/article/37482)
* 修复 Mac 设置-常用设置中字体列表没有显示的Bug
* 【重要】新增 插件API hx.window.createWebView。可在创建的webview视图中自由绘制自己的界面 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebview)
* 新增 插件API hx.window.registerUriHanlder，支持从浏览器打开HBuilderX并自动安装或激活某插件 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=registerurihandler)
* 修复 插件API getActiveTextEditor()获取临时编辑器url出错的Bug
* 修复 插件API 2.7.12版引出的showInputBox无法使用的Bug
* 修复 插件API 消息通知框，当按钮文字太长时，显示不全的Bug
* 修复 插件市场 使用HBuilderX导入插件，调起HBuilderX后，编辑器窗口没有前置的Bug
* 修复 eslint-vue插件 获取workdspaceFolder时插件API调整造成的兼容Bug
* 【重要】新增 App manifest.json - App启动图，支持iOS 自定义storyboard启动界面（6月30日起Appstore强制要求storyboard）[详情](https://ask.dcloud.net.cn/article/37475)
* 新增 真机运行 支持iOS14_beta系统版本
* 修复 WebView调试 在新版Chrome(83.x版本) 上无法使用的Bug
* 修复 uni-app cli项目 提交打包 因缺少cliVersion和baseVersion字段，导致服务器不能正确分配打包机的Bug
* 优化 App manifest.json 将`App SDK配置`，合并到 App模块配置 中。选择模块后，如涉及SDK配置，则会出现相应界面
* 优化 App manifest.json - `App SDK配置`，支持三方SDK仅用于单一手机OS。比如只在Android上配高德定位、微信支付、支付宝支付，而在iOS上不启用。避免每次打包前调整manifest
* 【uni-app插件】
  + 优化 编译错误提示更准确，新增采集未知的编译器错误
  + App平台 修复 uni.hideLoading 会把 uni.showToast 隐藏掉的Bug
  + App平台 修复 uploadTask.abort 无效的Bug [详情](https://ask.dcloud.net.cn/question/99364)
  + App平台 修复 nvue 页面 Promise 不支持 finally 方法的Bug
  + App平台 修复 局部组件 props 中的 id 会覆盖根节点 id 属性的问题 [详情](https://ask.dcloud.net.cn/question/99900)
  + App平台 修复 audio 组件不显示的Bug
  + App平台 修复 backgroundAudioManager onCanPlay 事件失效的Bug
  + 【重要】App-Android平台 调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465)
  + App-Android平台 新增 支持DNS解析时优先使用ipv4 [详情](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android平台 修复 启动分包后云端打包可能出现页面无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100023)
  + App-Android平台 修复 map 组件 position 样式设置为 fixed 后可能出现地图控件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100128)
  + App-Android平台 修复 tabbar 页面中 webview 组件在 wgt 升级后可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99253)
  + App-Android平台 修复 nvue 页面使用 video 组件切换到其它 vue 页面后 input 组件无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/97197)
  + App-Android平台 修复 nvue input、textarea 组件设置 adjust-position 为 false 后切换页面可能无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/99416)
  + App-Android平台 修复 nvue webview 组件设置 webview-styles 的 progress 属性值后进度条显示不正常的Bug
  + App-Android平台 修复 全面屏手机横屏时页面宽高可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99365)
  + App-Android平台 修复 部分平板设备 rpx 计算错误的Bug [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android平台 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug [详情](https://ask.dcloud.net.cn/question/95065)
  + App-Android平台 修复 tabBar 页面首次启动可能显示区域不正常的Bug [详情](https://ask.dcloud.net.cn/question/100898)
  + App-Android平台 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug [详情](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android平台 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
  + App-iOS平台 修复 iOS12以下版本 切换到深色背景页面出现闪白的Bug。需注意当 pages.json 文件中配置窗口背景色与页面 style 节点设置背景色不一致时仍可能会闪屏 [详情](https://ask.dcloud.net.cn/question/99453)
  + App-iOS平台 修复 video 组件中使用 cover-image 退出全屏后不显示的Bug [详情](https://ask.dcloud.net.cn/question/98498)
  + App-iOS平台 修复 nvue map 组件 moveToLocation 方法不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/99638)
  + App-iOS平台 修复 nvue web-view 组件 schemes 无法跳转打开其他应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue 页面 picker-view 组件滚动错位的Bug
  + App-iOS平台 修复 nvue video 组件在页面关闭后仍在后台播放，再次打开页面出现播放异常的Bug [详情](https://ask.dcloud.net.cn/question/100943)
  + App-iOS平台 修复 nvue 页面开启下拉刷新 enablePullDownRefresh 后，配置自定义导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100506)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时传入初始值高度没有自适应的Bug [详情](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS平台 修复 nvue textarea 组件 linechange 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/91477)
  + H5平台 修复 onPageNotFound 生命周期无效的Bug [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5平台 修复 iOS微信内置浏览器打开位置相关页面后无法后退的Bug [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + 小程序平台 修复 组件的部分写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/101132)
  + 小程序平台 修复 作用域插槽中定义的 class 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/100724)
  + 小程序平台 修复 修复组件嵌套时解构插槽内事件报错的Bug [详情](https://ask.dcloud.net.cn/question/99063)
  + 小程序平台 修复 匿名插槽和具名插槽 default 不等同的Bug
  + 微信小程序 修复 多个 v-for 嵌套时部分情况下绑定事件报错的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + 微信小程序平台 新增 支持生命周期 onUnhandleRejection、onShareTimeline（分享小程序到朋友圈）、onAddToFavorites
  + 微信小程序平台 优化 支持作用域插槽当作普通插槽使用 [详情](https://ask.dcloud.net.cn/question/98634)
  + 支付宝小程序平台 修复 作用域插槽不显示的Bug [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + 新建uni-app项目模板，新增来自插件市场腾讯云提供的discus!Q模板 [详情](https://ext.dcloud.net.cn/plugin?id=2336)
  + 登录模版 升级 集成 uni-id 补充云函数，实现前后一体、功能完整的登录注册模板 [详情](https://github.com/dcloudio/uni-template-login)
* 【uniCloud】
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runlocal)
  + 【重要】新增 插件市场支持云函数付费销售，并可以设置某些云函数加密，欢迎插件作者们提交高质量可售卖插件
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + 【重要】新增[uni-clientBD](https://uniapp.dcloud.io/uniCloud/uni-clientDB)，实现安全的客户端直接操作云数据库，大幅提升开发效率，推荐每个 uniCloud 开发者使用
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + 修复 2.7.14版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + 修复 2.7.14版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 穿山甲SDK Android更新为3.1.0.0版、iOS更新为3.1.0.1版；腾讯广告联盟SDK Android更新为4.232.1102版、iOS更新为4.11.9版；360广告SDK Android更新为5.17.3157。请使用广告的开发者尽早升级，老版本在部分新手机上有闪退现象
  + Android平台 修复 请求权限 plus.android.requestPermissions 传入无效权限可能引起应用崩溃的Bug
  + Android平台 修复 视频播放 安卓9及以下的刘海屏手机上全屏播放引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/99064)
  + Android平台 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug [详情](https://ask.dcloud.net.cn/question/95951)
  + Android平台 修复 从系统相册选择文件设置最多选择图片数量 maximum 后不会触发 onmaxed 事件的Bug [详情](https://ask.dcloud.net.cn/question/100062)
  + Android平台 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100601)
  + Android平台 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug [详情](https://ask.dcloud.net.cn/question/100592)
  + Android平台 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
  + Android平台 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
  + Android平台 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99149) 
  + 【重要】iOS平台 新增 云端打包支持配置自定义storyboard启动界面 [详情](https://ask.dcloud.net.cn/article/37475)
  + iOS平台 修复 uni-AD 同时并发调用多次获取信息流广告可能导致无法返回广告数据的Bug
  + iOS平台 修复 uni-AD 开屏广告点击特定基础广告时可能引起应用卡死的Bug
  + iOS平台 修复 应用首页加载网络页面在启动时可能偶现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99572)
  + iOS平台 修复 Webview窗口直接加载mp4视频可能显示错误页面的Bug
  + iOS平台 修复 音频 audio 连接 airpods 等外接设备时依然使用手机扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/100719)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 blob 类型数据返回乱码的Bug [详情](https://ask.dcloud.net.cn/question/98721)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 big integer 类型数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/100234)
  + iOS平台 修复 连接多个蓝牙设备时，特征值变化事件 onBLECharacteristicValueChange 回调触发异常的Bug [详情](https://ask.dcloud.net.cn/question/99858)
  + iOS平台 修复 连接蓝牙设备 createBLEConnection 超时不触发错误回调的Bug
  + iOS平台 修复 连接蓝牙设备后 可能无法写入数据的Bug
  + iOS平台 修复 连接蓝牙设备断开后 可能无法再次连接的Bug
  + iOS平台 修复 previewImage 预览图片在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100379)
* 【uni小程序SDK】
  + Android平台 优化 小程序进程为应用私有进程，名称调整为`宿主包名:io.dcloud.unimp`，防止其他APP调用
  + Android平台 修复 小程序启动界面可能出现闪屏的Bug
  + iOS平台 新增 预加载小程序功能，可提升初次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a%a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 新增 小程序支持后台运行功能，可提升二次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)
  + iOS平台 优化 小程序启动流程，Hello uni-app 示例应用启动速度提升2倍，在iPhone11设备实测400ms内打开应用首页
  + iOS平台 修复 发送短信 sendMessage API无效的Bug

## 历史更新日志
[https://update.dcloud.net.cn/hbuilderx/changelog/2.7.14.20200618.html](https://update.dcloud.net.cn/hbuilderx/changelog/2.7.14.20200618.html)
