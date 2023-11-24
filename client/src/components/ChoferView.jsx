import React, { useState, useEffect } from 'react';

const ChoferView = () => {
  const [travels, setTravels] = useState([]);
  const [choferEmpresaId, setChoferEmpresaId] = useState('ID_DE_LA_EMPRESA_DEL_CHOFER');

  useEffect(() => {
    // Llamada a la API para obtener los viajes desde el backend
    fetch(`URL_DE_TU_API/travels`) // Reemplaza 'URL_DE_TU_API' por la URL real de tu API
      .then(response => response.json())
      .then(data => {
        // Filtrar viajes según el ID de la empresa del chofer
        const viajesChofer = data.filter(viaje => viaje.id_empresa === choferEmpresaId);
        setTravels(viajesChofer);
      })
      .catch(error => {
        console.error('Error al obtener los viajes:', error);
      });
  }, [choferEmpresaId]);

  return (
    <div>
      <h1>Pedidos de viajes</h1>
      <h2>Selecciona uno para obtener más detalles</h2>
      <ul>
        {travels.map(travel => (
          <li key={travel.id}>
            <a href={`/travel/${travel.id}`} target="_blank" rel="noopener noreferrer">
              Viaje N°{travel.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoferView;