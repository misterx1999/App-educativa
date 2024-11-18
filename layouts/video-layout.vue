<template>
  <v-app>
    <v-container class="fill-height" style="background-color: #f0f0f0;">
      <v-row justify="center" align="center">
        <v-col>
          <h1 class="minecraft-font">Algoritmos</h1>
          <v-btn @click="goToHome" color="#4caf50" class="white--text">
            <v-icon left>mdi-home</v-icon>
            Volver al Inicio
          </v-btn>
          <NuxtPage />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
.minecraft-font {
  font-family: 'Press Start 2P', sans-serif;
  color: black;
  text-align: center;
  margin-top: 20px;
}
</style>
