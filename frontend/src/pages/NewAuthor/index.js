import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import './styles.css';

function NewAuthor() {
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");    
    const [affiliation, setAffiliation] = useState("");
    const [orcid, setOrcid] = useState("");
    const [idAuthor, setIdAuthor] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const postAuthor = (e) => {
        e.preventDefault();

        axios.post(`https://educa-mais.herokuapp.com/author`, {
            "email": email,
            "name": name,
            "lastName": lastname,
            "affiliation": affiliation,
            "orcid": orcid
        }).then((response) => {
            setIdAuthor(response.data.id);

            setRedirect(true);
        })

    }

    if (redirect) {
        return <Navigate to={`/autor/detalhes?id=${idAuthor}`} />
    }

    return (
        <div className="container-new-author">
            <Sidebar />
            <div className="new-author">
                <h1>Adicionar autor</h1>

                <div className="new-author-content">

                    <form className="new-author-form" onSubmit={postAuthor}>
                        <label for="name">Nome</label>
                        <input id="name" name="name" onChange={(e) => setName(e.target.value)} required/>
                        
                        <label for="lastname">Sobrenome</label>
                        <input id="lastname" name="lastname" onChange={(e) => setLastname(e.target.value)} required/>

                        <label for="email">Email</label>
                        <input id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>

                        <label for="affiliation">Afiliação</label>
                        <input id="affiliation" name="affiliation" onChange={(e) => setAffiliation(e.target.value)} required/>

                        <label for="orcid">Orcid</label>
                        <input id="orcid" name="orcid" onChange={(e) => setOrcid(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default NewAuthor;