import React from 'react';

import { Wrapper, LineThrough } from './ReviewCardElements';
import Rating from '../Rating/Rating';

import LikeSvg from '../../../assets/icons/Like.svg';
import DislikeSvg from '../../../assets/icons/Dislike.svg';

const ReviewCard = ({ courseReview }) => {
  return (
    <>
      {courseReview.instructor.reviews.map((review) => (
        <>
          <Wrapper>
            <div className='review-image'>
              <img src={review.image} alt='' />
            </div>
            <div className='review-details'>
              <p className='review-name'>{review.name}</p>
              <div className='review-rating'>
                <Rating value={review.rating} />

                <p className='review-date'>1 month ago</p>
              </div>
              <div className='review-comment'>{review.comment}</div>

              <p className='review-helpful'>Was this review helpful?</p>
              <div className='review-btn'>
                <div className='btn-like'>
                  <img src={LikeSvg} alt='' />
                </div>
                <div className='btn-dislike'>
                  <img src={DislikeSvg} alt='' />
                </div>
                <div className='btn-report'>Report</div>
              </div>
            </div>
          </Wrapper>
          <LineThrough></LineThrough>
        </>
      ))}
    </>
  );
};

export default ReviewCard;
