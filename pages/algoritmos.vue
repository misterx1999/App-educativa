<template>
  <v-container>
    <h2>Ordena el Algoritmo Correctamente</h2>
    <p>Arrastra y suelta los pasos del algoritmo en el orden correcto:</p>

    <v-row>
      <v-col v-for="(step, index) in shuffledSteps" :key="index">
        <AlgoritmoStep :stepText="step.text" :index="index" @swapSteps="swapSteps" />
      </v-col>
    </v-row>

    <AlgoritmoChecker :steps="shuffledSteps" :correctOrder="correctOrder" />
    <VideoControl />
    <ActividadAlgoritmo />
  </v-container>
</template>

<script setup>
import AlgoritmoStep from "@/components/AlgoritmoStep.vue";
import AlgoritmoChecker from "@/components/AlgoritmoChecker.vue";
import VideoControl from "@/components/VideoControl.vue";
import ActividadAlgoritmo from "@/components/ActividadAlgoritmo.vue";
import { ref, onMounted } from "vue";

const shuffledSteps = ref([]);
const correctOrder = ref([]);

onMounted(async () => {
  const response = await fetch("/algoritmos.json");
  const data = await response.json();

  if (data[0]?.steps) {
    correctOrder.value = data[0].steps;
    shuffledSteps.value = [...data[0].steps].sort(() => Math.random() - 0.5);
  }
});

const swapSteps = ({ fromIndex, toIndex }) => {
  const temp = shuffledSteps.value[fromIndex];
  shuffledSteps.value[fromIndex] = shuffledSteps.value[toIndex];
  shuffledSteps.value[toIndex] = temp;
};
</script>
