import React from "react";

import Sidebar from '../../components/Sidebar';

import "./styles.css";

function NotFound() {
    return (
        <div className="not-found">
            <Sidebar />
            <b>Página não encontrada :(</b>
        </div>
    )
}

export default NotFound;