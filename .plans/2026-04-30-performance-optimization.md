# Performance Optimization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Lighthouse mobile performance from 56 to 75+ by eliminating render-blocking resources, reducing image payload, and splitting JS/CSS bundles.

**Architecture:** Three-pronged approach — (1) image optimization via Iconify + resize, (2) font optimization by removing duplicate Google Fonts CDN, (3) JS/CSS optimization via code splitting and lazy loading.

**Tech Stack:** VuePress 2, vuepress-theme-plume, Vite, Iconify (@iconify/vue)

---

## Current Lighthouse Baseline (Mobile)

| Metric | Value | Target |
|--------|-------|--------|
| Performance | 56 | 75+ |
| LCP | 21.4s | < 4s |
| FCP | 4.1s | < 1.8s |
| TBT | 460ms | < 200ms |
| CLS | 0 | < 0.1 |

---

## Task 1: Remove Google Fonts CDN (Render-Blocking Resource)

**Rationale:** The site self-hosts Inter woff2 files via `@font-face` declarations in the theme CSS. Yet `config.ts` lines 117-138 load the same Inter + Sora + Manrope from Google Fonts CDN — a **render-blocking** cross-origin request that duplicates existing self-hosted fonts.

**Files:**
- Modify: `docs/.vuepress/config.ts:117-138`

- [ ] **Step 1: Remove Google Fonts preconnect and stylesheet from `config.ts`**

Remove these three `head` entries (the `'link'` entries for `fonts.googleapis.com` preconnect, `fonts.gstatic.com` preconnect, and the Google Fonts stylesheet):

```ts
// REMOVE these three entries from the head array:
[
  'link',
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
],
[
  'link',
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: '',
  },
],
[
  'link',
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap',
  },
],
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run docs:build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add docs/.vuepress/config.ts
git commit -m "perf: remove duplicate Google Fonts CDN (self-hosted Inter already available)"
```

---

## Task 2: Disable photoSwipe Plugin (58KB Savings)

**Rationale:** The `@vuepress/plugin-photo-swipe` runs `requestIdleCallback(() => import("photoswipe"))` on **every page mount**, preloading 58KB of JS even on pages with no images (homepage, about, friends). Only 5 markdown files use images.

**Files:**
- Modify: `docs/.vuepress/config.ts` (theme options)

- [ ] **Step 1: Add `photoSwipe: false` to plume theme options**

In `config.ts`, add to the `plumeTheme()` call:

```ts
theme: plumeTheme({
  plugins: {
    photoSwipe: false,
  },
  markdown: {
    mermaid: true,
  },
  // ... rest of config
}),
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run docs:build`
Expected: Build completes without errors. No photoSwipe chunk in output.

- [ ] **Step 3: Commit**

```bash
git add docs/.vuepress/config.ts
git commit -m "perf: disable photoSwipe plugin (saves 58KB on non-article pages)"
```

---

## Task 3: Add Vite manualChunks for JS Code Splitting

**Rationale:** The entire Vue ecosystem (vue, vue-router, pinia, @vueuse/core) is bundled into one 330KB `app.js` chunk. Splitting vendor code improves caching — vendors change rarely compared to app code.

**Files:**
- Modify: `docs/.vuepress/config.ts` (bundler options)

- [ ] **Step 1: Add `manualChunks` to Vite bundler config**

```ts
bundler: viteBundler({
  viteOptions: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/vue/') || id.includes('node_modules/vue-router/') || id_modules/pinia/')) {
              return 'vendor-vue'
            }
            if (id.includes('node_modules/@vueuse/')) {
              return 'vendor-utils'
            }
          },
        },
      },
    },
  },
}),
```

- [ ] **Step 2: Verify build succeeds and check chunk output**

Run: `npm run docs:build`
Expected: Build completes. Check `docs/.vuepress/dist/assets/` for separate `vendor-vue-*.js` and `vendor-utils-*.js` chunks.

- [ ] **Step 3: Commit**

```bash
git add docs/.vuepress/config.ts
git commit -m "perf: add manualChunks to split Vue vendor code for better caching"
```

---

## Task 4: Move Page-Specific CSS to Component Imports

