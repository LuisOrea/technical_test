/**
 * InfoSection
 * Componente que muestra una sección de información.
 *
 * Props:
 * - title (string): Título de la sección.
 * - fields (Array): Arreglo de objetos con los datos a mostrar. Cada objeto puede tener:
 *    - label (string): Etiqueta del campo.
 *    - value (any): Valor del campo.
 *    - checkbox (boolean, opcional): Indica si el valor es un checkbox.
 *
 * Este componente renderiza:
 * - El título de la sección en negritas.
 * - Cada campo en un párrafo, mostrando el label en negritas y el valor.
 * - Si checkbox es true, se muestra un input tipo checkbox marcado según el valor.
 */
export default function InfoSection({ title, fields }) {
  return (
    <div className="p-[10px] text-[#000]">
      <b>{title}</b>
      {fields.map(({ label, value, checkbox }, i) => (
        <p key={i}>
          <b>{label}:</b> {checkbox ? <input type="checkbox" checked={value} readOnly /> : value}
        </p>
      ))}
    </div>
  );
}
