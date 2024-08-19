import React from "react";
import { Helmet } from 'react-helmet-async';
import GroupList from "../components/GroupList.jsx";
import InteractiveMap from "../components/InteractiveMap.jsx";

export const Accueil = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Accueil - Corefeast Festival</title>
                <meta name="description" content="Bienvenue au Corefeast Festival, plongez dans l'univers du metalcore, deathcore et hardcore avec des concerts explosifs et une énergie brute." />
                <meta property="og:title" content="Accueil - Corefeast Festival" />
                <meta property="og:description" content="Rejoignez-nous pour un week-end de concerts explosifs avec les meilleurs groupes de metalcore, deathcore et hardcore." />
                <meta property="og:image" content="https://votredomaine.com/images/corefeast-banner.jpg" />
                <meta property="og:url" content="https://votredomaine.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="flex-col justify-items-center">
                <div className="flex-col py-4 text-center text-2xl text-white md:text-4xl lg:text-6xl">
                    <h2 className="font-bold">Bienvenue au Corefeast ! </h2>
                </div>
                <div className="mx-8 flex-col justify-items-center px-2 py-8 text-white md:text-xl lg:text-3xl">
                    <div>
                        Plonge dans l&apos;univers intense du metalcore, deathcore et hardcore ! Prépare-toi à vivre des
                        concerts explosifs avec les meilleurs groupes de la scène, des mosh pits déchaînés et une
                        énergie brute à couper le souffle. Que tu viennes pour voir tes artistes préférés ou découvrir
                        de nouvelles légendes, ce festival est une immersion totale dans la musique extrême.
                    </div>
                    <br/>
                    <div>
                        Rejoins-nous pour un week-end de pur plaisir, de passion, et d&apos;adrénaline. Le chaos n’attend
                        plus que toi !
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-black">
                <GroupList />
            </div>
            <div>
                <InteractiveMap />
            </div>
        </React.Fragment>
    )
}