**Rationale:** `client.ts` imports `home-liquid.css` (35KB) and `notes-catalog.css` (14KB) globally, so they're bundled into the main CSS for all pages. Moving these imports into their respective Vue components enables Vite CSS code splitting — these styles only load when the component is used.

**Files:**
- Modify: `docs/.vuepress/client.ts`
- Modify: `docs/.vuepress/components/HomeReplica.vue`
- Modify: `docs/.vuepress/components/NotesCatalog.vue`

- [ ] **Step 1: Remove CSS imports from `client.ts`**

Remove these two lines from `client.ts`:
```ts
import './styles/home-liquid.css'
import './styles/notes-catalog.css'
```

- [ ] **Step 2: Add CSS import to `HomeReplica.vue`**

At the top of the `<script setup>` block (or in a separate `<script>` block), add:
```ts
import '../styles/home-liquid.css'
```

- [ ] **Step 3: Add CSS import to `NotesCatalog.vue`**

At the top of the `<script setup>` block, add:
```ts
import '../styles/notes-catalog.css'
```

- [ ] **Step 4: Verify build succeeds**

Run: `npm run docs:build`
Expected: Build completes. The CSS files should now be split into separate chunks.

- [ ] **Step 5: Commit**

```bash
git add docs/.vuepress/client.ts docs/.vuepress/components/HomeReplica.vue docs/.vuepress/components/NotesCatalog.vue
git commit -m "perf: move page-specific CSS imports to components for code splitting"
```

---

## Task 5: Replace Social Icon PNGs with Iconify Components

**Rationale:** Six social icon PNGs are 1024x1024 pixels (400-600KB each) but rendered at 32px. Total: ~2.5MB of unnecessary image data. The site already has `@iconify/vue` installed (used elsewhere). Replace with inline SVG Iconify components.

**Files:**
- Modify: `docs/.vuepress/components/HomeReplica.vue` (social icon rendering)
- Verify: `package.json` has `@iconify/vue`

- [ ] **Step 1: Verify `@iconify/vue` is installed**

Run: `grep "@iconify/vue" package.json`
Expected: Found in dependencies.

- [ ] **Step 2: Identify current icon file paths and map to Iconify icon names**

Read the current social icon definitions in `HomeReplica.vue`. Map each PNG to its Iconify equivalent:
- `github.png` → `mdi:github` or `simple-icons:github`
- `twitter.png` → `mdi:twitter` or `simple-icons:x`
- `email.png` → `mdi:email`
- (check actual icons used)

- [ ] **Step 3: Replace PNG `<img>` tags with `<Icon>` components**

Import the Icon component and replace image rendering. Example pattern:

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<!-- Replace: <img :src="iconSrc" :alt="iconName" /> -->
<!-- With:    <Icon :icon="iconifyName" :width="32" :height="32" /> -->
```

- [ ] **Step 4: Remove or archive the PNG files from public directory**

Check `docs/.vuepress/public/social-icons/` — the PNG files can be removed once Iconify is working.

- [ ] **Step 5: Verify build and visual check**

Run: `npm run docs:dev`
Visit homepage, verify social icons render correctly at 32px.

- [ ] **Step 6: Commit**

```bash
git add docs/.vuepress/components/HomeReplica.vue
git commit -m "perf: replace social icon PNGs (2.5MB) with Iconify SVG components"
```

---

## Task 6: Optimize Avatar and Favicon Images

**Rationale:** `avatar.png` is 1713KB at 1024x1024, used as favicon (needs 32-128px) and OG image (needs ~256px). `profile.jpg` is 2.6MB and may be unused. These need resize + WebP conversion.

**Files:**
- Modify: `docs/.vuepress/public/avatar.png` (resize + convert)
- Check: `docs/.vuepress/public/profile.jpg` (remove if unused)
- Modify: `docs/.vuepress/config.ts` (update favicon references if needed)

- [ ] **Step 1: Check if `profile.jpg` is referenced anywhere**

Run: `grep -r "profile.jpg" docs/ --include="*.vue" --include="*.ts" --include="*.md" --include="*.css"`
Expected: If no references, safe to delete.

- [ ] **Step 2: Create optimized avatar variants**

Using ImageMagick or similar:
```bash
# Favicon variant (128px)
convert docs/.vuepress/public/avatar.png -resize 128x128 docs/.vuepress/public/favicon-128.png

