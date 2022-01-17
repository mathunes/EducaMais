import React from "react";
import Card from "../../components/Card";

import Sidebar from "../../components/Sidebar";

import "./styles.css"

function Resources() {
    return (
        <div className="container-resource">
            <Sidebar />
            <div className="resources">
                <h1>Recursos</h1>
                <a href="#">Novo recurso</a>
                <div className="resources-list">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Resources;