<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <v-app>
    <Navigation />
    <RouterView />
  </v-app>
</template>

<style scoped></style>
