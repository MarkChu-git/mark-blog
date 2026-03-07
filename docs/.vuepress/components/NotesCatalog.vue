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

const copy = computed(() => {
  if (props.locale === 'zh') {
    return {
      title: '知识笔记',
      desc: '按主题整理计算机科学学习资料、概念地图与长期维护的文档记录。',
      cards: [
        {
          title: '算法与数据结构',
          desc: '系统整理算法、数据结构与计算思维的核心方法。',
          href: './algorithms-data-structures.md',
          icon: iconHierarchy,
          cta: '探索',
        },
        {
          title: '数学基础',
          desc: '把微积分、线性代数、概率与优化放回计算问题中理解。',
          href: './continuous-mathematics-for-cs.md',
          icon: iconIntegral,
          cta: '探索',
        },
        {
          title: '并行计算',
          desc: '整理并发编程、并行算法与分布式系统的关键框架。',
          href: './parallel-computing.md',
          icon: iconCpu,
          cta: '探索',
        },
        {
          title: '计算理论',
          desc: '梳理自动机、形式语言、可计算性与复杂度的核心结构。',
          href: './theory-of-computation.md',
          icon: iconMathFunction,
          cta: '探索',
        },
        {
          title: '编程范式',
          desc: '对比函数式、面向对象与声明式编程中的真实取舍。',
          href: './programming-paradigms.md',
          icon: iconBrackets,
          cta: '探索',
        },
        {
          title: '人工智能',
          desc: '聚焦机器学习直觉、模型评估与智能系统的工程落地。',
          href: './artificial-intelligence.md',
          icon: iconBrain,
          cta: '探索',
        },
        {
          title: '前端开发',
          desc: '围绕界面架构、渲染策略与交互细节整理工程笔记。',
          href: './front-end-development.md',
          icon: iconBrowser,
          cta: '探索',
        },
        {
          title: '计算机科学导论',
          desc: '给初学者的一张底层地图，帮助建立完整的计算机科学认知。',
          href: './introduction-to-cs.md',
          icon: iconLaptop,
          cta: '探索',
        },
      ] satisfies NoteCard[],
    }
  }

  return {
    title: 'Knowledge Notes',
    desc: 'Explore different areas of organized learning resources and long-term technical documentation.',
    cards: [
      {
        title: 'Algorithms & Data Structures',
        desc: 'Comprehensive notes on algorithms, data structures, and computational thinking.',
        href: './algorithms-data-structures.md',
        icon: iconHierarchy,
        cta: 'Explore',
      },
      {
        title: 'Mathematics',
        desc: 'Pure mathematics, applied math, and mathematical foundations for computing.',
        href: './continuous-mathematics-for-cs.md',
        icon: iconIntegral,
        cta: 'Explore',
      },
      {
        title: 'Parallel Computing',
        desc: 'Concurrent programming, parallel algorithms, and distributed systems.',
        href: './parallel-computing.md',
        icon: iconCpu,
        cta: 'Explore',
      },
      {
        title: 'Theory of Computation',
        desc: 'Automata, formal languages, computability, and complexity made more readable.',
        href: './theory-of-computation.md',
        icon: iconMathFunction,
        cta: 'Explore',
      },
      {
        title: 'Programming Paradigms',
        desc: 'Functional, object-oriented, logic, and declarative approaches in one map.',
        href: './programming-paradigms.md',
        icon: iconBrackets,
        cta: 'Explore',
      },
      {
        title: 'Artificial Intelligence',
        desc: 'Model intuition, evaluation basics, and practical notes on intelligent systems.',
        href: './artificial-intelligence.md',
        icon: iconBrain,
        cta: 'Explore',
      },
      {
        title: 'Front-end Development',
        desc: 'Interface architecture, rendering patterns, CSS systems, and product detail work.',
        href: './front-end-development.md',
        icon: iconBrowser,
        cta: 'Explore',
      },
      {
        title: 'Introduction to Computer Science',
        desc: 'Beginner-friendly notes on core ideas, systems, languages, and how they connect.',
        href: './introduction-to-cs.md',
        icon: iconLaptop,
        cta: 'Explore',
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
