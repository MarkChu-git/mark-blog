<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouteLocale } from '@vuepress/client'

const routeLocale = useRouteLocale()
const isZh = computed(() => routeLocale.value === '/zh/')

// 触摸交互状态
const touchState = ref<{
  startX: number
  startY: number
  isScrolling: boolean
  activeCard: HTMLElement | null
}>({
  startX: 0,
  startY: 0,
  isScrolling: false,
  activeCard: null,
})

const TOUCH_THRESHOLD = 10 // 防误触阈值（像素）
const MOBILE_TILT_ANGLE = 8 // 移动端倾斜角度（度）

type NoteCard = {
  title: string
  desc: string
  href?: string
  icon: { svg: string }
  cta: string
  visible?: boolean
}

const iconMathFunction = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2m-8 7h6m4 0l6 6m-6 0l6-6"/></svg>',
}

const iconCpu = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M8 10V8h2m6 6v2h-2m-4 0H8v-2m8-4V8h-2M3 10h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2"/></g></svg>',
}

const iconBrackets = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 4l-5 8l5 8m8-16l5 8l-5 8"/></svg>',
}

const iconBrain = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8"/><path d="M17.5 16a3.5 3.5 0 0 0 0-7H17"/><path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7"/><path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10"/></g></svg>',
}

const iconHierarchy = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3h4v4h-4zM3 17h4v4H3zm14 0h4v4h-4zM7 17l5-4l5 4M12 7v6"/></svg>',
}

const iconBrowser = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v4"/></svg>',
}

const iconIntegral = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2"/></svg>',
}

const iconLaptop = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h18M5 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/></svg>',
}

const iconGit = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92"><path fill="currentColor" d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371"/></svg>',
}

const iconMarkdown = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43 120 120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm60-120h60v-180h40v120h60v-120h40v180h60v-200q0-17-11.5-28.5T440-600H260q-17 0-28.5 11.5T220-560v200Z"/></svg>',
}

function onCardPointerMove(event: PointerEvent) {
  if (event.pointerType === 'touch')
    return

  const card = event.currentTarget as HTMLElement | null
  if (!card)
    return

  const rect = card.getBoundingClientRect()
  const px = (event.clientX - rect.left) / rect.width
  const py = (event.clientY - rect.top) / rect.height
  const tiltY = ((px - 0.5) * 12).toFixed(2)
  const tiltX = ((0.5 - py) * 12).toFixed(2)

  card.style.setProperty('--note-tilt-x', `${tiltX}deg`)
  card.style.setProperty('--note-tilt-y', `${tiltY}deg`)
}

function resetCardTilt(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card)
    return

  card.style.setProperty('--note-tilt-x', '0deg')
  card.style.setProperty('--note-tilt-y', '0deg')
}

// 移动端触摸事件处理
function onCardTouchStart(event: TouchEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card || event.touches.length === 0)
    return

  const touch = event.touches[0]

  // 记录起始位置
  touchState.value.startX = touch.clientX
  touchState.value.startY = touch.clientY
  touchState.value.isScrolling = false
  touchState.value.activeCard = card

  // 计算倾斜角度
  applyTiltFromTouch(card, touch)

  // 添加按压效果
  card.classList.add('is-pressed')
}

function onCardTouchMove(event: TouchEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card || event.touches.length === 0 || !touchState.value.activeCard)
    return

  const touch = event.touches[0]

  // 计算移动距离
  const deltaX = Math.abs(touch.clientX - touchState.value.startX)
  const deltaY = Math.abs(touch.clientY - touchState.value.startY)
  const moveDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

  // 如果移动超过阈值，认为是滑动/滚动，取消倾斜效果
  if (moveDistance > TOUCH_THRESHOLD) {
    touchState.value.isScrolling = true
    resetCardTiltWithBounce(card)
    card.classList.remove('is-pressed')
    return
  }

  // 更新倾斜角度
  applyTiltFromTouch(card, touch)
}

function onCardTouchEnd(event: TouchEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card)
    return

  // 如果不是在滚动状态，执行回弹动画
  if (!touchState.value.isScrolling) {
    resetCardTiltWithBounce(card)
  }

  // 移除按压效果
  card.classList.remove('is-pressed')

  // 重置状态
  touchState.value.activeCard = null
  touchState.value.isScrolling = false
}

