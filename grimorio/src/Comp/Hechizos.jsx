
import React from 'react';
import './Hechizos.css'; 
import IconoMagico from './icono-magico.png';

function Hechizos({ nombre, descripcion }) {
  return (
    <div className="hechizo-container">
      <img src={IconoMagico} alt="Icono Mágico" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Hechizos;