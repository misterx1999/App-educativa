import { defineStore } from "pinia";
import { ref } from "vue";

interface Respuesta {
  id: number;
  studentName: string;
  description: string;
  valoracion: string | null;
}

export const useRespuestasStore = defineStore("respuestas", () => {
  const respuestas = ref<Respuesta[]>([]);

  const fetchRespuestas = async () => {
    try {
      const data: Respuesta[] = await $fetch("/api/respuestas");
      respuestas.value = data;
    } catch (error) {
      console.error("Error fetching respuestas:", error);
    }
  };

  const addRespuesta = async (newRespuesta: Respuesta) => {
    try {
      const response = await $fetch<{ message: string; updated: Respuesta }>("/api/respuestas", {
        method: "POST",
        body: newRespuesta,
      });
      if (response.updated) {
        respuestas.value.push(response.updated);
      }
    } catch (error) {
      console.error("Error al agregar la respuesta:", error);
    }
  };
  

  const valorarRespuesta = async (id: number, valoracion: string) => {
    const respuesta = respuestas.value.find((r) => r.id === id);
    if (respuesta) {
      respuesta.valoracion = valoracion;
    }
  };

  return { respuestas, fetchRespuestas, addRespuesta, valorarRespuesta };
});
