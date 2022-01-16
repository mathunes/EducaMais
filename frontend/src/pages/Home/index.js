import React from "react";

import Sidebar from "../../components/Sidebar";
import LastResources from "../../components/LastResources";

import "./styles.css";

function Home() {
    return(
        <div className="container-home">
            <Sidebar />
            <LastResources />
        </div>
    )
}

export default Home;