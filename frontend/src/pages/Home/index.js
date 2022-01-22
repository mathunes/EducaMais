import React from "react";

import Sidebar from "../../components/Sidebar";
import LastItems from "../../components/LastItems";

import "./styles.css";

function Home() {
    return(
        <div className="container-home">
            <Sidebar />
            <div class="home-last-items">
                <LastItems entity="resource" />
                <LastItems entity="event" />
                <LastItems entity="course" />
            </div>
        </div>
    )
}

export default Home;