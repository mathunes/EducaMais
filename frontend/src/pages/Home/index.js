import React from "react";

import Sidebar from "../../components/Sidebar";
import LastResources from "../../components/LastResources";

import "./styles.css";
import LastEvents from "../../components/LastEvents";

function Home() {
    return(
        <div className="container-home">
            <Sidebar />
            <div>
                <LastResources />
                <LastEvents />
                <LastEvents />
            </div>
        </div>
    )
}

export default Home;