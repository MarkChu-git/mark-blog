<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouteLocale, withBase } from 'vuepress/client'
import LazyPerson from './LazyPerson.vue'
import TypewriterText from './TypewriterText.vue'

interface IntroStat {
  label: string
  value: string
}

interface CharacterTrait {
  key: string
  title: string
  desc: string
  detail: string
}

interface SkillItem {
  key: string
  label: string
  icon: string
  color: string
  group: string
  detail: string
}

interface RoutineItem {
  key: string
  label: string
  value: number
  color: string
  detail: string
}

interface TabItem {
  key: string
  label: string
  title: string
  accent: string
  desc: string
  detail: string
}

interface FocusItem {
  key: string
  label: string
  title: string
  desc: string
  ctaLabel: string
  href: string
}

interface SocialItem {
  key: string
  label: string
  title: string
  detail: string
  href?: string
  iconSrc: string
  accent: string
  external?: boolean
}

type CardKey = 'intro' | 'motto' | 'pursuit' | 'character' | 'skills' | 'routine'
type CardMotionStyle = {
  '--tilt-x': string
  '--tilt-y': string
}

const routeLocale = useRouteLocale()
const isZh = computed(() => routeLocale.value === '/zh/')

const links = computed(() => ({
  blog: withBase(isZh.value ? '/zh/blog/' : '/blog/'),
  notes: withBase(isZh.value ? '/zh/notes/' : '/notes/'),
  tags: withBase(isZh.value ? '/zh/blog/tags/' : '/blog/tags/'),
  archives: withBase(isZh.value ? '/zh/blog/archives/' : '/blog/archives/'),
  friends: withBase(isZh.value ? '/zh/more/friends/' : '/more/friends/'),
}))

// Fill in the missing profile URLs here when you have the final links.
const socialProfiles = {
  linkedin: 'https://www.linkedin.com/in/hanyang-chu-8836252a7',
  github: 'https://github.com/MarkChu-git',
  instagram: 'https://www.instagram.com/fahreheitmark/',
  email: 'mailto:markchu2022@gmail.com',
} as const

const nowText = ref('--:--')
const timezoneText = ref('--')
const typewriterWords = ['Mark.', 'Student Developer.', 'Designer.', 'Full Stack.', 'Algorithms.', 'Quant.', 'AI.']
let clock = 0
const activeCard = ref<CardKey | null>(null)
const activeMotto = ref('clarity')
const activePursuit = ref('insight')
const activeTrait = ref('systems')
const activeSkill = ref('typescript')
const activeRoutine = ref('build')

// Mobile long-press tilt
const LONG_PRESS_DELAY = 200
let longPressTimer: ReturnType<typeof setTimeout> | null = null
let touchTiltCard: CardKey | null = null
let activeTouchId: number | null = null
let touchStartX = 0
let touchStartY = 0
let touchIsScrolling = false
let touchIsTilting = false
let touchEl: HTMLElement | null = null
let cachedRect: DOMRect | null = null

const createCardMotion = (): CardMotionStyle => ({
  '--tilt-x': '0deg',
  '--tilt-y': '0deg',
})

const timeFormatter = computed(() => new Intl.DateTimeFormat(isZh.value ? 'zh-CN' : 'en-US', {
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
}))

const formatUtcOffset = (date: Date) => {
  const offsetMinutes = -date.getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? '+' : '-'
  const absoluteMinutes = Math.abs(offsetMinutes)
  const hours = Math.floor(absoluteMinutes / 60)
  const minutes = absoluteMinutes % 60

  if (minutes === 0)
    return `UTC${sign}${hours}`

  return `UTC${sign}${hours}:${String(minutes).padStart(2, '0')}`
}

const cardMotion = ref<Record<CardKey, CardMotionStyle>>({
  intro: createCardMotion(),
  motto: createCardMotion(),
  pursuit: createCardMotion(),
  character: createCardMotion(),
  skills: createCardMotion(),
  routine: createCardMotion(),
})

const updateClock = () => {
  const now = new Date()
  nowText.value = timeFormatter.value.format(now)
  timezoneText.value = formatUtcOffset(now)
}

onMounted(() => {
  updateClock()
  clock = window.setInterval(updateClock, 30_000)
})

onBeforeUnmount(() => {
  if (clock)
    window.clearInterval(clock)

  // Clean up any pending long-press timer and touch state
  if (longPressTimer !== null) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
  if (touchEl) {
    touchEl.classList.remove('is-tilting')
  }
  touchTiltCard = null
  activeTouchId = null
  touchEl = null
  cachedRect = null
  touchIsScrolling = false
  touchIsTilting = false
})

const activateCard = (card: CardKey) => {
  // Clear tilt before toggling so the active state renders flat
  resetCardMotion(card)
  activeCard.value = activeCard.value === card ? null : card
}

const onCardKeydown = (event: KeyboardEvent, card: CardKey) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    activateCard(card)
  }
}

const updateCardMotion = (event: MouseEvent, card: CardKey) => {
  const target = event.currentTarget

  if (!(target instanceof HTMLElement))
    return

  const rect = target.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  const state = cardMotion.value[card]

  state['--tilt-x'] = `${((0.5 - y) * 12).toFixed(2)}deg`
  state['--tilt-y'] = `${((x - 0.5) * 14).toFixed(2)}deg`
}

const resetCardMotion = (card: CardKey) => {
  const state = cardMotion.value[card]
  state['--tilt-x'] = '0deg'
  state['--tilt-y'] = '0deg'
}

