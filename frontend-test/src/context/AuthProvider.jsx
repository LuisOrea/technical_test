import { createContext, useContext, useState } from "react";

/**
 * AuthContext
 * Contexto para manejar el estado de autenticación y datos compartidos de la aplicación.
 */
export const AuthContext = createContext();

/**
 * AuthProvider
 * Componente proveedor de contexto que envuelve la aplicación y proporciona
 * estados globales relacionados con autenticación, datos de reclutas y filtros.
 *
 * @param {Object} children - Componentes hijos que tendrán acceso al contexto
 */
export default function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false); // Estado de autenticación
  const [data, setData] = useState([]); // Datos completos de los reclutas
  const [dataFilter, setDataFilter] = useState([]); // Datos filtrados según búsqueda
  const [error, setError] = useState(""); // Mensajes de error
  const [textFilter, setTextFilter] = useState(""); // Texto usado para filtrar
  const [tuition, setTuition] = useState([]); // Datos del recluta seleccionado
  const [open, setOpen] = useState(false); // Estado de apertura de modales o menús
  const [loader, setLoader] = useState(false) // Estado de loader

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged,
        data,
        setData,
        error,
        setError,
        dataFilter,
        setDataFilter,
        textFilter,
        setTextFilter,
        tuition,
        setTuition,
        open,
        setOpen,
        loader, 
        setLoader
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth
 * Hook personalizado para acceder de manera sencilla a AuthContext.
 *
 * @returns {Object} Valores y setters del contexto de autenticación
 */
export function useAuth() {
  return useContext(AuthContext);
}
