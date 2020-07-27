import React from 'react';
import logo from '../../assets/logo-azul.png'
import './Menu.css';
import Button from '../Button ';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={logo} className="Logo" alt="Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;