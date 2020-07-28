import React from 'react';
import { Pagina } from './styles';
import { Link } from 'react-router-dom';
import image from '../../assets/4040-error.gif';

import PageDefault from '../../components/PageDefault';

const Pagina404 = () => { 
    return (
    <>
    <PageDefault>
        <Pagina>
            <h1>Página não encontrada</h1>
            
            <img src={image} alt="Erro 404" style={{  maxWidth: 350, alignSelf: 'center' }}/>
            <Link to="/" >Ir pra Home</Link>
           
        </Pagina>
    </PageDefault>


    </>

)};

export default Pagina404;