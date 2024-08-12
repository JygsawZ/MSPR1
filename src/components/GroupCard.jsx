import React from 'react';

const GroupCard = ({ artiste }) => {
    return (
        <React.Fragment>
            <div className="p-8">
                <div className="card bg-base-100 shadow-xl lg:card-side">
                    <figure>
                        <img className="w-full"
                             src="/landmvrks.jpg"
                             alt="Landmvrks"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{artiste.artiste}
                            <div className="badge badge-secondary">{artiste.tag}</div>
                        </h2>
                        <div className="mx-10">{artiste.jour}</div>
                        <div className="mx-10">{artiste.heure}</div>
                        <div className="mx-10">Scène {artiste.scene}</div>
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
        </React.Fragment>
    );
};

export default GroupCard;