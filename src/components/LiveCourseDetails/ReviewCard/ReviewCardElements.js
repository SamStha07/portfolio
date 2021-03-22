import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  .review-image {
    padding-right: 24px;
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }
  }

  .review-details {
    .review-name {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      text-transform: uppercase;

      color: #333333;
    }

    .review-rating {
      display: flex;

      .review-date {
        font-size: 14px;
        line-height: 19px;
        color: #999999;
        padding: 13px 0;
        margin-left: 4px;
      }
    }
    .review-comment {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 1px;
      color: #333333;
      margin-bottom: 24px;
    }

    .review-helpful {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 1px;
      color: #7a7a7a;
      margin-bottom: 16px;
    }

    .review-btn {
      display: flex;

      .btn-like,
      .btn-dislike {
        margin-right: 12px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #e8f0fe;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .btn-like {
        background: #4bbd97;
      }

      .btn-report {
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        color: #4bbd97;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

export const LineThrough = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;
