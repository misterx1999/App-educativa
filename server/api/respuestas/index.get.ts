export default defineEventHandler(async () => {
  return [
    {
      id: 1,
      studentName: "Juan",
      description: "Creo que los algoritmos son pasos organizados.",
      valoracion: "Buena",
    },
    {
      id: 2,
      studentName: "María",
      description: "Me pareció que los algoritmos ayudan a resolver problemas.",
      valoracion: null,
    },
  ];
});
