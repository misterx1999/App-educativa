<template>
  <v-container class="index-background">
    <h1 class="text-center white--text">Bienvenidos</h1>
    <p class="text-center white--text">
      Selecciona una de las secciones del menú para comenzar.
    </p>

    <!-- Panel de expansión con una introducción sobre algoritmos -->
    <v-expansion-panels>
      <v-expansion-panel title="Introducción a los Algoritmos">
        <v-expansion-panel-text>
          <p>
            Un algoritmo es una secuencia de pasos o instrucciones claras y
            bien definidas que permiten resolver un problema o realizar una tarea.
            Los algoritmos son fundamentales en el campo de la informática y la
            programación, ya que describen el proceso que sigue un programa para
            resolver un problema.
          </p>
          <p>
            En un contexto educativo, los algoritmos ayudan a desarrollar
            habilidades de pensamiento lógico y a entender cómo funcionan los
            sistemas informáticos. Un buen algoritmo debe ser eficiente,
            preciso, y debe poder ser implementado paso a paso por una máquina
            o una persona. Los estudiantes que aprenden a construir algoritmos
            adquieren una base sólida en resolución de problemas y en la lógica
            necesaria para la programación.
          </p>
          <p>
            Al aprender sobre algoritmos, te encontrarás con diferentes tipos,
            como los algoritmos de búsqueda, clasificación, entre otros. Cada
            uno tiene su propio enfoque y aplicabilidad, dependiendo del
            problema a resolver. Es importante tener una comprensión clara de
            las características de un buen algoritmo, como la eficiencia en
            tiempo y espacio.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.index-background {
  background-image: url('/Designer%20(4).jpeg'); /* Ruta ajustada para la imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 40px;
  color: white;
}

.v-expansion-panels {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente para mejor legibilidad */
  color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
