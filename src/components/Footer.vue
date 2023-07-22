<script setup lang="ts">
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </div>

    <div class="pt-0">
      Did you know that in Japan more paper is used for manga than toilet paper?
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Team 3 Shells and a Bog-Roll</strong></div>
  </v-footer>
</template>
