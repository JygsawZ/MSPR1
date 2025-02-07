import React from 'react';
import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom';

const GroupCard = ({ artiste }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artiste/${artiste.ID}`, { state: { artiste } });
    };

    return (
        <React.Fragment>
            <div className="p-4">
                <div className="card bg-base-100 shadow-xl lg:card-normal" onClick={handleClick}>
                    <figure>
                        <img className="w-full"
                             src={artiste.img_url}
                             alt="image"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title md:text-2xl lg:text-4xl">{artiste.nom}
                            <div className="badge badge-neutral badge-xs sm:badge-sm md:badge-md">{artiste.tag}</div>
                        </h2>
                        <div className="md:text-xl lg:text-2xl">{artiste.jour} - {artiste.heure}</div>
                        <div className="md:text-xl lg:text-2xl">Scène: {artiste.scene}</div>
                        <div className="card-actions justify-end">
                            <div className="collapse bg-black">
                                <input type="checkbox" className="peer"/>
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

GroupCard.propTypes = {
    artiste: PropTypes.shape({
        ID: PropTypes.string.isRequired,
        nom: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        jour: PropTypes.string.isRequired,
        heure: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        scene: PropTypes.string.isRequired,
        img_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default GroupCard;