// Mobile touch tilt
const TOUCH_THRESHOLD = 10

function onCardTouchStart(event: TouchEvent, card: CardKey) {
  if (event.touches.length === 0) return

  // Ignore additional touches while one is already active
  if (activeTouchId !== null) return

  const touch = event.touches[0]
  activeTouchId = touch.identifier
  touchTiltCard = card
  touchStartX = touch.clientX
  touchStartY = touch.clientY
  touchIsScrolling = false
  touchIsTilting = false

  if (longPressTimer !== null) {
    clearTimeout(longPressTimer)
  }

  touchEl = event.currentTarget as HTMLElement

  longPressTimer = setTimeout(() => {
    if (!touchIsScrolling && touchTiltCard === card) {
      touchIsTilting = true
      if (touchEl) {
        cachedRect = touchEl.getBoundingClientRect()
        touchEl.classList.add('is-tilting')
      }
    }
  }, LONG_PRESS_DELAY)
}

function onCardTouchMove(event: TouchEvent) {
  if (!touchTiltCard || event.touches.length === 0) return

  // Only track the touch that started the gesture
  const touch = activeTouchId !== null
    ? Array.from(event.touches).find(t => t.identifier === activeTouchId)
    : event.touches[0]
  if (!touch) return

  if (touchIsTilting) {
    if (event.cancelable)
      event.preventDefault()
    if (!cachedRect) return
    const x = (touch.clientX - cachedRect.left) / cachedRect.width
    const y = (touch.clientY - cachedRect.top) / cachedRect.height
    const tiltKey = touchTiltCard
    if (!tiltKey) return
    const cardMotionState = cardMotion.value[tiltKey]
    cardMotionState['--tilt-x'] = `${((0.5 - y) * 14).toFixed(2)}deg`
    cardMotionState['--tilt-y'] = `${((x - 0.5) * 16).toFixed(2)}deg`
    return
  }

  // Detect scroll vs tilt intent
  const deltaX = Math.abs(touch.clientX - touchStartX)
  const deltaY = Math.abs(touch.clientY - touchStartY)
  if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > TOUCH_THRESHOLD) {
    touchIsScrolling = true
    if (longPressTimer !== null) {
      clearTimeout(longPressTimer)
      longPressTimer = null
    }
  }
}

function onCardTouchEnd(event: TouchEvent) {
  // Only handle the touch that started the gesture
  if (activeTouchId !== null) {
    const stillActive = Array.from(event.touches).some(t => t.identifier === activeTouchId)
    if (stillActive) return
  }

  if (longPressTimer !== null) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }

  if (touchTiltCard) {
    resetCardMotion(touchTiltCard)
  }

  const el = (event.currentTarget as HTMLElement | null) ?? touchEl
  if (el) {
    el.classList.remove('is-tilting')
  }

  touchTiltCard = null
  activeTouchId = null
  touchIsTilting = false
  touchIsScrolling = false
  cachedRect = null
  touchEl = null
}

function onCardTouchCancel(event: TouchEvent) {
  onCardTouchEnd(event)
}


const cardStyle = (card: CardKey) => cardMotion.value[card]

const t = computed(() => ({
  introLabel: isZh.value ? '你好，很高兴认识你。' : 'Hello, nice to meet you.',
  introTitle: isZh.value ? '你可以叫我 Mark。' : 'You can call me Mark.',
  introDesc: isZh.value
    ? '我关注计算机、金融、产品与营销，以洞察本质、尊重现实、长期复利三种原则贯穿始终。'
    : 'I focus on computer science, finance, product development, and marketing — guided by three core principles: insight, realism, and compounding.',
  statusLabel: isZh.value ? '状态' : 'Status',
  statusValue: isZh.value ? '持续构建中' : 'Building deliberately',
  timezoneLabel: isZh.value ? '时区' : 'Timezone',
  localTimeLabel: isZh.value ? '本地时间' : 'Local Time',
  mottoLabel: isZh.value ? '信条' : 'Motto',
  mottoLead: isZh.value ? '清晰' : 'Clarity',
  mottoAccent: isZh.value ? '优先于堆砌。' : 'over noise.',
  mottoDesc: isZh.value
    ? '先把问题讲清楚，再谈速度与规模。'
    : 'Get the thinking right first, then scale it with discipline.',
  pursuitLabel: isZh.value ? '追求' : 'Pursuit',
  pursuitDesc: isZh.value
    ? '把复杂问题拆开理解，再用足够克制的表达把它们组织起来。'
    : 'Break down complex problems, then rebuild them with enough structure and restraint.',
  characterLabel: isZh.value ? '特质' : 'Character',
  characterTitle: isZh.value ? '长期主义者' : 'Long-term builder',
  characterAccent: isZh.value ? '克制、严谨、可交付。' : 'Calm, rigorous, and shippable.',
  skillsLabel: isZh.value ? '能力栈' : 'Skills',
  skillsTitle: isZh.value ? '核心工具集' : 'Core Toolkit',
  skillsDesc: isZh.value
    ? '工具不是炫技道具，而是为了更稳定地构建、写作和交付。'
    : 'Tools are here to support clear building, writing, and reliable delivery.',
  routineLabel: isZh.value ? '节奏' : 'Routine',
  routineTitle: isZh.value ? '日常时间分配' : 'Daily Rhythm',
  routineDesc: isZh.value
    ? '把时间分给构建、写作、阅读和思考，避免被噪音稀释。'
    : 'Time goes to building, writing, reading, and thinking instead of being diluted by noise.',
  routineCenterLabel: isZh.value ? '本周' : 'This Week',
  interactiveHint: isZh.value ? '悬停 / 点击' : 'Hover / Click',
  activeLabel: isZh.value ? '当前焦点' : 'Current Focus',
}))

