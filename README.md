# AI 找一找 · 交互原型

基于 React 的移动端静态交互演示，可发布到 GitHub Pages。

## 预览

使用静态文件服务器打开 `docs/`，例如 `python3 -m http.server 5173 --directory docs`。

## 构建

安装 Node.js 20+，运行 `npm install` 和 `npm run build`。构建会更新 `docs/app.js`。

## GitHub Pages

发布来源选择 `main` 分支的 `/docs` 目录。

## 演示范围

包含欢迎动画、搜索思考过程、结果卡片、历史抽屉、键盘与语音界面、文件夹选择。
资源结果为本地演示，未接入真实检索、语音识别或云盘 API。历史与保存记录使用当前浏览器 localStorage。
