import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupCard from './GroupCard'; // Composant affichant les détails d'un artiste.
import {BASE_URL} from "../config/config.jsx"; // URL de base pour les requêtes API.

const GroupList = () => {
    // État pour stocker la liste des artistes récupérés depuis l'API
    const [artistes, setArtistes] = useState([]);
    // État pour suivre le jour sélectionné pour le filtrage ('Tous' par défaut)
    const [selectedDay, setSelectedDay] = useState('Tous');

    // useEffect est utilisé pour exécuter du code après que le composant est monté
    useEffect(() => {
        // Fonction asynchrone pour récupérer les artistes depuis l'API
        const fetchArtistes = async () => {
            try {
                // Requête HTTP GET pour récupérer la liste des artistes
                const response = await axios.get(`${BASE_URL}/corefeast-wp/wp-json/custom/v1/artistes`);

                // Ordres personnalisés pour trier les artistes par jour et par heure
                const order = { 'Vendredi': 1, 'Samedi': 2, 'Dimanche': 3 }; // Ordre des jours
                const hourOrder = {'17h00': 1, '18h30': 2, '20h00': 3, '21h30': 4, '23h00': 5, '1h30': 6}; // Ordre des heures

                // Tri des artistes par jour puis par heure
                const sortedArtistes = response.data.sort((a, b) => {
                    if (order[a.jour] !== order[b.jour]) {
                        return order[a.jour] - order[b.jour]; // Tri par jour
                    }
                    return hourOrder[a.heure] - hourOrder[b.heure]; // Tri par heure
                });

                // Mise à jour de l'état des artistes avec la liste triée
                setArtistes(sortedArtistes);
            } catch (error) {
                console.error("Il y a eu une erreur lors de la récupération des artistes :", error); // Gestion des erreurs
            }
        };

        fetchArtistes(); // Appel de la fonction pour récupérer les artistes
    }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une seule fois au montage du composant

    // Filtrage des artistes selon le jour sélectionné ('Tous' affiche tous les artistes)
    const filteredArtistes = selectedDay === 'Tous' ? artistes : artistes.filter(artiste => artiste.jour === selectedDay);

    // Groupement des artistes par jour pour un affichage organisé
    const groupedArtistes = filteredArtistes.reduce((acc, artiste) => {
        if (!acc[artiste.jour]) {
            acc[artiste.jour] = []; // Initialisation de la liste pour ce jour s'il n'existe pas
        }
        acc[artiste.jour].push(artiste); // Ajout de l'artiste à la liste du jour correspondant
        return acc;
    }, {}); // L'accumulateur `acc` est un objet vide au début

    return (
        <React.Fragment>
            <div className="lg:px-52"> {/* Conteneur principal avec une marge sur les grands écrans */}
                <div className="flex justify-center ">
                    {/* Boutons pour sélectionner le jour à afficher, changeant l'état selectedDay */}
                    {['Tous', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                        <button
                            key={day}
                            className={`btn btn-xs mx-1 sm:btn-sm md:btn-md lg:btn-lg md:mx-2 ${selectedDay === day ? 'border-white bg-black text-white' : ''}`}
                            onClick={() => setSelectedDay(day)} // Mise à jour de l'état lors du clic
                        >
                            {day}
                        </button>
                    ))}
                </div>
                {/* Affichage des artistes groupés par jour */}
                {Object.keys(groupedArtistes).map(day => (
                    <div key={day}>
                        {/* Affichage du titre de chaque jour avec une ligne de séparation */}
                        <span className="relative flex justify-center bg-black p-4">
                            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"></div>
                            <span className="relative z-10 bg-black px-6 text-white md:text-2xl lg:text-4xl">{day}</span>
                        </span>
                        {/* Pour chaque artiste dans le groupe du jour, on affiche une GroupCard */}
                        {groupedArtistes[day].map(artiste => (
                            <GroupCard key={artiste.ID} artiste={artiste} /> // Affichage des détails de chaque artiste
                        ))}
                    </div>
                ))}
                {/* Si aucun artiste n'est trouvé, affichage d'un message d'alerte */}
                {filteredArtistes.length === 0 && <p>Aucun artiste trouvé.</p>}
            </div>
        </React.Fragment>
    );
};

export default GroupList; // Exportation du composant pour l'utiliser dans d'autres parties de l'application