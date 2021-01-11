import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShow(false);
  };

  const closeMobileMenu = () => {
    setShow(false);
  };

  return (
    <Nav id='navbar'>
      <div className='hamburger'>
        <BurgerMenu show={show} click={() => setShow(!show)} />
      </div>

      <div>
        <ul className={show ? 'nav-links active' : 'nav-links'}>
          <li className='logo' onClick={scrollToTop}>
            Home
          </li>

          <li>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='section2'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='section3'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 8vh;
  width: 100%;
  position: fixed;
  top: 0;
  /* overflow: hidden; */
  display: flex;
  justify-content: space-between;

  .nav-links {
    display: flex;
    list-style: none;
    height: 100%;
    margin-right: 2rem;
  }

  .nav-links li {
    display: flex;
    text-decoration: none;
    font-size: 18px;
    align-items: center;
    padding-left: 50px;
    cursor: pointer;
  }
  .nav-links li:hover {
    color: deeppink;
  }

  @media (max-width: 768px) {
    position: fixed;
    background: #5b78c7;
    z-index: 2;

    .hamburger {
      position: fixed;
      cursor: pointer;
      right: 5%;
      top: 15px;
      transform: translate(5px, 0px);
      z-index: 2;
    }

    .nav-links {
      margin-top: 2rem;
      position: fixed;
      background: #5b78c7;
      height: 100vh;
      width: 100vw;
      flex-direction: column;

      clip-path: circle(100px at 100% -10%);
      -webkit-clip-path: circle(70px at 100% -10%);
      transition: all 1s ease-out;
    }

    .nav-links.active {
      clip-path: circle(100px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      transition: all 1s ease-out;
    }

    .nav-links li {
      padding: 50px;
      justify-content: center;
      font-size: 24px;
    }
    .nav-links li:hover {
      color: bisque;
    }
  }
`;
