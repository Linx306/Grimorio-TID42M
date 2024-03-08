import React, { useState, useEffect } from 'react';
import './CSS/Hechizos.css';

function HechizosList() {
  const [hechizos, setHechizos] = useState([]);
  const [visibleHechizos, setVisibleHechizos] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = fetch('https://api.open5e.com/v1/spells/');
        const data = response.json();
        setHechizos(data.results);
        setVisibleHechizos(data.results.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    const index = Math.floor(Math.random() * (hechizos.length - 3));
    setTimeout(() => {
      setVisibleHechizos(hechizos.slice(index, index + 3));
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div>
      {visibleHechizos.map((hechizo) => (
        <div key={hechizo.slug} className={`hechizo ${isAnimating && 'fade-out'}`}>
          <h3>{hechizo.name}</h3>
          <p>{hechizo.desc}</p>
          <p>{Array.isArray(hechizo.spell_lists) ? `Solo lo pueden usar estas clases: ${hechizo.spell_lists.join(', ')}` : 'Clases no especificadas'}</p>
        </div>
      ))}
      <button onClick={handleClick}>Cambiar hechizos</button>
    </div>
  );
}

export default HechizosList;