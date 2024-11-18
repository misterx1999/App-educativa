<template>
  <CardContent
    appBarTitle="Mi Material Personalizado"
    :contentList="customContent"
    @card-click="handleCardClick"
  />
</template>

<script setup>
import CardContent from '@/components/CardContent.vue'

const customContent = [
  { title: 'Algoritmos', subtitle: 'Conceptos Básicos' },
  { title: 'Funciones', subtitle: 'Uso de Funciones en Programación' },
  { title: 'Variables', subtitle: 'Definición y Uso de Variables' },
  { title: 'Ciclos', subtitle: 'Introducción a los Bucles' }
]

const handleCardClick = (index) => {
  console.log(`Tarjeta clickeada: ${index}`)
}
</script>