function applyTiltFromTouch(card: HTMLElement, touch: Touch) {
  const rect = card.getBoundingClientRect()
  const px = (touch.clientX - rect.left) / rect.width
  const py = (touch.clientY - rect.top) / rect.height

  // 移动端使用更小的倾斜角度
  const tiltY = ((px - 0.5) * MOBILE_TILT_ANGLE * 2).toFixed(2)
  const tiltX = ((0.5 - py) * MOBILE_TILT_ANGLE * 2).toFixed(2)

  card.style.setProperty('--note-tilt-x', `${tiltX}deg`)
  card.style.setProperty('--note-tilt-y', `${tiltY}deg`)
}

function resetCardTiltWithBounce(card: HTMLElement) {
  card.style.setProperty('--note-tilt-x', '0deg')
  card.style.setProperty('--note-tilt-y', '0deg')
}

const copy = computed(() => {
  if (isZh.value) {
    return {
      title: '程序员的田野笔记',
      desc: '这里放的是我整理过的计算机科学笔记。它更像一份长期更新的个人知识底稿，记录概念总结、实现经验，以及那些真正把问题想通的瞬间。',
      cards: [
        {
          title: 'Git 与 GitHub',
          desc: '系统讲解版本控制的概念、工作线和操作方法，包含新手入门和实战指南。',
          href: './git-and-github/',
          icon: iconGit,
          cta: '现在可读',
          visible: true,
        },
        {
          title: 'Typora 与 Markdown',
          desc: '学习用 Markdown 和 Typora 建立长期可维护的文档写作系统。',
          href: './typora-and-markdown/',
          icon: iconMarkdown,
          cta: '现在可读',
          visible: true,
        },
        {
          title: '计算理论',
          desc: '整理自动机、形式语言、可计算性与复杂度，让抽象概念落到可理解的结构上。',
          icon: iconMathFunction,
          cta: '即将推出',
          visible: false,
        },
        {
          title: '并行计算',
          desc: '记录并行架构、同步机制、并发模型与性能分析时常用的理解框架。',
          icon: iconCpu,
          cta: '即将推出',
          visible: false,
        },
        {
          title: '编程范式',
          desc: '把函数式、面向对象、逻辑式与声明式思路放在同一张图里理解取舍。',
          icon: iconBrackets,
          cta: '即将推出',
          visible: false,
        },
        {
          title: '人工智能',
          desc: '聚焦机器学习直觉、模型评估、神经网络基础，以及智能系统的工程落地。',
          icon: iconBrain,
          cta: '即将推出',
          visible: true,
        },
        {
          title: '算法与数据结构',
          desc: '沉淀题型、分析方法、优化套路，以及写出更稳健解法时真正有用的抽象。',
          icon: iconHierarchy,
          cta: '即将推出',
          visible: false,
        },
        {
          title: '前端开发',
          desc: '围绕界面架构、渲染策略、CSS 体系与交互细节，整理更偏工程实感的笔记。',
          icon: iconBrowser,
          cta: '即将推出',
          visible: true,
        },
        {
          title: '计算机中的连续数学',
          desc: '把微积分、线性代数、概率与优化放回计算问题中理解，而不是只背公式。',
          icon: iconIntegral,
          cta: '即将推出',
          visible: false,
        },
        {
          title: '计算机科学导论',
          desc: '给初学者的底层地图：问题拆解、语言、系统、网络与计算思维如何彼此连通。',
          icon: iconLaptop,
          cta: '即将推出',
          visible: true,
        },
      ] satisfies NoteCard[],
    }
  }

  return {
    title: 'A Coder\'s Field Notes',
    desc: 'Welcome to my personal collection of computer science notes. This is where I keep compact summaries, implementation patterns, and the small conceptual links that make hard topics click.',
    cards: [
      {
        title: 'Git and GitHub',
        desc: 'A textbook about Git and GitHub, systematically explaining version control concepts and operations.',
        href: './git-and-github/',
        icon: iconGit,
        cta: 'Available Now',
        visible: true,
      },
      {
        title: 'Typora and Markdown',
        desc: 'Learn how to build a long-term maintainable document writing system with Markdown and Typora.',
        href: './typora-and-markdown/',
        icon: iconMarkdown,
        cta: 'Available Now',
        visible: true,
      },
      {
        title: 'Theory of Computation',
        desc: 'Automata, formal languages, computability, and complexity notes that keep the abstractions readable.',
        icon: iconMathFunction,
        cta: 'Coming Soon',
        visible: false,
      },
      {
        title: 'Parallel Computing',
        desc: 'Architectures, concurrency models, synchronization patterns, and performance intuition for parallel systems.',
        icon: iconCpu,
        cta: 'Coming Soon',
        visible: false,
      },
      {
        title: 'Programming Paradigms',
        desc: 'Functional, object-oriented, logic, and declarative patterns with an emphasis on tradeoffs in real code.',
        icon: iconBrackets,
        cta: 'Coming Soon',
        visible: false,
      },
      {
        title: 'Artificial Intelligence',
        desc: 'Machine learning concepts, model intuition, evaluation basics, and practical notes on intelligent systems.',
        icon: iconBrain,
        cta: 'Coming Soon',
        visible: true,
      },
      {
        title: 'Algorithms & Data Structures',
        desc: 'Core techniques for problem solving, analysis, optimization, and building durable computational instincts.',
        icon: iconHierarchy,
        cta: 'Coming Soon',
        visible: false,
      },
      {
        title: 'Front-end Development',
        desc: 'Interface architecture, rendering patterns, CSS systems, and small implementation details that improve product feel.',
        icon: iconBrowser,
        cta: 'Coming Soon',
        visible: true,
      },
      {
        title: 'Continuous Mathematics for CS',
        desc: 'Calculus, linear algebra, probability, and optimization notes aimed at actual computer science use cases.',
        icon: iconIntegral,
        cta: 'Coming Soon',
        visible: false,
      },
      {
        title: 'Introduction to Computer Science',
        desc: 'Beginner-friendly notes on core ideas, problem decomposition, languages, systems, and how everything fits together.',
        icon: iconLaptop,
        cta: 'Coming Soon',
        visible: true,
      },
    ] satisfies NoteCard[],
  }
})

