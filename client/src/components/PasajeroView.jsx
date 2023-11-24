import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { EmpresasDisp } from "./EmpresasDisponibles";
const PasajeroView = () => {
  //Estados utilizados con useState
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [title, setTitle] = useState(null);

  const [montoRealLibertad, setMontoRealLibertad] = useState(null);
  const [montoRealMontecarlo, setMontoRealMontecarlo] = useState(null);
  const [montoRealNapoleon, setMontoRealNapoleon] = useState(null);
  const [showEmpresas, setShowEmpresas] = useState(false);
  const [idEmpresaSeleccionada, setIdEmpresaSeleccionada] = useState(null);

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
          setTitle("Seleccione el destino");
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error.message);
        }
      );
    } else {
      console.error("El navegador no soporta la geolocalización");
    }
  };

  //Función para manejar el click en el mapa
  const handleMapClick = (event) => {
    if (!origin) {
      setOrigin({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle("Seleccione el destino");
    } else if (!destination) {
      setDestination({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      setTitle("Ubicación confirmada");
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
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
            calculateDistance();
          } else {
            console.error("Error al trazar la ruta:", status);
          }
        }
      );
    }
  };

  const calculateDistance = () => {
    if (origin && destination) {
      const distanceMatrixService =
        new window.google.maps.DistanceMatrixService();
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            const distanceValue = response.rows[0].elements[0].distance.value;
            const distanceInKm = distanceValue / 1000;
            setDistance(distanceInKm.toFixed(2));
            calculateMontos(distanceInKm); // Calcula los montos según la distancia
          } else {
            console.error("Error al calcular la distancia:", status);
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
      destino: destination
        ? { lat: destination.lat, lng: destination.lng }
        : null,
    };

    console.log("Coordenadas:", coordenadas);
    if (origin && destination) {
      setShowModal(false); // Cerrar el modal solo después de confirmar la ubicación
      setShowEmpresas(true); // Mostrar las empresas disponibles
    }
  };

  // Función para enviar los datos al servidor
  const enviarDatosAlServidor = (idEmpresa) => {
    const coordenadas = {
      id_enterprise: idEmpresa, // Agregar el ID de la empresa seleccionada
      origen_lat: origin ? origin.lat : null,
      origen_lng: origin ? origin.lng : null,
      destino_lat: destination ? destination.lat : null,
      destino_lng: destination ? destination.lng : null,
    };

    console.log("Coordenadas:", coordenadas);

    if (origin && destination && idEmpresa) {
      // Realizar la solicitud al servidor aquí
      fetch("http://localhost:3000/travel/newTravel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coordenadas),
      })
        .then((response) => {
          if (response.ok) {
            // Realizar acciones adicionales si la solicitud fue exitosa
          }
        })
        .catch((error) => {
          console.error("Error al enviar datos al servidor:", error);
        });
    }
  };

  //Estilos y valores por defecto para el mapa
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  //Ubicación por defecto sobre Fsa
  const defaultLocation = {
    lat: -26.1844,
    lng: -58.1736,
  };

  const defaultZoom = 13;

  const googleMapsApiKey = "AIzaSyAdfrKnsern-zn80h22lDBl00D2z51J_h8";
  return (
    <form action="" onSubmit={handleConfirmLocation}>
      {!origin && (
        <Button variant="primary" onClick={handleOpenModal}>
          Seleccionar Ubicación
        </Button>
      )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{origin ? "Destino" : "Origen"}</Modal.Title>
          <Button
            variant="info"
            onClick={handleFindMyLocation}
          >
            Encontrar mi ubicación
          </Button>
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
            <p>
              Distancia entre puntos:{" "}
              {distance ? `${distance} km` : "Calculando..."}
            </p>
            {origin &&
              destination && ( //Aquí iría el botón de pedir remis y la lógica para enviar la petición
                //  <Button variant="success" onClick={handleConfirmLocation}>Confirmar ubicación</Button>
                <Button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  Cargar empresas
                </Button>
              )}
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      
      {/* Renderiza la lista de empresas disponibles si se confirma la ubicación */}

      <div
        className="offcanvas offcanvas-start overflow-y-auto"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Empresas disponibles
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img
              src="/img/remises libertad.jpg"
              alt="Remises Libertad"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Remises Libertad</h5>
              <p className="card-text">Av. Gutnisky 2133</p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Solicitar viaje
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                style={{zIndex:'1051'}}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-x d-flex">
                  <div className="modal-content overflow-y-auto">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Sala de espera...
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        data-bs-backdrop="static"
                        aria-label="Close"
                        onClick={() => handleSolicitarViaje(1)}
                      ></button>
                    </div>

                    <div className="modal-footer justify-content-between">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        User 1
                      </h1>

                      <div></div>

                      <button type="button" className="btn btn-danger">
                        Cancelar pedido
                      </button>
                    </div>
                    <div>
                      <img src="/img/user.jpg" width={"100px"} alt="" />
                      <h4>Pedido de viaje </h4>
                      <i>
                        El pedido de tu viaje ha pasado a manos de los choferes
                        que estan disponibles, espera ha la confirmación de un
                        chofer y luego confirma pago del viaje.
                      </i>
                    </div>
                    <div className="modal-body">
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>

              <p className="monto-aproximado">
                Monto aproximado: ${montoRealLibertad || "Calculando..."}
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="/img/remises montecarlo.jpg" alt="Remises Montecarlo" />
            <div className="card-body">
              <h5 className="card-title">Remises Montecarlo</h5>
              <p className="card-text">Trinidad González 629, P3600 Formosa</p>
              <button
                className="btn btn-primary"
                onClick={() => handleSolicitarViaje(2)}
              >
                Solicitar Viaje
              </button>
              <p className="monto-aproximado">
                Monto aproximado: ${montoRealMontecarlo || "Calculando..."}
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src="/img/remises napoleón.jpg" alt="Remises Napoleón" />
            <div className="card-body">
              <h5 className="card-title">Remises Napoleón</h5>
              <p className="card-text">
                Av. Napoleón Uriburu 1645, P3600 DQY, Formosa.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleSolicitarViaje(3)}
              >
                Solicitar Viaje
              </button>
              <p className="monto-aproximado">
                Monto aproximado: ${montoRealNapoleon || "Calculando..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PasajeroView;
