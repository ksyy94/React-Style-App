import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;
  return (
    <MainStyle>
      메인입니다.
      <section1 />
      <section2 />
      <section3 />
      <section4 />
      <section5 />
    </MainStyle>
  );
};

export default Main;
