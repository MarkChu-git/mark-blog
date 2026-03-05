<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vuepress/client'

type Lang = 'en' | 'zh'

interface IntroStat {
  label: string
  value: string
}

interface CharacterTrait {
  title: string
  desc: string
}

interface SkillItem {
  label: string
  icon: string
  color: string
}

interface RoutineItem {
  label: string
  value: number
  color: string
}

const props = withDefaults(defineProps<{ lang?: Lang }>(), {
  lang: 'en',
})

const isZh = computed(() => props.lang === 'zh')

const avatar = computed(() => withBase('/avatar.png'))

const nowText = ref('--:--')
let clock = 0

const updateClock = () => {
  const formatter = new Intl.DateTimeFormat(isZh.value ? 'zh-CN' : 'en-US', {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
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

const t = computed(() => ({
  introLabel: isZh.value ? '你好，很高兴认识你。' : 'Hello, nice to meet you.',
  introTitle: isZh.value ? '你可以叫我 Mark。' : 'You can call me Mark.',
  introDesc: isZh.value
    ? '我关注工程实践、数学思维与技术写作，也把这个博客当作长期打磨的个人产品。'
    : 'I care about engineering practice, mathematical thinking, and technical writing, and treat this site as a long-term personal product.',
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
}))

const introStats = computed<IntroStat[]>(() => [
  { label: t.value.statusLabel, value: t.value.statusValue },
  { label: t.value.timezoneLabel, value: 'UTC+8' },
  { label: t.value.localTimeLabel, value: nowText.value },
])

const characterTraits = computed<CharacterTrait[]>(() => [
  {
    title: isZh.value ? '系统化思考' : 'Systems thinking',
    desc: isZh.value ? '关注结构，而不是只看表面结果。' : 'Structure first, surface details second.',
  },
  {
    title: isZh.value ? '工程化执行' : 'Engineering execution',
    desc: isZh.value ? '追求稳定、清楚、可维护的交付。' : 'Stable, clear, maintainable outcomes matter.',
  },
  {
    title: isZh.value ? '写作即产品' : 'Writing as product',
    desc: isZh.value ? '内容也应该有体验设计与质量标准。' : 'Content should meet the same quality bar as products.',
  },
])

const skills = computed<SkillItem[]>(() => [
  { label: 'VuePress', icon: 'mdi:application-braces-outline', color: '#7f95bd' },
  { label: 'TypeScript', icon: 'mdi:language-typescript', color: '#7088d3' },
  { label: 'Vue', icon: 'mdi:vuejs', color: '#6b9e92' },
  { label: 'Python', icon: 'mdi:language-python', color: '#b8aa7a' },
  { label: 'Node.js', icon: 'mdi:nodejs', color: '#7f9b7a' },
  { label: 'PostgreSQL', icon: 'mdi:database-outline', color: '#7f93b6' },
  { label: 'Linux', icon: 'mdi:linux', color: '#c3a17a' },
  { label: 'Git', icon: 'mdi:git', color: '#c58c79' },
  { label: 'C++', icon: 'mdi:language-cpp', color: '#8f85c2' },
  { label: 'Writing', icon: 'mdi:draw-pen', color: '#77a5b0' },
  { label: 'Math', icon: 'mdi:function-variant', color: '#828fc4' },
  { label: 'Notes', icon: 'mdi:notebook-outline', color: '#7d9cbd' },
])

const routineItems = computed<RoutineItem[]>(() => [
  {
    label: isZh.value ? '构建' : 'Build',
    value: 40,
    color: '#7187d8',
  },
  {
    label: isZh.value ? '写作' : 'Writing',
    value: 26,
    color: '#83a7d6',
  },
  {
    label: isZh.value ? '阅读' : 'Reading',
    value: 18,
    color: '#9dc4bb',
  },
  {
    label: isZh.value ? '思考' : 'Thinking',
    value: 16,
    color: '#d7bc86',
  },
])

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
  <div class="tahoe-home">
    <div class="tahoe-atmosphere" aria-hidden="true">
      <span class="mist mist-a"></span>
      <span class="mist mist-b"></span>
      <span class="mist mist-c"></span>
    </div>

    <section class="tahoe-grid">
      <article class="glass-card card-intro">
        <div class="card-inner intro-layout">
          <div class="intro-copy">
            <p class="card-label">{{ t.introLabel }}</p>
            <h1>{{ t.introTitle }}</h1>
            <p class="card-desc">{{ t.introDesc }}</p>
          </div>

          <div class="intro-avatar">
            <img :src="avatar" alt="Mark avatar">
          </div>
        </div>

        <div class="intro-stats">
          <div v-for="item in introStats" :key="item.label" class="stat-pill">
            <span>{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </div>
        </div>
      </article>

      <article class="glass-card card-motto">
        <div class="card-inner">
          <p class="card-label">{{ t.mottoLabel }}</p>
          <h2 class="motto-title">
            <span>{{ t.mottoLead }}</span>
            <span class="gradient-text">{{ t.mottoAccent }}</span>
          </h2>
          <p class="card-desc">{{ t.mottoDesc }}</p>
        </div>
      </article>

      <article class="glass-card card-pursuit">
        <div class="card-inner">
          <p class="card-label">{{ t.pursuitLabel }}</p>

          <h2 class="pursuit-title" v-if="isZh">
            在<span class="tone-cyan">工程</span>、<span class="tone-blue">数学</span>与<span class="tone-violet">写作</span>的交叉处，
            理解复杂系统。
          </h2>

          <h2 class="pursuit-title" v-else>
            Exploring the intersection of
            <span class="tone-cyan">engineering</span>,
            <span class="tone-blue">mathematics</span>, and
            <span class="tone-violet">writing</span> to understand complex systems.
          </h2>

          <p class="card-desc pursuit-desc">{{ t.pursuitDesc }}</p>
        </div>
      </article>

      <article class="glass-card card-character">
        <div class="card-inner character-layout">
          <div class="character-copy">
            <p class="card-label">{{ t.characterLabel }}</p>
            <h2 class="character-title">{{ t.characterTitle }}</h2>
            <p class="character-accent">{{ t.characterAccent }}</p>

            <div class="trait-list">
              <div v-for="item in characterTraits" :key="item.title" class="trait-item">
                <strong>{{ item.title }}</strong>
                <span>{{ item.desc }}</span>
              </div>
            </div>
          </div>

          <div class="character-figure" aria-hidden="true">
            <span class="glass-pane pane-back"></span>
            <span class="glass-pane pane-mid"></span>
            <span class="glass-pane pane-front"></span>
            <span class="figure-pulse"></span>
          </div>
        </div>
      </article>

      <article class="glass-card card-skills">
        <div class="card-inner">
          <p class="card-label">{{ t.skillsLabel }}</p>
          <h2 class="section-title">{{ t.skillsTitle }}</h2>
          <p class="card-desc">{{ t.skillsDesc }}</p>

          <div class="skills-grid">
            <div
              v-for="item in skills"
              :key="item.label"
              class="skill-tile"
              :style="{ '--skill-color': item.color }"
            >
              <span class="skill-icon">
                <Icon :icon="item.icon" />
              </span>
              <span class="skill-name">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </article>

      <article class="glass-card card-routine">
        <div class="card-inner">
          <p class="card-label">{{ t.routineLabel }}</p>
          <h2 class="section-title">{{ t.routineTitle }}</h2>
          <p class="card-desc">{{ t.routineDesc }}</p>

          <div class="routine-layout">
            <div class="routine-ring-wrap">
              <div class="routine-ring" :style="{ '--routine-graphic': routineGradient }">
                <div class="routine-ring-center">
                  <span>{{ t.routineCenterLabel }}</span>
                  <strong>100%</strong>
                </div>
              </div>
            </div>

            <div class="routine-legend">
              <div v-for="item in routineItems" :key="item.label" class="legend-item">
                <span class="legend-dot" :style="{ background: item.color }"></span>
                <div>
                  <strong>{{ item.label }}</strong>
                  <span>{{ item.value }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
