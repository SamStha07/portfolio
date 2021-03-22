import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
  width: 223px;
  height: 227px;
  background: #dfe0eb;
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  overflow: hidden;
  img {
    width: 181.58px;
    height: 250px;
    padding: 8.5px;
    padding-left: 13px;
    background: transparent;
  }
`;

export const IntroWrapper = styled.div`
  position: absolute;
  margin-left: 253px;
  width: 577px;

  .expertise {
    margin-top: 5px;
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1px;
    color: #000000;
  }

  .intro {
    width: 547px;
    font-size: 15px;
    line-height: 24px;
    color: #666666;
  }
`;

export const Title = styled.div`
  /* height: 27px; */
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
`;

export const InstructorReview = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 24px;

  .total-students,
  .reviews {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #111111;
  }

  .rating {
    font-size: 15px;
    line-height: 20px;
    .rating-number {
      color: #e7711b;
      font-weight: bold;
    }
    .rating-total {
      opacity: 0.5;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 23px;
  .circle-twitter,
  .circle-linkdin,
  .circle-m,
  .circle-youtube {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    text-align: center;
    border: 1px solid rgba(153, 153, 153, 0.3);
  }
  .circle-twitter {
    background: #4bbd97;
    border: none;
  }
`;
