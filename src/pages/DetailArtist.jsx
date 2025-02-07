import { useLocation } from "react-router-dom";
import React from "react";
import {Link} from "react-router-dom";

const DetailArtist = () => {
    const location = useLocation();
    const artiste = location.state?.artiste;

    if (!artiste) {
        return <p>Aucun artiste trouvé.</p>;
    }

    return (
        <React.Fragment>
            <div className="lg:px-52">
                <div className="p-4">
                    <div className="card bg-base-100 shadow-xl lg:card-normal">
                        <figure>
                            <img className="w-full"
                                 src={artiste.img_url}
                                 alt="image"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title md:text-2xl lg:text-4xl">{artiste.nom}
                                <div
                                    className="badge badge-neutral badge-xs sm:badge-sm md:badge-md">{artiste.tag}</div>
                            </h2>
                            <div className="md:text-xl lg:text-2xl">{artiste.jour} - {artiste.heure}</div>
                            <div className="md:text-xl lg:text-2xl">Scène: {artiste.scene}</div>
                            <div className="card-actions justify-end">
                                <div className="collapse bg-black">
                                    <input type="checkbox" className="peer" defaultChecked/>
                                    <div
                                        className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content md:text-xl lg:text-2xl">
                                        Description
                                    </div>
                                    <div
                                        className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content md:text-xl lg:text-2xl">
                                        <p id="description">{artiste.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center p-4">
                                <button className="btn btn-outline">
                                    <Link to="../">Retour</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailArtist;
