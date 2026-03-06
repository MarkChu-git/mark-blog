<script setup lang="ts">
import { withBase } from 'vuepress/client'

const personImage = withBase('/intro-avatar.png')
</script>

<template>
  <div
    class="lazy-person"
    :style="{ backgroundImage: `url(${personImage})` }"
    aria-hidden="true"
  />
</template>

<style scoped>
.lazy-person {
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
