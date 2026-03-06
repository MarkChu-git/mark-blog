import { defineThemeConfig } from 'vuepress-theme-plume'

const navbarEN = [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  { text: 'Notes', link: '/notes/' },
  { text: 'Friends', link: '/more/friends/' },
]

const navbarZH = [
  { text: '首页', link: '/zh/' },
  { text: '博客', link: '/zh/blog/' },
  { text: '标签', link: '/zh/blog/tags/' },
  { text: '归档', link: '/zh/blog/archives/' },
  { text: '笔记', link: '/zh/notes/' },
  { text: '友链', link: '/zh/more/friends/' },
]

export default defineThemeConfig({
  logo: '/site-avatar.png',
  social: [
    { icon: 'github', link: 'https://github.com/your-github' },
  ],
  search: {
    provider: 'local',
  },
  autoFrontmatter: false,
  blog: {
    include: ['blog/**/*.md', 'zh/blog/**/*.md'],
    pagination: 10,
    link: '/blog/',
    tags: true,
    archives: true,
    categories: false,
    postCover: 'right',
  },
  navbar: navbarEN,
  footer: {
    message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  },
  locales: {
    '/': {
      selectLanguageName: 'English',
      navbar: navbarEN,
      homeText: 'Home',
      blogText: 'Blog',
      tagText: 'Tags',
      archiveText: 'Archives',
    },
    '/zh/': {
      selectLanguageName: '简体中文',
      navbar: navbarZH,
      homeText: '首页',
      blogText: '博客',
      tagText: '标签',
      archiveText: '归档',
    },
  },
})
