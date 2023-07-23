<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const currentTheme = ref('dark')
</script>

<template>
  <v-app>
    <Navigation />
    <v-main class="h-75">
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
