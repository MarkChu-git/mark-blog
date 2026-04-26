# AGENTS.md — Mandatory Workflow Rules

These rules bind ALL agent sessions operating in this repository.

## 1. Commit & Push

Every change MUST be committed and pushed before declaring a task complete.

## 2. Skill Traversal

Before executing any task, load every skill that could plausibly apply.

## 3. Multi-Subagent Mode with 3 Auditors

Every task MUST use 3+ parallel subagents: workers + 3 auditors. Auditors verify code quality, rule adherence, and correctness. Any FAIL requires fixes before completion.

## 4. Web Search Capability

Use web search before making implementation decisions involving external libraries, best practices, research, or API changes.

## 5. Enforcement

Violation of any rule is grounds for task rejection and re-execution.

## Repo Context

### Stack & Commands
- VuePress 2 + vuepress-theme-plume static blog. Node >=18. npm with `legacy-peer-deps=true`.
- **Dev**: `npm run docs:dev` (localhost:8080)
- **Build**: `npm run docs:build` (output: `docs/.vuepress/dist`)
- **Clean cache build**: `npm run docs:clean-build`
- **No tests, lint, or typecheck** — do not attempt to run them.

### Architecture
- `docs/.vuepress/config.ts` — VuePress core config (bundler, SEO, sitemap, locales, base URL logic).
- `docs/.vuepress/plume.config.ts` — Theme config: navbar, blog settings, **manually configured sidebars for notes**.
- `docs/.vuepress/client.ts` — Registers global Vue components and imports styles. **Any new custom component must be registered here.**
- `docs/.vuepress/components/` — Vue SFCs used in markdown.
- `docs/.vuepress/styles/` — Global CSS imports.
- `docs/.vuepress/public/` — Static assets (favicon, images, icons).

### Content Boundaries
- `docs/blog/` — English blog posts.
- `docs/notes/` — English structured tutorials with **manual sidebar entries in `plume.config.ts`**.
- `docs/zh/` — Chinese translations (mirrors `blog/` and `notes/` structure).
- `docs/more/` — Static pages (about, friends).
- `docs/README.md` — English homepage (uses `<HomeReplica />`).
- `docs/zh/README.md` — Chinese homepage.

### Deployment Gotchas
- Primary: **Vercel** (`vercel.json`: build `npm run build`, output `docs/.vuepress/dist`).
- Fallback: **Netlify** (`netlify.toml`: build `npm run docs:build`, publish `docs/.vuepress/dist`).
- `SITE_URL` env var controls canonical URLs and sitemap hostname. If unset, falls back to GitHub Pages URL.
- `docs/.vuepress/.cache/`, `.temp/`, `dist/` are gitignored. Never commit them.

### Content Conventions
- `autoFrontmatter: false` in plume config — frontmatter must be written manually.
- Blog posts are auto-discovered from `blog/**/*.md` and `zh/blog/**/*.md`.
- When adding/changing a note chapter, update the corresponding sidebar array in `plume.config.ts` for both `/` and `/zh/` locales.
- Mermaid and KaTeX are enabled. Custom code highlighter langs are limited to `ts, js, vue, json, bash, sh, css, html, python, markdown`.
