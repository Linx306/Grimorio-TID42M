import React, { useState, useEffect } from 'react';
import './CSS/Articulos.css';

function Articulos({ nombre, descripcion }) {
  return (
    <div className='Arti'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

function ArticulosList() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.open5e.com/v1/magicitems/');
        const data = await response.json();
        setArticulos(data.results.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {articulos.map((articulo) => (
  <Articulos
    key={articulo.slug}
    nombre={articulo.name}
    descripcion={articulo.desc}
  />
))}
    </div>
  );
}

export default ArticulosList;