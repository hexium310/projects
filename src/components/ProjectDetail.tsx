import React from 'react';
import { Redirect, Link, RouteComponentProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import projects from '../../contents/projects.yaml';

const MarkdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 70%;

  img {
    width: 100%;
    border: solid 1px black;
  }
`;

export const ProjectDetail: React.FunctionComponent<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const project = projects.find((project) => project.name === match.params.id);

  if (project === undefined) {
    return <Redirect to='/' />;
  }

  const [ markdownText, setMarkdownText ] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const text = await fetch(`../../contents/${project.detail_file}`)
        .then((response) => response.text());
      setMarkdownText(text);
    })();
  }, [setMarkdownText]);

  return (
    <MarkdownWrapper>
      <Content>
        <ReactMarkdown source={ markdownText } />
        <Link to='/'>Projects</Link>
      </Content>
    </MarkdownWrapper>
  );
};
