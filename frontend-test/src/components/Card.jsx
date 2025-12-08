/**
 * Card
 * Componente que representa una tarjeta de recluta con información básica.
 *
 * Props:
 * - name: string -> nombre del recluta.
 * - id: string | number -> identificador único del recluta.
 * - stateRecruit: string -> estado actual del recluta.
 * - onClick: function -> función que se ejecuta al hacer click en la tarjeta. 
 *   Recibe el id del recluta como argumento.
 *
 * Uso:
 * <Card
 *   name="Juan Pérez"
 *   id={1}
 *   stateRecruit="Activo"
 *   onClick={(id) => console.log(id)}
 * />
 */
export default function Card({ name, id, stateRecruit, onClick }) {
  return (
    <>
      <div
        className="w-[200px] h-[300px] bg-[#778c43] rounded-[20px]"
        key={id}
        onClick={() => onClick(id)}
      >
        <img src="perfil.jpg" alt="icono-perfil" width={200} />
        <div className="p-[10px] text-[#fff]">
          <p><b>Nombre: </b>{name}</p>
          <p><b>Estatus: </b> {stateRecruit}</p>
        </div>
      </div>
    </>
  );
}
