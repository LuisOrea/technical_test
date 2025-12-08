import { useNavigate } from "react-router-dom";

/**
 * Componente Advertencia
 * 
 * Muestra un mensaje indicando que el usuario debe estar logueado
 * para acceder a ciertas páginas protegidas.
 * 
 * Incluye un botón para regresar a la página de login.
 */
export default function Advertencia() {
  const navigate = useNavigate();

  /**
   * handleNavigate
   * Navega de regreso a la página principal (login)
   */
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className="
          min-h-screen 
          flex items-center justify-center 
          bg-[url('background.jpg')] bg-cover bg-center 
          overflow-x-hidden
          px-4
        "
      >
        <div
          className="
            w-full max-w-[320px] 
            bg-[#fff]/40 backdrop-blur-md 
            shadow-[0_35px_35px_rgba(0,0,0,0.25)]
            rounded-[10px] 
            flex flex-col justify-center items-center 
            p-[20px] gap-[15px]
          "
        >
          <p className="text-[#FF0000] text-center font-[1000]">
            Necesitas loguearte antes de poder ver los datos
          </p>

          <button
            onClick={handleNavigate}
            className="
              w-[200px] h-[40px] 
              rounded-[5px] mt-[10px] 
              bg-[#283e06] text-[#fff] 
              hover:cursor-pointer
            "
          >
            REGRESAR
          </button>
        </div>
      </div>
    </>
  );
}
