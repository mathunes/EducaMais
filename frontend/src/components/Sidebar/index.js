import React from 'react';

import './styles.css';
import Logo from '../../assets/images/logo.png';

function Sidebar(props) {
    return (
        <nav className='container'>
           <div>
                <img src={Logo} alt='logo'/>
                <ul>
                    <li>Autores</li>
                    <li>Recursos</li>
                    <li>Eventos</li>
                    <li>Cursos</li>
                </ul>
           </div>
           <div>
               <p>Sobre</p>
           </div>
        </nav>
    )
}

export default Sidebar;