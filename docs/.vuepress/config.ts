import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

function normalizeBase(rawBase: string | undefined): string {
  if (!rawBase || rawBase === '/') {
    return '/'
  }

  const trimmed = rawBase.replace(/^\/+|\/+$/g, '')
  return `/${trimmed}/`
}

function normalizeSiteUrl(rawSiteUrl: string | undefined): string {
  const fallback = 'https://markchu-git.github.io/mark-blog/'
  const value = rawSiteUrl?.trim() || fallback
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`

  return withProtocol.endsWith('/') ? withProtocol : `${withProtocol}/`
}

type HeadEntry = [string, Record<string, string>, string?]

const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL?.trim()
  || process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  || process.env.VERCEL_BRANCH_URL?.trim()
  || process.env.VERCEL_URL?.trim()
  || process.env.URL?.trim()
  || process.env.DEPLOY_PRIME_URL?.trim()
  || process.env.DEPLOY_URL?.trim(),
)
const siteOrigin = new URL(siteUrl).origin
const base = normalizeBase(process.env.SITE_BASE || new URL(siteUrl).pathname)
const canonicalBase = base === '/' ? siteOrigin : `${siteOrigin}${base.slice(0, -1)}`
const siteHomeUrl = base === '/' ? `${siteOrigin}/` : `${siteOrigin}${base}`
const siteDescriptionEN = 'Personal notes and essays on engineering practice, computer science, mathematics, and technical writing.'
const siteDescriptionZH = '关于工程实践、计算机科学、数学思维与技术写作的个人博客与学习笔记。'
const withBase = (path: string): string =>
  base === '/' ? path : `${base.slice(0, -1)}${path}`
const withSiteUrl = (path: string): string =>
  `${siteOrigin}${withBase(path)}`

function upsertMeta(
  head: HeadEntry[],
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name',
): void {
  const existingIndex = head.findIndex(
    ([tag, attrs]) => tag === 'meta' && attrs?.[attribute] === name,
  )

  if (existingIndex !== -1) {
    head.splice(existingIndex, 1)
  }

  head.unshift(['meta', { [attribute]: name, content }])
}

function getMetaContent(
  head: HeadEntry[],
  name: string,
  attribute: 'name' | 'property' = 'name',
): string | undefined {
  return head.find(
    ([tag, attrs]) => tag === 'meta' && attrs?.[attribute] === name,
  )?.[1]?.content
}

function removeLink(head: HeadEntry[], rel: string): void {
  const linkIndex = head.findIndex(
    ([tag, attrs]) => tag === 'link' && attrs?.rel === rel,
  )

  if (linkIndex !== -1) {
    head.splice(linkIndex, 1)
  }
}

function isArticlePage(filePathRelative: string | null | undefined): boolean {
  if (!filePathRelative) {
    return false
  }

  const normalized = filePathRelative.toLowerCase()

  return (
    /(?:^|\/)(blog|notes)\//.test(normalized)
    && !normalized.endsWith('/readme.md')
  )
}

export default defineUserConfig({
  base,
  lang: 'en-US',
  title: "Mark's Blog",
  description: siteDescriptionEN,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: withBase('/avatar.png'),
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'Mark',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: "Mark's Blog",
      description: siteDescriptionEN,
    },
    '/zh/': {
      lang: 'zh-CN',
      title: "Mark's Blog",
      description: siteDescriptionZH,
    },
  },
  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules/vue/') || id.includes('node_modules/vue-router/') || id.includes('node_modules/pinia/')) {
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
  plugins: [
    seoPlugin({
      hostname: siteOrigin,
      author: {
        name: 'Mark',
        url: siteHomeUrl,
      },
      canonical: canonicalBase,
      fallBackImage: withSiteUrl('/avatar.png'),
      isArticle: (page) => isArticlePage(page.filePathRelative),
      customHead: (head, page) => {
        const localeDescription = page.pathLocale === '/zh/' ? siteDescriptionZH : siteDescriptionEN

        if (page.path === '/404.html') {
          removeLink(head as HeadEntry[], 'canonical')
          upsertMeta(head as HeadEntry[], 'robots', 'noindex, nofollow')
          return
        }

        const ogImage = getMetaContent(head as HeadEntry[], 'og:image', 'property') || withSiteUrl('/avatar.png')

        upsertMeta(head as HeadEntry[], 'twitter:card', 'summary_large_image')
        upsertMeta(head as HeadEntry[], 'twitter:title', page.title)
        upsertMeta(
          head as HeadEntry[],
          'twitter:description',
          page.frontmatter.description || localeDescription,
        )
        upsertMeta(head as HeadEntry[], 'twitter:image', ogImage)
      },
    }),
    sitemapPlugin({
      hostname: siteOrigin,
      excludePaths: ['/404.html'],
    }),
  ],
  theme: plumeTheme({
    plugins: {
      photoSwipe: false,
    },
    markdown: {
      mermaid: true,
    },
    comment: {
      provider: 'Giscus',
      repo: 'MarkChu-git/mark-blog',
      repoId: 'R_kgDORfVEEw',
      category: 'Announcements',
      categoryId: 'DIC_kwDORfVEE84C8DeW',
      mapping: 'pathname',
      strict: false,
      lazyLoading: false,
      reactionsEnabled: true,
      inputPosition: 'top',
      lightTheme: 'light',
      darkTheme: 'dark',
    },
  }),
})
