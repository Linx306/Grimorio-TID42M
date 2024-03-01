import React from 'react';
import Articulos from './Articulos.jsx';
import HechizosList from './Hechizos.jsx';
import './CSS/Pagina.css'; 

function Pagina() {
  return (
    <div className="pagina-container">
      <div className="contenido-izquierdo">
      <HechizosList/>
        
      </div>
      <div className="contenido-derecho">
        <Articulos />
      </div>
    </div>
  );
}

export default Pagina;