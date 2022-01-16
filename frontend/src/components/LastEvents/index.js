import React from "react";

import Card from "../../components/Card";
import "./styles.css";

function LastEvents() {
    return (
        <div class="container-cards">
            <h2>Últimos eventos</h2>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default LastEvents;