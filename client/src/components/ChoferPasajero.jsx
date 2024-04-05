import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const socket = io("http://localhost:3000");

const ChoferPasajero = ({travelId}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [travelDetails, setTravelDetails] = useState(null); // Datos del viaje para mostrar en el mapa

  useEffect(() => {
    // Función para obtener los detalles del viaje desde el backend
    const fetchTravelDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/travel/details/${travelId}`);
        if (response.ok) {
          const data = await response.json();
          setTravelDetails(data.travel);
        } else {
          console.error('Error al obtener los detalles del viaje:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener los detalles del viaje:', error);
      }
    };

    // Llamada a la función para obtener los detalles del viaje al montar el componente
    fetchTravelDetails();
  }, []);

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(message.trim() === ''){
      return;
    }

    const newMessage = {
      body: message,
      from: "Me",
    };

    setMessages([...messages, newMessage]);
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  // Función para actualizar los detalles del viaje (por ejemplo, origen, destino)
  const updateTravelDetails = (newDetails) => {
    setTravelDetails(newDetails);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-4 order-md-last">
          {/* Aquí va el mapa de Google */}
          <LoadScript googleMapsApiKey="AIzaSyCWn8hbc9kmh7RTHY_maP-HDVE2pWSuqY8" loading="async">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={{ lat: 0, lng: 0 }}
              zoom={10}
            >
              {travelDetails && (
                <DirectionsRenderer directions={travelDetails.directions} />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="col-md-7 col-lg-8">
          {/* Aquí va el chat */}
          <div
            className="d-flex flex-column align-items-center"
            style={{ color: "yellow", border: "1px solid yellow" }}
          >
            {/* ... (Resto del código del chat) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoferPasajero;