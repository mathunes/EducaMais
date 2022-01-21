import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://educa-mais.herokuapp.com/course`)
        .then((response) => {
            setCourses(response.data);
        })
        .finally((response) => {
            setLoading(false);
        });

    }, []);

    let content;

    if (loading) {

        content = 
            <div className="loading">
                <p>Carregando...</p>
            </div>

    } else {

        content = 
                <div className="courses">
                    <h1>Cursos</h1>
                    <Link to="/curso/adicionar">Novo curso</Link>
                    <div className="courses-list">
                        {
                            courses.map((data) => {
                                return (
                                    <Card 
                                        key={data.id} 
                                        id={data.id}
                                        title={data.title}
                                        image={data.image}
                                        showOptions={true}
                                        editLink={`/curso/editar?id=${data.id}`}
                                        deleteLink={`/curso/excluir?id=${data.id}`}
                                        showLink={`/curso/detalhes?id=${data.id}`}
                                        entity="curso"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
    }

    return (
        <div className="container-course">
            <Sidebar />
            {content}
        </div>
    )
}

export default Courses;