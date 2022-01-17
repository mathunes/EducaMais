import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import "./styles.css";

function LastItems(props) {

    const [entity, setEntity] = useState("");

    useEffect(() => {
        switch (props.entity) {
            case "resource":
                setEntity("recursos");
                break;
            case "event":
                setEntity("eventos");
                break;
            case "course":
                setEntity("cursos");
                break;
            default:
                break;
        }
    });


    return (
        <div class="container-cards">
            <h2>Últimos {entity}</h2>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default LastItems;