<template>
  <v-container class="index-background">
    <h1 class="text-center white--text">Bienvenidos</h1>
    <p class="text-center white--text">
      Selecciona una de las secciones del menú para comenzar.
    </p>

    <v-expansion-panels>
      <v-expansion-panel title="Introducción a los Algoritmos">
        <v-expansion-panel-text>
          <p>
            Un algoritmo es una secuencia de pasos o instrucciones claras y bien definidas que permiten resolver un problema o realizar una tarea.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const showLoginDialog = ref(false); // Ya no es necesario, pero lo dejamos por compatibilidad.
</script>

<style scoped>
.index-background {
  background-image: url("/Designer%20(4).jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 40px;
  color: white;
}

.v-expansion-panels {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
