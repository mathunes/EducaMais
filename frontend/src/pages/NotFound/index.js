import React from "react";

import Sidebar from '../../components/Sidebar';

import "./styles.css";

function NotFound() {
    return (
        <>
            <Sidebar />
            <div className="not-found">
                <b>Página não encontrada :(</b>
            </div>
        </>
    )
}

export default NotFound;