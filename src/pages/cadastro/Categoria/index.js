import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {

    return (
        <>
            <PageDefault>
                <h1>Nova Categoria</h1>

                <form>
                    <label htmlFor="">Nome: </label>
                    <input type="text" />

                    <label htmlFor="">Todos os vídeos: </label>
                    <input type="text" />

                    <label htmlFor="">Cor: </label>
                    <input type="text" />

                    <label htmlFor="">Código de segurança: </label>
                    <input type="text" />

                    <button>Cadastrar</button>

                </form>

                <Link to="/">
                    Ir para a Home
                </Link>

            </PageDefault>

        </>
    )
}

export default CadastroCategoria;