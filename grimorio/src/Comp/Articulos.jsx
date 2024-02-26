import React from 'react';

function Articulos({ nombre, descripcion }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Articulos;