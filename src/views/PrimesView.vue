<script setup lang="ts">
import { ref, computed } from 'vue'
import { brutePrimes, semiBrutePrimes, sievePrimes } from '@/utils/primes'
import { primesInfo } from '../utils/algoInfo'

const algos = [
  'Brute Force (warning: may look like your PC has crashed)',
  'Semi Brute Force',
  'Sieve of Eratosthenes'
]

const minNumber = ref(2)
const maxNumber = ref(1000)
const chosenAlgo = ref(algos[2])
const isLoading = ref(false)
const isError = ref(false)
const primesObject = ref()
const timeTaken = ref()

const algoInfo = computed(() => {
  if (chosenAlgo.value === 'Brute Force (warning: may look like your PC has crashed)') {
    return primesInfo[0]
  } else if (chosenAlgo.value === 'Semi Brute Force') {
    return primesInfo[1]
  } else {
    return primesInfo[2]
  }
})

const rules = [
  (value: number) => {
    if (value > 0) return true

    return 'Please enter a number above 0'
  }
]

const handleSubmit = () => {
  isError.value = false
  const startTime = new Date().getMilliseconds()
  if (minNumber.value >= maxNumber.value) {
    isError.value = true
    return
  }
  isLoading.value = true
  switch (chosenAlgo.value) {
    case algos[0]:
      primesObject.value = brutePrimes(minNumber.value, maxNumber.value)
      timeTaken.value = new Date().getMilliseconds() - startTime
      break
    case algos[1]:
      primesObject.value = semiBrutePrimes(minNumber.value, maxNumber.value)
      timeTaken.value = new Date().getMilliseconds() - startTime
      break
    case algos[2]:
      primesObject.value = sievePrimes(minNumber.value, maxNumber.value)
      timeTaken.value = new Date().getMilliseconds() - startTime
      break
    default:
      console.log('error with selected algo')
  }
  isLoading.value = false
}
</script>
<template>
  <div class="d-flex flex-column justify-center align-center mt-4 h-auto grayscale" style="height: min-content;">
    <div class="d-flex flex-column justify-center align-center">
      <h1 class="text-h2">Sum of all the Prime Numbers</h1>
      <h2 class="text-h3">
        Starting with <span class="text-purple">{{ minNumber }}</span>
      </h2>
      <h2 class="text-h3">
        Below <span class="text-teal">{{ maxNumber }}</span>
      </h2>
    </div>
    <div class="d-lg-flex justify-center align-center mt-4">
      <v-sheet width="500" class="mx-4" style="max-width: 50%">
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="minNumber"
            :rules="rules"
            label="Starting number"
            required
          ></v-text-field>
          <v-text-field
            v-model="maxNumber"
            :rules="rules"
            label="End Goal"
            required
            class="mt-4"
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
      <v-timeline side="end" class="w-auto px-4" style="max-width: 50%;">
        <v-timeline-item v-for="info in algoInfo" :key="info.id" :dot-color="info.colour" size="small">
          <v-alert :value="true" :color="info.colour" :icon="info.icon">
            {{ info.text }}
          </v-alert>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div style="height: min-content;" class="pt-6">
      <v-card v-if="primesObject"
        ><v-card-text class="d-flex flex-column align-center">
          <h2 class="text-h4">Sum of Primes</h2>
          <p class="text-h4 text-primary">{{ primesObject.sum.toLocaleString() }}</p>
          <p class="text-h6 text-success">Total Primes: {{ primesObject.primes.length.toLocaleString() }}</p>
          <p class="text-h6 text-orange">Time in MS: {{ timeTaken }}</p>
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
