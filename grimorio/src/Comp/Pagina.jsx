import React from 'react';
import HechizosList from './Hechizos.jsx';
import './CSS/Pagina.css'; 
import ArticulosList from './Articulos.jsx';

function Pagina() {
  return (
    <div className="pagina-container">
      <div className="contenido-izquierdo">
      <HechizosList/>
        
      </div>
      <div className="contenido-derecho">
        <ArticulosList />
      </div>
    </div>
  );
}

export default Pagina;