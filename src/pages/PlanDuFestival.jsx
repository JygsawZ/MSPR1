import React from 'react';
import InteractiveMap from "../components/InteractiveMap.jsx";
import {Helmet} from "react-helmet-async";

export const Programmation = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Plan du Festival - Corefeast</title>
                <meta name="description" content="Explorez le plan du festival pour ne rien manquer de votre expérience." />
                <meta property="og:title" content="Plan du Festival - Corefeast" />
                <meta property="og:description" content="Découvrez le plan du site du festival pour vous orienter facilement." />
                <meta property="og:image" content="https://votredomaine.com/images/plan-banner.jpg" />
                <meta property="og:url" content="https://votredomaine.com/plan" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="flex justify-center bg-black">
                <InteractiveMap />
            </div>
        </React.Fragment>
    )
}