import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupCard from './GroupCard';
import {BASE_URL} from "../config/config.jsx";

const GroupList = () => {
    const [artistes, setArtistes] = useState([]);
    const [selectedDay, setSelectedDay] = useState('Tous');

    useEffect(() => {
        const fetchArtistes = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/corefeast-wp/wp-json/custom/v1/artistes`);
                const order = { 'Vendredi': 1, 'Samedi': 2, 'Dimanche': 3 };
                const hourOrder = {'17h00': 1, '18h30': 2, '20h00': 3, '21h30': 4, '23h00': 5, '1h30': 6};

                const sortedArtistes = response.data.sort((a, b) => {
                    if (order[a.jour] !== order[b.jour]) {
                        return order[a.jour] - order[b.jour];
                    }
                    return hourOrder[a.heure] - hourOrder[b.heure];
                });

                setArtistes(sortedArtistes);
            } catch (error) {
                console.error("Il y a eu une erreur lors de la récupération des artistes :", error);
            }
        };

        fetchArtistes();
    }, []);

    const filteredArtistes = selectedDay === 'Tous' ? artistes : artistes.filter(artiste => artiste.jour === selectedDay);

    const groupedArtistes = filteredArtistes.reduce((acc, artiste) => {
        if (!acc[artiste.jour]) {
            acc[artiste.jour] = [];
        }
        acc[artiste.jour].push(artiste);
        return acc;
    }, {});

    return (
        <React.Fragment>
            <div className="lg:px-52">
                <div className="flex justify-center ">
                    {['Tous', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                        <button
                            key={day}
                            className={`btn btn-xs mx-1 sm:btn-sm md:btn-md lg:btn-lg md:mx-2 ${selectedDay === day ? 'border-white bg-black text-white' : ''}`}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
                {Object.keys(groupedArtistes).map(day => (
                    <div key={day}>
                        <span className="relative flex justify-center bg-black p-4">
                            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"></div>
                            <span className="relative z-10 bg-black px-6 text-white md:text-2xl lg:text-4xl">{day}</span>
                        </span>
                        {groupedArtistes[day].map(artiste => (
                            <GroupCard key={artiste.ID} artiste={artiste} />
                        ))}
                    </div>
                ))}
                {filteredArtistes.length === 0 && <p>Aucun artiste trouvé.</p>}
            </div>
        </React.Fragment>
    );
};

export default GroupList;