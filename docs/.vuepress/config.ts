import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Mark Blog',
  description: '使用 VuePress 和 vuepress-theme-plume 构建的静态博客',
  bundler: viteBundler(),
  theme: plumeTheme(),
})
