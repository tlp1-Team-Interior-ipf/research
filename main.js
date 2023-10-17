const getLocationButton = document.getElementById("getLocationButton");
const latitudeElement = document.getElementById("latitude");
const longitudeElement = document.getElementById("longitude");
const mapElement = document.getElementById("map");
let map;
let marker;

const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    latitudeElement.textContent = latitude;
    longitudeElement.textContent = longitude;

    // Crea un mapa Leaflet y establece la vista en la ubicación del usuario
    map = L.map('map').setView([latitude, longitude], 15);

    // Añade una capa de mapeo de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Coloca un marcador en la ubicación del usuario
    L.marker([latitude, longitude]).addTo(map).bindPopup("Origen.").openPopup();

    // agrega marcador al hacer clic en el mapa
map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    L.marker([lat, lng]).addTo(map).bindPopup("Destino").openPopup();
  });
};

const errorCallback = (error) => {
    console.error("Error al obtener la ubicación:", error.message);
};

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocalización no es compatible en este navegador.");
    }
};

getLocationButton.addEventListener("click", getLocation);
