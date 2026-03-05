import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  navbar: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/blog/' },
    { text: '归档', link: '/blog/archives/' },
    { text: '关于', link: '/about/' },
  ],
  profile: {
    name: 'Mark',
    description: '写代码，也记录生活。',
    circle: true,
  },
  social: [
    { icon: 'github', link: 'https://github.com/' },
  ],
  search: {
    provider: 'local',
  },
  collections: [
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
      link: '/blog/',
      pagination: 10,
      tags: true,
      archives: true,
      categories: true,
      postCover: 'right',
    },
  ],
  footer: {
    message: 'Built with VuePress + vuepress-theme-plume',
    copyright: `Copyright © ${new Date().getFullYear()} Mark`,
  },
})
