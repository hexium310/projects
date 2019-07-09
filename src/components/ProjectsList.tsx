import React from 'react';
import styled from 'styled-components';

import { ProjectItem } from './ProjectItem';
import projects from '../../contents/projects.yaml';

const Title = styled.h2`
  text-align: center;
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
      <Title>Projects</Title>
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
