import React from 'react';
import styled from 'styled-components';

import { ProjectItem } from './ProjectItem';
import projects from '../../contents/projects.yaml';

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

const Memo = styled.div`
  margin: 20px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
`;

export const ProjectsList: React.FunctionComponent = () => {
  return (
    <>
      <ProjectsContainer>
        {
          projects.map((project: Project, i: number) => (
            <ProjectItem project={ project } key={ i } />
          ))
        }
      </ProjectsContainer>
      <Memo>
        静的サイトジェネレーター使わずに作ったらMarkdownの読み込みにfetch使う羽目になって厳しかったのでそのうちGatsbyで作り直します。
      </Memo>
    </>
  );
};
