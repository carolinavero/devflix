import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableListWrapper = styled.div`
    position: relative; 
    padding: 2rem 0; 
`;
const TableRow = styled.div`
  color: #53585D;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
const TableCol = styled.div`
  background: #f5f5f5;
  color: #53585D;
  display: block;
  width: 100%;
  padding: 15px;
  &:first-child {
    min-width: 70%;
  }
`;

// eslint-disable-next-line react/prop-types
function TableList({ items }) {
  // eslint-disable-next-line no-console
  console.log('items', items);
  return (
    <TableListWrapper>
      <h2>Lista de Categorias</h2>
      {items.map((categoria) => (
        <>
          <div>
            <div key={`${categoria.titulo}`}>
              <TableRow>
                <TableCol>
                  <div>{categoria.titulo}</div>
                </TableCol>
                <TableCol>
                  <div><Link to="/">Editar</Link></div>
                </TableCol>
                <TableCol>
                  <div><Link to="/">Excluir</Link></div>
                </TableCol>
              </TableRow>
            </div>
          </div>
        </>
      ))}
    </TableListWrapper>
  );
}

TableList.propTypes = {
  items: PropTypes.string.isRequired,
};

export default TableList;
