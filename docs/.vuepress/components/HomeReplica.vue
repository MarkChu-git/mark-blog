<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vuepress/client'

type Lang = 'en' | 'zh'

interface Social {
  label: string
  icon: string
  href: string
}

interface NavCard {
  title: string
  desc: string
  href: string
  icon: string
}

interface FocusCard {
  title: string
  desc: string
  icon: string
}

const props = withDefaults(defineProps<{ lang?: Lang }>(), {
  lang: 'en',
})

const isZh = computed(() => props.lang === 'zh')

const nowText = ref('')
let clock = 0

const updateClock = () => {
  const formatter = new Intl.DateTimeFormat(isZh.value ? 'zh-CN' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
  })
  nowText.value = formatter.format(new Date())
}

onMounted(() => {
  updateClock()
  clock = window.setInterval(updateClock, 30_000)
})

onBeforeUnmount(() => {
  if (clock)
    window.clearInterval(clock)
})

const links = computed(() => ({
  avatar: withBase('/avatar.png'),
  blog: withBase(isZh.value ? '/zh/blog/' : '/blog/'),
  tags: withBase(isZh.value ? '/zh/blog/tags/' : '/blog/tags/'),
  archives: withBase(isZh.value ? '/zh/blog/archives/' : '/blog/archives/'),
  notes: withBase(isZh.value ? '/zh/notes/' : '/notes/'),
  friends: withBase(isZh.value ? '/zh/more/friends/' : '/more/friends/'),
}))

const t = computed(() => ({
  badge: isZh.value ? 'Liquid Glass Interface' : 'Liquid Glass Interface',
  title: isZh.value ? 'Mark 的个人知识博客' : 'Mark\'s Knowledge Blog',
  subtitle: isZh.value
    ? '记录工程实践、数学思维与写作表达，用清晰结构沉淀长期价值。'
    : 'A structured place for engineering practice, mathematical thinking, and expressive writing.',
  primary: isZh.value ? '进入博客' : 'Open Blog',
  secondary: isZh.value ? '查看笔记' : 'Read Notes',
  panelTitle: isZh.value ? '个人面板' : 'Profile Panel',
  status: isZh.value ? '状态' : 'Status',
  timezone: isZh.value ? '时区' : 'Timezone',
  localTime: isZh.value ? '本地时间' : 'Local Time',
  role: isZh.value ? '持续构建中' : 'Building in Public',
  mapTitle: isZh.value ? '内容导航' : 'Content Navigation',
  mapDesc: isZh.value ? '从这里快速进入核心内容区域。' : 'Jump into the core content areas from here.',
  focusTitle: isZh.value ? '当前关注' : 'Current Focus',
  skillTitle: isZh.value ? '技术栈' : 'Tech Stack',
  timelineTitle: isZh.value ? '更新节奏' : 'Publishing Rhythm',
}))

