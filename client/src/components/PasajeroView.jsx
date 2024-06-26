import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { EmpresasDisp } from './EmpresasDisponibles';
import io from 'socket.io-client';
// import './modal.css';
const PasajeroView = () => {
  //Estados utilizados con useState
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [title, setTitle] = useState(null);
  const [resetModal, setResetModal] = useState(false);

  const [montoRealLibertad, setMontoRealLibertad] = useState(null);
  const [montoRealMontecarlo, setMontoRealMontecarlo] = useState(null);
  const [montoRealNapoleon, setMontoRealNapoleon] = useState(null);
  const [showEmpresas, setShowEmpresas] = useState(false);
  const [idEmpresaSeleccionada, setIdEmpresaSeleccionada] = useState(null);
  const [idViaje, setIdViaje] = useState(null);

  const empresasRef = useRef(null); // Referencia al elemento EmpresasDisp
  // Luego, cuando tengas el idViaje disponible (después de guardar en la BDD o donde sea necesario):
// setIdViaje(idViajeObtenido);
// Mantén la conexión del socket en un estado para manipularlo
const socket = io('http://localhost:3000');

useEffect(() => {
  // Escuchar el evento 'viaje-creado' emitido por el servidor
  socket.on('viaje-creado', ({ id }) => {
    console.log(`Se ha creado un nuevo viaje con ID: ${id}`);
  
  })
});
//     // Actualizar el estado idViaje con el ID obtenido del evento
//     setIdViaje(id);
//     // Redirigir a la vista con el ID del viaje
//     window.location.href = `/choferpasajero/${id}`;
//   });

//   return () => {
//     socket.off('viaje-creado'); // Desuscribirse del evento cuando el componente se desmonta
//   };
// }, []);
//Funciones para manejar el modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
//Función para obtener la ubicación del usuario.
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

  const handleResetModal = () => {
    setOrigin(null);
    setDestination(null);
    setDirections(null);
    setDistance(null);
    setTitle(null);
    setResetModal(false);
  };
  //Función para manejar el click en el mapa
  const handleMapClick = (event) => {
    if (!origin) {
      setOrigin({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle('Seleccione el destino');
    } else if (!destination) {
      setDestination({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle('Ubicación confirmada');
      setResetModal(true)
       }
  };

  //Función para calcular direcciones y distancia
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
            calculateDistance();
          } else {
            console.error('Error al trazar la ruta:', status);
          }
        }
      );
    }
  };

  const calculateDistance = () => {
    if (origin && destination) {
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
            const distanceInKm = distanceValue / 1000;
            setDistance(distanceInKm.toFixed(2));
            calculateMontos(distanceInKm); // Calcula los montos según la distancia
          } else {
            console.error('Error al calcular la distancia:', status);
          }
        }
      );
    }
  };
//Función para calcular montos y actualiza los valores del state.
  const calculateMontos = (distanceInKm) => {
    setMontoRealLibertad(distanceInKm ? distanceInKm * 340 + 400 : null);
    setMontoRealMontecarlo(distanceInKm ? distanceInKm * 400 + 400 : null);
    setMontoRealNapoleon(distanceInKm ? distanceInKm * 500 + 400 : null);
  };

  //Efecto para calcular direcciones al cambiar origen o destino
  useEffect(() => {
    calculateDirections();
  }, [origin, destination]);

  //Función para confirmar la ubicacion
  const handleConfirmLocation = () => {
    const coordenadas = {
      origen: origin ? { lat: origin.lat, lng: origin.lng } : null,
      destino: destination ? { lat: destination.lat, lng: destination.lng } : null,
    };
    
    console.log('Coordenadas:', coordenadas);
      if (origin && destination) {
        setShowModal(false); // Cerrar el modal solo después de confirmar la ubicación
        setShowEmpresas(true); // Mostrar las empresas disponibles
      }
  };

  // Función para enviar los datos al servidor
  const enviarDatosAlServidor = (idEmpresa) => {
    const coordenadas = {
      id_enterprise: idEmpresa,
      origen_lat: origin ? origin.lat : null,
      origen_lng: origin ? origin.lng : null,
      destino_lat: destination ? destination.lat : null,
      destino_lng: destination ? destination.lng : null,
    };
   console.log('Antes de enviar solicitud al servidor:', idViaje);
    console.log('Coordenadas:', coordenadas);
  
    if (origin && destination && idEmpresa) {
      fetch('http://localhost:3000/travel/newTravel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coordenadas),
      })
      .then((response) => {
        if (response.ok) {
          // Si la solicitud fue exitosa, obtenemos el ID del viaje del servidor
          return response.json(); // Parsear la respuesta del servidor como JSON
        }
        throw new Error('Error al crear el viaje');
      })
      .catch((error) => {
        console.error('Error al enviar datos al servidor:', error);
      });
    }
  };

  useEffect(() => {
    if (showEmpresas) {
      empresasRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showEmpresas]);

//Estilos y valores por defecto para el mapa
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  //Ubicación por defecto sobre Fsa
  const defaultLocation = {
    lat: -26.1844,
    lng: -58.1736, 
  };

  const defaultZoom = 13;
 
  const googleMapsApiKey= "AIzaSyCWn8hbc9kmh7RTHY_maP-HDVE2pWSuqY8"
  return (
    <div >
      <main className="d-flex align-items-center justify-content-center">
        <div>
          <div className='d-flex justify-content-center'>
          <img className="img-fluid" src="../img/image.png" alt="Imagen de taxi" height="300" width="300"/>
          </div>
          <div className="letras">
          <h1 className="display-1">Bienvenido a tuRemo</h1>
          <h3 className="display-6">¿A dónde querés ir?</h3>
          {/* <a className="btn btn-warning d-grid gap-2 col-6 mx-auto" href="/home/usuario" type="button">Pedir Aquí</a> */}
        </div>
        </div>
      </main>
      {!origin && (
       <div className="text-center">
       <Button variant="primary" onClick={handleOpenModal}>
         Seleccionar Ubicación
       </Button>
     </div>)}
        <Modal show={showModal} onHide={handleCloseModal} className="map-modal" size="lg">
        <Modal.Header  closeButton>
          <Modal.Title>{origin ? 'Destino' : 'Origen'}</Modal.Title>
          <Button className="find-location-button" variant="info" onClick={handleFindMyLocation} style={{ top: '10px', right: '10px' }}>Encontrar mi ubicación</Button>
        </Modal.Header>
        <Modal.Body style={{ width: '100%' }}>
          <LoadScript googleMapsApiKey={googleMapsApiKey} loading="async">
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
          {origin && destination && (
            <div> {/* Añade un div para agrupar los botones */}
              <Button variant="success" onClick={handleConfirmLocation}>Confirmar ubicación</Button>
              {resetModal && (
                <Button variant="secondary" onClick={handleResetModal}>
                  Reestablecer
                </Button>
              )}
            </div>
          )}
        </Modal.Footer>
        </Modal.Body>
      </Modal>
      {/* Renderiza la lista de empresas disponibles si se confirma la ubicación */}
      {showEmpresas && (
        <div ref={empresasRef}>
          <EmpresasDisp  
            montoRealLibertad={montoRealLibertad}
            montoRealMontecarlo={montoRealMontecarlo}
            montoRealNapoleon={montoRealNapoleon}
            enviarDatosAlServidor={enviarDatosAlServidor}
          />
        </div>
      )}
    </div>
  );
};

export default PasajeroView;