import React, { useState, useEffect } from 'react';
import './CSS/Articulos.css';

function ArticulosList() {
  const [articulos, setArticulos] = useState([]);
  const [visibleArticulos, setVisibleArticulos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =  fetch('https://api.open5e.com/v1/magicitems/');
        const data = response.json();
        setArticulos(data.results);
        setVisibleArticulos(data.results.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    const index = Math.floor(Math.random() * (articulos.length - 3));
    setTimeout(() => {
      setVisibleArticulos(articulos.slice(index, index + 3));
      setIsAnimating(false);
    }, 3000);
  };
  return (
    <div>
      {visibleArticulos.map((articulo) => (
  <div key={articulo.slug} className={`articulo ${isAnimating && 'fade-out'}`}>
  <h3>{articulo.name}</h3>
  <p>{articulo.desc}</p>
</div>
))}
<button onClick={handleClick}>Cambiar Articulos</button>
    </div>
  );
}

export default ArticulosList;