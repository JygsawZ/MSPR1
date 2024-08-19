import React from "react";
import {Link} from "react-router-dom";
import {BASE_URL} from "../config/config.jsx";

export const Header = () => {

    const handleFaqRedirect = () => {
        window.location.href = `${BASE_URL}/corefeast-wp/corefeast/`;
    };

    const handleStoreRedirect = () => {
        window.location.href = `${BASE_URL}/corefeast-wp/`;
    };


    return (
        <React.Fragment>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/programmation">Programmation</Link></li>
                            <li><Link to="/plan">Plan du festival</Link></li>
                            <li><a onClick={handleStoreRedirect}>Billeterie</a></li>
                            <li><a onClick={handleFaqRedirect}>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Corefeast</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/programmation">Programmation</Link></li>
                        <li><Link to="/plan">Plan du festival</Link></li>
                        <li><a onClick={handleStoreRedirect}>Billeterie</a></li>
                        <li><a onClick={handleFaqRedirect}>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline">Billeterie</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="max-h-32 max-w-full pt-8 md:max-h-60" src="/corefeast3.jpg" alt="logo"/>
            </div>
        </React.Fragment>
    )
}