<template>
  <v-btn color="primary" @click="checkOrder">Verificar Orden</v-btn>
  <v-alert v-if="isCorrect !== null" :type="isCorrect ? 'success' : 'error'" dismissible>
    {{ resultMessage }}
  </v-alert>
</template>

<script setup lang="ts">
const props = defineProps<{
  steps: { text: string }[] | undefined
  correctOrder: { text: string }[] | undefined
}>()

const isCorrect = ref<boolean | null>(null)
const resultMessage = ref('')

const checkOrder = () => {
  if (!props.steps || !props.correctOrder) {
    resultMessage.value = 'Faltan datos para verificar el algoritmo.'
    return
  }

  const correct = props.steps.every(
    (step, index) => step.text === props.correctOrder![index].text
  )
  isCorrect.value = correct
  resultMessage.value = correct 
    ? '¡Correcto! Has ordenado el algoritmo correctamente.' 
    : 'Inténtalo de nuevo. El orden es incorrecto.'

  // Desvanecer el mensaje después de 2 segundos
  setTimeout(() => {
    isCorrect.value = null;
  }, 2000);
}
</script>

<style scoped></style>
