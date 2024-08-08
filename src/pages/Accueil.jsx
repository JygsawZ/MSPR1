import React from "react";
import ArtisteList from "../components/GroupCard.jsx";

export const Accueil = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center bg-black">
                <ArtisteList />
            </div>
        </React.Fragment>
    )
}


