import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Nav from "../components/Nav";
import InfoSection from "../components/InfoSections";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

/**
 * Componente PersonalInfo
 * 
 * Muestra la información completa de un recluta con loader al cargar.
 */
export default function PersonalInfo() {
  const { tuition, loader, setLoader } = useAuth(); // Datos del recluta
  const navigate = useNavigate();


  // Mostrar loader al montar el componente
  useEffect(() => {
    setLoader(true); // activamos loader al entrar
    const timer = setTimeout(() => setLoader(false), 1000); // lo apagamos después de 1s
    return () => clearTimeout(timer);
  }, [setLoader]);


  const back = () => {
    setLoader(true);
    setTimeout(() => {
      navigate("/home");
    }, 800); // Pequeño delay antes de ir a home
  };

  const basicInfo = [
    { label: "Nombre", value: tuition.name },
    { label: "Fecha de nacimiento", value: tuition.birthday },
    { label: "Edad", value: tuition.age },
    { label: "Genero", value: tuition.gender },
    { label: "Numero de identificacion", value: tuition.numberIdentification },
    { label: "Nacionalidad", value: tuition.nationality },
  ];

  const contactInfo = [
    { label: "Direccion", value: tuition.address },
    { label: "Telefono de contacto", value: tuition.numberPhone },
    { label: "E-mail", value: tuition.email },
    { label: "Contacto de emergencia", value: tuition.emergencyNumberPhone },
  ];

  const medicalInfo = [
    { label: "Peso", value: tuition.weight + "kg" },
    { label: "Altura", value: tuition.height },
    { label: "Tipo de sangre", value: tuition.bloodType },
    { label: "Historial Medico", value: tuition.historialMedic, checkbox: true },
  ];

  const militarInfo = [
    { label: "Matricula", value: tuition.tuition },
    { label: "Rango", value: tuition.grade },
    { label: "Fecha de ingreso", value: tuition.entrDate },
    { label: "Unidad", value: tuition.unity },
    { label: "Estado del recluta", value: tuition.stateRecruit },
  ];

  const abilitiesAndEducation = [
    { label: "Educacion", value: tuition.education },
    { label: "Habilidades Especiales", value: tuition.specialsAbilities },
    { label: "Idiomas hablados", value: tuition.languages },
    { label: "Experiencia Previa", value: tuition.previousExperience },
  ];

  const documentation = [
    { label: "Fotografia", value: tuition.photoPersonal, checkbox: true },
    { label: "Copia de Identificacion", value: tuition.identifyPersonalCopy, checkbox: true },
    { label: "Documentos Medicos", value: tuition.medicDocuments, checkbox: true },
  ];

  // Mostrar loader mientras carga
  if (loader) return <Loader />;

  return (
    <>
      <Nav />

      <div className="bg-[#96ac90]  min-h-screen flex justify-center items-center flex-col gap-[20px] p-[20px] ">
        <div className="flex flex-col gap-[20px] lg:w-[200px] max-w-[90rem]">
          <div className="bg-[#fff] border p-[20px] rounded-[15px] shadow-lg flex flex-wrap justify-center gap-[20px]">
            <img
              src="perfil.jpg"
              alt="icono-perfil"
              className="w-[200px] h-[200px] rounded-full object-cover flex-shrink-0"
            />

            <div className="flex flex-col gap-[15px] min-w-[250px] ">
              <InfoSection title="INFORMACION BASICA" fields={basicInfo} />
              <InfoSection title="INFORMACION DE CONTACTO" fields={contactInfo} />
              <InfoSection title="INFORMACION FISICA Y MEDICA" fields={medicalInfo} />
              <InfoSection title="INFORMACION MILITAR" fields={militarInfo} />
              <InfoSection title="INFORMACION DE EDUCACION Y HABILIDADES" fields={abilitiesAndEducation} />
              <InfoSection title="INFORMACION DE DOCUMENTOS" fields={documentation} />
            </div>
          </div>
        </div>

        <button
          onClick={back}
          className="w-[200px] h-[40px] mx-auto rounded-[5px] mt-[10px] bg-[#283e06] text-[#fff] hover:cursor-pointer"
        >
          REGRESAR
        </button>
      </div>
    </>
  );
}
