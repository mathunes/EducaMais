import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';

import "./styles.css";

function NewCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [registerDate, setRegisterDate] = useState("");
    const [idCourse, setIdCourse] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const handleEncodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result.split(",")[1]);
        }
        reader.readAsDataURL(file);
    }

    const postCourse = (e) => {
        e.preventDefault();

        axios.post(`https://educa-mais.herokuapp.com/course`, {
            "title": title,
            "description": description,
            "image": image,
            "registerDate": registerDate,
            "resources": []
        }).then((response) => {
            setIdCourse(response.data.id);

            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/curso/detalhes?id=${idCourse}`} />
    }

    return (
        <div className="container-new-course">
            <Sidebar />
            <div className="new-course">
                <h1>Adicionar curso</h1>

                <div className="new-course-content">

                    <form className="new-course-form" onSubmit={postCourse}>
                        <label htmlFor="title">Título</label>
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label htmlFor="description">Descrição</label>
                        <input id="description" name="description" onChange={(e) => setDescription(e.target.value)} required/>

                        <label htmlFor="image">Imagem representativa (PNG)</label>
                        <input id="image" type="file" name="image" accept="image/png" onChange={handleEncodeImageFileAsURL} />

                        <label htmlFor="registerDate">Data de registro</label>
                        <input type="date" id="registerDate" name="registerDate" onChange={(e) => setRegisterDate(e.target.value)} required/>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default NewCourse;