import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PasajeroView = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [originConfirmed, setOriginConfirmed] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedLocation({ lat: latitude, lng: longitude });
          if (!originConfirmed) {
            setOrigin({ lat: latitude, lng: longitude });
          }
          setOriginConfirmed(true);
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error.message);
        }
      );
    } else {
      console.error('El navegador no soporta la geolocalización');
    }
  }, [originConfirmed]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLocation(null);
    setDestination(null);
    if (!originConfirmed) {
      setOrigin(null);
    }
  };

  const handleMapClick = (event) => {
    if (!origin && !originConfirmed) {
      setOrigin({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    } else if (!destination) {
      setDestination({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    } else {
      setOrigin(null);
      setDestination(null);
    }
  };

  const handleEnviarCoordenadas = () => {
    if (originConfirmed && destination) {
      console.log('Origen:', origin);
      console.log('Destino:', destination);
    } else {
      console.error('No se han seleccionado tanto el origen como el destino');
    }
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const googleMapsApiKey = "AIzaSyAdfrKnsern-zn80h22lDBl00D2z51J_h8";

  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>Pedir remis</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {!originConfirmed ? 'Seleccione el origen' : (!destination ? 'Seleccione el destino' : 'Ubicación confirmada')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={selectedLocation || { lat: 0, lng: 0 }}
              zoom={15}
              onClick={handleMapClick}
            >
              {origin && !originConfirmed && <Marker position={origin} />}
              {destination && <Marker position={destination} />}
              {selectedLocation && !originConfirmed && !destination && <Marker position={selectedLocation} />}
            </GoogleMap>
          </LoadScript>
          <Button variant="success" onClick={handleEnviarCoordenadas}>Enviar Coordenadas</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PasajeroView;