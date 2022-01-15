import React from 'react';

import './styles.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <nav className='container'>
           <div>
                <img src={Logo} alt='logo'/>
                <ul>
                    <li>
                        <Link to="/autores">
                            Autores
                        </Link>
                    </li>
                    <li>
                        <Link to="recursos">
                            Recursos
                        </Link>
                    </li>
                    <li>
                        <Link to="eventos">
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to="cursos">
                            Cursos
                        </Link>
                    </li>
                </ul>
           </div>
           <div>
               <p>Sobre</p>
           </div>
        </nav>
    )
}

export default Sidebar;