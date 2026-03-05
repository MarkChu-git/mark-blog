# Mark Blog

一个基于 **VuePress 2** 和 **vuepress-theme-plume** 的静态博客。

## 本地开发

```bash
npm install
npm run docs:dev
```

默认访问：`http://localhost:8080`

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

## 目录结构

- `docs/.vuepress/config.ts`：VuePress 主配置
- `docs/.vuepress/plume.config.ts`：Plume 主题配置（导航、博客集合等）
- `docs/README.md`：首页
- `docs/blog/`：博客文章目录
- `docs/about.md`：关于页
