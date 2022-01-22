import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function AuthorDetails(props) {

    const [idAuthor, setIdAuthor] = useState(0);
    const [author, setAuthor] = useState({});
    const [authorResources, setAuthorResources] = useState([]);

    useEffect(() => {
        
        setIdAuthor(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/author/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setAuthor(response.data);
            });

        axios.get(`https://educa-mais.herokuapp.com/resource/author/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setAuthorResources(response.data);
            });

    }, []);

    return (
        <div className="container-author-details">
            <Sidebar />
            <div className="author-details">

                <h1>Detalhes autor</h1>
                
                <img src={ImageDefault} alt="representation" />

                <div className="author-details-content">

                    <div className="author-details-header">
                        <h2>{author.name} {author.lastName}</h2>

                        <div>
                            <Link to={`/autor/editar?id=${idAuthor}`}>
                                <img src={Edit} alt="edit" />
                            </Link>
                            <a href={`mailto:${author.email}`} rel="noopener noreferrer" className="link-author" target="_blank">Enviar email</a>
                        </div>
                    </div>

                    <p className="author-description">Afiliação: {author.affiliation}</p>
                    <p className="author-description">Orcid: {author.orcid}</p>

                    <h2 className="resources">Recurso</h2>

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
                            authorResources.map((resource) => {
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

                </div>
            </div>
        </div>
    )
}

export default AuthorDetails;