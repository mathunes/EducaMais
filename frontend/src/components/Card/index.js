import React from "react";

import ImageDefault from "../../assets/images/image-default.png";
import RightArrow from "../../assets/images/right-arrow.png";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";

function Card() {

    return (
        <div className="container-card">
            <img src={ImageDefault} alt="representation" />
            <div className="information-card">
                <p>Título</p>
                <div className="options">
                    <div>
                        <img src={Edit} alt="edit"/>
                        <img src={Delete} alt="delete"/>
                    </div>
                    <img src={RightArrow} alt="view"/>
                </div>
            </div>
        </div>
    )
}

export default Card;