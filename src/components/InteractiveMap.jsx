import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const pointsOfInterest = [
    { id: 1, name: 'Scène: Chaos', position: [48.8592, 2.3845] },
    { id: 2, name: 'Scène: Carnage', position: [48.8593, 2.3850] },
    { id: 3, name: 'Toilettes', position: [48.8597, 2.3851] },
    { id: 4, name: 'Restaurant', position: [48.8596, 2.3845] },
    { id: 5, name: 'Camping', position: [48.8601, 2.3850] },
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
                    center={[48.8566, 2.3522]} // Coordonnées de l'exemple
                    zoom={13}
                    style={{height: '100%', width: '100%', borderRadius: '10px'}}
                    whenCreated={setMap}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {pointsOfInterest.map((poi) => (
                        <Marker key={poi.id} position={poi.position}>
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
                <div className="flex justify-items-center p-4">
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