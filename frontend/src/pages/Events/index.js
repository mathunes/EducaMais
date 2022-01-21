import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://educa-mais.herokuapp.com/event`)
        .then((response) => {
            setEvents(response.data);
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
                <div className="events">
                    <h1>Eventos</h1>
                    <Link to="/evento/adicionar">Novo evento</Link>
                    <div className="events-list">
                        {
                            events.map((data) => {
                                return (
                                    <Card 
                                        key={data.id} 
                                        id={data.id}
                                        title={data.title}
                                        image={data.image}
                                        showOptions={true}
                                        editLink={`/evento/editar?id=${data.id}`}
                                        deleteLink={`/evento/excluir?id=${data.id}`}
                                        showLink={`/evento/detalhes?id=${data.id}`}
                                        entity="evento"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
    }

    return (
        <div className="container-event">
            <Sidebar />
            {content}
        </div>
    )
}

export default Events;