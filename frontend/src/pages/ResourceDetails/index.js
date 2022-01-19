import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

import ImageDefault from "../../assets/images/image-default.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function ResourceDetails(props) {

    const [idResource, setIdResource] = useState();

    // useEffect(() => {
    //     const result = new URLSearchParams(window.location.search)
    //     console.log(result)
    //     // setIdResource(props.match.params.id);

    //     console.log(idResource);
    // }, []);

    return (
        <div className="container-resource-details">
            <Sidebar />
            <div className="resource-details">

                <h1>Detalhes recurso</h1>
                
                <img src={ImageDefault} alt="representation" />

                <div className="resource-details-content">

                    <div className="resource-details-header">
                        <h2>Título</h2>

                        <div>
                            <img src={Edit} alt="edit" />
                            <a href="#">Acessar recurso</a>
                        </div>
                    </div>

                    <div className="resource-details-keywords">
                        <p>Palavra 1</p>
                        <p>Palavra 2</p>
                    </div>

                    <p className="resource-description">Descrição lorem ipsum</p>

                    <h2 className="authors">Autores</h2>

                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Afiliação</th>
                            <th>Orcid</th>
                        </tr>
                        <tr>
                            <td>João</td>
                            <td>Mendes</td>
                            <td>joao@email.com</td>
                            <td>afiliação</td>
                            <td>123456</td>
                        </tr>
                    </table>
                    
                    <h2 className="collection">Coleção</h2>

                    <p>Nome da coleção</p>

                    <p className="dates">Criado em 12/12/2021 - Registrado em 12/12/2021</p>

                </div>
            </div>
        </div>
    )
}

export default ResourceDetails;