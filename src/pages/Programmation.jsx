import React from 'react';
import GroupList from "../components/GroupList.jsx";
import {Helmet} from "react-helmet-async";

export const Programmation = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Programmation - Corefeast Festival</title>
                <meta name="description" content="Découvrez la programmation du Corefeast Festival avec les meilleurs groupes de metalcore, deathcore et hardcore." />
                <meta property="og:title" content="Programmation - Corefeast Festival" />
                <meta property="og:description" content="Ne manquez aucun concert avec la programmation complète du festival." />
                <meta property="og:image" content="https://votredomaine.com/images/programmation-banner.jpg" />
                <meta property="og:url" content="https://votredomaine.com/programmation" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="flex justify-center bg-black">
                <GroupList/>
            </div>
        </React.Fragment>
    )
}