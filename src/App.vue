<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <Navigation />
    <v-main style="min-height: 100%;">
      <RouterView />
    </v-main>
    <Footer/>
  </v-app>
</template>

<style scoped></style>
