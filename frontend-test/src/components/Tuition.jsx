import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TuitionService from "../services/TuitonService";

/**
 * Tuition
 * Componente que permite buscar información de un recluta por matrícula.
 * Abre un modal con un input para escribir la matrícula y un botón para buscar.
 *
 * Al encontrar los datos, los guarda en el contexto y navega a la página de información personal.
 * También maneja errores en caso de no poder obtener los datos.
 */
export default function Tuition() {
  const [matricula, setMatricula] = useState(""); // Matrícula ingresada por el usuario
  const { setTuition, setError, setOpen, setLoader } = useAuth(); // Acceso a funciones del contexto
  const navigate = useNavigate(); // Navegación entre rutas

  /**
   * handleSearch
   * Función que se ejecuta al presionar el botón "BUSCAR".
   * Llama al servicio TuitionService para obtener los datos del recluta.
   * Guarda los datos en el contexto y navega a "/personal-info".
   * En caso de error, actualiza el estado de error del contexto.
   */
  const handleSearch = async () => {
    try {
      const data = await TuitionService(matricula);
      setTuition(data);
      setOpen(false); // Cierra el modal
      navigate("/personal-info");
    } catch (err) {
      setError("Error al obtener datos");
    }
  };

  return (
    <div
      className="fixed top-[0] left-[0] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[50]"
      onClick={() => setOpen(false)} // Cierra el modal al hacer click fuera
    >
      <div
        className="bg-[#fff] w-[400px] p-[20px] rounded-[10px] flex flex-col gap-[10px] z-[60]"
        onClick={(e) => e.stopPropagation()} // Evita que el click dentro cierre el modal
      >
        <input
          type="text"
          placeholder="Escribe la matrícula"
          className="border-none rounded-[5px] p-[10px] text-[16px] w-[100%]"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-[#283e06] text-[#fff] rounded-[5px] p-[10px] hover:cursor-pointer"
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
}
