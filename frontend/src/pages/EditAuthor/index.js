import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

function EditAuthor() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");    
    const [affiliation, setAffiliation] = useState("");
    const [orcid, setOrcid] = useState("");
    const [idAuthor, setIdAuthor] = useState(0);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
       
        setIdAuthor(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/author/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setEmail(response.data.email);
                setName(response.data.name);
                setLastname(response.data.lastName);
                setAffiliation(response.data.affiliation);
                setOrcid(response.data.orcid);
            });

    }, []);

    const putAuthor = (e) => {
        e.preventDefault();

        axios.put(`https://educa-mais.herokuapp.com/author`, {
            "id": idAuthor,
            "email": email,
            "name": name,
            "lastName": lastname,
            "affiliation": affiliation,
            "orcid": orcid
        }).then((response) => {
            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/autor/detalhes?id=${idAuthor}`} />
    }

    return (
        <div className="container-edit-author">
            <Sidebar />
            <div className="edit-author">
                <h1>Editar autor</h1>

                <div className="edit-author-content">

                    <form className="edit-author-form" onSubmit={putAuthor}>
                        <label for="name">Nome</label>
                        <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        
                        <label for="lastname">Sobrenome</label>
                        <input id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>

                        <label for="email">Email</label>
                        <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                        <label for="affiliation">Afiliação</label>
                        <input id="affiliation" name="affiliation" value={affiliation} onChange={(e) => setAffiliation(e.target.value)} required/>

                        <label for="orcid">Orcid</label>
                        <input id="orcid" name="orcid" value={orcid} onChange={(e) => setOrcid(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default EditAuthor;