import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--white);
    color: var(--black);
    flex: 1;
    padding: 50px 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
