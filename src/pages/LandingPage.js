import React, { useEffect } from 'react';
import styled from 'styled-components';
import mainImg from '../images/paper.jpg';
import { gsap } from 'gsap';

const LandingPage = ({ id }) => {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
    t1.to('.orbit-spinner', { y: '0%', duration: 3 }); // stagger pops after 0.25
    t1.to('.intro', { y: '-100%', duration: 1 }, '-=1'); // -=1 means start 1s faster
    t1.fromTo('.title1', { opacity: 0 }, { opacity: 1, duration: 1 });
    t1.fromTo('.title2', { opacity: 0 }, { opacity: 1, duration: 1 });
    t1.fromTo('.icons', { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <Wrapper>
      <Name>
        <div className='title1'>
          Hello, I'm <span className='name'>Sam Shrestha</span>.
        </div>
        <div className='title2'>I'm a full-stack web developer.</div>
        <div className='icons'>
          <div className='social-link'>
            <a
              href={'https://github.com/SamStha07?tab=repositories'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </div>
          <div className='social-link'>
            <a
              href={'https://www.linkedin.com/in/sam-shrestha-4798241aa/'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </Name>
      {/* will show in page intro */}
      <Intro className='intro'>
        <div className='orbit-spinner'>
          <div className='orbit'></div>
          <div className='orbit'></div>
          <div className='orbit'></div>
        </div>
      </Intro>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  background-image: url(${mainImg});
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .icons {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    cursor: pointer;
  }
  .social-link {
    padding: 0 10px;
  }
  .social-link:hover {
    transform: scale(1.2);
  }
`;

const Name = styled.h5`
  position: absolute;
  /* absolute means you can move anywhere */
  top: 40%;
  left: 50%;
  color: #807147;
  font-size: 40px;
  transform: translate(-50%, -40%);
  /* -50% on X-Y and -30% on top and bottom */
  .name {
    color: palevioletred;
  }

  /* < 768px */
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Intro = styled.div`
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
