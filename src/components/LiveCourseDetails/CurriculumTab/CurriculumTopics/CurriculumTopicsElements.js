import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;

  .show-details {
    .topic-intro {
      margin: 24px 0;
      font-size: 16px;
      line-height: 24px;
      color: #7a7a7a;
    }
  }
`;

export const Tab = styled.button`
  background: #fbfbfb;
  height: 64px;
  width: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    padding-left: 16px;
    font-size: 20px;
    line-height: 27px;
    color: #111111;
  }
  .downarrow {
    padding-right: 28px;
  }

  .show-arrow {
    transform: rotate(180deg);
    margin-right: 28px;
    display: flex;
    align-items: center;
  }
`;
