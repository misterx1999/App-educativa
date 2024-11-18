<template>
  <v-container>
    <!-- Cuadro negro transparente para la actividad -->
    <div class="transparent-box">
      <h3>Actividad de Algoritmos</h3>
      <p>Describe brevemente lo que entendiste del video:</p>

      <!-- Cuadro de texto -->
      <v-textarea
        v-model="userAnswer"
        label="Escribe tu respuesta"
        rows="4"
        outlined
        dense
      ></v-textarea>

      <!-- Botón para verificar -->
      <v-btn color="primary" class="mt-4" @click="verifyAnswer">
        Verificar Respuesta
      </v-btn>
    </div>

    <!-- Resultado de la verificación -->
    <v-alert
      v-if="result"
      type="info"
      class="mt-4"
      v-show="showResult"
      @transitionend="hideResult"
    >
      {{ result }}
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const userAnswer = ref('');
const result = ref('');
const showResult = ref(true);

const emit = defineEmits(['completedActivity']);

const verifyAnswer = () => {
  if (userAnswer.value.trim() === '') {
    result.value = 'Por favor, ingresa una respuesta.';
  } else {
    result.value = 'Verificando...';
    setTimeout(() => {
      result.value = 'Tu respuesta ha sido verificada: ¡Parece correcta!';
      showResult.value = true;
      // Emitir evento al componente padre indicando que la actividad ha sido completada
      emit('completedActivity');
      // Desvanecer el resultado tras dos segundos
      setTimeout(() => {
        showResult.value = false;
      }, 2000);
    }, 1000);
  }
};

const hideResult = () => {
  // Este método se ejecuta cuando la transición del mensaje termina
  showResult.value = false;
};
</script>

<style scoped>
.transparent-box {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo negro transparente */
  padding: 20px;
  border-radius: 8px;
}
</style>
