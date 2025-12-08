import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * Nav
 * Componente de navegación lateral.
 * Contiene un menú desplegable que se puede abrir y cerrar.
 * Incluye enlaces para navegar a las páginas "Home" y "Registro".
 *
 * Estados:
 * - open: controla si el menú está abierto o cerrado.
 *
 * Funciones:
 * - navigateHome: navega a la ruta "/home".
 * - navigateRegister: navega a la ruta "/register".
 */
export default function Nav() {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar el menú
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Función para navegar a Home
  const navigateHome = () => {
    navigate("/home");
  };

  // Función para navegar a Registro
  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      {/* Sidebar lateral */}
      <div
        className={`
          fixed top-[0px] left-[0px] h-[100vh] w-[256px] bg-[#ffffff] shadow-[0_0_10px_rgba(0,0,0,0.3)] z-[50]
          transform transition-transform duration-[300ms]
          ${open ? "translate-x-[0px]" : "translate-x-[-256px]"}
        `}
      >
        {/* Botón para abrir/cerrar el menú */}
        <button
          onClick={() => setOpen(!open)}
          className="
            absolute top-[50%] -translate-y-[50%]
            right-[-40px]
            bg-[#111111] text-[#ffffff] p-[12px] rounded-[50%] shadow-[0_4px_8px_rgba(0,0,0,0.3)]
            flex items-center justify-center
          "
        >
          {open ? <FaChevronLeft size={18} /> : <FaChevronRight size={18} />}
        </button>

        {/* Contenido del menú */}
        <nav className="flex flex-col justify-center items-center mt-10 gap-[10px] px-5 bg-[#203500]  min-h-screen">
          <p
            onClick={navigateHome}
            className="text-lg hover:text-[#96ac90] no-underline text-[#ffffff]"
          >
            Home
          </p>
          <p
            onClick={navigateRegister}
            className="text-lg hover:text-[#96ac90] no-underline text-[#ffffff]"
          >
            Registro
          </p>
        </nav>
      </div>
    </div>
  );
}
