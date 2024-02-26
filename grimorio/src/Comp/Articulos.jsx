import React from 'react';
import './Articulos.css';

function Articulos({ nombre, descripcion }) {
  return (
    <div className="artilugio-container">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Articulos;