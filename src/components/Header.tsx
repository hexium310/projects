import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  align-items: center;
`;

const Title = styled.h2`
  grid-column: 2 / 3;
  text-align: center;
  font-family: 'Dosis', fantasy;
`;

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Title>
        Projects
      </Title>
      <div>
        <a href="https://github.com/hexium310/projects">
          <FontAwesomeIcon icon={ faGithub } size='lg' />
        </a>
      </div>
    </HeaderContainer>
  );
};
