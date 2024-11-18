<template>
  <v-app>
    <!-- Barra lateral -->
    <v-navigation-drawer app v-model="drawer" :permanent="true">
      <v-list dense>
        <v-list-item link href="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/educacion">
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Educación</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/algoritmos">
          <v-list-item-icon>
            <v-icon>mdi-function</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Algoritmos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra superior y contenido existente -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>App Educativa</v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)

const goTo = (route) => {
  router.push(route)
}
</script>
