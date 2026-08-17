<p align="center">
  <a href="https://me.markchu.work/">
    <img
      src="assets/readme/readme-hero.webp"
      alt="MARK — Insight · Realism · Compounding — VuePress · Bun · EN/ZH"
      width="888"
    />
  </a>
</p>

<h1 align="center">Mark's Blog</h1>

<p align="center">
  <strong>洞察本质 · 尊重现实 · 长期复利</strong><br />
  Insight · Realism · Compounding
</p>

<p align="center">
  一份被当成产品来打磨的双语笔记本。<br />
  A bilingual engineering notebook treated like a long-term product — not a dump of markdown files with a theme slapped on.
</p>

<p align="center">
  <a href="https://me.markchu.work/"><strong>Live site</strong></a>
  ·
  <a href="https://me.markchu.work/zh/">中文</a>
  ·
  <a href="https://github.com/MarkChu-git/mark-blog">Source</a>
</p>

<p align="center">
  <img alt="VuePress" src="https://img.shields.io/badge/VuePress-2_rc.28-7aa2ff?style=flat-square" />
  <img alt="Plume" src="https://img.shields.io/badge/Plume-rc.157-b28cff?style=flat-square" />
  <img alt="Bun" src="https://img.shields.io/badge/package_manager-Bun-ffd788?style=flat-square" />
  <img alt="Locales" src="https://img.shields.io/badge/locales-EN%20%2F%20ZH-8ee0e3?style=flat-square" />
</p>

---

## This is not a starter template

You can call me Mark. I write about computer science, finance, product, and marketing — and I hold the page to the same standard as the code.

**Clarity over noise.** First make the problem legible, then scale it.  
**Structure before scale.** Systems beat accumulation.  
**Restraint still has to ship.** Reliability outruns novelty.

If you came here looking for `npm install`, you are already in the wrong century of this repo.

---

## Three principles

| | English | 中文 |
| --- | --- | --- |
| **Insight** | See through to the underlying logic. Look past the surface to find what actually drives outcomes. | 洞察本质。看透问题的底层逻辑，不被表象带走。 |
| **Realism** | Acknowledge constraints. Accept uncertainty. Decide on real conditions, not idealized assumptions. | 尊重现实。承认约束，接受不确定性。 |
| **Compounding** | Choose work that accumulates. Let today's effort become tomorrow's foundation. | 长期复利。做时间的朋友。 |

Motto underneath: *Clarity over noise. / 清晰优先于堆砌。*

---

## Product surface

What the site actually is, not a feature laundry list:

- **Homepage as an object.** Custom Tahoe liquid-glass cards, not the default VuePress hero. Hover / click, then read.
- **Two locales, one source of truth.** `/` English, `/zh/` 简体中文. Same architecture, same sidebars, same conventions.
- **Blog.** Essays auto-discovered from `docs/blog/` and `docs/zh/blog/`.
- **Notes.** Structured textbooks with **manual** sidebars. Shipping now: *Git and GitHub*, *Typora and Markdown*.
- **About / Friends.** Resume-grade about page, and a friends directory.
- **Writing tools that stay out of the way.** Mermaid, KaTeX, local search, Giscus comments, self-hosted fonts. No Google Fonts CDN.

The notes catalog lists more volumes as *Coming Soon*. Those cards are a roadmap, not a ship date.

---

## Stack

| Layer | Choice |
| --- | --- |
| Generator | VuePress `2.0.0-rc.28` + Vite |
| Theme | `vuepress-theme-plume` `1.0.0-rc.157` |
| Package manager | **Bun only** (`packageManager`: `bun@1.3.14`) |
| Fonts | Inter (theme) · Sora / Manrope / JetBrains Mono (`@fontsource/*`) |
| Host | Vercel primary · Netlify fallback |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` |

VuePress's own CLI still rides a Node shebang. That is the raccoon in the vents. We do not invite **npm** back to feed it.

---

## Quick start

Requires [Bun](https://bun.sh) `>= 1.2`.

```bash
bun install
bun run docs:dev
```

Open `http://localhost:8080`.

```bash
bun run docs:build      # production build → docs/.vuepress/dist
bun run docs:preview    # serve the built site
bun run docs:clean-dev  # wipe VuePress cache, then dev
bun run docs:clean-build
```

`bun run dev` / `bun run build` / `bun run preview` are the same commands without the `docs:` prefix.

If you type `npm install`, the `preinstall` guard will refuse. That is not a bug.

---

## Map

```
docs/
├── blog/                 English essays
├── notes/                English textbooks (manual sidebars)
│   ├── git-and-github/
│   └── typora-and-markdown/
├── more/about/           About
├── more/friends/         Friends
├── zh/                   Chinese mirror of the above
└── .vuepress/
    ├── config.ts         VuePress, SEO, sitemap, base URL
    ├── plume.config.ts   Navbar, blog, note sidebars
    ├── client.ts         Global Vue components
    ├── components/       Home, notes catalog, friends, typewriter
    ├── styles/           Tahoe / replica CSS
    └── public/           Favicon, avatar, social icons
```

Do not look for `docs/about.md`. It does not exist.

---

## Conventions

- `autoFrontmatter: false` — write frontmatter yourself.
- Blog posts are picked up from `blog/**/*.md` and `zh/blog/**/*.md`.
- Adding or renaming a note chapter means updating **both** `/` and `/zh/` sidebar arrays in `plume.config.ts`.
- Highlighter languages: `ts, js, vue, json, bash, sh, css, html, python, markdown`.
- Do not re-add `fonts.googleapis.com` or `fonts.gstatic.com`.

---

## Deploy

**Vercel** is primary.

| Setting | Value |
| --- | --- |
| Install | `bun install --frozen-lockfile` |
| Build | `bun run build` |
| Output | `docs/.vuepress/dist` |

Vercel sees `bun.lock` and stays on Bun. Do not leave a `package-lock.json` in the tree — it will try to drag npm back in.

**Netlify** is the fallback: `bun run docs:build` → `docs/.vuepress/dist`.

Set `SITE_URL=https://me.markchu.work` in the host so canonical URLs and the sitemap do not fall back to GitHub Pages.

Other env the config already understands: `SITE_BASE`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`, `VERCEL_BRANCH_URL`, `URL`, `DEPLOY_PRIME_URL`, `DEPLOY_URL`.

---

## Toolchain — 铁律

**本仓库严禁 npm。** 没有例外，没有「就这一次」，没有 fallback。

| 只用 | 禁止 |
| --- | --- |
| `bun install` | `npm install` / `yarn` / `pnpm` |
| `bun run <script>` | `npm run <script>` |
| `bunx <pkg>` | `npx <pkg>` |
| 提交 `bun.lock` | 提交 `package-lock.json` / `.npmrc` |

`scripts/only-bun.ts` 会在安装时拒绝非 Bun 客户端。`scripts/check-no-npm.ts` 会在提交时再查一遍。`.npmrc` 已删除；不要把它加回来。

---

## Contact

[GitHub](https://github.com/MarkChu-git) · [LinkedIn](https://www.linkedin.com/in/hanyang-chu-8836252a7) · [Email](mailto:markchu2022@gmail.com)

I treat this site as a long-term personal product — a place to sharpen thinking, document progress, and build in public.

---

<p align="center"><sub>VuePress · Plume · Bun. Clarity over noise.</sub></p>
