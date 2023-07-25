<script setup lang="ts">
import { ExportToCsv } from 'export-to-csv'
import { ref, computed } from 'vue'

type NumberType = 'binary' | 'hexadecimal'

const numberBase = ['binary', 'hexadecimal']
const chosenBase = ref(numberBase[0])

const props = defineProps({
  sumToChange: Number
})

const convertedNumber = computed(() => {
  return {
    binary: props.sumToChange!.toString(2),
    hexadecimal: props.sumToChange!.toString(16)
  }
})

const handleCreateCSV = () => {
  let data = [
    {
      decimal: props.sumToChange,
      binary: convertedNumber.value.binary,
      hexadecimal: convertedNumber.value.hexadecimal
    }
  ]

  const options = {
    filename: `sums_info`,
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: `${props.sumToChange} in decimal hex and binary`,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  }

  const csvExporter = new ExportToCsv(options)

  csvExporter.generateCsv(data)
}
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-select
      v-model="chosenBase"
      :items="numberBase"
      label="Show number in"
      required
      style="min-width: 200px"
    ></v-select>
    <p class="pl-4">
      <span class="text-blue text-body-1 font-weight-bold">{{
        convertedNumber[chosenBase as NumberType]
      }}</span>
    </p>
  </div>
  <v-btn @click="handleCreateCSV()" color="teal">Export to CSV</v-btn>
</template>
<style scoped></style>
