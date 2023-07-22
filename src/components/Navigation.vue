<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import tp from '../assets/tp.jpg'

const theme = useTheme()

const drawer = ref(true)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <header>
    <v-toolbar dark prominent :image="tp" theme="light">
      <v-toolbar-title text="Sums" style="font-weight: bold"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-sm-flex" style="font-weight: bold">
        <!-- Most CSS libraries have a 'theme' hook. You can grab it in any component and once you've created an instance
            of it you're able to alter it's default theme (which will then effect the whole app)-->
        <v-btn @click="toggleTheme"
          ><v-icon size="x-large">{{
            theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent'
          }}</v-icon></v-btn
        >
        <v-btn to="/">Home</v-btn>
        <v-btn to="/multiples">Multiples</v-btn>
        <v-btn to="/primes">Primes</v-btn>
      </v-toolbar-items>

      <!-- This will only be displayed on small screen sizes < 600px. It's onClick event toggles the 'drawer' variable
            which is used by the v-model of the component below. This then triggers the mobile drawer -->
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
        class="d-sm-none"
      ></v-app-bar-nav-icon>

      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <v-list>
          <v-list-item>
            <v-btn to="/">Home</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/multiples">Multiples</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/primes">Primes</v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </header>
</template>
