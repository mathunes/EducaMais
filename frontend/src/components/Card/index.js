import React from "react";

import ImageDefault from "../../assets/images/image-default.png";
import RightArrow from "../../assets/images/right-arrow.png";

import "./styles.css";

function Card() {
    return (
        <div className="container-card">
            <img src={ImageDefault} />
            <div className="information-card">
                <p>Título</p>
                <div>
                    <p>12/12/2022</p>
                    <img src={RightArrow} />
                </div>
            </div>
        </div>
    )
}

export default Card;