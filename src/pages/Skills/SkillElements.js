import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 60vh;
  font-family: serif;
  transition: all 1s ease-out;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  flex-basis: auto;
  padding-top: 2%;

  img {
    width: 100px;
    height: 90px;
    margin: 4px;
  }

  @media (max-width: 992px) {
    padding-top: 3%;
    img {
      width: 90px;
      height: 80px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 8%;
    img {
      width: 80px;
      height: 70px;
    }
  }

  @media (max-width: 400px) {
    padding-top: 15%;
    img {
      width: 60px;
      height: 55px;
    }
  }

  @media (max-width: 300px) {
    img {
      width: 50px;
      height: 45px;
    }
  }
`;
