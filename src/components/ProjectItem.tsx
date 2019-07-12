import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import { CustomDashedBorder } from 'custom-dashed-border';

interface ProjectItemProps {
  project: Project;
}

const ItemContainer = styled.div`
  position: relative;
`;

const Contents = styled.div`
  margin: 10px;
  font-family: 'Lato' , 'Noto Sans JP', sans-serif;
`;

const Name = styled.h3`
  font-family: 'Dosis', 'Noto Sans JP', fantasy;
  font-weight: bold;
`;

const Links = styled.div`
  & :not(:first-child) {
    margin-left: 10px;
  }
`;

const generateLink = (link: ProjectLink, index: number): React.ReactElement => {
  const linkTexts = {
    text: <>{ link.text || 'link' }</>,
    github: <FontAwesomeIcon icon={ faGithub } size='lg' />,
    npm: <FontAwesomeIcon icon={ faNpm } size='lg' />,
  };

  return <a key={ index } href={ link.url }>{ linkTexts[link.type] }</a>;
};

export const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({ project }) => {
  return (
    <ItemContainer>
      <CustomDashedBorder top right bottom left>
        <Contents>
          <Name>{ project.name }</Name>
          <p>{ project.description }</p>
          <Links>
            {
              project.links && project.links.map(generateLink)
            }
          </Links>
        </Contents>
      </CustomDashedBorder>
    </ItemContainer>
  );
};
