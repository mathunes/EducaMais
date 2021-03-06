import React, { useEffect, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import RightArrow from "../../assets/images/right-arrow.png";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";
import { Link } from "react-router-dom";

function Card(props) {

    const [teste, setTeste] = useState("");
    const [entity, setEntity] = useState("");

    useEffect(() => {
        switch (props.entity) {
            case "recurso":
                setEntity("resource");
                break;
            case "autor":
                setEntity("author");
                    break;
            case "curso":
                setEntity("course");
                    break;
            case "evento":
                setEntity("event");
                    break;
            default:
                break;
        }
    })

    const handleShowModalDelete = () => {

        confirmAlert({
            title: "Excluir",
            message: `Deseja excluir o ${props.entity} ${props.title}?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: () => {
                        axios.delete(`https://educa-mais.herokuapp.com/${entity}/${props.id}`)
                        .then((response) => {
                            setTeste("none")
                        })
                    }
                },
                {
                    label: "Não",
                    onClick: () => {}
                }
            ]
        });
    }

    let options;

    if (props.showOptions) {
        options = 
            <>
                <Link to={props.editLink}>
                    <img src={Edit} alt="edit"/>
                </Link>
                <Link to="#" onClick={handleShowModalDelete}>
                    <img src={Delete} alt="delete"/>
                </Link>
            </>
    }

    return (
        <div className="container-card" style={{display: teste}}>
            <img src={props.image ? `data:image/png;base64,${props.image}` : ImageDefault} alt="representation" />
            <div className="information-card">
                <p>{props.title}</p>
                <div className="options">
                    <div>
                        {
                            options
                        }
                    </div>
                    <Link to={props.showLink}>
                        <img src={RightArrow} alt="view"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;