# WebP variant for OG/display (256px, quality 85)
convert docs/.vuepress/public/avatar.png -resize 256x256 -quality 85 docs/.vuepress/public/avatar.webp

# Replace original with smaller version
mv docs/.vuepress/public/avatar.png docs/.vuepress/public/avatar-original.png
mv docs/.vuepress/public/avatar.webp docs/.vuepress/public/avatar.png
```

Alternatively, use `cwebp` or an online tool if ImageMagick is not installed.

- [ ] **Step 3: Update config.ts if favicon path changes**

If the favicon path stays as `avatar.png`, no change needed. If it changes to `favicon-128.png`, update the `link` entry in `config.ts`.

- [ ] **Step 4: Delete unused `profile.jpg` if confirmed unused**

```bash
git rm docs/.vuepress/public/profile.jpg
```

- [ ] **Step 5: Verify build**

Run: `npm run docs:build`

- [ ] **Step 6: Commit**

```bash
git add docs/.vuepress/public/
git commit -m "perf: optimize avatar image (1.7MB→<100KB) and remove unused profile.jpg (2.6MB)"
```

---

## Task 7: Fix KaTeX Font-Display (Optional — Low Impact)

**Rationale:** KaTeX CSS uses `font-display: block` for its font families, which blocks text rendering until fonts load. Switching to `font-display: swap` allows text to render immediately with fallback fonts.

**Files:**
- Check: where KaTeX CSS is sourced (likely from `katex` npm package via theme)

- [ ] **Step 1: Find KaTeX CSS source**

Run: `grep -r "font-display" node_modules/katex/dist/katex.min.css | head -5`
Expected: Multiple `font-display: block` declarations.

- [ ] **Step 2: Add CSS override in custom styles**

Create or modify `docs/.vuepress/styles/overrides.css`:
```css
@font-face {
  font-family: 'KaTeX_Main';
  font-display: swap !important;
}
/* Repeat for other KaTeX font families if needed */
```

Or better: add a global override:
```css
/* Override KaTeX block font-display with swap */
[class^="katex"] {
  font-display: swap;
}
```

Note: `font-display` in `@font-face` cannot be overridden via CSS selectors — it must be in the `@font-face` declaration itself. The proper fix would require modifying the KaTeX CSS at build time or using a Vite plugin to rewrite it.

- [ ] **Step 3: Evaluate if the effort is worth it**

If only 1-2 pages use KaTeX, the impact is minimal. Consider skipping this task.

- [ ] **Step 4: Commit (if implemented)**

```bash
git add docs/.vuepress/styles/
git commit -m "perf: override KaTeX font-display from block to swap"
```

---

## Execution Summary

| Task | Impact | Risk | Effort |
|------|--------|------|--------|
| 1. Remove Google Fonts CDN | High (eliminates render-blocking) | Low | 5 min |
| 2. Disable photoSwipe | Medium (58KB savings) | Low | 2 min |
| 3. manualChunks JS splitting | Medium (better caching) | Low | 5 min |
| 4. CSS code splitting | Medium (49KB off main CSS) | Low | 5 min |
| 5. Iconify social icons | Very High (~2.5MB savings) | Medium | 15 min |
| 6. Avatar optimization | High (~4.5MB savings) | Low | 10 min |
| 7. KaTeX font-display | Low | Low | 5 min |

**Total estimated effort:** ~45 minutes
**Expected Lighthouse improvement:** 56 → 75-85 (mobile)

---

## Verification

After all tasks, run:
```bash
npm run docs:build
npm run docs:preview
```

Then test with Lighthouse CLI:
```bash
npx lighthouse http://localhost:4173/mark-blog/ --preset=desktop --output=json --output-path=./pagespeed-insight/post-optimization-desktop.json
npx lighthouse http://localhost:4173/mark-blog/ --preset=mobile --output=json --output-path=./pagespeed-insight/post-optimization-mobile.json
```
