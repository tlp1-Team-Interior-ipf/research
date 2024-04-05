import React, { useState, useEffect } from 'react';
import './modal.css';
import io from 'socket.io-client';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Swal from 'sweetalert2';

const ChoferView = () => {
  const [travels, setTravels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [distance, setDistance] = useState(null);
  const [montoReal, setMontoReal] = useState(null);

  const socket = io('http://localhost:3000');

  const handleShowModal = (travel) => {
    setSelectedTravel(travel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTravel(null);
  };

  const handleAccept = async (travelId) => {
    try {
      // Lógica para aceptar el viaje...
      Swal.fire({
        icon: 'success',
        title: 'Viaje confirmado',
        text: 'El viaje ha sido confirmado exitosamente',
      }).then(() => {
        setTimeout(async () => {
          try {
            const response = await fetch(`http://localhost:3000/travel/update/${travelId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ estado: 0 }), // Cambiar el estado a rechazado (0)
            });
        
            if (response.ok) {
              const updatedTravels = travels.filter((travel) => travel.id !== travelId);
              setTravels(updatedTravels);
              setShowModal(false);
            } else {
              console.error('Error al cambiar el estado del viaje:', response.status);
            }
          } catch (error) {
            console.error('Error al cambiar el estado del viaje:', error);
          }
        }, 1000); // Esperar 1 segundo antes de cambiar el estado
      });
    } catch (error) {
      console.error('Error al aceptar el viaje:', error);
    }
  };

  const handleReject = async (travelId) => {
    try {
      const response = await fetch(`http://localhost:3000/travel/update/${travelId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: 0 }), // Estado de rechazado
      });
  
      if (response.ok) {
        const updatedTravels = travels.filter((travel) => travel.id !== travelId);
        setTravels(updatedTravels);
        setShowModal(false);
      } else {
        console.error('Error al rechazar el viaje:', response.status);
      }
    } catch (error) {
      console.error('Error al rechazar el viaje:', error);
    }
  };

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await fetch('http://localhost:3000/travel/list');
        if (response.ok) {
          const data = await response.json();
          const filteredTravels = data.travels.filter((travel) => travel.estado === 1);
          setTravels(filteredTravels);
        } else {
          console.error('Error al obtener los viajes:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener los viajes:', error);
      }
    };
  
    fetchTravels();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="solicitudes-section" style={{ marginLeft: '20px' }}>
          <h1>Solicitudes de Viajes</h1>
          <ul>
            {travels.map((travel) => (
              <li key={travel.id}>
                <p>
                  Viaje N°: {travel.id}{' '}
                  <button
                    className="details-button"
                    style={{
                      padding: '10px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleShowModal(travel)}
                  >
                    Ver Detalles
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="welcome-section">
          <main className="d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img className="img-fluid" src="../img/image.png" alt="Imagen de taxi" height="300" width="300" />
              <div className="letras">
                <h1 className="display-1">Bienvenido</h1>
              </div>
            </div>
          </main>
        </div>

        {showModal && selectedTravel && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Detalles del Viaje</h2>
              {/* Mapa */}
              <div id="map" style={{ height: '400px', width: '100%' }}></div>
              <p>ID: {selectedTravel.id}</p>
              <p>Distancia: {distance ? `${distance}` : 'Calculando...'}</p>
              <p>Monto Real: {montoReal ? `$${montoReal.toFixed(2)}` : 'Calculando...'}</p>
              <div className='d-flex justify-content-center gap-2'>
                <button className="btn btn-success" onClick={() => handleAccept(selectedTravel.id)}>Aceptar</button>
                <button className="btn btn-danger" onClick={() => handleReject(selectedTravel.id)}>Rechazar</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Carga de la API de Google Maps */}
      <LoadScript googleMapsApiKey="AIzaSyCWn8hbc9kmh7RTHY_maP-HDVE2pWSuqY8" onLoad={{}} loading="async">
        <GoogleMap
          mapContainerStyle={{ display: 'none' }} // Oculta el mapa para evitar renderizaciones innecesarias
          center={{ lat: 0, lng: 0 }}
          zoom={10}
        />
      </LoadScript>
    </div>
  );
};

export default ChoferView;
