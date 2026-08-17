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

## 6. Bun Only — npm is forbidden (iron law)

This repository is Bun-only. No exceptions. No "just this once." No fallback.

**NEVER**
- Run `npm`, `npx`, `yarn`, `pnpm`, or `cnpm` in this repository
- Add `package-lock.json`, `.npmrc`, `yarn.lock`, or `pnpm-lock.yaml`
- Write `npm run` / `npx` into `package.json`, `vercel.json`, `netlify.toml`, hooks, or agent docs as a command to execute
- Suggest npm when Bun is missing — install Bun from https://bun.sh instead

**ALWAYS**
- `bun install`, `bun run <script>`, `bunx <pkg>`
- `bunx gitnexus analyze` (never `npx gitnexus`, never `npm i -g gitnexus`)
- If a generated doc (including the GitNexus block) reintroduces `npx` or `npm` as a runnable command, rewrite it to Bun before committing

Mechanical enforcement: `scripts/only-bun.ts` (preinstall), `scripts/check-no-npm.ts` (pre-commit), `.gitignore`.

Violation is grounds for task rejection and re-execution.

## Repo Context

### Stack & Commands
- VuePress 2 + vuepress-theme-plume static blog. Bun >=1.2 (`packageManager`: `bun@1.3.14`). **Iron law: Bun only. npm is forbidden.**
- **Dev**: `bun run docs:dev` (localhost:8080)
- **Build**: `bun run docs:build` (output: `docs/.vuepress/dist`)
- **Clean cache build**: `bun run docs:clean-build`
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
- Primary: **Vercel** (`vercel.json`: install `bun install --frozen-lockfile`, build `bun run build`, output `docs/.vuepress/dist`).
- Fallback: **Netlify** (`netlify.toml`: build `bun run docs:build`, publish `docs/.vuepress/dist`).
- `SITE_URL` env var controls canonical URLs and sitemap hostname. If unset, falls back to GitHub Pages URL.
- `docs/.vuepress/.cache/`, `.temp/`, `dist/` are gitignored. Never commit them.

### Content Conventions
- `autoFrontmatter: false` in plume config — frontmatter must be written manually.
- Blog posts are auto-discovered from `blog/**/*.md` and `zh/blog/**/*.md`.
- When adding/changing a note chapter, update the corresponding sidebar array in `plume.config.ts` for both `/` and `/zh/` locales.
- Mermaid and KaTeX are enabled. Custom code highlighter langs are limited to `ts, js, vue, json, bash, sh, css, html, python, markdown`.

### Font Management
- **Inter** — self-hosted by vuepress-theme-plume (woff2 in build output). `font-display: swap`.
- **Sora, Manrope, JetBrains Mono** — self-hosted via `@fontsource/*` packages, imported in `docs/.vuepress/styles/fonts.css`.
- Google Fonts CDN was removed — do NOT re-add `fonts.googleapis.com` or `fonts.gstatic.com` links to `config.ts` head.
- All fonts served from Vercel CDN after build. Browser downloads only needed unicode-range subsets.

### Performance Constraints
- **Social icons** (`docs/.vuepress/public/social-icons/`) are 1024x1024 PNGs (~400-600KB each) rendered at 32px. Consider Iconify replacement if optimizing.
- **avatar.png** is 1.7MB (1024x1024). Consider resize/WebP if optimizing.
- **profile.jpg** is 2.5MB. Referenced in `docs/more/about/README.md` and `docs/zh/more/about/README.md`.
- **photoSwipe** plugin is enabled globally — preloads 58KB on every page. Can be disabled with `photoSwipe: false` in plumeTheme options if acceptable.
- **manualChunks** configured in `config.ts` — splits `vendor-vue` (vue/vue-router/pinia) and `vendor-utils` (@vueuse/core).
- **CSS code splitting** — `home-liquid.css` and `notes-catalog.css` are imported in their respective Vue components (not in `client.ts`) for per-page loading.

### Icon System
- `@iconify/vue` is installed. `<Icon>` component available in `HomeReplica.vue`.
- Iconify icon names follow `mdi:icon-name` or `simple-icons:icon-name` format.
- Currently only used for the close button in card reveals — social icons still use PNGs.

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
