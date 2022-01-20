import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Card from "../../components/Card";

import Sidebar from "../../components/Sidebar";

import "./styles.css"

function Resources() {

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://educa-mais.herokuapp.com/resource`)
        .then((response) => {
            setResources(response.data);
        })
        .finally((response) => {
            setLoading(false);
        });

    }, []);

    let content;

    if (loading) {

        content = 
            <div className="loading">
                <p>Carregando...</p>
            </div>

    } else {

        content = 
                <div className="resources">
                    <h1>Recursos</h1>
                    <Link to="/recurso/adicionar">Novo recurso</Link>
                    <div className="resources-list">
                        {
                            resources.map((data) => {
                                return (
                                    <Card 
                                        key={data.id} 
                                        title={data.title}
                                        image={data.image}
                                        editLink={`/recurso/editar?id=${data.id}`}
                                        deleteLink={`/recurso/excluir?id=${data.id}`}
                                        showLink={`/recurso/detalhes?id=${data.id}`}
                                        entity="recurso"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
    }

    return (
        <div className="container-resource">
            <Sidebar />
            {content}
            
        </div>
    )
}

export default Resources;