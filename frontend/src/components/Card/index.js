import React from "react";

import ImageDefault from "../../assets/images/image-default.png";
import RightArrow from "../../assets/images/right-arrow.png";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

import "./styles.css";
import { Link } from "react-router-dom";

function Card(props) {

    const handleShowModalDelete = () => {
        // confirm("teste")
    }

    return (
        <div className="container-card">
            <img src={props.image ? `data:image/png;base64,${props.image}` : ImageDefault} alt="representation" />
            <div className="information-card">
                <p>{props.title}</p>
                <div className="options">
                    <div>
                        <Link to={props.editLink}>
                            <img src={Edit} alt="edit"/>
                        </Link>
                        <Link to="#">
                            <img src={Delete} alt="delete" onClick={handleShowModalDelete}/>
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