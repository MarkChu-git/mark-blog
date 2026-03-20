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
  codeHighlighter: {
    langs: ['ts', 'js', 'vue', 'json', 'bash', 'sh', 'css', 'html', 'python', 'markdown'],
    defaultLang: 'plaintext',
  },
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
  locales: {
    '/': {
      selectLanguageName: 'English',
      navbar: navbarEN,
      homeText: 'Home',
      blogText: 'Blog',
      tagText: 'Tags',
      archiveText: 'Archives',
      sidebar: {
        '/notes/git-and-github/': [
          {
            text: 'Git and GitHub',
            link: 'README.md',
          },
          {
            text: 'Chapters',
            items: [
              { text: 'Chapter 0: Practical Quick Start — Get Git and GitHub Working Fast', link: 'chapters/00-practical-quickstart.md' },
              { text: 'Chapter 1: First Understand What Problem Version Control Is Actually Solving', link: 'chapters/01-why-version-control-matters.md' },
              { text: 'Chapter 2: Start Using Git for Real — Working Tree, Staging Area, and Your First Reliable Commit', link: 'chapters/02-working-tree-staging-and-first-commit.md' },
              { text: 'Chapter 3: Looking Back and Undoing — How to View History, Compare Differences, and Safely Undo', link: 'chapters/03-viewing-history-diff-and-undo.md' },
              { text: 'Chapter 4: Branches — Working on Multiple Things at Once', link: 'chapters/04-branches-and-merging.md' },
              { text: 'Chapter 5: Remote Repositories — Connecting Your Work to the World', link: 'chapters/05-remote-repositories.md' },
              { text: 'Chapter 6: GitHub — Collaboration, Pull Requests, and Beyond', link: 'chapters/06-github-collaboration.md' },
              { text: 'Chapter 7: Putting It All Together — Real-World Workflows', link: 'chapters/07-putting-it-all-together.md' },
            ],
          },
        ],
        '/notes/typora-and-markdown/': [
          {
            text: 'Typora and Markdown',
            link: 'README.md',
            icon: 'fluent:book-24-regular',
          },
          {
            text: 'Chapters',
            items: [
              { text: 'Chapter 0: Practical Quick Start — Get Typora, Markdown, and LaTeX Working Fast', link: 'chapters/00-practical-quickstart.md', icon: 'fluent:rocket-24-regular' },
              { text: 'Chapter 1: Using Typora and Markdown Like Real Writing', link: 'chapters/01-typora-and-markdown.md', icon: 'fluent:pen-24-regular' },
              { text: 'Chapter 2: Writing Documents for Long-Term Maintenance — Directory Structure, Images, Relative Paths, and Repository Organization', link: 'chapters/02-structure-images-and-paths.md', icon: 'fluent:folder-24-regular' },
              { text: 'Chapter 3: Getting Started with Real Writing — Markdown Basics, LaTeX Formulas, and Typora Settings', link: 'chapters/03-markdown-latex-and-typora-settings.md', icon: 'fluent:code-24-regular' },
              { text: 'Chapter 4: Beyond Basic Syntax — Tables, Task Lists, Diagrams, and Extended Features', link: 'chapters/04-advanced-markdown-features.md', icon: 'fluent:table-24-regular' },
            ],
          },
        ],
      },
      footer: {
        message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
      },
    },
    '/zh/': {
      selectLanguageName: '简体中文',
      navbar: navbarZH,
      homeText: '首页',
      blogText: '博客',
      tagText: '标签',
      archiveText: '归档',
      sidebar: {
        '/notes/git-and-github/': [
          {
            text: 'Git 与 GitHub',
            link: '/zh/notes/git-and-github/README.md',
          },
          {
            text: '目录',
            items: [
              { text: '第零章：新手快学版——先把 Git 和 GitHub 用起来', link: '/zh/notes/git-and-github/chapters/00-practical-quickstart.md' },
              { text: '第一章：先理解版本控制到底在解决什么问题', link: '/zh/notes/git-and-github/chapters/01-why-version-control-matters.md' },
              { text: '第二章：真正开始用 Git——工作区、暂存区、提交历史与第一次可靠提交', link: '/zh/notes/git-and-github/chapters/02-working-tree-staging-and-first-commit.md' },
              { text: '第三章：回看与回退——如何查看历史、比较差异并安全撤销', link: '/zh/notes/git-and-github/chapters/03-viewing-history-diff-and-undo.md' },
              { text: '第四章：分支——同时做多件事', link: '/zh/notes/git-and-github/chapters/04-branches-and-merging.md' },
              { text: '第五章：远程仓库——把你的工作连接到世界', link: '/zh/notes/git-and-github/chapters/05-remote-repositories.md' },
              { text: '第六章：GitHub——协作、Pull Request 与更多', link: '/zh/notes/git-and-github/chapters/06-github-collaboration.md' },
              { text: '第七章：串联一切——真实世界的工作流', link: '/zh/notes/git-and-github/chapters/07-putting-it-all-together.md' },
            ],
          },
        ],
        '/notes/typora-and-markdown/': [
          {
            text: 'Typora 与 Markdown',
            link: '/zh/notes/typora-and-markdown/README.md',
            icon: 'fluent:book-24-regular',
          },
          {
            text: '目录',
            items: [
              { text: '第零章：新手快学版——先把 Typora、Markdown、LaTeX 真正用起来', link: '/zh/notes/typora-and-markdown/chapters/00-practical-quickstart.md', icon: 'fluent:rocket-24-regular' },
              { text: '第一章：像写作一样使用 Typora 与 Markdown', link: '/zh/notes/typora-and-markdown/chapters/01-typora-and-markdown.md', icon: 'fluent:pen-24-regular' },
              { text: '第二章：把文档写成可以长期维护的样子——目录、图片、相对路径与仓库组织', link: '/zh/notes/typora-and-markdown/chapters/02-structure-images-and-paths.md', icon: 'fluent:folder-24-regular' },
              { text: '第三章：真正开始写文档——Markdown 基础语法、LaTeX 公式与 Typora 设置', link: '/zh/notes/typora-and-markdown/chapters/03-markdown-latex-and-typora-settings.md', icon: 'fluent:code-24-regular' },
              { text: '第四章：不只是基础语法——表格、任务列表、图表与扩展特性', link: '/zh/notes/typora-and-markdown/chapters/04-advanced-markdown-features.md', icon: 'fluent:table-24-regular' },
            ],
          },
        ],
      },
      footer: {
        message: '由 <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> 驱动',
      },
    },
  },
})
