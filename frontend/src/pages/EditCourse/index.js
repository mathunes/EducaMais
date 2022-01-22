import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

function EditCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [registerDate, setRegisterDate] = useState("");
    const [resourcesList, setResourcesList] = useState([]);
    const [idCourse, setIdCourse] = useState(0);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        
        setIdCourse(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/course/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setImage(response.data.image);
                setRegisterDate(response.data.registerDate);
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

    const putCourse = (e) => {
        e.preventDefault();

        axios.put(`https://educa-mais.herokuapp.com/course`, {
            "id": idCourse,
            "title": title,
            "description": description,
            "image": image,
            "registerDate": registerDate,
            "resourcesList": resourcesList
        }).then((response) => {
            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/curso/detalhes?id=${idCourse}`} />
    }

    return (
        <div className="container-edit-course">
            <Sidebar />
            <div className="edit-course">
                <h1>Editar curso</h1>

                <div className="edit-course-content">

                    <form className="edit-course-form" onSubmit={putCourse}>
                        <label htmlFor="title">Título</label>
                        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label htmlFor="description">Descrição</label>
                        <input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                        <label htmlFor="image">Imagem representativa (PNG)</label>
                        <input id="image" type="file" name="image" accept="image/png" onChange={handleEncodeImageFileAsURL} />

                        <label htmlFor="registerDate">Data de registro</label>
                        <input type="date" id="registerDate" value={registerDate} name="registerDate" onChange={(e) => setRegisterDate(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default EditCourse;