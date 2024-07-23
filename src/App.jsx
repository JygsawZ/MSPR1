import React from "react";
import './App.css'
import { Header } from "./component/Header";
import {Accueil} from "./pages/Accueil.jsx";
import {Footer} from "./component/Footer.jsx";

export default function App() {
    return (
        <React.Fragment>
            <div className="bg-black">
                <Header />
                <Accueil />
                <Footer />
            </div>
        </React.Fragment>
    )
}