const socials = computed<Social[]>(() => [
  { label: 'GitHub', icon: 'mdi:github', href: 'https://github.com/your-github' },
  { label: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/your-profile' },
  { label: 'Instagram', icon: 'mdi:instagram', href: 'https://www.instagram.com/your-profile' },
  { label: 'Email', icon: 'mdi:email-outline', href: 'mailto:you@example.com' },
])

const navCards = computed<NavCard[]>(() => [
  {
    title: isZh.value ? '博客文章' : 'Blog Posts',
    desc: isZh.value ? '长文、复盘与观点输出' : 'Long-form posts, retrospectives, and ideas',
    href: links.value.blog,
    icon: 'mdi:notebook-outline',
  },
  {
    title: isZh.value ? '标签索引' : 'Tag Index',
    desc: isZh.value ? '按主题快速检索' : 'Find content by topic clusters',
    href: links.value.tags,
    icon: 'mdi:tag-multiple-outline',
  },
  {
    title: isZh.value ? '时间归档' : 'Archives',
    desc: isZh.value ? '按时间线浏览更新' : 'Browse updates by timeline',
    href: links.value.archives,
    icon: 'mdi:timeline-clock-outline',
  },
  {
    title: isZh.value ? '学习笔记' : 'Notes',
    desc: isZh.value ? '短笔记与知识碎片' : 'Short notes and references',
    href: links.value.notes,
    icon: 'mdi:note-text-outline',
  },
  {
    title: isZh.value ? '友情链接' : 'Friends',
    desc: isZh.value ? '连接优秀创作者' : 'Connected creators and sites',
    href: links.value.friends,
    icon: 'mdi:account-group-outline',
  },
])

const focusCards = computed<FocusCard[]>(() => [
  {
    title: isZh.value ? '工程化质量' : 'Engineering Quality',
    desc: isZh.value ? '可维护性、稳定性与交付速度并重。' : 'Balancing maintainability, reliability, and delivery speed.',
    icon: 'mdi:cog-outline',
  },
  {
    title: isZh.value ? '数学化表达' : 'Mathematical Reasoning',
    desc: isZh.value ? '用模型简化复杂系统问题。' : 'Using abstractions to simplify complex systems.',
    icon: 'mdi:function-variant',
  },
  {
    title: isZh.value ? '技术写作' : 'Writing and Communication',
    desc: isZh.value ? '把经验沉淀为可复用知识。' : 'Turning technical thinking into reusable knowledge.',
    icon: 'mdi:message-text-outline',
  },
])

const stack = [
  'VuePress',
  'Vue',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Linux',
  'Git',
  'Python',
  'Django',
  'Kotlin',
  'C++',
  'Nix',
]

const timeline = computed(() => [
  {
    label: isZh.value ? 'Now' : 'Now',
    text: isZh.value ? '持续打磨博客结构与写作质量。' : 'Refining blog architecture and writing quality.',
  },
  {
    label: isZh.value ? 'Next' : 'Next',
    text: isZh.value ? '稳定输出项目复盘与工程笔记。' : 'Publishing project retrospectives and engineering notes consistently.',
  },
  {
    label: isZh.value ? 'Later' : 'Later',
    text: isZh.value ? '形成长期增长的知识体系。' : 'Building a sustainable personal knowledge system.',
  },
])
</script>

<template>
  <div class="liquid-home-v2">
    <div class="liquid-backdrop" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="blob b3"></span>
      <span class="grain"></span>
    </div>

    <section class="hero glass reveal r1">
      <div class="hero-content">
        <p class="eyebrow">
          <Icon icon="mdi:water-outline" />
          {{ t.badge }}
        </p>

        <h1>{{ t.title }}</h1>
        <p class="subtitle">{{ t.subtitle }}</p>

        <div class="hero-actions">
          <a class="btn btn-primary" :href="links.blog">
            <Icon icon="mdi:arrow-top-right" />
            {{ t.primary }}
          </a>
          <a class="btn" :href="links.notes">
            <Icon icon="mdi:notebook-edit-outline" />
            {{ t.secondary }}
          </a>
        </div>

        <div class="social-row">
          <a
            v-for="item in socials"
            :key="item.label"
            :href="item.href"
            class="icon-chip"
            target="_blank"
            :title="item.label"
          >
            <Icon :icon="item.icon" />
          </a>
        </div>
      </div>

      <aside class="profile-card">
        <div class="profile-head">
          <img :src="links.avatar" alt="avatar">
          <div>
            <p>{{ t.panelTitle }}</p>
            <h3>Mark</h3>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat">
            <p>{{ t.status }}</p>
            <strong>{{ t.role }}</strong>
          </div>
          <div class="stat">
            <p>{{ t.timezone }}</p>
            <strong>UTC+8</strong>
          </div>
          <div class="stat wide">
            <p>{{ t.localTime }}</p>
            <strong>{{ nowText }}</strong>
          </div>
        </div>
      </aside>
    </section>

    <section class="home-grid">
      <article class="panel panel-map glass reveal r2">
        <header>
          <h2>{{ t.mapTitle }}</h2>
          <p>{{ t.mapDesc }}</p>
        </header>

        <div class="nav-list">
          <a v-for="item in navCards" :key="item.title" :href="item.href" class="nav-item">
            <span class="nav-icon"><Icon :icon="item.icon" /></span>
            <div class="nav-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <Icon icon="mdi:chevron-right" class="nav-arrow" />
          </a>
        </div>
      </article>

      <article class="panel panel-focus glass reveal r3">
        <header>
          <h2>{{ t.focusTitle }}</h2>
        </header>

        <div class="focus-list">
          <div v-for="item in focusCards" :key="item.title" class="focus-item">
            <span class="focus-icon"><Icon :icon="item.icon" /></span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </article>

      <article class="panel panel-stack glass reveal r4">
        <header>
          <h2>{{ t.skillTitle }}</h2>
        </header>

        <div class="stack-cloud">
          <span v-for="item in stack" :key="item">{{ item }}</span>
        </div>
      </article>

      <article class="panel panel-rhythm glass reveal r5">
        <header>
          <h2>{{ t.timelineTitle }}</h2>
        </header>

        <ul class="timeline">
          <li v-for="item in timeline" :key="item.label">
            <span class="dot"></span>
            <div>
              <p class="step">{{ item.label }}</p>
              <p class="text">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
