import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';

import "./styles.css";

function NewEvent() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [idEvent, setIdEvent] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const handleEncodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result.split(",")[1]);
        }
        reader.readAsDataURL(file);
    }

    const postEvent = (e) => {
        e.preventDefault();

        axios.post(`https://educa-mais.herokuapp.com/event`, {
            "title": title,
            "description": description,
            "image": image,
            "startDate": startDate,
            "endDate": endDate,
            "resources": []
        }).then((response) => {
            setIdEvent(response.data.id);

            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/evento/detalhes?id=${idEvent}`} />
    }

    return (
        <div className="container-new-event">
            <Sidebar />
            <div className="new-event">
                <h1>Adicionar evento</h1>

                <div className="new-event-content">

                    <form className="new-event-form" onSubmit={postEvent}>
                        <label htmlFor="title">Título</label>
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label htmlFor="description">Descrição</label>
                        <input id="description" name="description" onChange={(e) => setDescription(e.target.value)} required/>

                        <label htmlFor="image">Imagem representativa (PNG)</label>
                        <input id="image" type="file" name="image" accept="image/png" onChange={handleEncodeImageFileAsURL} />

                        <label htmlFor="startDate">Data início</label>
                        <input type="date" id="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} required/>

                        <label htmlFor="endDate">Data fim</label>
                        <input type="date" id="endDate" name="endDate" onChange={(e) => setEndDate(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default NewEvent;