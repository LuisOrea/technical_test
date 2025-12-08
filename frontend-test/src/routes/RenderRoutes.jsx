import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useAuth } from "../context/AuthProvider";
import Advertencia from "../pages/Advertencia";
import PersonalInfo from "../pages/PersonalInfo";
import Register from "../pages/Register";

/**
 * RenderRoutes - Componente principal que configura las rutas de la aplicación.
 * 
 * Contiene rutas públicas y rutas protegidas mediante ProtectedRoute.
 * Las rutas protegidas requieren que el usuario esté autenticado (`logged` en context).
 * 
 * Rutas:
 * "/"              -> Página de Login
 * "/warning"       -> Página de advertencia si el usuario no está logueado
 * "/home"          -> Página principal (protegida)
 * "/register"      -> Formulario de registro (protegida)
 * "/personal-info" -> Detalle de información personal (protegida)
 */
export default function RenderRoutes() {

    /**
     * ProtectedRoute - Componente que protege rutas según el estado de autenticación.
     *
     * @param {Object} props
     * @param {React.ReactNode} props.children - Elemento(s) hijo que se renderizarán si el usuario está logueado
     * @returns {React.ReactNode} - Renderiza los hijos si el usuario está logueado; 
     *                              de lo contrario, redirige a "/warning"
     */
    function ProtectedRoute({ children }) {
        const { logged } = useAuth();
        if (!logged) {
            return <Navigate to="/warning" replace />;
        }
        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/warning" element={<Advertencia />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
                <Route path="/personal-info" element={<ProtectedRoute><PersonalInfo /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}
