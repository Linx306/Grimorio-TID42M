import './Hechizos.css'; 

const hechizos = [
  { nombre: 'Hechizo 1', descripcion: 'Esta es la descripción del hechizo 1' },
  { nombre: 'Hechizo 2', descripcion: 'Esta es la descripción del hechizo 2' },
  { nombre: 'Hechizo 3', descripcion: 'Esta es la descripción del hechizo 3' },
];

function Hechizo({ nombre, descripcion }) {
  return (
    <div className="hechizo">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

function HechizosList() {
  return (
    <div>
      {hechizos.map((hechizo, index) => (
        <Hechizo key={index} nombre={hechizo.nombre} descripcion={hechizo.descripcion} />
      ))}
    </div>
  );
}

export default HechizosList;