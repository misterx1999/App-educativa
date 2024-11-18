<template>
  <v-container class="algoritmos-background">
    <!-- Cuadro negro transparente para el título y la descripción -->
    <div class="transparent-box">
      <h2>Ordena el Algoritmo Correctamente</h2>
      <p>Arrastra y suelta los pasos del algoritmo en el orden correcto:</p>
    </div>

    <v-row class="my-8"></v-row>

    <!-- Menú para seleccionar el algoritmo -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="primary">Seleccionar Algoritmo</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in algorithmList"
          :key="index"
          @click="selectAlgorithm(index)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Mostrar los pasos del algoritmo de forma arrastrable -->
    <v-row class="my-4">
      <v-col v-for="(step, index) in shuffledSteps" :key="index">
        <AlgoritmoStep :stepText="step?.text" :index="index" @swapSteps="swapSteps" />
      </v-col>
    </v-row>

    <!-- Componente para verificar el orden -->
    <AlgoritmoChecker :steps="shuffledSteps" :correctOrder="correctOrder" />

    <!-- Espacio -->
    <v-row class="my-8"></v-row>

    <!-- Componente VideoControl -->
    <VideoControl />

    <!-- Espacio -->
    <v-row class="my-8"></v-row>

    <!-- Nueva Actividad de Algoritmos (Cuadro de texto y verificación por IA) -->
    <ActividadAlgoritmo @completedActivity="handleActivityCompletion" />

    <!-- Agregar panel de expansión con más información sobre algoritmos, que se muestra tras la verificación -->
    <v-expansion-panels v-if="showExpansionPanels">
      <v-expansion-panel title="¿Qué es un algoritmo?">
        <v-expansion-panel-text>
          Un algoritmo es un conjunto de instrucciones o pasos que se deben seguir para resolver un problema o completar una tarea.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="¿Cómo se construyen los algoritmos?">
        <v-expansion-panel-text>
          Para construir un algoritmo, primero debes identificar el problema y luego dividirlo en pasos secuenciales que se puedan seguir para resolverlo.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import AlgoritmoStep from '@/components/AlgoritmoStep.vue';
import AlgoritmoChecker from '@/components/AlgoritmoChecker.vue';
import VideoControl from '@/components/VideoControl.vue';
import ActividadAlgoritmo from '@/components/ActividadAlgoritmo.vue';
import { ref, onMounted } from 'vue';

const shuffledSteps = ref([]);
const correctOrder = ref([]);
const algorithmList = ref([
  { title: 'Algoritmo 1' },
  { title: 'Algoritmo 2' }
]);

const showExpansionPanels = ref(false);

onMounted(async () => {
  const response = await fetch('/algoritmos.json');
  const data = await response.json();

  if (data && data[0]?.steps) {
    const algorithm = data[0]; // Cargar el primer algoritmo del archivo JSON
    correctOrder.value = algorithm.steps;
    shuffledSteps.value = [...algorithm.steps].sort(() => Math.random() - 0.5);
  }
});

const swapSteps = ({ fromIndex, toIndex }) => {
  if (fromIndex !== toIndex) {
    const temp = shuffledSteps.value[fromIndex];
    shuffledSteps.value[fromIndex] = shuffledSteps.value[toIndex];
    shuffledSteps.value[toIndex] = temp;
  }
};

const selectAlgorithm = (index) => {
  const algorithmIndex = index;
  const response = fetch('/algoritmos.json')
    .then(res => res.json())
    .then(data => {
      const selectedAlgorithm = data[algorithmIndex];
      correctOrder.value = selectedAlgorithm.steps;
      shuffledSteps.value = [...selectedAlgorithm.steps].sort(() => Math.random() - 0.5);
    });
};

const handleActivityCompletion = () => {
  showExpansionPanels.value = true; // Mostrar los paneles de expansión
};

// Definir el uso de "video-layout.vue" como layout
definePageMeta({
  layout: 'video-layout'
});
</script>

<style scoped>
.algoritmos-background {
  background-image: url('/Designer%20(7).jpeg'); /* Nueva ruta de la imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 40px;
  color: white;
}

.transparent-box {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo negro transparente */
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.v-expansion-panels {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
  color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
