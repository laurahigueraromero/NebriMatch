import comunidades from "../data/comunidad";
import './Comunidades.css'
function Comunidades() {
  return (
    <div>
      <h1>Comunidades de Programación</h1>
      {comunidades.map((comunidad) => (
        <div key={comunidad.id}>
          <h2>{comunidad.lenguaje}</h2>
          <p><strong>ID:</strong> {comunidad.id}</p>
          <p><strong>Proyecto:</strong> {comunidad.descripcionDeProyecto}</p>
        </div>
      ))}
    </div>
  );
}

export default Comunidades;