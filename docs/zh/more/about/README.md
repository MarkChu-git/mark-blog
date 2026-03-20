---
title: 关于我
description: Mark — 学生开发者，关注工程实践、技术写作与数学思维，致力于构建稳定的系统与可复用的知识。
aside: false
---

<div class="resume-header">

<img src="/profile.jpg" alt="Mark" class="profile-photo" />

# (Mark) 褚瀚阳

学生开发者 · 全栈 · 算法 · 量化 · AI

<div class="contact-info">

[GitHub](https://github.com/MarkChu-git) · [LinkedIn](https://www.linkedin.com/in/hanyang-chu-8836252a7) · [邮箱](mailto:markchu2022@gmail.com)

</div>

</div>

## 教育背景

### 莫纳什大学马来西亚分校
**计算机科学学士（数据科学方向）** · *2025 - 至今*

## 技能

### 编程语言
TypeScript / JavaScript, Python, Go, Java / Kotlin, C#, C++, SQL

### 前端
React / Next.js, Vue, HTML / CSS / Tailwind CSS, Astro

### 后端与数据
FastAPI, PostgreSQL / Supabase, R

### 运维与工具
Docker / Kubernetes, Linux, Git, Zsh / Bash

### 其他
技术写作, LaTeX / Markdown

## 项目经历

### Aura — AI 驱动的香水推荐平台
**技术栈：** React, FastAPI, PostgreSQL + pgvector, Redis, Celery, Docker, OpenAI API

一个智能香水推荐引擎，将抽象的嗅觉描述与具体产品建议连接起来。使用向量搜索（pgvector）和 LLM 解析基于意象和氛围的用户查询。

- 构建现代化分布式架构，包含 Traefik 网关、FastAPI 后端和 React 前端
- 使用 PostgreSQL pgvector 实现语义搜索，进行香水相似度匹配
- 设计 Celery + Redis 异步任务处理，支持长时间 AI 推理
- 使用 Docker Compose 容器化整个技术栈，实现生产环境部署

[GitHub](https://github.com/MarkChu-git/Aura)

### Always Ontrack — Monash OnTrack 终端 CLI
**技术栈：** TypeScript, Node.js, Commander.js, Playwright, Chalk

一个终端优先的 CLI 工具，将 Monash OnTrack 常用工作流整合为单一命令界面，支持交互式终端使用和脚本自动化。

- 使用 Playwright 实现 SSO 认证和自动化浏览器处理
- 构建完整的命令集，涵盖项目、单元、任务、反馈和文件操作
- 设计批量任务选择器，支持多种选择模式（逗号分隔、全选）
- 添加 JSON 输出模式，支持 CI/CD 集成和脚本工作流

[GitHub](https://github.com/MarkChu-git/Always-Ontrack)

### Kestrel — 实时算法可视化平台
**技术栈：** Rust, React, Astro, PixiJS, PostgreSQL, Redis, NATS, Docker

新一代数据结构与算法实时可视化平台。采用流式执行模式，在代码运行时实时推送可视化事件。

- 使用 Rust (Axum + Tokio) 构建高性能 WebSocket 网关，采用二进制 Protobuf 协议
- 基于 WebGL 和 PixiJS 实现流畅的可视化渲染
- 设计安全的沙箱执行环境，使用 Kata Containers 和 Firecracker microVM
- 构建多语言运行器系统，支持 JavaScript、Python、C++ 和 Java

[GitHub](https://github.com/MarkChu-git/kestrel)

## 实习经历

### 多模态聊天系统开发
**后端开发工程师** · *2025.12 - 2026.2*

- 参与多模态聊天系统架构重构，实现策略路由模块，支持纯文本和多模态两种处理模式
- 开发视频处理模块，实现两阶段采样、有效帧计算、时间戳标注等功能
- 完成 MinIO 媒体存储服务集成，实现文件上传、去重和持久化存储
- 开发 LLM 编排模块，统一管理多模态模型调用和上下文处理
- 重构文档切分器，优化切分算法，提升文档处理质量
- 将长度计算方式从字符级切换为 Token 级，提高与 LLM 的兼容性
- 修复中文文档跨页合并时插入多余空格的问题，改善文本连贯性
- 编写单元测试和集成测试，覆盖视频路由、策略路由等核心模块

---

*我关注工程实践、数学思维与技术写作，也把这个博客当作长期打磨的个人产品。*

<style>
.resume-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-photo {
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.resume-header h1 {
  margin-bottom: 0.5rem;
}

.resume-header p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.contact-info {
  margin-top: 1rem;
}

.contact-info a {
  margin: 0 0.5rem;
}

h2 {
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
}

h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
}

h3 + p strong {
  color: var(--vp-c-text-2);
  font-weight: 500;
}
</style>
