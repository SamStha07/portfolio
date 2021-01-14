import styled from 'styled-components';
// import mainImg from '../../images/paper.jpg';

export const Wrapper = styled.div`
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  transition: all 1s ease-out;

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
    transition: 0.3s;
  }
`;

export const Name = styled.h5`
  position: absolute;
  /* absolute means you can move anywhere */
  top: 40%;
  left: 50%;
  color: black;
  font-size: 40px;
  transform: translate(-50%, -40%);
  /* -50% on X-Y and -30% on top and bottom */
  .name {
    /* color: red; */
    font-size: 50px;
    color: #000000; /* fallback for old browsers */
    color: -webkit-linear-gradient(
      to right,
      #434343,
      #000000
    ); /* Chrome 10-25, Safari 5.1-6 */
    color: linear-gradient(
      to right,
      #434343,
      #000000
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  /* < 768px */
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Intro = styled.div`
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  z-index: 232;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.25em 1em;
  font-size: 0.6em;
  border: 2px solid black;
  background: transparent;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  i {
    padding-left: 5px;
    font-size: 0.8em;
    transition: 0.4s;
  }

  &:hover {
    background: black;
    color: white;

    transform: scale(1.2);

    i {
      transform: rotate(90deg);
    }
  }
`;
