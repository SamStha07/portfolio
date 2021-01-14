import React, { useState } from 'react';
import { Nav } from './HeaderElement';
import { Link, animateScroll as scroll } from 'react-scroll';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
              offset={-50}
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
