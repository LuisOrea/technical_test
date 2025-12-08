import { useState } from "react";
import users from "../data/user.json";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from '../components/Loader'

// Login Component (Responsive + Documented)
export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false); // Muestra error si es true

  const { setLogged, loader, setLoader } = useAuth();
  const navigate = useNavigate();

  const handleChangeUser = (e) => setUser(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const logued = () => {
    setLoader(true); // Activamos loader
    setToggle(false); // Ocultamos error previo

    setTimeout(() => {
      if (user === users.user && password === users.password) {
        setLogged(true);
        navigate("/home");
      } else {
        setToggle(true); // Mostramos error
      }
      setLoader(false); // Desactivamos loader
    }, 1500);
  };

  // Si loader está activo, solo mostramos el loader
  if (loader) return <Loader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('background.jpg')] bg-cover bg-center p-4">
      <div className="w-[300px] h-[300px] w-full max-w-[300px] sm:w-[300px] sm:h-[300px] bg-[#fff]/40 backdrop-blur-md shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-col justify-center p-[20px] gap-[10px]">
        <label htmlFor="user" className="text-center font-semibold text-lg">
          USUARIO
        </label>

        <input
          type="text"
          id="user"
          placeholder="Escribe tu usuario"
          className="h-[45px] rounded-[10px] p-3 focus:bg-[#E6E4E3] border-none outline-none text-base"
          value={user}
          onChange={handleChangeUser}
        />

        <label htmlFor="contraseña" className="text-center mt-2 font-semibold text-lg">
          CONTRASEÑA
        </label>

        <input
          type="password"
          id="contraseña"
          placeholder="Escribe tu contraseña"
          className="h-[45px] rounded-[10px] p-3 focus:bg-[#E6E4E3] border-none outline-none text-base"
          value={password}
          onChange={handleChangePassword}
        />

        {/* Mensaje de error */}
        <p className={`text-center text-[#FF0000] text-sm ${toggle ? "block" : "hidden"}`}>
          Usuario o contraseña incorrectos
        </p>

        {/* Botón */}
        <button
          onClick={logued}
          className="w-full h-[45px] rounded-[10px] mt-4 bg-[#283e06] text-[#fff] text-lg font-semibold hover:opacity-90 active:scale-95 transition"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}
