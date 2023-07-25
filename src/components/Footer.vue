<script setup lang="ts">

const icons = [
  { icon: 'mdi-facebook', to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { icon: 'mdi-twitter', to: 'https://en.wikipedia.org/wiki/Rickrolling' },
  { icon: 'mdi-linkedin', to: 'https://screenrant.com/three-seashells-demolition-man-function/' },
  { icon: 'mdi-instagram', to: 'https://www.youtube.com/watch?v=8AMiGIzoeBg' }
]
</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :icon="icon.icon"
        variant="text"
        :href="icon.to"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0">
      Did you know that in Japan more paper is used for manga than toilet paper?
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Team 3 Shells and a Bog-Roll</strong></div>
  </v-footer>
</template>
