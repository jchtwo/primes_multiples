<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()

</script>

<template>
  <div class="backdrop h-100">
    <div
      class="d-flex flex-column justify-center align-center inside"
      :class="store.darkLight === 'light' ? 'light-shadow' : 'dark-shadow'"
    >
      <h1 class="text-h1 title-shadow">Sum Primes & Multiples</h1>
      <div class="d-flex mt-6" style="gap: 1rem">
        <v-btn
          to="/primes"
          size="x-large"
          color="teal"
          elevation="8"
          >Primes</v-btn
        >
        <v-btn
          to="/multiples"
          size="x-large"
          color="purple"
          elevation="8"
          >Multiples</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>

.backdrop {
  position: relative;
}
.backdrop::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('../assets/tp.jpg');
  background-size: cover;
  filter: grayscale(60%);
}

.inside {
  position: relative;
  height: 100%;
}
.light-shadow {
  text-shadow: white 0px 0px 10px;
}

.dark-shadow {
  text-shadow: black 0px 0px 10px;
}
</style>
