# EducateYY

技术知识图解与整理 —— 把复杂原理讲清楚。

> 在线访问：**[edu.leonyeung.com](https://edu.leonyeung.com)**

---

## 📚 内容

| 目录 | 主题 | 说明 |
|------|------|------|
| [`/vpn-technology`](vpn-technology/) | **VPN 原理图解** | 从 DNS 解析到加密隧道，讲清 TLS 证书、Hysteria2、VLESS Reality 的工作机制 |

---

## 🎯 设计理念

- **图解优先**：用流程图、对照表代替大段文字
- **从「为什么」讲起**：不假设读者已有背景
- **静态多页面**：页面以 HTML/CSS 为主，首页使用 Shaders 提供可回退的 WebGPU 点阵效果

---

## 🚀 本地预览与构建

需要 Node.js 22.12 或更高版本。安装依赖后启动开发服务器：

```sh
npm install
npm run dev
```

生成可部署的静态文件：

```sh
npm run build
```

构建产物位于 `dist/`，包含首页与 `/vpn-technology/` 页面。可用 `npm run preview` 本地预览构建结果。

---

## 📁 目录结构

```
EducateYY/
├── index.html                  # 首页（内容导航）
├── vpn-technology/
│   └── index.html              # VPN 原理图解
├── src/
│   └── main.js                 # 首页 WebGPU 效果与回退
├── styles.css                  # 共用视觉样式
├── package.json
└── README.md
```

**新增文章的方式**：建一个 `<slug>/index.html`，在首页加一张卡片指向 `/slug/` 即可。

---

## 🎨 技术栈

- HTML + CSS + Vite 多页面构建
- Shaders JavaScript / WebGPU（仅用于首页装饰效果）
- WebGPU 不可用或用户偏好减少动态效果时使用静态点阵
- 响应式布局，适配移动端
- 支持打印样式（可直接导出 PDF）

---

## 📝 License

内容与代码可自由参考学习。
