import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importation des icônes personnalisées
import sceneIconUrl from '/assets/icons/scene.png';
import toilettesIconUrl from '/assets/icons/toilettes.png';
import restaurantIconUrl from '/assets/icons/restaurant.png';
import campingIconUrl from '/assets/icons/camping.png';

// Configuration des icônes personnalisées
const sceneIcon = new L.Icon({
    iconUrl: sceneIconUrl,
    iconSize: [32, 32], // Taille de l'icône
    iconAnchor: [16, 32], // Point d'ancrage de l'icône
});

const toilettesIcon = new L.Icon({
    iconUrl: toilettesIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const restaurantIcon = new L.Icon({
    iconUrl: restaurantIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const campingIcon = new L.Icon({
    iconUrl: campingIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const pointsOfInterest = [
    { id: 1, name: 'Scène: Chaos', position: [48.8592, 2.3845], icon: sceneIcon },
    { id: 2, name: 'Scène: Carnage', position: [48.8593, 2.3850], icon: sceneIcon },
    { id: 3, name: 'Toilettes', position: [48.8597, 2.3851], icon: toilettesIcon },
    { id: 4, name: 'Restaurant', position: [48.8596, 2.3845], icon: restaurantIcon },
    { id: 5, name: 'Camping', position: [48.8601, 2.3850], icon: campingIcon },
];

const InteractiveMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            map.on('locationfound', (e) => {
                L.marker(e.latlng).addTo(map).bindPopup('Vous êtes ici').openPopup();
                map.setView(e.latlng, 13);
            });
        }
    }, [map]);

    const handleGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                    if (map) {
                        map.locate({ setView: true, maxZoom: 16 });
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            alert('La géolocalisation n\'est pas supportée par votre navigateur.');
        }
    };

    return (
        <React.Fragment>
            <div>
                <span className="relative flex justify-center bg-black p-4">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"></div>
                    <span className="relative z-10 bg-black px-6 text-white md:text-2xl lg:text-4xl">Plan du festival</span>
                </span>
            </div>
            <div className="flex h-96 flex-col rounded-b p-2 lg:px-52">
                <MapContainer
                    center={[48.859607002831574, 2.3845481224854352]} // Coordonnées de l'exemple  48.859607002831574, 2.3845
                    zoom={17}
                    style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                    whenCreated={setMap}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Affichage des points d'intérêt avec les icônes personnalisées */}
                    {pointsOfInterest.map((poi) => (
                        <Marker key={poi.id} position={poi.position} icon={poi.icon}>
                            <Popup>{poi.name}</Popup>
                        </Marker>
                    ))}

                    {userLocation && (
                        <Marker position={userLocation}>
                            <Popup>Vous êtes ici</Popup>
                        </Marker>
                    )}
                </MapContainer>

                {/* Bouton Localiser */}
                <div className="flex justify-center p-4">
                    <button
                        className="btn-white btn"
                        onClick={handleGeolocation}
                    >
                        Me Localiser
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InteractiveMap;