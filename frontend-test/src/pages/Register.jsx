import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

/**
 * Componente Register
 * Formulario para registrar información completa de un recluta.
 * Incluye secciones de información básica, contacto, física/medica, militar,
 * educación y habilidades, y documentación.
 *
 * Responsivo y con validación de campos obligatorios.
 * Al enviar correctamente, los campos se vacían automáticamente.
 */
export default function Register() {
  const { loader, setLoader } = useAuth(); // Datos del recluta
  // Valores iniciales del formulario
  const initialValues = {
    name: "",
    birthday: "",
    age: "",
    gender: "",
    numberIdentification: "",
    nationality: "",
    address: "",
    numberPhone: "",
    email: "",
    emergencyNumberPhone: "",
    weight: "",
    height: "",
    bloodType: "",
    historialMedic: false,
    tuition: "",
    grade: "",
    entrDate: "",
    unity: "",
    stateRecruit: "",
    education: "",
    specialsAbilities: "",
    languages: "",
    previousExperience: "",
    photoPersonal: false,
    identifyPersonalCopy: false,
    medicDocuments: false,
  };

  // Mostrar loader al montar el componente

  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000); // 1s
    return () => clearTimeout(timer);
  }, [setLoader]);

  

  // Estado para los datos del formulario
  const [formData, setFormData] = useState(initialValues);

  // Estado para mostrar errores de validación
  const [showErrors, setShowErrors] = useState(false);

  /**
   * handleChange
   * Actualiza el estado del formulario cada vez que un input cambia.
   * Maneja inputs de tipo checkbox y texto/otros.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /**
   * handleSubmit
   * Valida campos obligatorios al enviar el formulario.
   * Muestra error si algún campo requerido está vacío.
   * Si todo es correcto, muestra alerta y vacía los campos.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmpty = Object.entries(formData).some(
      ([key, value]) =>
        value === "" &&
        ![
          "historialMedic",
          "photoPersonal",
          "identifyPersonalCopy",
          "medicDocuments",
        ].includes(key)
    );

    if (hasEmpty) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);

    // Vaciar los campos al enviar

    setLoader(true); // activamos loader mientras "procesamos"

    setTimeout(() => {
      alert("Enviado correctamente");
      setFormData(initialValues);
      setLoader(false); // desactivamos loader
    }, 1000); // Simula tiempo de envío
  };

  // Secciones del formulario con sus campos
  const sections = [
    {
      title: "INFORMACION BASICA",
      fields: [
        { label: "Nombre", name: "name" },
        { label: "Fecha de nacimiento", name: "birthday", type: "date" },
        { label: "Edad", name: "age", type: "number" },
        { label: "Genero", name: "gender" },
        { label: "Numero de identificacion", name: "numberIdentification" },
        { label: "Nacionalidad", name: "nationality" },
      ],
    },
    {
      title: "INFORMACION DE CONTACTO",
      fields: [
        { label: "Direccion", name: "address" },
        { label: "Telefono de contacto", name: "numberPhone" },
        { label: "E-mail", name: "email", type: "email" },
        { label: "Contacto de emergencia", name: "emergencyNumberPhone" },
      ],
    },
    {
      title: "INFORMACION FISICA Y MEDICA",
      fields: [
        { label: "Peso", name: "weight", type: "number" },
        { label: "Altura", name: "height" },
        { label: "Tipo de sangre", name: "bloodType" },
        { label: "Historial Medico", name: "historialMedic", type: "checkbox" },
      ],
    },
    {
      title: "INFORMACION MILITAR",
      fields: [
        { label: "Matricula", name: "tuition" },
        { label: "Rango", name: "grade" },
        { label: "Fecha de ingreso", name: "entrDate", type: "date" },
        { label: "Unidad", name: "unity" },
        { label: "Estado del recluta", name: "stateRecruit" },
      ],
    },
    {
      title: "EDUCACION Y HABILIDADES",
      fields: [
        { label: "Educacion", name: "education" },
        { label: "Habilidades Especiales", name: "specialsAbilities" },
        { label: "Idiomas hablados", name: "languages" },
        { label: "Experiencia Previa", name: "previousExperience" },
      ],
    },
    {
      title: "DOCUMENTACION",
      fields: [
        { label: "Fotografia", name: "photoPersonal", type: "checkbox" },
        {
          label: "Copia de Identificacion",
          name: "identifyPersonalCopy",
          type: "checkbox",
        },
        {
          label: "Documentos Medicos",
          name: "medicDocuments",
          type: "checkbox",
        },
      ],
    },
  ];

  if (loader) return <Loader />; // Muestra loader mientras loader=true

  return (
    <>
      <Nav />
      {/* Formulario principal */}
      <form
        onSubmit={handleSubmit}
        className="p-6 flex flex-col gap-6 bg-[#96ac90] min-h-screen"
      >
        {sections.map((section) => (
          <div key={section.title}>
            {/* Título de sección */}
            <h2 className="font-bold text-lg mb-2 text-center sm:text-left">
              {section.title}
            </h2>

            {section.fields.map((field) => (
              <div
                key={field.name}
                className="flex flex-col sm:flex-row items-center mb-2 gap-2 w-full"
              >
                <div className="flex items-center gap-2 w-full max-w-[600px] flex-wrap sm:flex-nowrap">
                  {/* Label del campo */}
                  <label className="w-full sm:w-[200px]">{field.label}:</label>

                  {/* Input tipo checkbox o texto */}
                  {field.type === "checkbox" ? (
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={formData[field.name]}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      placeholder={`Escribe tu ${field.label}`}
                      onChange={handleChange}
                      className="border rounded-[10px] h-[30px] p-2 flex-1 w-full sm:w-auto"
                    />
                  )}
                </div>

                {/* Mensaje de error si el campo está vacío */}
                {showErrors &&
                  formData[field.name] === "" &&
                  ![
                    "historialMedic",
                    "photoPersonal",
                    "identifyPersonalCopy",
                    "medicDocuments",
                  ].includes(field.name) && (
                    <span className="text-[#FF0000] text-sm mt-1 sm:mt-0">
                      Este campo es obligatorio
                    </span>
                  )}
              </div>
            ))}
          </div>
        ))}

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-[200px] h-[40px] mx-auto rounded-[5px] mt-4 bg-[#283e06] text-white"
        >
          Guardar
        </button>
      </form>
    </>
  );
}
