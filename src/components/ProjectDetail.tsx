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
  font-size: 16px;

  h1, h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  }

  h1 {
    a {
      text-decoration: none;
    }
  }

  img {
    width: 100%;
    border: solid 1px black;
  }

  code {
    background-color: rgba(27,31,35,.05);
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
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
