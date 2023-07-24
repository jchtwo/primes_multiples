<script setup lang="ts">
import { ref, computed } from 'vue'

const numberBase = ['binary', 'hexadecimal']
const chosenBase = ref(numberBase[0])

const props = defineProps({
  sumToChange: Number,
})

</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-select
      v-model="chosenBase"
      :items="numberBase"
      label="Convert number to"
      required
      style="min-width: 200px"
    ></v-select>
    <p class="pl-4">number converted</p>
  </div>
</template>
<style scoped></style>
