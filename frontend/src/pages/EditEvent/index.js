import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

function EditEvent() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [resourcesList, setResourcesList] = useState([]);
    const [idEvent, setIdEvent] = useState(0);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        
        setIdEvent(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/event/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setImage(response.data.image);
                setStartDate(response.data.startDate);
                setEndDate(response.data.endDate);
                setResourcesList(response.data.resources);
            });

    }, []);

    const handleEncodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result.split(",")[1]);
        }
        reader.readAsDataURL(file);
    }

    const putEvent = (e) => {
        e.preventDefault();

        axios.put(`https://educa-mais.herokuapp.com/event`, {
            "id": idEvent,
            "title": title,
            "description": description,
            "image": image,
            "startDate": startDate,
            "endDate": endDate,
            "resourcesList": resourcesList
        }).then((response) => {
            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/evento/detalhes?id=${idEvent}`} />
    }

    return (
        <div className="container-edit-event">
            <Sidebar />
            <div className="edit-event">
                <h1>Editar evento</h1>

                <div className="edit-event-content">

                    <form className="edit-event-form" onSubmit={putEvent}>
                        <label for="title">Título</label>
                        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label for="description">Descrição</label>
                        <input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                        <label for="image">Imagem representativa (PNG)</label>
                        <input id="image" type="file" name="image" accept="image/png" onChange={handleEncodeImageFileAsURL} />

                        <label for="startDate">Data início</label>
                        <input type="date" id="startDate" value={startDate} name="startDate" onChange={(e) => setStartDate(e.target.value)} required/>

                        <label for="endDate">Data fim</label>
                        <input type="date" id="endDate" value={endDate} name="endDate" onChange={(e) => setEndDate(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default EditEvent;