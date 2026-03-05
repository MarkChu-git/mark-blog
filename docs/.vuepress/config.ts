import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/blog/',
  lang: 'en-US',
  title: 'Mark Blog',
  description: 'Mark\'s static blog website',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/blog/avatar.png',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Mark Blog',
      description: 'Mark\'s static blog website',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Mark Blog',
      description: 'Mark 的静态博客',
    },
  },
  bundler: viteBundler(),
  theme: plumeTheme(),
})
