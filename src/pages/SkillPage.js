import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background: #65a675;
  h1 {
    padding-top: 10vh;
  }
`;

const SkillPage = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h1>Skills</h1>
    </Wrapper>
  );
};

export default SkillPage;
