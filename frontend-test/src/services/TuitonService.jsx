import axios from "axios";

/**
 * TuitionService - Obtiene la información de un recluta específico mediante su matrícula.
 *
 * @param {string|number} tuition - La matrícula del recluta que se desea consultar.
 * @returns {Promise<Object>} - Retorna un objeto con los datos del recluta si la solicitud es exitosa.
 *
 * @throws {Error} - Lanza un error si la solicitud a la API falla.
 *
 * Ejemplo de uso:
 * ```js
 * const data = await TuitionService("12345");
 * console.log(data.name);
 * ```
 *
 * Nota: Se asume que la API está corriendo en `http://localhost:8080/api/recruits`.
 */
export default async function TuitionService(tuition) {
  try {
    const response = await axios.get(`http://localhost:8080/api/recruits/${tuition}`);
    console.log(response.data); // Mostrar datos en consola (opcional)
    return response.data;       // Retornar datos al llamador
  } catch (error) {
    console.error("Error al obtener datos:", error); // Log de error
    throw error; // Propagar el error al llamador
  }
}