const introStats = computed<IntroStat[]>(() => [
  { label: t.value.statusLabel, value: t.value.statusValue },
  { label: t.value.timezoneLabel, value: timezoneText.value },
  { label: t.value.localTimeLabel, value: nowText.value },
])

const socialLinks = computed<SocialItem[]>(() => [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    title: isZh.value ? '职业轨迹' : 'Career Track',
    detail: isZh.value
      ? '工作经历、项目背书和行业人脉。'
      : 'Work experience, project endorsements, and industry connections.',
    href: socialProfiles.linkedin || undefined,
    iconSrc: withBase('/social-icons/linkedin.png'),
    accent: '#5a84da',
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    title: '@MarkChu-git',
    detail: isZh.value
      ? '开源项目、代码实验和技术探索。'
      : 'Open source projects, code experiments, and technical explorations.',
    href: socialProfiles.github,
    iconSrc: withBase('/social-icons/github.png'),
    accent: '#78829a',
    external: true,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    title: isZh.value ? '日常碎片' : 'Daily Fragments',
    detail: isZh.value
      ? '生活的片段、灵感和随手拍。'
      : 'Life fragments, inspiration, and casual shots.',
    href: socialProfiles.instagram || undefined,
    iconSrc: withBase('/social-icons/instagram.png'),
    accent: '#d67ca8',
    external: true,
  },
  {
    key: 'email',
    label: 'Email',
    title: 'markchu2022@gmail.com',
    detail: isZh.value
      ? '有想法或合作建议？写邮件最快。'
      : 'Have an idea or proposal? Email is fastest.',
    href: socialProfiles.email,
    iconSrc: withBase('/social-icons/email.png'),
    accent: '#c88b68',
  },
])

const mottoTabs = computed<TabItem[]>(() => [
  {
    key: 'clarity',
    label: isZh.value ? '清晰' : 'Clarity',
    title: isZh.value ? '先把问题讲清楚。' : 'Make the problem legible.',
    accent: isZh.value ? '表达服务于理解。' : 'Expression should serve understanding.',
    desc: isZh.value ? '复杂内容也应该能被清楚地阅读。' : 'Complex ideas still need a readable surface.',
    detail: isZh.value ? '适合文章、文档与首页叙事。' : 'The default standard for writing, docs, and homepage copy.',
  },
  {
    key: 'systems',
    label: isZh.value ? '结构' : 'Systems',
    title: isZh.value ? '先搭结构，再谈规模。' : 'Structure before scale.',
    accent: isZh.value ? '系统感比堆砌更重要。' : 'Systems beat accumulation.',
    desc: isZh.value ? '用信息架构而不是信息堆叠来组织内容。' : 'Organize information through architecture instead of accumulation.',
    detail: isZh.value ? '适合导航、索引、归档与知识地图。' : 'Useful for navigation, archives, and knowledge maps.',
  },
  {
    key: 'delivery',
    label: isZh.value ? '交付' : 'Delivery',
    title: isZh.value ? '克制，也要可交付。' : 'Restraint still has to ship.',
    accent: isZh.value ? '稳定比炫技更值钱。' : 'Reliability outruns novelty.',
    desc: isZh.value ? '每次更新都应该可维护、可延续。' : 'Every update should remain maintainable and extendable.',
    detail: isZh.value ? '适合工程实现、组件系统与长期维护。' : 'Applies directly to implementation and component systems.',
  },
])

const activeMottoTab = computed(() => {
  return mottoTabs.value.find(item => item.key === activeMotto.value) ?? mottoTabs.value[0]
})

const pursuitItems = computed<FocusItem[]>(() => [
  {
    key: 'insight',
    label: isZh.value ? '洞察本质' : 'Insight',
    title: isZh.value ? '看透问题的底层逻辑。' : 'See through to the underlying logic.',
    desc: isZh.value
      ? '不被表象迷惑，找到真正驱动结果的变量。'
      : 'Look past the surface to find what truly drives outcomes.',
    ctaLabel: isZh.value ? '查看博客文章' : 'Read related posts',
    href: links.value.blog,
  },
  {
    key: 'realism',
    label: isZh.value ? '尊重现实' : 'Realism',
    title: isZh.value ? '承认约束，接受不确定性。' : 'Acknowledge constraints, accept uncertainty.',
    desc: isZh.value
      ? '基于真实条件做决策，而不是理想化的假设。'
      : 'Make decisions based on real conditions, not idealized assumptions.',
    ctaLabel: isZh.value ? '打开笔记' : 'Open notes',
    href: links.value.notes,
  },
  {
    key: 'compounding',
    label: isZh.value ? '长期复利' : 'Compounding',
    title: isZh.value ? '做时间的朋友。' : 'Let time work in your favor.',
    desc: isZh.value
      ? '选择可以累积的事情，让今天的努力成为明天的基石。'
      : 'Choose things that compound — let today\'s effort become tomorrow\'s foundation.',
    ctaLabel: isZh.value ? '查看标签索引' : 'Browse the index',
    href: links.value.tags,
  },
])

