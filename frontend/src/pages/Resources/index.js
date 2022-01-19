import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

import Sidebar from "../../components/Sidebar";

import "./styles.css"

function Resources() {
    return (
        <div className="container-resource">
            <Sidebar />
            <div className="resources">
                <h1>Recursos</h1>
                <Link to="/recursos/adicionar">Novo recurso</Link>
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