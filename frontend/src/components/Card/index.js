import React, { useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import axios from "axios";

import ImageDefault from "../../assets/images/image-default.png";
import RightArrow from "../../assets/images/right-arrow.png";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";
import { Link } from "react-router-dom";

function Card(props) {

    const [teste, setTeste] = useState("")

    const handleShowModalDelete = () => {

        confirmAlert({
            title: "Excluir",
            message: `Deseja excluir o ${props.entity} ${props.title}?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: () => {
                        axios.delete(`https://educa-mais.herokuapp.com/resource/${props.id}`)
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

    return (
        <div className="container-card" style={{display: teste}}>
            <img src={props.image ? `data:image/png;base64,${props.image}` : ImageDefault} alt="representation" />
            <div className="information-card">
                <p>{props.title}</p>
                <div className="options">
                    <div>
                        <Link to={props.editLink}>
                            <img src={Edit} alt="edit"/>
                        </Link>
                        <Link to="#" onClick={handleShowModalDelete}>
                            <img src={Delete} alt="delete"/>
                        </Link>
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