<template>
  <v-container>
    <h1 class="text-center">Respuestas de Estudiantes</h1>
    <v-list class="responses-list">
      <v-list-item v-for="respuesta in respuestas" :key="respuesta.id">
        <v-list-item-content>
          <v-list-item-title>
            <strong>Estudiante:</strong> {{ respuesta.studentName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>Respuesta:</strong> {{ respuesta.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-select
            v-model="respuesta.valoracion"
            :items="['Muy buena', 'Buena', 'Regular', 'Mala']"
            label="Valorar"
            @change="valorarRespuesta(respuesta.id, respuesta.valoracion)"
          />
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { useRespuestasStore } from "@/stores/respuestas";

const respuestasStore = useRespuestasStore();
const respuestas = computed(() => respuestasStore.respuestas);

onMounted(async () => {
  await respuestasStore.fetchRespuestas();
});

const valorarRespuesta = async (id, valoracion) => {
  await respuestasStore.valorarRespuesta(id, valoracion);
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-bottom: 20px;
}

.responses-list {
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
