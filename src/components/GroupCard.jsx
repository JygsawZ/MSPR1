import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtisteList = () => {
    const [artistes, setArtistes] = useState([]);

    useEffect(() => {
        const fetchArtistes = async () => {
            try {
                const response = await axios.get('http://localhost/corefeast/wp-json/artiste/v1/all');
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
                        <div key={artiste.id} className="p-8">
                            <div className="card bg-base-100 shadow-xl lg:card-side">
                                <figure>
                                    <img className="w-full"
                                         src="/landmvrks.jpg"
                                         alt="Landmvrks"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{artiste.groupeName}
                                        <div className="badge badge-secondary">{artiste.tags}</div>
                                    </h2>
                                    <p className="mx-10">Jour 1</p>
                                    <p className="mx-10">19h00</p>
                                    <p className="mx-10">Main Stage</p>
                                    <div className="card-actions justify-end">
                                        <div className="collapse bg-black">
                                            <input type="checkbox" className="peer"/>
                                            <div
                                                className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                                                Description
                                            </div>
                                            <div
                                                className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                                                <p id="description">{artiste.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun artiste trouvé.</p>
                )}
            </div>
        </React.Fragment>
    )
};

export default ArtisteList;
