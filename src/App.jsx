// src/App.jsx
import React from "react";
import './App.css';
import { Header } from "./components/Header.jsx";
import { Accueil } from "./pages/Accueil.jsx";
import { Footer } from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import {Programmation} from "./pages/Programmation.jsx";
import InteractiveMap from "./components/InteractiveMap.jsx";
import {HelmetProvider} from "react-helmet-async";

export default function App() {
    return (
        <React.Fragment>
            <HelmetProvider>
            <div className="bg-black">
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />}/>
                    <Route path="/programmation" element={<Programmation />}/>
                    <Route path="/plan" element={<InteractiveMap />}/>
                </Routes>
                <Footer />
            </div>
            </HelmetProvider>
        </React.Fragment>
    );
}