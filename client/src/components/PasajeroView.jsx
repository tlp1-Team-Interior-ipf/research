import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const PasajeroView = () => {
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [title, setTitle] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFindMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOrigin({ lat: latitude, lng: longitude });
          setTitle('Seleccione el destino');
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error.message);
        }
      );
    } else {
      console.error('El navegador no soporta la geolocalización');
    }
  };

  const handleMapClick = (event) => {
    if (!origin) {
      setOrigin({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle('Seleccione el destino');
    } else if (!destination) {
      setDestination({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle('Ubicación confirmada');
    }
  };
  const calculateDirections = () => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING',
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
            calculateDistance(); // Calcula la distancia al obtener las direcciones
          } else {
            console.error('Error al trazar la ruta:', status);
          }
        }
      );
    }
  };

  const calculateDistance = () => {
    const distanceMatrixService = new window.google.maps.DistanceMatrixService();
    distanceMatrixService.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          const distanceValue = response.rows[0].elements[0].distance.value;
          const distanceInKm = distanceValue / 1000; // Conversión a kilómetros
          setDistance(distanceInKm.toFixed(2)); // Establece la distancia en el estado
        } else {
          console.error('Error al calcular la distancia:', status);
        }
      }
    );
  };

  useEffect(() => {
    calculateDirections();
  }, [origin, destination]);

  const handleConfirmLocation = () => {
    const coordenadas = {
      origen: origin ? { lat: origin.lat, lng: origin.lng } : null,
      destino: destination ? { lat: destination.lat, lng: destination.lng } : null,
    };
    
    console.log('Coordenadas:', coordenadas);
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultLocation = {
    lat: -26.1844, // Latitud de Formosa
    lng: -58.1736, // Longitud de Formosa
  };

  const defaultZoom = 13;
 
  const googleMapsApiKey= "AIzaSyAdfrKnsern-zn80h22lDBl00D2z51J_h8"
  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>Seleccionar Ubicación</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{origin ? 'Destino' : 'Origen'}</Modal.Title>
          <Button variant="info" onClick={handleFindMyLocation} style={{ position: 'absolute', top: '10px', right: '10px' }}>Encontrar mi ubicación</Button>
        </Modal.Header>
        <Modal.Body>
          <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={defaultLocation}
              zoom={defaultZoom}
              onClick={handleMapClick}
            >
              {origin && <Marker position={origin} />}
              {destination && <Marker position={destination} />}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </LoadScript>
          {/* Visualización de la distancia */}
        <Modal.Footer>
          <p>Distancia entre puntos: {distance ? `${distance} km` : 'Calculando...'}</p>
          {origin && destination && ( //Aquí iría el botón de pedir remis y la lógica para enviar la petición
           <Button variant="success" onClick={handleConfirmLocation}>Confirmar ubicación</Button>
          )}
        </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PasajeroView;