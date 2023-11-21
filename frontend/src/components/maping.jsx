import React from "react"
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

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyBIU9huG_veXQ68gdNzVaTD5HKRfK31uWo',
    libraries,
  })

  if (loadError){
    return <div>Error al cargar el mapa</div>
  };

  if (!isLoaded) {
    return <div>Cargando Mapa</div>
  };

  return(
    <div className="m-1">
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      >
        <Marker position={center}/>
      </GoogleMap>
    </div>
  )
    

}

export default Maping