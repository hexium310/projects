import React from 'react';
import styled from 'styled-components';

const A = styled.div`
  background-image: linear-gradient(to right, #000, #000 50%, transparent 50%, transparent 100%);
  background-size: 20px 20px;
  height: 1px;
  width: 100%;
`;

const B = styled.div`
  position: absolute;
  background-image: linear-gradient(to bottom, #000, #000 50%, transparent 50%, transparent 100%);
  background-size: 20px 20px;
  height: 200px;
  width: 1px;
`;

const C = styled.div`
  position: absolute;
  right: 0;
  background-image: linear-gradient(to bottom, #000, #000 50%, transparent 50%, transparent 100%);
  background-size: 20px 20px;
  height: 200px;
  width: 1px;
`;

const D = styled.div`
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(to right, #000, #000 50%, transparent 50%, transparent 100%);
  background-size: 20px 20px;
  height: 1px;
  width: 100%;
`;

export const CustomDashedBorder: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <A />
      <B />
      <C />
      <D />
      { children }
    </>
  );
} ;
