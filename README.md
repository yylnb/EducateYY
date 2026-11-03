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
- **单文件、零依赖**：每篇文章就是一个 HTML 文件，内联 CSS，不依赖任何框架或构建工具

---

## 🚀 本地预览

纯静态站点，直接用浏览器打开即可：

```bash
# 方式一：直接打开
open index.html

# 方式二：起个本地服务器（推荐，路径行为与线上一致）
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

---

## 📁 目录结构

```
EducateYY/
├── index.html                  # 首页（内容导航）
├── vpn-technology/
│   └── index.html              # VPN 原理图解
└── README.md
```

**新增文章的方式**：建一个 `<slug>/index.html`，在首页加一张卡片指向 `/slug/` 即可。

---

## 🎨 技术栈

- 纯 HTML + CSS（内联，无外部依赖）
- 深色主题，参考 GitHub Dark 配色
- 响应式布局，适配移动端
- 支持打印样式（可直接导出 PDF）

---

## 📝 License

内容与代码可自由参考学习。
