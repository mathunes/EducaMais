import React, { useEffect, useState } from 'react';

import './styles.css';
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';

import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <>
            {/* <img src={Menu} alt='menu' id="menu" /> */}
            <nav className='container'>
                <div>
                        <Link to="/">
                            <img src={Logo} alt='logo'/>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/autores">
                                    Autores
                                </Link>
                            </li>
                            <li>
                                <Link to="/recursos">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link to="/eventos">
                                    Eventos
                                </Link>
                            </li>
                            <li>
                                <Link to="/cursos">
                                    Cursos
                                </Link>
                            </li>
                        </ul>
                </div>
                <div>
                    <p>Sobre</p>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;