import { defineThemeConfig } from 'vuepress-theme-plume'

const githubLink = 'https://github.com/MarkChu-git'

const navbarEN = [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Notes', link: '/notes/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  { text: 'Friends', link: '/more/friends/' },
]

const navbarZH = [
  { text: '首页', link: '/zh/' },
  { text: '博客', link: '/zh/blog/' },
  { text: '笔记', link: '/zh/notes/' },
  { text: '标签', link: '/zh/blog/tags/' },
  { text: '归档', link: '/zh/blog/archives/' },
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
    '/notes/git-and-github/zh/': [
      {
        text: 'Git 与 GitHub',
        link: 'README.md',
      },
      {
        text: '目录',
        prefix: 'chapters',
        items: 'auto',
      },
    ],
    '/notes/git-and-github/en/': [
      {
        text: 'Git and GitHub',
        link: 'README.md',
      },
      {
        text: 'Chapters',
        prefix: 'chapters',
        items: 'auto',
      },
    ],
    '/notes/typora-and-markdown/zh/': [
      {
        text: 'Typora 与 Markdown',
        link: 'README.md',
      },
      {
        text: '目录',
        prefix: 'chapters',
        items: 'auto',
      },
    ],
    '/notes/typora-and-markdown/en/': [
      {
        text: 'Typora and Markdown',
        link: 'README.md',
      },
      {
        text: 'Chapters',
        prefix: 'chapters',
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
