import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const darkLight = ref('dark')

  const setDarkLight = (newTheme: string) => {
    darkLight.value = newTheme
  }

  return { darkLight, setDarkLight }
})
