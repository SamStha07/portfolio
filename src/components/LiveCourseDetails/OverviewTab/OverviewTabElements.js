import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  margin-top: 20px;
  margin-bottom: 100px;

  .overview-content {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.div`
  width: 295px;
  height: 33px;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
  margin-top: 30px;
  margin-bottom: 24px;
`;

export const List = styled.li`
  &::marker {
    color: #4bbd97;
    width: 7px;
    height: 7px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: #666666;
  }
`;
