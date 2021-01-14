import React, { useEffect } from 'react';
import { Wrapper, Name, Intro, Button } from './LandingElement';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';

const LandingPage = ({ id }) => {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
    t1.to('.orbit-spinner', { y: '0%', duration: 3 }); // stagger pops after 0.25
    t1.to('.intro', { y: '-100%', duration: 1 }, '-=1'); // -=1 means start 1s faster
    t1.fromTo('.title1', { opacity: 0 }, { opacity: 1, duration: 1 });
    t1.fromTo('.title2', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
    t1.fromTo('.icons', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
    t1.fromTo('.btn', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
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

        <Button className='btn'>
          <Link
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Explore <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </Link>
        </Button>
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
