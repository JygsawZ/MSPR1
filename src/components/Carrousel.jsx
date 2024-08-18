import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carrousel = () => {
    const [artistes, setArtistes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Récupération des données depuis l'API REST de WordPress
        axios.get('http://corefeast-festival.local/wp-json/custom/v1/artistes')
            .then(response => {
                setArtistes(response.data);
            })
            .catch(error => {
                console.error("Il y a eu un problème avec la récupération des artistes :", error);
            });
    }, []);

    useEffect(() => {
        // Défilement automatique des images toutes les 5 secondes
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % artistes.length);
        }, 5000);

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, [artistes]);

    // Fonction pour aller à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artistes.length);
    };

    // Fonction pour aller à l'image précédente
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + artistes.length) % artistes.length);
    };

    return (
        <React.Fragment>
            <div className="flex flex-col items-center p-4">
                <div className="relative carousel rounded-box p-4">
                    {artistes.length > 0 && (
                        <div className="carousel-item">
                            <img
                                src={artistes[currentIndex].img_url}
                                className="rounded-box max-h-80 object-contain"
                                alt={artistes[currentIndex].name}
                            />
                        </div>
                    )}
                </div>

                {/* Flèches sous le carrousel */}
                <div className="flex justify-center mt-4 space-x-4">
                    <button
                        className="btn btn-circle"
                        onClick={prevImage}
                    >
                        ❮
                    </button>
                    <button
                        className="btn btn-circle"
                        onClick={nextImage}
                    >
                        ❯
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Carrousel;