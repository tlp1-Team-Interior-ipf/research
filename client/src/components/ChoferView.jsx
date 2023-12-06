import React, { useState, useEffect } from 'react';
import './modal.css';
import io from 'socket.io-client';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Swal from 'sweetalert2'

const ChoferView = () => {
  //Estados utilizados con useState
  const [travels, setTravels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [distance, setDistance] = useState(null);
  const [montoReal, setMontoReal] = useState(null);
   // Mantener el socket en un estado para manipularlo

  //Función para mostrar el modal y seleccionar el viaje
  const handleShowModal = (travel) => {
    setSelectedTravel(travel);
    setShowModal(true);
  };

  //Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTravel(null);
  };
  
  //  instancia de Socket.IO configurada en el frontend
const socket = io('http://localhost:3000'); // O la URL correspondiente

  const handleAccept = async (travelId) => {
    try {
      // Lógica para aceptar el viaje...
      // Sweet Alert para "Viaje confirmado"
      Swal.fire({
        icon: 'success',
        title: 'Viaje confirmado',
        text: 'El viaje ha sido confirmado exitosamente',
      }).then(() => {
        // Cambiar el estado a 0 después de 1 segundo
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
              // Actualizar la lista de viajes después de cambiar el estado
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
      // Realizar una solicitud al servidor para rechazar el viaje (actualizar estado a 0)
      const response = await fetch(`http://localhost:3000/travel/update/${travelId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: 0 }), // Estado de rechazado
      });
  
      if (response.ok) {
        // Actualizar la lista de viajes después de rechazar
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
  //Efecto para obtener la lista de viajes del servidor al cargar el componente.
  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await fetch('http://localhost:3000/travel/list');
        if (response.ok) {
          const data = await response.json();
          // Filtrar los viajes cuyo estado sea 1
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

  //Efecto para cargar el script de google maps
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAdfrKnsern-zn80h22lDBl00D2z51J_h8&libraries=places`;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []); 

  //Efecto para manejar la lógica para mostrar el mapa en el modal
  useEffect(() => {
    if (showModal && selectedTravel) {
      const mapOptions = {
        center: { lat: parseFloat(selectedTravel.origen_lat), lng: parseFloat(selectedTravel.origen_lng) },
        zoom: 12,
      };

      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

      const originMarker = new window.google.maps.Marker({
        position: { lat: parseFloat(selectedTravel.origen_lat), lng: parseFloat(selectedTravel.origen_lng) },
        map: map,
        title: 'Origen del viaje',
      });

      const destinationMarker = new window.google.maps.Marker({
        position: { lat: parseFloat(selectedTravel.destino_lat), lng: parseFloat(selectedTravel.destino_lng) },
        map: map,
        title: 'Destino del viaje',
      });

      //Servicio de direcciones para obtener la ruta entre origen y destino
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });

      directionsService.route(
        {
          origin: { lat: parseFloat(selectedTravel.origen_lat), lng: parseFloat(selectedTravel.origen_lng) },
          destination: { lat: parseFloat(selectedTravel.destino_lat), lng: parseFloat(selectedTravel.destino_lng) },
          travelMode: 'DRIVING',
        },
        (result, status) => {
          if (status === 'OK') {
            //Renderizar la ruta y calcular la distancia y monto real (Empresa Libertad en este caso)
            directionsRenderer.setDirections(result);
            const distance = result.routes[0].legs[0].distance.text;
            setDistance(distance);

            const distanceValue = result.routes[0].legs[0].distance.value / 1000;
            const montoReal = distanceValue ? distanceValue * 340 + 400 : null;
            setMontoReal(montoReal);
          } else {
            console.error('Error al trazar la ruta:', status);
          }
        }
      );
    }
  }, [showModal, selectedTravel, setDistance, setMontoReal]);

  return (
    <div>
   <div className="d-flex align-items-center justify-content-center">

<div className="solicitudes-section" style={{ marginLeft: '20px' }}>
    <h1>Solicitudes de Viajes</h1>
    <ul>
        {travels.map((travel) => (
          <li key={travel.id}>
            <p>
              Id Viaje: {travel.id}{' '}
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
          {/* <a className="btn btn-warning d-grid gap-2 col-6 mx-auto" href="/home/usuario" type="button">Pedir Aquí</a> */}
        </div>
      </div>
    </main>
  </div>


  {showModal && selectedTravel && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Detalles del Viaje</h2>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
            <p>ID: {selectedTravel.id}</p>
            <p>Distancia: {distance ? `${distance}` : 'Calculando...'}</p>
            <p>Monto Real: {montoReal ? `$${montoReal.toFixed(2)}` : 'Calculando...'}</p>
            <div className='d-flex justify-content-center gap-2'>
            {/* Botón Aceptar */}
            <button className="btn btn-success" onClick={() => handleAccept(selectedTravel.id)}>Aceptar</button>
            {/* Botón Rechazar */}
            <button className="btn btn-danger" onClick={() => handleReject(selectedTravel.id)}>Rechazar</button>
            </div>
          </div>
        </div>
      )}
  </div>
  </div>
);
}

export default ChoferView;