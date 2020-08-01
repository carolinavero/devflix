import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button ';
import useForm from '../../../hooks/useForm';
import TableList from '../../../components/TableList';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const initialValues = {
    name: 'Nome da Categoria',
    description: 'Descrição de nova categoria',
    color: '#cccccc',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    clearForm(initialValues);
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

          <FormField
            label="Nome da Categoria"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            name="description"
            type="textarea"
            value={values.description}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
          />
          <Button>Cadastrar</Button>
          <Link to="/" style={{ marginLeft: 15 }}>Cancelar</Link>

        </form>

        {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
        )}

        <TableList items={categorias} />

        <Link to="/">
          Ir para a Home
        </Link>

      </PageDefault>

    </>
  );
}

export default CadastroCategoria;