const activePursuitItem = computed(() => {
  return pursuitItems.value.find(item => item.key === activePursuit.value) ?? pursuitItems.value[0]
})

const characterTraits = computed<CharacterTrait[]>(() => [
  {
    key: 'systems',
    title: isZh.value ? '系统化思考' : 'Systems thinking',
    desc: isZh.value ? '关注结构，而不是只看表面结果。' : 'Structure first, surface details second.',
    detail: isZh.value ? '适合做信息架构、模块抽象和复杂系统拆解。' : 'Useful for information architecture, modular abstraction, and complex systems decomposition.',
  },
  {
    key: 'execution',
    title: isZh.value ? '工程化执行' : 'Engineering execution',
    desc: isZh.value ? '追求稳定、清楚、可维护的交付。' : 'Stable, clear, maintainable outcomes matter.',
    detail: isZh.value ? '强调可维护性、边界清晰和长期可迭代。' : 'Emphasizes maintainability, clear boundaries, and long-term iteration.',
  },
  {
    key: 'writing',
    title: isZh.value ? '写作即产品' : 'Writing as product',
    desc: isZh.value ? '内容也应该有体验设计与质量标准。' : 'Content should meet the same quality bar as products.',
    detail: isZh.value ? '写作不是记录，而是带有结构和判断的产品化表达。' : 'Writing should feel structured and product-grade, not merely recorded.',
  },
])

const activeTraitItem = computed(() => {
  return characterTraits.value.find(item => item.key === activeTrait.value) ?? characterTraits.value[0]
})

