<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  locale?: 'en' | 'zh'
}>(), {
  locale: 'en',
})

type NoteCard = {
  title: string
  desc: string
  href: string
  icon: { svg: string }
  cta: string
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

const copy = computed(() => {
  if (props.locale === 'zh') {
    return {
      title: '程序员的田野笔记',
      desc: '这里放的是我整理过的计算机科学笔记。它更像一份长期更新的个人知识底稿，记录概念总结、实现经验，以及那些真正把问题想通的瞬间。',
      cards: [
        {
          title: '计算理论',
          desc: '整理自动机、形式语言、可计算性与复杂度，让抽象概念落到可理解的结构上。',
          href: './theory-of-computation.md',
          icon: iconMathFunction,
          cta: '现在可读',
        },
        {
          title: '并行计算',
          desc: '记录并行架构、同步机制、并发模型与性能分析时常用的理解框架。',
          href: './parallel-computing.md',
          icon: iconCpu,
          cta: '现在可读',
        },
        {
          title: '编程范式',
          desc: '把函数式、面向对象、逻辑式与声明式思路放在同一张图里理解取舍。',
          href: './programming-paradigms.md',
          icon: iconBrackets,
          cta: '现在可读',
        },
        {
          title: '人工智能',
          desc: '聚焦机器学习直觉、模型评估、神经网络基础，以及智能系统的工程落地。',
          href: './artificial-intelligence.md',
          icon: iconBrain,
          cta: '现在可读',
        },
        {
          title: '算法与数据结构',
          desc: '沉淀题型、分析方法、优化套路，以及写出更稳健解法时真正有用的抽象。',
          href: './algorithms-data-structures.md',
          icon: iconHierarchy,
          cta: '现在可读',
        },
        {
          title: '前端开发',
          desc: '围绕界面架构、渲染策略、CSS 体系与交互细节，整理更偏工程实感的笔记。',
          href: './front-end-development.md',
          icon: iconBrowser,
          cta: '现在可读',
        },
        {
          title: '计算机中的连续数学',
          desc: '把微积分、线性代数、概率与优化放回计算问题中理解，而不是只背公式。',
          href: './continuous-mathematics-for-cs.md',
          icon: iconIntegral,
          cta: '现在可读',
        },
        {
          title: '计算机科学导论',
          desc: '给初学者的底层地图：问题拆解、语言、系统、网络与计算思维如何彼此连通。',
          href: './introduction-to-cs.md',
          icon: iconLaptop,
          cta: '现在可读',
        },
      ] satisfies NoteCard[],
    }
  }

  return {
    title: 'A Coder\'s Field Notes',
    desc: 'Welcome to my personal collection of computer science notes. This is where I keep compact summaries, implementation patterns, and the small conceptual links that make hard topics click.',
    cards: [
      {
        title: 'Theory of Computation',
        desc: 'Automata, formal languages, computability, and complexity notes that keep the abstractions readable.',
        href: './theory-of-computation.md',
        icon: iconMathFunction,
        cta: 'Available Now',
      },
      {
        title: 'Parallel Computing',
        desc: 'Architectures, concurrency models, synchronization patterns, and performance intuition for parallel systems.',
        href: './parallel-computing.md',
        icon: iconCpu,
        cta: 'Available Now',
      },
      {
        title: 'Programming Paradigms',
        desc: 'Functional, object-oriented, logic, and declarative patterns with an emphasis on tradeoffs in real code.',
        href: './programming-paradigms.md',
        icon: iconBrackets,
        cta: 'Available Now',
      },
      {
        title: 'Artificial Intelligence',
        desc: 'Machine learning concepts, model intuition, evaluation basics, and practical notes on intelligent systems.',
        href: './artificial-intelligence.md',
        icon: iconBrain,
        cta: 'Available Now',
      },
      {
        title: 'Algorithms & Data Structures',
        desc: 'Core techniques for problem solving, analysis, optimization, and building durable computational instincts.',
        href: './algorithms-data-structures.md',
        icon: iconHierarchy,
        cta: 'Available Now',
      },
      {
        title: 'Front-end Development',
        desc: 'Interface architecture, rendering patterns, CSS systems, and small implementation details that improve product feel.',
        href: './front-end-development.md',
        icon: iconBrowser,
        cta: 'Available Now',
      },
      {
        title: 'Continuous Mathematics for CS',
        desc: 'Calculus, linear algebra, probability, and optimization notes aimed at actual computer science use cases.',
        href: './continuous-mathematics-for-cs.md',
        icon: iconIntegral,
        cta: 'Available Now',
      },
      {
        title: 'Introduction to Computer Science',
        desc: 'Beginner-friendly notes on core ideas, problem decomposition, languages, systems, and how everything fits together.',
        href: './introduction-to-cs.md',
        icon: iconLaptop,
        cta: 'Available Now',
      },
    ] satisfies NoteCard[],
  }
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
        v-for="card in copy.cards"
        :key="card.href"
        class="notes-topic-card"
        @pointermove="onCardPointerMove"
        @pointerleave="resetCardTilt"
      >
        <template #title>
          <span class="notes-topic-card__icon">
            <VPIcon class="notes-topic-card__logo" :name="card.icon" />
          </span>
        </template>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
        <VPLink class="notes-topic-card__cta" :href="card.href" no-icon>
          {{ card.cta }}
          <span class="notes-topic-card__cta-arrow" aria-hidden="true">→</span>
        </VPLink>
      </VPCard>
    </div>
  </div>
</template>
