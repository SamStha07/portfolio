import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;

const ProjectPage = ({ id }) => {
  return <Wrapper id={id}>Project</Wrapper>;
};

export default ProjectPage;
