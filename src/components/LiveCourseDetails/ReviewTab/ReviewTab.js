import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Wrapper, Button } from './ReviewElements';

import LoadData from '../../../assets/icons/LoadData.svg';

const ReviewTab = ({ courseReview }) => {
  return (
    <Wrapper>
      <div className='review-title'>Reviews</div>

      <ReviewCard courseReview={courseReview} />

      <Button>
        <button>
          <span className='text'>Load More</span>

          <div>
            <img className='load-img' src={LoadData} alt='' />
          </div>
        </button>
      </Button>
    </Wrapper>
  );
};

export default ReviewTab;
