import React, { useState, useEffect } from 'react';
import './CSS/Hechizos.css';

function Hechizo({ nombre, descripcion, dnd_class }) {
  return (
    <div className="hechizo">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>{Array.isArray(dnd_class) ? `Solo lo pueden usar estas clases: ${dnd_class.join(', ')}` : 'Clases no especificadas'}</p>
    </div>
  );
}

function HechizosList() {
  const [hechizos, setHechizos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.open5e.com/v1/spells/');
        const data = await response.json();
        setHechizos(data.results.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {hechizos.map((hechizo) => (
  <Hechizo
    key={hechizo.slug}
    nombre={hechizo.name}
    descripcion={hechizo.desc}
    dnd_class={hechizo.spell_lists || []} 
  />
))}

    </div>
  );
}

export default HechizosList;