const skills = computed<SkillItem[]>(() => [
  {
    key: 'typescript',
    label: 'TypeScript',
    icon: 'mdi:language-typescript',
    color: '#7088d3',
    group: isZh.value ? '工程' : 'Engineering',
    detail: isZh.value ? '让组件、交互和数据结构保持明确边界。' : 'Keeps component logic, interactions, and data structures explicit.',
  },
  {
    key: 'javascript',
    label: 'JavaScript',
    icon: 'mdi:language-javascript',
    color: '#d3b257',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '作为浏览器交互和运行时生态的基础语言。' : 'The base language behind browser interactions and the wider runtime ecosystem.',
  },
  {
    key: 'python',
    label: 'Python',
    icon: 'mdi:language-python',
    color: '#b8aa7a',
    group: isZh.value ? '工具' : 'Tooling',
    detail: isZh.value ? '适合自动化、脚本和后端实验。' : 'Useful for automation, scripting, and backend experimentation.',
  },
  {
    key: 'linux',
    label: 'Linux',
    icon: 'mdi:linux',
    color: '#c3a17a',
    group: isZh.value ? '环境' : 'Systems',
    detail: isZh.value ? '作为日常开发、部署和调试的基础环境。' : 'The day-to-day environment for development, deployment, and debugging.',
  },
  {
    key: 'html',
    label: 'HTML',
    icon: 'mdi:language-html5',
    color: '#dd8c68',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '负责页面语义结构和可被解析的内容骨架。' : 'Provides the semantic structure and readable content skeleton of the web.',
  },
  {
    key: 'css',
    label: 'CSS',
    icon: 'mdi:language-css3',
    color: '#6f97de',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '控制布局、层级、响应式和整体视觉表达。' : 'Controls layout, hierarchy, responsiveness, and visual presentation.',
  },
  {
    key: 'tailwindcss',
    label: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    color: '#67bfd3',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '适合快速组织界面样式、设计 token 和响应式细节。' : 'Useful for composing interface styling, design tokens, and responsive details quickly.',
  },
  {
    key: 'react',
    label: 'React',
    icon: 'mdi:react',
    color: '#63b7cf',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '适合构建组件驱动的交互界面和复杂状态流。' : 'Useful for component-driven interfaces and more involved state flows.',
  },
  {
    key: 'nextjs',
    label: 'Next.js',
    icon: 'simple-icons:nextdotjs',
    color: '#5f6570',
    group: isZh.value ? '全栈' : 'Full Stack',
    detail: isZh.value ? '用于整合 React、路由、渲染策略和内容交付。' : 'Combines React, routing, rendering strategy, and content delivery in one stack.',
  },
  {
    key: 'vue',
    label: 'Vue',
    icon: 'mdi:vuejs',
    color: '#6b9e92',
    group: isZh.value ? '前端' : 'Frontend',
    detail: isZh.value ? '承担页面状态、交互细节和组件组合。' : 'Handles view state, interaction details, and component composition.',
  },
  {
    key: 'astro',
    label: 'Astro',
    icon: 'simple-icons:astro',
    color: '#b47ff6',
    group: isZh.value ? '内容' : 'Content',
    detail: isZh.value ? '适合内容型站点、静态输出和轻量前端岛模式。' : 'Fits content-driven sites, static output, and lighter island-based frontends.',
  },
  {
    key: 'fastapi',
    label: 'FastAPI',
    icon: 'simple-icons:fastapi',
    color: '#4db59a',
    group: isZh.value ? '后端' : 'Backend',
    detail: isZh.value ? '适合快速搭建类型清晰、接口明确的 Python 服务。' : 'Useful for building typed Python services with clear API boundaries quickly.',
  },
  {
    key: 'nodejs',
    label: 'Node.js',
    icon: 'mdi:nodejs',
    color: '#7f9b7a',
    group: isZh.value ? '工程' : 'Engineering',
    detail: isZh.value ? '支撑前端工作流和内容构建链路。' : 'Supports the frontend workflow and site build pipeline.',
  },
  {
    key: 'npm',
    label: 'npm',
    icon: 'mdi:npm',
    color: '#cf766a',
    group: isZh.value ? '工具' : 'Tooling',
    detail: isZh.value ? '用于依赖管理、脚本执行和 JavaScript 工具链组织。' : 'Handles dependency management, scripts, and the broader JavaScript toolchain.',
  },
  {
    key: 'go',
    label: 'Go',
    icon: 'simple-icons:go',
    color: '#6db7c8',
    group: isZh.value ? '后端' : 'Backend',
    detail: isZh.value ? '适合构建高并发服务、工具链和更直接的系统程序。' : 'Useful for concurrent services, tooling, and more direct systems programming.',
  },
  {
    key: 'java',
    label: 'Java',
    icon: 'mdi:language-java',
    color: '#d08b74',
    group: isZh.value ? '后端' : 'Backend',
    detail: isZh.value ? '适合构建稳定的服务端系统和传统业务服务。' : 'Useful for stable backend systems and long-lived business services.',
  },
  {
    key: 'kotlin',
    label: 'Kotlin',
    icon: 'simple-icons:kotlin',
    color: '#a477d6',
    group: isZh.value ? '后端' : 'Backend',
    detail: isZh.value ? '在 JVM 生态里提供更现代的语言表达和开发体验。' : 'Brings a more modern language and workflow to the JVM ecosystem.',
  },
  {
    key: 'csharp',
    label: 'C#',
    icon: 'simple-icons:csharp',
    color: '#7b6fcd',
    group: isZh.value ? '后端' : 'Backend',
    detail: isZh.value ? '适合 .NET 生态里的应用开发、服务实现和工程化交付。' : 'Useful for .NET application work, service development, and structured delivery.',
  },
  {
    key: 'postgresql',
    label: 'PostgreSQL',
    icon: 'mdi:database-outline',
    color: '#7f93b6',
    group: isZh.value ? '数据' : 'Data',
    detail: isZh.value ? '用于结构化数据建模和更严谨的业务表达。' : 'Used when structured data and stronger modeling matter.',
  },
  {
    key: 'supabase',
    label: 'Supabase',
    icon: 'simple-icons:supabase',
    color: '#5fbf98',
    group: isZh.value ? '数据' : 'Data',
    detail: isZh.value ? '适合快速搭建数据库、鉴权、存储和实时能力一体化的后端底座。' : 'Useful for standing up database, auth, storage, and realtime backend primitives quickly.',
  },
  {
    key: 'docker',
    label: 'Docker',
    icon: 'mdi:docker',
    color: '#6fa5dc',
    group: isZh.value ? '部署' : 'DevOps',
    detail: isZh.value ? '用于打包开发环境、服务依赖和可复现部署。' : 'Packages environments, service dependencies, and reproducible deployments.',
  },
  {
    key: 'kubernetes',
    label: 'Kubernetes',
    icon: 'mdi:kubernetes',
    color: '#6f89de',
    group: isZh.value ? '部署' : 'DevOps',
    detail: isZh.value ? '适合编排容器服务、扩缩容和线上集群管理。' : 'Useful for container orchestration, scaling, and cluster operations.',
  },
  {
    key: 'homebrew',
    label: 'Homebrew',
    icon: 'simple-icons:homebrew',
    color: '#d79a63',
    group: isZh.value ? '环境' : 'Systems',
    detail: isZh.value ? '方便管理 macOS 上的开发工具链和本地依赖。' : 'Keeps the macOS toolchain and local developer dependencies tidy.',
  },
  {
    key: 'zsh',
    label: 'Zsh',
    icon: 'simple-icons:gnubash',
    color: '#7a9b74',
    group: isZh.value ? '终端' : 'Terminal',
    detail: isZh.value ? '承担日常命令行工作流、别名组织和环境配置。' : 'Drives daily shell workflows, aliases, and environment setup.',
  },
  {
    key: 'bash',
    label: 'Bash',
    icon: 'mdi:console',
    color: '#8ba572',
    group: isZh.value ? '终端' : 'Terminal',
    detail: isZh.value ? '适合脚本自动化、部署命令和基础运维流程。' : 'Useful for scripting, deployment commands, and routine automation.',
  },
  {
    key: 'git',
    label: 'Git',
    icon: 'mdi:git',
    color: '#c58c79',
    group: isZh.value ? '协作' : 'Collaboration',
    detail: isZh.value ? '保证迭代可追踪、可审查、可回滚。' : 'Keeps iteration traceable, reviewable, and recoverable.',
  },
  {
    key: 'cpp',
    label: 'C++',
    icon: 'mdi:language-cpp',
    color: '#8f85c2',
    group: isZh.value ? '底层' : 'Low-level',
    detail: isZh.value ? '用于理解性能、内存和更底层的系统行为。' : 'Useful when understanding performance and lower-level behavior matters.',
  },
  {
    key: 'latex',
    label: 'LaTeX',
    icon: 'devicon:latex',
    color: '#6f9aa8',
    group: isZh.value ? '写作' : 'Writing',
    detail: isZh.value ? '适合排版公式、技术文档和更严谨的学术表达。' : 'Fits mathematical typesetting, technical docs, and more rigorous writing.',
  },
  {
    key: 'r',
    label: 'R',
    icon: 'simple-icons:r',
    color: '#7489c5',
    group: isZh.value ? '数据' : 'Data',
    detail: isZh.value ? '适合数据分析、统计建模和实验性探索。' : 'Useful for data analysis, statistical modeling, and exploratory work.',
  },
  {
    key: 'writing',
    label: 'Writing',
    icon: 'mdi:draw-pen',
    color: '#77a5b0',
    group: isZh.value ? '表达' : 'Communication',
    detail: isZh.value ? '把经验组织成可读、可用、可复访的内容。' : 'Turns experience into readable, reusable, and revisit-worthy content.',
  },
  {
    key: 'math',
    label: 'Math',
    icon: 'mdi:function-variant',
    color: '#828fc4',
    group: isZh.value ? '思维' : 'Reasoning',
    detail: isZh.value ? '帮助把复杂问题抽象成可验证的模型。' : 'Helps turn complexity into models that can be reasoned about clearly.',
  },
  {
    key: 'notes',
    label: 'Notes',
    icon: 'mdi:notebook-outline',
    color: '#7d9cbd',
    group: isZh.value ? '知识库' : 'Knowledge Base',
    detail: isZh.value ? '把碎片整理成长期可检索的知识资产。' : 'Turns fragments into a searchable, durable knowledge base.',
  },
])

