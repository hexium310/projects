import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ProjectsList } from './ProjectsList';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ProjectsList />
      <Header />
    </>
  );
};
