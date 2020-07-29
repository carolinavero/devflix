import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);
    const initialValues = {
        name: '',
        description: '',
        color: '',
    };
    const [values, setValues] = useState(initialValues);
   
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor //valor dinamico - coloca []
        })
    }

    function handleChange(infosDoEvento) {
        //const { getAttribute, value } = e.target;
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handle submit')
        setCategorias([
            ...categorias,
            values
        ]);

        setValues(initialValues);
    }

    return (
        <>
            <PageDefault>
                <h1>Nova Categoria: {values.name} </h1>

                <form onSubmit={handleSubmit}>
                   
                    <FormField label="Nome da Categoria" name="name" type="text" value={values.name} onChange={handleChange} />
                    <FormField label="Descrição" name="description" type="text" value={values.description} onChange={handleChange} />
                    <FormField label="Cor" name="color" type="color" value={values.color} onChange={handleChange} />

                    
                    <label htmlFor="">Todos os vídeos: </label>
                    <input type="text" />

                    <label htmlFor="">Código de segurança: </label>
                    <input type="text" />

                    <button>Cadastrar</button>

                </form>

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={index}>{categoria.name}, {categoria.description}, {categoria.color}</li>
                        )
                    })}
                </ul>

                <Link to="/">
                    Ir para a Home
                </Link>

            </PageDefault>

        </>
    )
}

export default CadastroCategoria;