const activeSkillItem = computed(() => {
  return skills.value.find(item => item.key === activeSkill.value) ?? skills.value[0]
})

const skillPreview = computed(() => skills.value.slice(0, 4))

const routineItems = computed<RoutineItem[]>(() => [
  {
    key: 'build',
    label: isZh.value ? '构建' : 'Build',
    value: 40,
    color: '#7187d8',
    detail: isZh.value ? '主要投入在实现、重构和体验打磨。' : 'Most time goes into implementation, refactoring, and UX polish.',
  },
  {
    key: 'writing',
    label: isZh.value ? '写作' : 'Writing',
    value: 26,
    color: '#83a7d6',
    detail: isZh.value ? '把实践整理成文章、笔记和可复访内容。' : 'Practice gets turned into posts, notes, and revisit-worthy artifacts.',
  },
  {
    key: 'reading',
    label: isZh.value ? '阅读' : 'Reading',
    value: 18,
    color: '#9dc4bb',
    detail: isZh.value ? '通过输入保持视野和技术判断。' : 'Input time keeps perspective and technical judgment sharp.',
  },
  {
    key: 'thinking',
    label: isZh.value ? '思考' : 'Thinking',
    value: 16,
    color: '#d7bc86',
    detail: isZh.value ? '留出时间抽象问题，而不是只忙于执行。' : 'Reserve time for abstraction instead of only execution.',
  },
])

const activeRoutineItem = computed(() => {
  return routineItems.value.find(item => item.key === activeRoutine.value) ?? routineItems.value[0]
})

