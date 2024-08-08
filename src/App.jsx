// src/App.jsx
import React from "react";
import './App.css';
import { Header } from "./components/Header.jsx";
import { Accueil } from "./pages/Accueil.jsx";
import { Footer } from "./components/Footer.jsx";
import PostList from "./components/PostList.jsx";

export default function App() {
    return (
        <React.Fragment>
            <div className="bg-black">
                <Header />
                <Accueil />
                <Footer />
            </div>
            <PostList />
        </React.Fragment>
    );
}