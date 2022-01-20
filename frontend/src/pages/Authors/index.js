import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import "./styles.css";

function Authors() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://educa-mais.herokuapp.com/author`)
        .then((response) => {
            setAuthors(response.data);
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
                <div className="authors">
                    <h1>Autores</h1>
                    <Link to="/autor/adicionar">Novo autor</Link>
                    <div className="authors-list">
                        {
                            authors.map((data) => {
                                return (
                                    <Card 
                                        key={data.id} 
                                        id={data.id}
                                        title={data.name}
                                        image=""
                                        showOptions={true}
                                        editLink={`/autor/editar?id=${data.id}`}
                                        deleteLink={`/autor/excluir?id=${data.id}`}
                                        showLink={`/autor/detalhes?id=${data.id}`}
                                        entity="autor"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
    }

    return (
        <div className="container-authors">
            <Sidebar />
            {content}
        </div>
    )
}

export default Authors;