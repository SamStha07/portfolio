import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  margin-top: 30px;

  .review-title {
    font-weight: 600;
    font-size: 20px;
    color: #333333;
    margin-bottom: 40px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;

  button {
    width: 250px;
    height: 52px;
    border: 1px solid #4bbd97;
    box-sizing: border-box;
    border-radius: 5px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4bbd97;
    cursor: pointer;
  }
  img {
    padding-left: 10.16px;
  }
`;
