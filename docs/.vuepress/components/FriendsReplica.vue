<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'

interface Friend {
  name: string
  link: string
  avatar: string
}

const routeLocale = useRouteLocale()
const isZh = computed(() => routeLocale.value === '/zh/')

const friends: Friend[] = []

const t = computed(() => ({
  friendLinks: isZh.value ? '链接' : 'Links',
  myFriends: isZh.value ? '站点连接' : 'Site Connections',
  empty: isZh.value ? '这里暂时没有公开的链接。' : 'No public links yet.',
  noteTitle: isZh.value ? '说明' : 'Note',
  note1: isZh.value ? '该页面用于展示你的自定义外部链接。' : 'This page is reserved for your custom external links.',
  note2: isZh.value ? '你可以随时在组件里添加你自己的链接卡片。' : 'You can add your own link cards in this component at any time.',
  note3: isZh.value ? '当前已移除所有示例友链内容。' : 'All example friend-link content has been removed.',
  format: isZh.value ? '数据格式：' : 'Data format:',
}))
</script>

<template>
  <div class="friends-replica">
    <div class="friends-page">
      <div class="friends-header">
        <h1>{{ t.friendLinks }}</h1>
        <p>{{ t.myFriends }}</p>
      </div>

      <div v-if="friends.length" class="friends-content">
        <a
          v-for="friend in friends"
          :key="friend.name"
          :href="friend.link"
          target="_blank"
          class="vp-blog-post-item friend-item"
        >
          <img :src="friend.avatar" :alt="friend.name">
          <div>
            <p class="friend-item-name">
              {{ friend.name }}
            </p>
          </div>
        </a>
      </div>
      <div v-else class="friends-content-empty">
        <p>{{ t.empty }}</p>
      </div>
    </div>

    <div class="friend-application">
      <div class="application-header">
        <h2>{{ t.noteTitle }}</h2>
      </div>
      <div class="application-content">
        <p>{{ t.note1 }}</p>
        <p>{{ t.note2 }}</p>
        <p>{{ t.note3 }}</p>

        <div class="format-section">
          <h4>{{ t.format }}</h4>
          <pre><code>name: Link Name
link: https://your-link.example
avatar: https://your-avatar.example/avatar.png</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
