# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (http://localhost:8080)
npm run docs:dev

# Production build
npm run docs:build

# Clean dev (clears VuePress cache)
npm run docs:clean-dev

# Preview production build
npm run docs:preview

# Build output: docs/.vuepress/dist
```

## Project Overview

A bilingual (English/Chinese) static blog built with **VuePress 2** and **vuepress-theme-plume**. Deployed on Vercel.

### Key architecture

- **VuePress config**: `docs/.vuepress/config.ts` — bundler (Vite), SEO, sitemap, base path, locale setup
- **Theme config**: `docs/.vuepress/plume.config.ts` — navbar, sidebar, blog settings (tags/archives/pagination), code highlighting
- **Client config**: `docs/.vuepress/client.ts` — registers global Vue components (`HomeReplica`, `NotesCatalog`, `FriendsReplica`, Vercel Analytics/SpeedInsights)
- **Custom components**: `docs/.vuepress/components/` — Vue SFCs for the homepage, notes catalog, friends page, typewriter text, lazy person
- **Custom styles**: `docs/.vuepress/styles/` — CSS for home page liquid layout, notes catalog, article float effects, replica components

### Content structure

```
docs/
├── blog/          # English blog articles
│   └── frontend/  # Sub-category for frontend articles
├── notes/         # English notes (structured tutorials)
│   ├── git-and-github/       # Multi-chapter Git tutorial
│   └── typora-and-markdown/  # Multi-chapter Markdown tutorial
├── zh/            # Chinese translations (mirrors English structure)
│   ├── blog/
│   └── notes/
├── more/          # Static pages
│   ├── about/     # About me page
│   └── friends/   # Friends/links page
└── .vuepress/     # VuePress configuration and assets
```

### Key features

- **Bilingual**: `/` for English, `/zh/` for Chinese, shared configuration via VuePress locales
- **SEO**: Twitter cards, Open Graph, canonical URLs, sitemap, all configured in `config.ts` with per-page metadata injection
- **Vercel integration**: `@vercel/analytics` and `@vercel/speed-insights` registered as global Vue components
- **Mermaid diagrams**: Enabled in markdown via vuepress-theme-plume
- **KaTeX**: Math formula rendering in markdown
- **Smart URL handling**: `config.ts` auto-detects deployment platform (Vercel, Netlify) or falls back to GitHub Pages base URL

### Environment variables

- `SITE_URL` — set in Vercel project env for canonical/sitemap URL resolution
- `SITE_BASE`, `VERCEL_URL`, `VERCEL_BRANCH_URL`, `DEPLOY_URL` etc. — auto-detected in `config.ts`

### Git workflow

- `main` branch is the production source
- Feature branches are used for optimization work (e.g., `feature/mobile-device-optimization`)
- PRs against `main` trigger Vercel deployment
