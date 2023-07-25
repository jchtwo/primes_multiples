<script setup lang="ts">
import { ref, computed } from 'vue'
import { bruteMultiples, fastMultiples } from '@/utils/multiples'
import {multiplesInfo} from '../utils/algoInfo'
import NumberConverter from '../components/NumberConverter.vue'

const multiple1 = ref(3)
const multiple2 = ref(5)
const totalNums = ref(1000)
const timeTaken = ref()

const isLoading = ref(false)
const isError = ref(false)
const multiplesObject = ref()
const multiplesSum = ref()

const algos = ['Brute Force', 'No loops']

const algoInfo = computed(() => {
  if (chosenAlgo.value === 'Brute Force') {
    return multiplesInfo[0]
  } else {
    return multiplesInfo[1]
  }
})

const rules = [
  (value: number) => {
    if (value > 0) return true

    return 'Please enter a number above 0'
  }
]

const chosenAlgo = ref(algos[1])

const handleSubmit = () => {
  multiplesSum.value = 0
  multiplesObject.value = null
  isError.value = false
  const startTime = new Date().getMilliseconds()
  if (multiple1.value >= totalNums.value || multiple2.value >= totalNums.value) {
    isError.value = true
    return
  }
  isLoading.value = true
  switch (chosenAlgo.value) {
    case algos[0]:
      multiplesObject.value = bruteMultiples(multiple1.value, multiple2.value, totalNums.value)
      timeTaken.value = new Date().getMilliseconds() - startTime
      break
    case algos[1]:
      multiplesSum.value = fastMultiples(multiple1.value, multiple2.value, totalNums.value)
      timeTaken.value = new Date().getMilliseconds() - startTime
      break
    default:
      console.log('error with selected algo')
  }
  isLoading.value = false
}
</script>
<template>
  <div
    class="d-flex flex-column justify-center align-center mt-4 h-auto grayscale"
    style="height: min-content"
  >
    <div class="d-flex flex-column justify-center align-center">
      <h1 class="text-h2">
        Sum of all the multiples of <span class="text-green">{{ multiple1 }}</span> and
        <span class="text-blue">{{ multiple2 }}</span>
      </h1>
      <h2 class="text-h3">
        Below <span class="text-purple">{{ totalNums }}</span>
      </h2>
    </div>
    <div class="d-lg-flex justify-center align-center mt-4">
      <v-sheet width="500" class="mx-4" style="max-width: 50%">
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="multiple1"
            :rules="rules"
            label="Multiple 1"
            required
          ></v-text-field>
          <v-text-field
            v-model="multiple2"
            :rules="rules"
            label="Multiple 2"
            required
            class="mt-4"
          ></v-text-field>
          <v-text-field
            v-model="totalNums"
            :rules="rules"
            label="End Number"
            required
          ></v-text-field>
          <v-select v-model="chosenAlgo" :items="algos" label="Algorithm" required></v-select>
          <p class="text-error pl-3" v-show="isError">
            The starting number must be less than the goal
          </p>
          <v-btn type="submit" block class="mt-2" color="success" :loading="isLoading"
            >Calculate</v-btn
          >
        </v-form>
      </v-sheet>
      <v-timeline side="end" class="w-auto px-4" style="max-width: 50%">
        <v-timeline-item
          v-for="info in algoInfo"
          :key="info.id"
          :dot-color="info.colour"
          size="small"
        >
          <v-alert :value="true" :color="info.colour" :icon="info.icon">
            {{ info.text }}
          </v-alert>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div style="height: min-content" class="pt-6">
      <v-card v-if="multiplesObject"
        ><v-card-text class="d-flex flex-column align-center">
          <h2 class="text-h4">Sum of the multiples of {{ multiple1 }} and {{ multiple2 }}</h2>
          <p class="text-h4 text-primary">{{ multiplesObject.sum.toLocaleString() }}</p>
          <p class="text-h6 text-success">
            Total Multiples: {{ multiplesObject.multiples.length.toLocaleString() }}
          </p>
          <p class="text-h6 text-orange">Time in MS: {{ timeTaken }}</p>
          <NumberConverter :sum-to-change="multiplesObject.sum"/>
        </v-card-text></v-card
      >
      <v-card v-if="multiplesSum"
        ><v-card-text class="d-flex flex-column align-center">
          <h2 class="text-h4">Sum of the multiples {{ multiple1 }} and {{ multiple2 }}</h2>
          <p class="text-h4 text-primary">{{ multiplesSum.toLocaleString() }}</p>
          <p class="text-h6 text-success">No array used</p>
          <p class="text-h6 text-orange">Time in MS: {{ timeTaken }}</p>
          <NumberConverter :sum-to-change="multiplesSum"/>
        </v-card-text></v-card
      >
    </div>
  </div>
</template>

<style scoped>
.grayscale {
  filter: grayscale(35%);
}
</style>
