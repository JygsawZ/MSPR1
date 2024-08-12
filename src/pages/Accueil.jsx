import React from "react";
import GroupList from "../components/GroupList.jsx";

export const Accueil = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center bg-black">
                <GroupList />
            </div>
        </React.Fragment>
    )
}


