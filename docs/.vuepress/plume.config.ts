import { defineThemeConfig } from 'vuepress-theme-plume'

const githubLink = 'https://github.com/MarkChu-git'

const navbarEN = [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  { text: 'Git & GitHub', link: '/blog/git-and-github/zh/' },
  { text: 'Typora & MD', link: '/blog/typora-and-markdown/zh/' },
  { text: 'Friends', link: '/more/friends/' },
]

const navbarZH = [
  { text: '首页', link: '/zh/' },
  { text: '博客', link: '/zh/blog/' },
  { text: '标签', link: '/zh/blog/tags/' },
  { text: '归档', link: '/zh/blog/archives/' },
  { text: 'Git 与 GitHub', link: '/zh/blog/git-and-github/zh/' },
  { text: 'Typora 与 MD', link: '/zh/blog/typora-and-markdown/zh/' },
  { text: '友链', link: '/zh/more/friends/' },
]

export default defineThemeConfig({
  logo: '/avatar.png',
  social: [
    { icon: 'github', link: githubLink },
  ],
  search: {
    provider: 'local',
  },
  autoFrontmatter: false,
  blog: {
    include: ['blog/**/*.md'],
    pagination: 10,
    link: '/blog/',
    tags: true,
    archives: true,
    categories: false,
    postCover: 'right',
  },
  sidebar: {
    '/blog/git-and-github/': [
      {
        text: 'Git and GitHub',
        prefix: 'zh',
        items: 'auto',
      },
      {
        text: 'Git and GitHub (EN)',
        prefix: 'en',
        items: 'auto',
      },
    ],
    '/blog/typora-and-markdown/': [
      {
        text: 'Typora and Markdown',
        prefix: 'zh',
        items: 'auto',
      },
      {
        text: 'Typora and Markdown (EN)',
        prefix: 'en',
        items: 'auto',
      },
    ],
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
