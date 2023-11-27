import React, { useState, useEffect } from 'react';
import './modal.css';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const ChoferView = () => {
  //Estados utilizados con useState
  const [travels, setTravels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [distance, setDistance] = useState(null);
  const [montoReal, setMontoReal] = useState(null);

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

  //Efecto para obtener la lista de viajes del servidor al cargar el componente.
  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await fetch('http://localhost:3000/travel/list');
        if (response.ok) {
          const data = await response.json();
          setTravels(data.travels);
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
      <h1>Lista de Viajes del Chofer</h1>
      <ul>
        {travels.map((travel) => (
          <li key={travel.id}>
            <p>
              Id Viaje: {travel.id}{' '}
              <button onClick={() => handleShowModal(travel)}>Ver Detalles</button>
            </p>
          </li>
        ))}
      </ul>

      {showModal && selectedTravel && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Detalles del Viaje</h2>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
            <p>ID: {selectedTravel.id}</p>
            <p>Distancia: {distance ? `${distance}` : 'Calculando...'}</p>
            <p>Monto Real: {montoReal ? `$${montoReal.toFixed(2)}` : 'Calculando...'}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChoferView;