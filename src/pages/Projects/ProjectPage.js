import React from 'react';
import styled from 'styled-components';

import typewriter from '../../images/typewriter.jpg';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 962px) {
    height: 125vh;
  }
  @media (max-width: 769px) {
    height: 100vh;
  }
  @media (max-width: 650px) {
    height: 175vh;
  }
  @media (max-width: 380px) {
    height: 200vh;
  }
  @media (max-width: 300px) {
    height: 160vh;
  }
`;

const ProjectList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-basis: auto;

  padding-top: 40px;
`;

const ProjectName = styled.div`
  padding: 8px;

  img {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 300px) {
    img {
      width: 220px;
      height: 220px;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

const ProjectLink = styled.div`
  font-size: 1.4rem;

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

const ProjectPage = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h1>Projects</h1>
      <ProjectList>
        <ProjectName>
          <img src={typewriter} alt='name1' />
          <h2>Ecommerce</h2>
          <ProjectLink>
            <p className='left'>View my project</p>
            <p className='right'>Code</p>
          </ProjectLink>
        </ProjectName>
        <ProjectName>
          <img src={typewriter} alt='name2' />
          <h2>Ecommerce</h2>
          <ProjectLink>
            <p className='left'>View my project</p>
            <p className='right'>Code</p>
          </ProjectLink>
        </ProjectName>
        <ProjectName>
          <img src={typewriter} alt='name3' />
          <h2>Ecommerce</h2>
          <ProjectLink>
            <p className='left'>View my project</p>
            <p className='right'>Code</p>
          </ProjectLink>
        </ProjectName>
      </ProjectList>
    </Wrapper>
  );
};

export default ProjectPage;
