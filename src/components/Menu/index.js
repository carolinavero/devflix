import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-azul.png'
import './Menu.css';
import Button from '../Button ';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={logo} className="Logo" alt="Logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;