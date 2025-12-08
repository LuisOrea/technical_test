/**
 * Filter
 * Componente que permite filtrar la lista de reclutas por nombre, género o matrícula.
 *
 * Utiliza el contexto AuthProvider para obtener y actualizar:
 * - data: arreglo original de reclutas.
 * - dataFilter: arreglo filtrado que se mostrará en Home.
 * - textFilter: texto de búsqueda para filtrar por nombre.
 * - open: estado para abrir/cerrar el modal de búsqueda por matrícula.
 *
 * Funcionalidades:
 * - Filtrado por nombre: texto ingresado en el input de búsqueda.
 * - Filtrado por género: selección de checkboxes "H" (Male) y "M" (Female).
 * - Apertura de modal de búsqueda por matrícula al hacer click en el botón.
 *
 * Estados internos:
 * - selectedGender: arreglo de géneros seleccionados para filtrar.
 *
 * Efectos:
 * - Cada vez que cambia textFilter, selectedGender o data, se actualiza dataFilter.
 */
import { useAuth } from "../context/AuthProvider";
import { useState, useEffect } from "react";
import Tuition from "./Tuition";

export default function Filter() {
  const { setDataFilter, data, textFilter, setTextFilter, open, setOpen } =
    useAuth();

  const [selectedGender, setSelectedGender] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedGender([...selectedGender, value]);
    } else {
      setSelectedGender(selectedGender.filter((g) => g !== value));
    }
  };

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  const openModalTuition = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (data) {
      const filtered = data.filter(
        (r) =>
          r.name.toLowerCase().includes(textFilter.toLowerCase()) &&
          (selectedGender.length === 0 || selectedGender.includes(r.gender))
      );
      setDataFilter(filtered);
    }
  }, [textFilter, selectedGender, data, setDataFilter]);

  return (
    <>
      <div
        className="w-full min-h-[40px] flex justify-center items-center gap-[20px] 
        flex-wrap sm:flex-nowrap text-sm sm:text-base"
      >
        <label htmlFor="search">Filtrar Busqueda:</label>

        <input
          type="text"
          id="search"
          className="w-[300px] p-[5px] rounded-[20px] border-none max-w-full"
          placeholder="Escribe el nombre del recluta"
          value={textFilter}
          onChange={handleChange}
        />

        <label htmlFor="H">H</label>
        <input
          type="checkbox"
          id="H"
          value="Male"
          onChange={handleCheckboxChange}
        />

        <label htmlFor="M">M</label>
        <input
          type="checkbox"
          id="M"
          value="Female"
          onChange={handleCheckboxChange}
        />

        <button
          className="w-[200px] h-[40px] rounded-[5px] mt-[10px] bg-[#283e06] text-[#fff] hover:cursor-pointer
          sm:mt-0"
          onClick={openModalTuition}
        >
          Busqueda por Matricula
        </button>

        {open && <Tuition />}
      </div>
    </>
  );
}
