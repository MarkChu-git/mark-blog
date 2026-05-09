# Giscus Comment System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add GitHub Discussions-powered comments to all blog posts and notes using Giscus, via vuepress-theme-plume's built-in comment support.

**Architecture:** vuepress-theme-plume bundles `@vuepress/plugin-comment` which includes Giscus. The theme's `VPComment.vue` component auto-renders in the doc layout after content. Single config change in `config.ts` — no new files, no new packages, no custom components.

**Tech Stack:** VuePress 2, vuepress-theme-plume (built-in `@vuepress/plugin-comment`), Giscus (GitHub Discussions)

**Prerequisites:**

- GitHub repo `MarkChu-git/mark-blog` must have **Discussions enabled**
- [Giscus GitHub App](https://github.com/apps/giscus) must be installed on the repo
- Obtain `repoId` and `categoryId` from <https://giscus.app>

***

### Task 1: Enable GitHub Discussions & Install Giscus App

**Files:** None (GitHub web UI)

- [ ] **Step 1: Enable Discussions on the repo**

Go to <https://github.com/MarkChu-git/mark-blog> → Settings → General → scroll to "Features" → check "Discussions"

- [ ] **Step 2: Create a "Comments" category in Discussions**

Go to <https://github.com/MarkChu-git/mark-blog/discussions> → Categories → New Category:

- Name: `Comments`
- Format: `Open-ended discussion`
- Description: `Comments for blog posts and notes`
- [ ] **Step 3: Install the Giscus GitHub App**

Go to <https://github.com/apps/giscus> → Install → Select `MarkChu-git/mark-blog`

- [ ] **Step 4: Get repo ID and category ID**

Go to <https://giscus.app> → fill in:

- Repo: `MarkChu-git/mark-blog`
- Page ↔️ Discussions mapping: `pathname`
- Discussion Category: `Comments`

Copy the generated `data-repo-id` and `data-category-id` values. Save them for Task 2.

***

### Task 2: Configure Giscus in VuePress

**Files:**

- Modify: `docs/.vuepress/config.ts:189`
- [ ] **Step 1: Add comment config to plumeTheme()**

In `docs/.vuepress/config.ts`, find the `plumeTheme()` call (around line 189) and add the `comment` option:

```ts
theme: plumeTheme({
  markdown: {
    mermaid: true,
  },
  comment: {
    provider: 'Giscus',
    repo: 'MarkChu-git/mark-blog',
    repoId: '<REPO_ID_FROM_GISCUS_APP>',
    category: 'Comments',
    categoryId: '<CATEGORY_ID_FROM_GISCUS_APP>',
    mapping: 'pathname',
    strict: true,
    lazyLoading: true,
    reactionsEnabled: true,
    inputPosition: 'top',
    lightTheme: 'light',
    darkTheme: 'dark',
  },
}),
```

Replace `<REPO_ID_FROM_GISCUS_APP>` and `<CATEGORY_ID_FROM_GISCUS_APP>` with the actual values from Task 1 Step 4.

- [ ] **Step 2: Verify build passes**

Run: `npm run docs:build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add docs/.vuepress/config.ts
git commit -m "feat: add Giscus comment system to blog posts and notes"
```

***

### Task 3: Theme-Aware Styling (Optional)

**Files:**

- Modify: `docs/.vuepress/config.ts` (lightTheme/darkTheme values)

The `darkTheme` value `'dark'` uses Giscus's built-in dark theme. For tighter integration with the blog's color scheme, you can use `'preferred_color_scheme'` to auto-switch, or a custom Giscus theme URL.

- [ ] **Step 1: Test both themes locally**

Run: `npm run docs:dev`
Toggle between light/dark mode in the browser. Verify comments render correctly in both.

- [ ] **Step 2: Adjust theme values if needed**

Options:

- `'light'` / `'dark'` — explicit themes, toggle manually
- `'preferred_color_scheme'` — follows OS preference
- `'transparent_dark'` — transparent background dark theme
- Custom URL — for full CSS control
- [ ] **Step 3: Commit if changed**

```bash
git add docs/.vuepress/config.ts
git commit -m "fix: adjust Giscus theme for better dark mode integration"
```

***

### Task 4: Per-Page Opt-Out (Documentation)

**Files:** None (knowledge task)

Posts can disable comments by adding to frontmatter:

```yaml
---
title: My Post
comments: false
---
```

- [ ] **Step 1: Verify opt-out works**

Add `comments: false` to one blog post's frontmatter, run dev server, confirm comments don't appear.

- [ ] **Step 2: Remove the test opt-out**

Restore the frontmatter to its original state.

***

### Task 5: Deploy & Verify

**Files:** None

- [ ] **Step 1: Push to remote**

```bash
git push origin feature/mobile-device-optimization
```

- [ ] **Step 2: Verify on Vercel preview**

After Vercel deploys the preview, check:

1. Comments appear at the bottom of a blog post
2. Comments appear at the bottom of a notes page
3. Dark mode toggle works
4. Can post a comment (requires GitHub login)
5. Reactions work

- [ ] **Step 3: Merge PR**

If everything works, merge the PR into `main`.

curl "[https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://me.markchu.work\&strategy=mobile](https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com\&strategy=mobile)" -o pagespeed-mobile.json
