App Educativa: Algoritmos Interactivos

Integrantes:
- Jesús Barrios
- Jorge Mogollón
- Joel Serrano

Descripción
Algoritmos Interactivos es una aplicación educativa diseñada para enseñar lógica y algoritmos de forma dinámica e interactiva. A través de actividades como ordenar pasos, responder preguntas de programación y visualizar videos educativos, esta app busca fortalecer las habilidades de razonamiento lógico en los estudiantes. Además, ofrece retroalimentación inmediata y permite realizar un seguimiento del progreso, convirtiéndose en una herramienta ideal tanto para estudiantes como para docentes.

Tecnologías Utilizadas
El proyecto fue desarrollado utilizando:

Nuxt.js: Framework basado en Vue.js para construir aplicaciones web modernas y escalables.
Vuetify: Biblioteca de componentes con Material Design para crear interfaces atractivas y funcionales.
Pinia: Sistema de gestión de estado global, empleado para almacenar y manipular datos de las actividades y respuestas.
TypeScript: Lenguaje de programación con tipado estático que mejora la experiencia de desarrollo.

Instalación
Para instalar la aplicación en tu entorno local, sigue estos pasos:

# Clonar el repositorio  
git clone https://github.com/misterx1999/jm.git  

# Navegar a la carpeta del proyecto  
cd jm  

# Instalar las dependencias  
npm install  
Configuración
Si necesitas variables de entorno personalizadas, agrégalas en un archivo .env en la raíz del proyecto para conectar con APIs u otros servicios.

Uso
Para ejecutar el servidor de desarrollo y probar la aplicación en tu navegador:


# Iniciar el servidor de desarrollo  
npm run dev  

# Acceder a la aplicación en: http://localhost:3000  
Estructura del Proyecto
La estructura principal del proyecto incluye:

pages/: Contiene las vistas principales de la app.
index.vue: Página inicial con una introducción sobre algoritmos.
algoritmos.vue: Página con actividades interactivas de lógica y programación.
components/: Componentes reutilizables para la aplicación.
ActividadAlgoritmo.vue: Para actividades como ordenar pasos de algoritmos.
VideoControl.vue: Controlador de videos educativos.
store/: Gestión de datos global con Pinia.
respuestas.ts: Almacena las respuestas y el progreso de los usuarios.
plugins/: Configuración de plugins como Vuetify.
server/api/: Endpoints para la comunicación con el backend y la evaluación de actividades.
Funcionalidades Principales

Ordenar Algoritmos: Actividad interactiva de arrastrar y soltar para organizar pasos en el orden correcto.
Evaluación en Tiempo Real: Feedback inmediato sobre las respuestas dadas por los usuarios.
Reproducción de Videos: Visualización de contenido educativo con controles personalizados.
Gestión del Progreso: Registro de actividades completadas y resultados a través del estado global.
Ejemplo de API
El archivo server/api/respuestas/index.get.ts define un endpoint que devuelve las respuestas registradas por los usuarios:


[  
  {  
    "id": 1,  
    "usuario": "Jorge",  
    "respuesta": "Pasos correctamente ordenados",  
    "valoracion": "Correcta"  
  },  
  {  
    "id": 2,  
    "usuario": "Joel",  
    "respuesta": "Orden incompleto",  
    "valoracion": "Incorrecta"  
  }  
]  

Página de Actividades
En pages/algoritmos.vue, los usuarios interactúan con las actividades principales de la app:

Muestra ejercicios generados por el componente ActividadAlgoritmo.vue.
Utiliza el store de respuestas (respuestas.ts) para guardar y consultar el progreso.
Componentes Clave

ActividadAlgoritmo.vue:
Este componente presenta preguntas y tareas de lógica que el usuario debe resolver.
Ejemplo de Código
Cómo registrar una respuesta en el store:

typescript

const nuevaRespuesta = {  
  id: 3,  
  usuario: "Jesús",  
  respuesta: "Pasos ordenados correctamente",  
  valoracion: "Correcta"  
};  
useRespuestaStore().agregarRespuesta(nuevaRespuesta);  


Conclusión
Algoritmos Interactivos es una herramienta innovadora que combina aprendizaje interactivo, retroalimentación inmediata y diseño intuitivo para ayudar a los estudiantes a dominar conceptos de lógica y algoritmos. Es ideal para fomentar el pensamiento crítico y el razonamiento lógico en un entorno educativo moderno.
