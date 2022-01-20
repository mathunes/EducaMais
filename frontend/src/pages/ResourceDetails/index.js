import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function ResourceDetails(props) {

    const [idResource, setIdResource] = useState(0);
    const [resource, setResource] = useState({});
    const [resourceKeyWords, setResourceKeyWords] = useState([]);
    const [resourceAuthors, setResourceAuthors] = useState([]);

    useEffect(() => {
        
        setIdResource(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/resource/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setResource(response.data);
                setResourceKeyWords(response.data.keyWord);
                setResourceAuthors(response.data.authors);
            });

    }, []);

    return (
        <div className="container-resource-details">
            <Sidebar />
            <div className="resource-details">

                <h1>Detalhes recurso</h1>
                
                <img src={resource.image ? `data:image/png;base64,${resource.image}` : ImageDefault} alt="representation" />

                <div className="resource-details-content">

                    <div className="resource-details-header">
                        <h2>{resource.title}</h2>

                        <div>
                            <Link to={`/recurso/editar?id=${idResource}`}>
                                <img src={Edit} alt="edit" />
                            </Link>
                            <a href={resource.link} rel="noopener noreferrer" className="link-resource" target="_blank">Acessar recurso</a>
                        </div>
                    </div>

                    <div className="resource-details-keywords">
                        {
                            resourceKeyWords.map((word) => {
                                return (
                                    <p key={word}>{word}</p>
                                )
                            })
                        }
                    </div>

                    <p className="resource-description">{resource.description}</p>

                    <h2 className="authors">Autores</h2>

                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Afiliação</th>
                            <th>Orcid</th>
                        </tr>
                        {
                            resourceAuthors.map((author) => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.name}</td>
                                        <td>{author.lastName}</td>
                                        <td>{author.email}</td>
                                        <td>{author.affiliation}</td>
                                        <td>{author.orcid}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
{/*                     
                    <h2 className="collection">Coleção</h2>

                    <p>Nome da coleção</p> */}

                    <p className="dates">Criado em {resource.createdAt} - Registrado em {resource.registeredAt}</p>

                </div>
            </div>
        </div>
    )
}

export default ResourceDetails;