import styled from 'styled-components';

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-family: sans-serif;

  background: #1f4037;
  background: -webkit-linear-gradient(to right, #1f4037, #1f4037);
  background: linear-gradient(to left, #1f4037, #99f2c8);

  z-index: 10;

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
    padding-left: 5rem;
    cursor: pointer;

    .active {
      border-bottom: 2px solid black;
    }
  }
  .nav-links li:hover {
    color: white;
  }

  @media (max-width: 768px) {
    height: 8vh;
    position: fixed;
    z-index: 2;

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      z-index: 2;
    }

    .nav-links {
      padding-top: 3rem;
      position: fixed;
      background: #1f4037;

      height: 110vh;
      width: 100vw;
      flex-direction: column;

      clip-path: circle(100vh at 100% -10%);
      -webkit-clip-path: circle(70px at 100% -10%);
      transition: all 1s ease-out;
      margin-top: -6%;
    }

    .nav-links.active {
      clip-path: circle(100px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      transition: all 1s ease-out;
      margin-top: -6%;
    }

    .nav-links li {
      padding: 40px;
      justify-content: center;
      font-size: 24px;
    }
  }

  @media (max-width: 420px) {
    .nav-links {
      margin-top: -10%;
    }
    .nav-links.active {
      margin-top: -10%;
    }
  }
`;
