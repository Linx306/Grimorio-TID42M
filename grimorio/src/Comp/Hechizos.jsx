import './Hechizos.css'; 

const hechizos = [
  { nombre: 'Hechizo 1', descripcion: 'Esta es la descripción del hechizo 1', clases:'solo lo pueden usar estas clases:' },
  { nombre: 'Hechizo 2', descripcion: 'Esta es la descripción del hechizo 2', clases:'solo lo pueden usar estas clases:' },
  { nombre: 'Hechizo 3', descripcion: 'Esta es la descripción del hechizo 3', clases:'solo lo pueden usar estas clases:'},
];

function Hechizo({ nombre, descripcion,clases }) {
  return (
    <div className="hechizo">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>{clases}</p>
    </div>
  );
}

function HechizosList() {
  return (
    <div>
      {hechizos.map((hechizo) => (
        <Hechizo nombre={hechizo.nombre} descripcion={hechizo.descripcion} clases={hechizo.clases} />
      ))}
    </div>
  );
}

export default HechizosList;