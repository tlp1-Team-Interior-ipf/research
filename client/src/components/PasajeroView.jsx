import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const PasajeroView = () => {
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [title, setTitle] = useState('Seleccione el origen');

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
          <Modal.Title>{title}</Modal.Title>
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
            </GoogleMap>
          </LoadScript>
          <Button variant="info" onClick={handleFindMyLocation}>Encontrar mi ubicación</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PasajeroView;