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

## Vercel 部署

- 默认构建命令：`npm run build`
- 默认输出目录：`docs/.vuepress/dist`
- 如需固定生产站点域名用于 canonical / sitemap，建议在 Vercel 项目环境变量中设置 `SITE_URL=https://你的域名`

## 目录结构

- `docs/.vuepress/config.ts`：VuePress 主配置
- `docs/.vuepress/plume.config.ts`：Plume 主题配置（导航、博客集合等）
- `docs/README.md`：首页
- `docs/blog/`：博客文章目录
- `docs/about.md`：关于页
