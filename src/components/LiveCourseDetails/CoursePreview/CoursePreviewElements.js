import styled from 'styled-components';

export const Wrapper = styled.div`
  .course-thumbnail {
    width: 380px;
    height: 310px;
    margin-bottom: 60px;
    border-radius: 6px;
  }

  .course-card {
    margin-right: 20px;
    width: 380px;
    background: #ffffff;
    border: 1px solid #dfe0eb;
    box-shadow: 0px 0px 20px rgba(51, 51, 51, 0.1);
    border-radius: 5px;
    padding: 44px 36px 25px 36px;
    margin-bottom: 45px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img:nth-child(2) {
      position: absolute;
    }
  }

  .card-single-price,
  .card-single-tab {
    display: flex;
    justify-content: space-between;
  }

  .card-single-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .logo-price {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      border: 1px solid #999999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .price-free {
    font-weight: 600;
    font-size: 24px;
    text-align: right;
    color: #4bbd97;
    padding: 6px 0;
  }

  .card-title-name {
    font-size: 15px;
    color: #333333;
    padding: 12px 0 12px 9px;
  }

  .card-title-detail {
    font-size: 15px;
    text-align: right;
    color: #696969;
    padding: 10px 0;
  }

  .card-line {
    width: 308px;
    height: 1px;
    background: #eeeeee;
    margin: 5px 0;
  }

  .btn-enroll {
    width: 100%;
    height: 51px;
    background: linear-gradient(90deg, #0fa6ac 0%, #4bbd97 100%);
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-top: 40px;
    border: none;
    cursor: pointer;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .btn {
      width: 31%;
      height: 50px;
      left: calc(50% - 22px / 2);
      top: calc(50% - 24px / 2 + 0.5px);
      background: transparent;
      border-radius: 5px;
      border: 1px solid rgba(153, 153, 153, 0.3);
      cursor: pointer;
    }
  }
`;
