import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button ';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Titulo Padrão',
    url: 'https://www.youtube.com/watch?v=L9Dz8ikW358',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Video cadastrado com sucesso!');

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <div style={{ marginTop: 20 }}>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </div>

    </PageDefault>
  );
}

export default CadastroVideo;
