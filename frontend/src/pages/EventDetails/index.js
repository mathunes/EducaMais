import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function EventDetails(props) {

    const [idEvent, setIdEvent] = useState(0);
    const [event, setEvent] = useState({});
    const [eventResources, setEventResources] = useState([]);

    useEffect(() => {
        
        setIdEvent(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/event/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setEvent(response.data);
                setEventResources(response.data.resources);
            });

    }, []);

    return (
        <div className="container-event-details">
            <Sidebar />
            <div className="event-details">

                <h1>Detalhes evento</h1>
                
                <img src={event.image ? `data:image/png;base64,${event.image}` : ImageDefault} alt="representation" />

                <div className="event-details-content">

                    <div className="event-details-header">
                        <h2>{event.title}</h2>

                        <div>
                            <Link to={`/evento/editar?id=${idEvent}`}>
                                <img src={Edit} alt="edit" />
                            </Link>
                        </div>
                    </div>

                    <p className="event-description">{event.description}</p>

                    <h2 className="resources">Recursos</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Recurso</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            eventResources.map((resource) => {
                                return (
                                    <tr key={resource.id}>
                                        <td>{resource.title}</td>
                                        <td>{resource.description}</td>
                                        <td><Link to={`/recurso/detalhes?id=${resource.id}`}>Ver mais</Link></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <p className="dates">Data início {event.startDate} - data fim {event.endDate}</p>

                </div>
            </div>
        </div>
    )
}

export default EventDetails;