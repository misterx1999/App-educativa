export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.description || !body.studentName) {
    throw createError({
      statusCode: 400,
      statusMessage: "Datos incompletos.",
    });
  }

  return {
    message: "Respuesta registrada con éxito.",
    updated: body,
  };
});
