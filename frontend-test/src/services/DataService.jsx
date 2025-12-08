import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import Loader from "../components/Loader";

/**
 * DataApi - Componente encargado de obtener los datos de reclutas desde la API
 * y mostrar un loader mientras carga o un mensaje si ocurre un error.
 */
export default function DataApi() {
  const { setData, error, setError, loader, setLoader } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const response = await axios.get("http://localhost:8080/api/recruits");

        if (response.status === 200) {
          setData(response.data); // Guardar datos en el estado global
          setError(""); // Limpiar errores previos
        } else {
          setError("Error al mostrar los datos");
        }
      } catch (err) {
        console.error("Error al obtener datos:", err);
        setError("Error al obtener datos"); // Manejo de error de red o excepción
      } finally {
        setLoader(false); // Finaliza la carga
      }
    };

    fetchData();
  }, [setData, setError]);

  // Renderizar loader mientras carga
  if (loader) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)] z-[50]">
        <Loader />
      </div>
    );
  }

  // Mostrar mensaje de error si ocurre
  if (error) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)] z-[50]">
        <div className="bg-white p-6 rounded-lg shadow-md text-red-600 font-bold">
          {error}
        </div>
      </div>
    );
  }

  return null; // No renderiza nada si los datos se cargan correctamente
}
