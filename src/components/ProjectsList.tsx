import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProjectItem } from './ProjectItem';
import projects from '../../contents/projects.yaml';

const Header = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  align-items: center;
`;

const Title = styled.h2`
  grid-column: 2 / 3;
  text-align: center;
  font-family: 'Dosis', fantasy;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(200px, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, 1fr);
  grid-gap: 50px;
  justify-content: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const ProjectsList: React.FunctionComponent = () => {
  return (
    <>
      <Header>
        <Title>
          Projects
        </Title>
        <div>
          <a href="https://github.com/hexium310/projects">
            <FontAwesomeIcon icon={ faGithub } size='lg' />
          </a>
        </div>
      </Header>
      <ProjectsContainer>
        {
          projects.map((project: Project, i: number) => (
            <ProjectItem project={ project } key={ i } />
          ))
        }
      </ProjectsContainer>
    </>
  );
};
