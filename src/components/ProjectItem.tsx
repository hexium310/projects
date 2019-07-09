import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { CustomDashedBorder } from 'custom-dashed-border';

interface ProjectItemProps {
  project: Project;
}

const ItemContainer = styled.div`
  position: relative;
`;

const Contents = styled.div`
  margin: 10px;
`;

const Links = styled.div`
  & :not(:first-child) {
    margin-left: 10px;
  }
`;

export const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({ project }) => {
  return (
    <ItemContainer>
      <CustomDashedBorder
        top
        right
        bottom
        left
      >
        <Contents>
          <p>{ project.name }</p>
          <p>{ project.description }</p>
          <Links>
            {
              project.url && <a href={ project.url }>{ project.name }</a>
            }
            {
              project.repository && (
                <a href={ project.repository }>
                  <FontAwesomeIcon icon={ faGithub } />
                </a>
              )
            }
          </Links>
        </Contents>
      </CustomDashedBorder>
    </ItemContainer>
  );
};
