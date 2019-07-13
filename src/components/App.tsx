import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Header } from './Header';
import { ProjectsList } from './ProjectsList';
import { ProjectDetail } from './ProjectDetail';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={ ProjectsList } />
        <Route path='/:id' component={ ProjectDetail } />
      </Switch>
    </BrowserRouter>
  );
};
