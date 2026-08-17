# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (http://localhost:8080)
bun run docs:dev

# Production build
bun run docs:build

# Clean dev (clears VuePress cache)
bun run docs:clean-dev

# Preview production build
bun run docs:preview

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

### Font management

- **Inter** — self-hosted by vuepress-theme-plume (woff2 in build output), `font-display: swap`
- **Sora, Manrope, JetBrains Mono** — self-hosted via `@fontsource/*` packages, imported in `docs/.vuepress/styles/fonts.css`
- Google Fonts CDN was removed — do NOT re-add `fonts.googleapis.com` or `fonts.gstatic.com` links to `config.ts` head
- All fonts served from Vercel CDN after build, browser downloads only needed unicode-range subsets

### Performance notes

- **Social icons** (`docs/.vuepress/public/social-icons/`) are 1024x1024 PNGs (~400-600KB each) rendered at 32px — consider Iconify replacement if optimizing
- **avatar.png** is 1.7MB (1024x1024) — consider resize/WebP if optimizing
- **profile.jpg** is 2.5MB — referenced in `docs/more/about/README.md` and `docs/zh/more/about/README.md`
- **photoSwipe** plugin is enabled globally, preloads 58KB on every page — can be disabled with `photoSwipe: false` in plumeTheme options
- **manualChunks** configured in `config.ts` — splits `vendor-vue` (vue/vue-router/pinia) and `vendor-utils` (@vueuse/core)
- **CSS code splitting** — `home-liquid.css` and `notes-catalog.css` are imported in their respective Vue components (not in `client.ts`) for per-page loading
- **@iconify/vue** is installed, `<Icon>` component available in `HomeReplica.vue` — currently only used for close button in card reveals

### Content conventions

- `autoFrontmatter: false` in plume config — frontmatter must be written manually
- Blog posts are auto-discovered from `blog/**/*.md` and `zh/blog/**/*.md`
- When adding/changing a note chapter, update the corresponding sidebar array in `plume.config.ts` for both `/` and `/zh/` locales
- Mermaid and KaTeX are enabled. Custom code highlighter langs: `ts, js, vue, json, bash, sh, css, html, python, markdown`

### Deployment gotchas

- Primary: **Vercel** (`vercel.json`: install `bun install --frozen-lockfile`, build `bun run build`, output `docs/.vuepress/dist`)
- Fallback: **Netlify** (`netlify.toml`: build `bun run docs:build`, publish `docs/.vuepress/dist`)
- `SITE_URL` env var controls canonical URLs and sitemap hostname. If unset, falls back to GitHub Pages URL
- `docs/.vuepress/.cache/`, `.temp/`, `dist/` are gitignored — never commit them
- **No tests, lint, or typecheck** — do not attempt to run them

## Workflow Rules (from AGENTS.md)

These rules bind ALL agent sessions operating in this repository.

1. **Commit & Push** — Every change MUST be committed and pushed before declaring a task complete.
2. **Skill Traversal** — Before executing any task, load every skill that could plausibly apply.
3. **Multi-Subagent Mode with 3 Auditors** — Every task MUST use 3+ parallel subagents: workers + 3 auditors. Auditors verify code quality, rule adherence, and correctness. Any FAIL requires fixes before completion.
4. **Web Search Capability** — Use web search before making implementation decisions involving external libraries, best practices, research, or API changes.
5. **Enforcement** — Violation of any rule is grounds for task rejection and re-execution.
6. **Bun Only — npm is forbidden (iron law)** — Never run `npm` / `npx` / `yarn` / `pnpm`. Never add `package-lock.json` or `.npmrc`. Use `bun install`, `bun run`, `bunx`. If generated docs reintroduce `npx`, rewrite to Bun before committing.

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **mark-blog** (1441 symbols, 1454 relationships, 0 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> Index stale? Run `bunx gitnexus analyze` from the project root. Never `npx`. Never `npm`.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows. For regression review, compare against the default branch: `detect_changes({scope: "compare", base_ref: "main"})`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `query({search_query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method without first running `impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit changes without running `detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/mark-blog/context` | Codebase overview, check index freshness |
| `gitnexus://repo/mark-blog/clusters` | All functional areas |
| `gitnexus://repo/mark-blog/processes` | All execution flows |
| `gitnexus://repo/mark-blog/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
