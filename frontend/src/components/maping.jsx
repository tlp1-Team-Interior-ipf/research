import React, { useState } from "react"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const libraries = ['places'];
const mapContainerStyle = {
  width: '300px',
  height: '300px'
};
const center = {
  lat: -26.186050,
  lng: -58.180545,
};

const Maping = () => {
  
  const [markers, setMarkers] = useState([])
  const [distance, setDistance] = useState(null)
  const [ApiLoaded, setApiLoaded] = useState(false)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyBIU9huG_veXQ68gdNzVaTD5HKRfK31uWo',
    libraries,
    onLoad: () => setApiLoaded(true)
  })

  const calculateDistance = () => {

    if(ApiLoaded && markers.length === 2) {
      
      const [marker1, marker2] = markers;
      const latLng1 = new window.google.maps.LatLng(marker1.lat, marker1.lng);
      const latLng2 = new window.google.maps.LatLng(marker2.lat, marker2.lng);
       
      if (window.google.maps.geometry && window.google.maps.geometry.spherical){
        const distance = new window.google.maps.geometry.spherical.computeDistanceBetween(latLng1, latLng2);
        setDistance(distance.toFixed(2));

      } else {
        alert('La biblioteca de geometría no está disponible');
      }

    } else {
      setDistance(null);

      if(!ApiLoaded){
        alert('La biblioteca de geometría no está disponible2');
        console.log(ApiLoaded)

      } else {
        alert('Agrega dos puntos para calcular la distancia')
      }
    }
  }  

  

  const onMapClick = (e) => {

    if(markers.length < 2) {

      setMarkers([...markers, {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }])
    } else {
      alert('Solo puedes agregar dos puntos en el mapa')
    }
  }

  if (loadError){
    return <div>Error al cargar el mapa</div>
  };

  if (!isLoaded) {
    return <div>Cargando Mapa</div>
  };

  return(
    <div className="m-1 ">
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      onClick={onMapClick}
      >
        {markers.map((marker, index) => (
        <Marker key={index} position={marker}/>
        ))}
      </GoogleMap>

      <button 
      className="btn btn-success" 
        onClick={calculateDistance}>Calcular distancia
      </button>

      {distance && <p>Distancia entre puntos: {distance} metros</p>}
    </div>
  )
    

}

export default Maping