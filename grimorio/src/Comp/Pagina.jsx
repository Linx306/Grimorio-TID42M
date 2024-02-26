import React from 'react';
import Articulos from './Articulos.jsx';
import './Pagina.css'; // Asegúrate de importar el archivo de estilos

function Pagina() {
  return (
    <div className="pagina-container">
      <div className="contenido-izquierdo">
        {/* Contenido de la izquierda, por ejemplo, artilugios */}
        <Articulos nombre="Nombre" descripcion="Descripción" />
      </div>
      <div className="contenido-derecho">
        {/* Contenido de la derecha, por ejemplo, hechizos */}
        <p>Contenido de hechizos...</p>
      </div>
    </div>
  );
}

export default Pagina;