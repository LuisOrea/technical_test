import { useEffect } from "react";
import Nav from "../components/Nav";
import DataApi from "../services/DataService";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import Filter from "../components/Filter";

/**
 * Componente Home
 * 
 * Muestra la lista de reclutas disponibles en tarjetas.
 * Permite filtrar los reclutas mediante el componente Filter.
 * Cada tarjeta permite navegar a la vista de información personal del recluta seleccionado.
 * 
 * Se conecta al contexto AuthProvider para manejar:
 * - dataFilter: lista de reclutas filtrados
 * - setTuition: función para guardar el recluta seleccionado
 * - error: mensaje de error si ocurre algún problema con la API
 * 
 * Utiliza el componente DataApi para cargar los datos desde la API al iniciar.
 */
export default function Home() {
  const { error, dataFilter, setTuition } = useAuth(); // Contexto de autenticación y datos
  const navigate = useNavigate();

  /**
   * handleNavigate
   * Función temporal para manejar el botón de regresar cuando hay un error
   */
  const handleNavigate = (id) => {
    const selected = dataFilter.find((r) => r.id === id);
    setTuition(selected);
    navigate("/");
  };

  /**
   * navigatePersonalInfo
   * Guarda la información del recluta seleccionado y navega a la página PersonalInfo
   * @param {Object} tuitionData - Datos del recluta seleccionado
   */
  const navigatePersonalInfo = (tuitionData) => {
    setTuition(tuitionData);   
    navigate("/personal-info"); 
  };

  return (
    <>
      <div className="bg-[#96ac90] min-h-screen">
        <Nav />

        {/* Espacio para evitar choque con el grid */}
        <div className="sm:mt-[30px]">
          <Filter />
        </div>

        {/* Manejo de errores */}
        {error ? (
          <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-[300px] h-[300px] bg-[#fff]/40 backdrop-blur-md shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-col justify-center p-[20px] gap-[10px]">
              <p className="text-[#FF0000] text-center font-[1000]">{error}</p>
              <button
                onClick={handleNavigate}
                className="w-[200px] h-[40px] mx-auto rounded-[5px] mt-[10px] bg-[#283e06] text-[#fff] hover:cursor-pointer"
              >
                REGRESAR
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center overflow-x-hidden">
            <div
              className="
                grid 
                grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 
                gap-[20px]
                min-h-[50rem] p-4
                w-full
                max-w-[80rem]
                px-[10px]
                place-items-center
                mt-[80px] sm:mt-[100px]
              "
            >
              {/* Renderizado de tarjetas */}
              {dataFilter?.map((r) => (
                <Card
                  key={r.id}
                  name={r.name}
                  id={r.id}
                  stateRecruit={r.stateRecruit}
                  onClick={() => navigatePersonalInfo(r)} // pasamos la info de esa tarjeta
                />
              ))}
            </div>
          </div>
        )}

        {/* Componente que carga los datos desde la API */}
        <DataApi />
      </div>
    </>
  );
}
