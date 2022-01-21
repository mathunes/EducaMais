import React, { useEffect, useState } from 'react';

import './styles.css';
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';

import { Link } from 'react-router-dom';

function Sidebar(props) {

    const [displayModal, setDisplayModal] = useState("none");
  
    const handleModalClose = () => setDisplayModal("none");
    const handleModalShow = () => setDisplayModal("flex");

   
    return (
        <>
            {/* <img src={Menu} alt='menu' id="menu" onClick={handleShowSidebar} />
            <div className='shadow-sidebar'></div> */}
            <nav className='container'>
                <div>
                    <Link to="/">
                        <img src={Logo} alt='logo' />
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
                    <p className='btn-show-modal' onClick={handleModalShow}>Sobre</p>
                </div>
            </nav>

            <div className='modal-container' style={{display: displayModal}} onClick={handleModalClose}>
                <div className='modal'>
                    <div className='modal-header'>
                        <h2 className='modal-title'>Sobre</h2>
                    </div>
                    <div className='modal-body'>
                        <p>Educa Mais é uma aplicação desenvolvida como requisito parcial para a conclusão da disciplina Desenvolvimento de Aplicações Corporativas - 2021.2, ministrada pelo professor José Viterbo Filho na Universidade Federal Fluminense.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar;