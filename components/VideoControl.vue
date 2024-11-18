<template>
  <v-card class="pa-4 video-card" outlined>
    <v-row>
      <v-col>
        <!-- iframe para el video de YouTube insertado -->
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3wrIi9Rxv7E?si=qDPOb5nL3kPku9Q6&amp;start=12"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
    <!-- Controles adicionales pueden añadirse si se desea -->
  </v-card>
</template>

<script setup>
</script>

<style scoped>
.video-card {
  background-color: #4caf50; /* Verde más oscuro (verde esmeralda) */
  text-align: center;
  border-radius: 8px; /* Bordes redondeados para un mejor diseño */
}
</style>
