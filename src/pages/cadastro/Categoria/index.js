import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button ';

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
      [chave]: valor, // valor dinamico - coloca []
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(initialValues);
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://carolflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Nova Categoria
        </h1>

        <form onSubmit={handleSubmit}>

          <FormField label="Nome da Categoria" name="name" type="text" value={values.name} onChange={handleChange} />
          <FormField label="Descrição" name="description" type="textarea" value={values.description} onChange={handleChange} />
          <FormField label="Cor" name="color" type="color" value={values.color} onChange={handleChange} />
          <Button>Cadastrar</Button>

        </form>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.name}`}>
              {categoria.name}
              ,
              {' '}
              {categoria.description}
              ,
              {' '}
              {categoria.color}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para a Home
        </Link>

      </PageDefault>

    </>
  );
}

export default CadastroCategoria;
