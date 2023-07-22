<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()
</script>

<template>
  <div class="d-flex flex-column justify-center align-center h-100 hero"
  :class="store.darkLight === 'light' ? 'light-shadow' : 'dark-shadow'">
    <h1 class="text-h1 title-shadow">Sum Primes & Multiples</h1>
  </div>
</template>

<style scoped>
.hero {
  background: url('../assets/tp.jpg');
  background-size: cover;
  height: 100vh;
  filter: grayscale(100%);
}

.light-shadow {
  text-shadow: white 0px 0px 10px;
}

.dark-shadow {
  text-shadow: black 0px 0px 10px;
}
</style>
