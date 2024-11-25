<template>
  <v-container>
    <div class="transparent-box">
      <h3>Actividad de Algoritmos</h3>
      <p>Describe brevemente lo que entendiste del video:</p>

      <v-textarea
        v-model="userAnswer"
        label="Escribe tu respuesta"
        rows="4"
        outlined
        dense
      ></v-textarea>

      <v-btn color="primary" class="mt-4" @click="sendAnswer">
        Enviar Respuesta
      </v-btn>
    </div>

    <v-alert
      v-if="result"
      type="success"
      class="mt-4"
      v-show="showResult"
      @transitionend="hideResult"
    >
      {{ result }}
    </v-alert>
  </v-container>
</template>

<script setup>
import { useRespuestasStore } from "@/stores/respuestas";
import { ref } from "vue";

const respuestasStore = useRespuestasStore();

const userAnswer = ref("");
const result = ref("");
const showResult = ref(false);

const sendAnswer = async () => {
  if (!userAnswer.value.trim()) {
    result.value = "Por favor, ingresa una respuesta.";
    showResult.value = true;
    return;
  }

  await respuestasStore.addRespuesta({
    id: Date.now(),
    studentName: "Anónimo", // Nombre genérico
    description: userAnswer.value,
    valoracion: null,
  });

  result.value = "Tu respuesta ha sido enviada correctamente.";
  showResult.value = true;

  setTimeout(() => {
    showResult.value = false;
  }, 2000);
};
</script>

<style scoped>
.transparent-box {
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  padding: 20px;
  border-radius: 8px;
}
</style>
