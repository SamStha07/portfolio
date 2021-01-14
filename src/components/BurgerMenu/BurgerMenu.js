import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({ show, click }) => {
  return (
    <MenuBtn show={show} onClick={click}>
      <div />
      <div />
      <div />
    </MenuBtn>
  );
};

export default BurgerMenu;

const MenuBtn = styled.div`
  @media (max-width: 768px) {
    div {
      width: 30px;
      height: 3px;
      background-color: black;
      margin: 5px;

      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ show }) => (show ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ show }) =>
          show ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ show }) => (show ? '0' : '1')};
      }
      &:nth-child(3) {
        transform: ${({ show }) => (show ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
