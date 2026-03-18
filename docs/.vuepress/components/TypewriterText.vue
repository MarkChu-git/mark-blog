<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}>(), {
  typingSpeed: 100,
  deletingSpeed: 60,
  pauseDuration: 2000,
})

const displayedText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const charIndex = ref(0)

let timeoutId: ReturnType<typeof setTimeout> | null = null

const type = () => {
  const currentWord = props.words[currentIndex.value]
  
  if (isDeleting.value) {
    displayedText.value = currentWord.substring(0, charIndex.value - 1)
    charIndex.value--
    
    if (charIndex.value === 0) {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % props.words.length
      timeoutId = setTimeout(type, 500)
      return
    }
  } else {
    displayedText.value = currentWord.substring(0, charIndex.value + 1)
    charIndex.value++
    
    if (charIndex.value === currentWord.length) {
      timeoutId = setTimeout(() => {
        isDeleting.value = true
        type()
      }, props.pauseDuration)
      return
    }
  }
  
  const delay = isDeleting.value ? props.deletingSpeed : props.typingSpeed
  timeoutId = setTimeout(type, delay)
}

onMounted(() => {
  type()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <span class="typewriter">{{ displayedText }}</span>
</template>

<style scoped>
.typewriter {
  display: inline;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  letter-spacing: 0.002em;
}

.typewriter::after {
  content: '_';
  display: inline;
  color: currentColor;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
