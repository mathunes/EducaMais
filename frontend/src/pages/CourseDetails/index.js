import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function CourseDetails(props) {

    const [idCourse, setIdCourse] = useState(0);
    const [course, setCourse] = useState({});
    const [courseResources, setCourseResources] = useState([]);

    useEffect(() => {
        
        setIdCourse(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/course/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {
                setCourse(response.data);
                setCourseResources(response.data.resources);
            });

    }, []);

    return (
        <div className="container-course-details">
            <Sidebar />
            <div className="course-details">

                <h1>Detalhes curso</h1>
                
                <img src={course.image ? `data:image/png;base64,${course.image}` : ImageDefault} alt="representation" />

                <div className="course-details-content">

                    <div className="course-details-header">
                        <h2>{course.title}</h2>

                        <div>
                            <Link to={`/curso/editar?id=${idCourse}`}>
                                <img src={Edit} alt="edit" />
                            </Link>
                        </div>
                    </div>

                    <p className="course-description">{course.description}</p>

                    <h2 className="resources">Recursos</h2>

                    <table>
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Recurso</th>
                        </tr>
                        {
                            courseResources.map((resource) => {
                                return (
                                    <tr key={resource.id}>
                                        <td>{resource.title}</td>
                                        <td>{resource.description}</td>
                                        <td><Link to={`/recurso/detalhes?id=${resource.id}`}>Ver mais</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </table>

                    <p className="dates">Registrado em {course.registerDate}</p>

                </div>
            </div>
        </div>
    )
}

export default CourseDetails;