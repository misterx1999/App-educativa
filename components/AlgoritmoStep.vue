<template>
  <v-card
    class="pa-4"
    color="light-blue lighten-3"
    outlined
    draggable="true"
    @dragstart="dragStart"
    @dragover.prevent
    @drop="drop"
  >
    <p>{{ stepText }}</p>
  </v-card>
</template>

<script setup>
const props = defineProps({
  stepText: String,
  index: Number
})

const emit = defineEmits(['swapSteps'])

const dragStart = (event) => {
  event.dataTransfer.setData('index', props.index.toString())
}

const drop = (event) => {
  const fromIndex = event.dataTransfer.getData('index')
  const toIndex = props.index
  emit('swapSteps', { fromIndex: Number(fromIndex), toIndex })
}
</script>

<style scoped>
.v-card {
  cursor: grab;
}
</style>