const routineGradient = computed(() => {
  let current = 0
  const stops = routineItems.value.map((item) => {
    const start = current
    current += item.value
    return `${item.color} ${start}% ${current}%`
  })
  return `conic-gradient(from 210deg, ${stops.join(', ')})`
})
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <div class="tahoe-home">
    <div class="tahoe-atmosphere" aria-hidden="true">
      <span class="mist mist-a"></span>
      <span class="mist mist-b"></span>
      <span class="mist mist-c"></span>
    </div>

    <section class="tahoe-grid">
      <article
        class="glass-card card-intro interactive-card"
        :class="{ active: activeCard === 'intro' }"
        :style="cardStyle('intro')"
        tabindex="0"
        @click="activateCard('intro')"
        @keydown="onCardKeydown($event, 'intro')"
        @mousemove="updateCardMotion($event, 'intro')"
        @mouseleave="resetCardMotion('intro')"
        @touchstart.passive="onCardTouchStart($event, 'intro')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base intro-base">
          <div class="card-topline">
            <p class="card-label">{{ t.introLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:cursor-default-click-outline" />
              {{ t.interactiveHint }}
            </span>
          </div>
          <div class="intro-hero">
            <div class="intro-copy">
              <h1><TypewriterText :words="typewriterWords" /></h1>
              <p class="card-support intro-support">{{ t.introDesc }}</p>
              <div class="intro-meta-row">
                <div class="intro-meta-pill">
                  <span>{{ t.statusLabel }}</span>
                  <strong>{{ t.statusValue }}</strong>
                </div>
                <div class="intro-meta-pill">
                  <span>{{ t.localTimeLabel }}</span>
                  <strong>{{ nowText }}</strong>
                </div>
              </div>
            </div>
            <LazyPerson class="intro-person" />
          </div>

          <div class="intro-social-dock" @click.stop>
            <component
              :is="item.href ? 'a' : 'div'"
              v-for="item in socialLinks"
              :key="item.key"
              class="social-dock-item"
              :class="{ 'is-link': !!item.href, 'is-disabled': !item.href }"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noreferrer' : undefined"
              :style="{ '--social-accent': item.accent }"
              @click.stop
            >
              <img class="social-dock-icon" :src="item.iconSrc" :alt="item.label" />
              <span class="social-dock-label">{{ item.label }}</span>
            </component>
          </div>
        </div>

        <div class="card-reveal intro-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('intro')">
            <Icon icon="mdi:close" />
          </button>
          <p class="card-detail">{{ t.introDesc }}</p>

          <div class="intro-contact-grid" @click.stop>
            <component
              :is="item.href ? 'a' : 'div'"
              v-for="item in socialLinks"
              :key="item.key"
              class="contact-panel"
              :class="{ 'is-link': !!item.href, 'is-disabled': !item.href }"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noreferrer' : undefined"
              :style="{ '--social-accent': item.accent }"
              @click.stop
            >
              <div class="contact-panel-head">
                <img class="contact-panel-icon" :src="item.iconSrc" :alt="item.label" />
                <span class="contact-panel-label">{{ item.label }}</span>
              </div>
              <strong>{{ item.title }}</strong>
              <p>{{ item.detail }}</p>
            </component>
          </div>

          <div class="intro-stats compact">
            <div v-for="item in introStats" :key="item.label" class="stat-pill">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </div>
          </div>
        </div>
      </article>

      <article
        class="glass-card card-motto interactive-card"
        :class="{ active: activeCard === 'motto' }"
        :style="cardStyle('motto')"
        tabindex="0"
        @click="activateCard('motto')"
        @keydown="onCardKeydown($event, 'motto')"
        @mousemove="updateCardMotion($event, 'motto')"
        @mouseleave="resetCardMotion('motto')"
        @touchstart.passive="onCardTouchStart($event, 'motto')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base">
          <div class="card-topline">
            <p class="card-label">{{ t.mottoLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:gesture-tap-button" />
              {{ t.interactiveHint }}
            </span>
          </div>
          <h2 class="motto-title">
            <span>{{ t.mottoLead }}</span>
            <span class="gradient-text">{{ t.mottoAccent }}</span>
          </h2>
          <p class="card-support">{{ t.mottoDesc }}</p>
          <div class="motto-compass" aria-hidden="true">
            <span
              v-for="item in mottoTabs"
              :key="item.key"
              class="motto-chip"
              :class="{ active: activeMotto === item.key }"
            >
              {{ item.label }}
            </span>
          </div>
        </div>

        <div class="card-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('motto')">
            <Icon icon="mdi:close" />
          </button>
          <div class="chip-switch">
            <button
              v-for="item in mottoTabs"
              :key="item.key"
              type="button"
              class="chip-button"
              :class="{ selected: activeMotto === item.key }"
              @click="activeMotto = item.key"
            >
              {{ item.label }}
            </button>
          </div>

          <div class="detail-panel">
            <span>{{ t.activeLabel }}</span>
            <strong>{{ activeMottoTab.title }}</strong>
            <p>{{ activeMottoTab.desc }}</p>
            <p>{{ activeMottoTab.detail }}</p>
          </div>
        </div>
      </article>

      <article
        class="glass-card card-pursuit interactive-card"
        :class="{ active: activeCard === 'pursuit' }"
        :style="cardStyle('pursuit')"
        tabindex="0"
        @click="activateCard('pursuit')"
        @keydown="onCardKeydown($event, 'pursuit')"
        @mousemove="updateCardMotion($event, 'pursuit')"
        @mouseleave="resetCardMotion('pursuit')"
        @touchstart.passive="onCardTouchStart($event, 'pursuit')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base">
          <div class="card-topline">
            <p class="card-label">{{ t.pursuitLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:arrow-expand-all" />
              {{ t.interactiveHint }}
            </span>
          </div>
          <h2 class="pursuit-title" v-if="isZh">
            <span class="pursuit-token tone-cyan">洞察本质</span>
            <span class="pursuit-token tone-blue">尊重现实</span>
            <span class="pursuit-token tone-violet">长期复利</span>
          </h2>
          <h2 class="pursuit-title" v-else>
            <span class="pursuit-token tone-cyan">Insight</span>
            <span class="pursuit-token tone-blue">Realism</span>
            <span class="pursuit-token tone-violet">Compounding</span>
          </h2>
          <p class="card-support">{{ activePursuitItem.desc }}</p>
          <div class="card-inline-state">
            <span>{{ activePursuitItem.label }}</span>
            <strong>{{ activePursuitItem.title }}</strong>
          </div>
        </div>

        <div class="card-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('pursuit')">
            <Icon icon="mdi:close" />
          </button>
          <div class="chip-switch">
            <button
              v-for="item in pursuitItems"
              :key="item.key"
              type="button"
              class="chip-button"
              :class="{ selected: activePursuit === item.key }"
              @click="activePursuit = item.key"
            >
              {{ item.label }}
            </button>
          </div>

          <div class="detail-panel pursuit-panel">
            <span>{{ activePursuitItem.label }}</span>
            <strong>{{ activePursuitItem.title }}</strong>
            <p>{{ activePursuitItem.desc }}</p>
            <a :href="activePursuitItem.href" class="text-link">
              {{ activePursuitItem.ctaLabel }}
              <Icon icon="mdi:arrow-right" />
            </a>
          </div>
        </div>
      </article>

      <article
        class="glass-card card-character interactive-card"
        :class="{ active: activeCard === 'character' }"
        :style="cardStyle('character')"
        tabindex="0"
        @click="activateCard('character')"
        @keydown="onCardKeydown($event, 'character')"
        @mousemove="updateCardMotion($event, 'character')"
        @mouseleave="resetCardMotion('character')"
        @touchstart.passive="onCardTouchStart($event, 'character')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base character-base">
          <div class="card-topline character-topline">
            <p class="card-label">{{ t.characterLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:gesture-double-tap" />
              {{ t.interactiveHint }}
            </span>
          </div>

          <div class="character-copy">
            <h2 class="character-title">{{ t.characterTitle }}</h2>
            <p class="card-support">{{ activeTraitItem.desc }}</p>
            <div class="trait-pills" aria-hidden="true">
              <span
                v-for="item in characterTraits"
                :key="item.key"
                class="trait-pill"
                :class="{ active: activeTrait === item.key }"
              >
                {{ item.title }}
              </span>
            </div>
          </div>

          <div class="character-figure" aria-hidden="true">
            <span class="glass-pane pane-back"></span>
            <span class="glass-pane pane-mid"></span>
            <span class="glass-pane pane-front"></span>
            <span class="figure-pulse"></span>
          </div>
        </div>

        <div class="card-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('character')">
            <Icon icon="mdi:close" />
          </button>
          <div class="trait-list compact">
            <button
              v-for="item in characterTraits"
              :key="item.key"
              type="button"
              class="trait-item"
              :class="{ selected: activeTrait === item.key }"
              @click="activeTrait = item.key"
            >
              <strong>{{ item.title }}</strong>
              <span>{{ item.desc }}</span>
            </button>
          </div>

          <div class="detail-panel compact">
            <span>{{ t.activeLabel }}</span>
            <strong>{{ activeTraitItem.title }}</strong>
            <p>{{ activeTraitItem.detail }}</p>
          </div>
        </div>
      </article>

      <article
        class="glass-card card-skills interactive-card"
        :class="{ active: activeCard === 'skills' }"
        :style="cardStyle('skills')"
        tabindex="0"
        @click="activateCard('skills')"
        @keydown="onCardKeydown($event, 'skills')"
        @mousemove="updateCardMotion($event, 'skills')"
        @mouseleave="resetCardMotion('skills')"
        @touchstart.passive="onCardTouchStart($event, 'skills')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base">
          <div class="card-topline">
            <p class="card-label">{{ t.skillsLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:apps" />
              {{ t.interactiveHint }}
            </span>
          </div>
          <h2 class="section-title">{{ t.skillsTitle }}</h2>

          <div class="skills-preview">
            <span
              v-for="item in skillPreview"
              :key="item.key"
              class="skill-preview-tile"
              :style="{ '--skill-color': item.color }"
            >
              <Icon :icon="item.icon" />
            </span>
          </div>
          <div class="card-inline-state skill-state">
            <span>{{ activeSkillItem.group }}</span>
            <strong>{{ activeSkillItem.label }}</strong>
          </div>
        </div>

        <div class="card-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('skills')">
            <Icon icon="mdi:close" />
          </button>
          <div class="skills-grid compact">
            <button
              v-for="item in skills"
              :key="item.key"
              type="button"
              class="skill-tile"
              :class="{ selected: activeSkill === item.key }"
              :style="{ '--skill-color': item.color }"
              @click="activeSkill = item.key"
            >
              <span class="skill-icon">
                <Icon :icon="item.icon" />
              </span>
              <span class="skill-name">{{ item.label }}</span>
            </button>
          </div>

          <div class="detail-panel skills-panel">
            <span>{{ activeSkillItem.group }}</span>
            <strong>{{ activeSkillItem.label }}</strong>
            <p>{{ activeSkillItem.detail }}</p>
          </div>
        </div>
      </article>

      <article
        class="glass-card card-routine interactive-card"
        :class="{ active: activeCard === 'routine' }"
        :style="cardStyle('routine')"
        tabindex="0"
        @click="activateCard('routine')"
        @keydown="onCardKeydown($event, 'routine')"
        @mousemove="updateCardMotion($event, 'routine')"
        @mouseleave="resetCardMotion('routine')"
        @touchstart.passive="onCardTouchStart($event, 'routine')"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
        @touchcancel="onCardTouchCancel"
      >
        <div class="card-base">
          <div class="card-topline">
            <p class="card-label">{{ t.routineLabel }}</p>
            <span class="card-hint">
              <Icon icon="mdi:chart-donut" />
              {{ t.interactiveHint }}
            </span>
          </div>
          <h2 class="section-title">{{ t.routineTitle }}</h2>

          <div class="routine-ring-wrap">
            <div class="routine-ring" :style="{ '--routine-graphic': routineGradient }">
              <div class="routine-ring-center">
                <span>{{ activeRoutineItem.label }}</span>
                <strong>{{ activeRoutineItem.value }}%</strong>
              </div>
            </div>
          </div>
          <div class="card-inline-state">
            <span>{{ t.activeLabel }}</span>
            <strong>{{ activeRoutineItem.label }}</strong>
          </div>
        </div>

        <div class="card-reveal" @click.stop>
          <button type="button" class="card-reveal-close" @click.stop="activateCard('routine')">
            <Icon icon="mdi:close" />
          </button>
          <div class="routine-legend compact">
            <button
              v-for="item in routineItems"
              :key="item.key"
              type="button"
              class="legend-item"
              :class="{ selected: activeRoutine === item.key }"
              @click="activeRoutine = item.key"
            >
              <span class="legend-dot" :style="{ background: item.color }"></span>
              <div>
                <strong>{{ item.label }}</strong>
                <span>{{ item.value }}%</span>
              </div>
            </button>
          </div>

          <div class="detail-panel compact">
            <span>{{ t.activeLabel }}</span>
            <strong>{{ activeRoutineItem.label }}</strong>
            <p>{{ activeRoutineItem.detail }}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
