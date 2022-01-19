import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Card from "../../components/Card";

import Sidebar from "../../components/Sidebar";

import "./styles.css"

function Resources() {

    const [resources, setResources] = useState([]);

    useEffect(() => {

        axios.get(`https://educa-mais.herokuapp.com/resource`)
        .then((response) => {
            setResources(response.data);
        });

    }, []);

    return (
        <div className="container-resource">
            <Sidebar />
            <div className="resources">
                <h1>Recursos</h1>
                <Link to="/recursos/adicionar">Novo recurso</Link>
                <div className="resources-list">
                    {
                        resources.map((data) => {
                            return (
                                <Card 
                                    key={data.id} 
                                    title={data.title}
                                    image={data.image}
                                    editLink={`/recurso/editar/${data.id}`}
                                    deleteLink={`/recurso/delete/${data.id}`}
                                    showLink={`/recurso/${data.id}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Resources;