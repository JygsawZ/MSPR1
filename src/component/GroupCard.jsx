import React from "react";

export const GroupCard = () => {
    return (
        <React.Fragment>
            <div className="p-8">
                <div className="card bg-base-100 shadow-xl lg:card-side">
                    <figure>
                        <img className="w-full"
                            src="/public/landmvrks.jpg"
                            alt="Landmvrks"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Landmvrks
                            <div className="badge badge-secondary">🥐</div>
                        </h2>
                        <p className="mx-10">Jour 1</p>
                        <p className="mx-10">19h00</p>
                        <p className="mx-10">Main Stage</p>
                        <div className="card-actions justify-end">
                            <div className="collapse bg-black">
                                <input type="checkbox" className="peer"/>
                                <div
                                    className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                                    Description
                                </div>
                                <div
                                    className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                                    <p id="description">Groupe de metalcore français, originaire de Marseille. Formé en 2014, le groupe
                                        se définit comme évoluant dans le style metalcore/punk hardcore qui alterne des
                                        riffs ouvertement violents avec des leads aériens sans rien sacrifier au
                                        groove.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}