const visibleCards = computed(() => {
  return copy.value.cards.filter(card => card.visible !== false)
})
</script>

<template>
  <div class="notes-catalog">
    <header class="notes-catalog__hero">
      <h1>{{ copy.title }}</h1>
      <p>{{ copy.desc }}</p>
    </header>

    <div class="notes-catalog__grid">
      <VPCard
        v-for="card in visibleCards"
        :key="card.title"
        class="notes-topic-card"
        @pointermove="onCardPointerMove"
        @pointerleave="resetCardTilt"
        @touchstart="onCardTouchStart"
        @touchmove="onCardTouchMove"
        @touchend="onCardTouchEnd"
      >
        <template #title>
          <span class="notes-topic-card__icon">
            <VPIcon class="notes-topic-card__logo" :name="card.icon" />
          </span>
        </template>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
        <VPLink v-if="card.href" class="notes-topic-card__cta" :href="card.href" no-icon>
          {{ card.cta }}
          <span class="notes-topic-card__cta-arrow" aria-hidden="true">→</span>
        </VPLink>
        <span v-else class="notes-topic-card__cta notes-topic-card__cta--disabled">
          {{ card.cta }}
        </span>
      </VPCard>
    </div>
  </div>
</template>

<style scoped>
.notes-topic-card__icon :deep(svg) {
  width: 24px !important;
  height: 24px !important;
}

.notes-topic-card__cta--disabled {
  opacity: 0.5;
  cursor: default;
}

/* 移动端触摸交互样式 */
.notes-topic-card {
  transition: transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color var(--vp-t-color),
    border-color var(--vp-t-color),
    box-shadow 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.notes-topic-card.is-pressed {
  transform: scale(0.98);
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .notes-topic-card {
    touch-action: pan-y;
    user-select: none;
    -webkit-user-select: none;
  }
}
</style>
