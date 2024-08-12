import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupCard from './GroupCard';

const GroupList = () => {
    const [artistes, setArtistes] = useState([]);

    useEffect(() => {
        const fetchArtistes = async () => {
            try {
                const response = await axios.get('http://corefeast-festival.local/wp-json/custom/v1/artistes');
                setArtistes(response.data);
            } catch (error) {
                console.error("Il y a eu une erreur lors de la récupération des artistes :", error);
            }
        };

        fetchArtistes();
    }, []);

    return (
        <React.Fragment>
            <div>
                <h1>Liste des Artistes</h1>
                {artistes.length > 0 ? (
                    artistes.map(artiste => (
                        <GroupCard key={artiste.ID} artiste={artiste} />
                    ))
                ) : (
                    <p>Aucun artiste trouvé.</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default GroupList;