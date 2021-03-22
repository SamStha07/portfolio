import React from 'react';

import Star from '../../../assets/icons/Star.svg';
import HalfStar from '../../../assets/icons/HalfStar.svg';
import EmptyStar from '../../../assets/icons/EmptyStar.svg';

import './Rating.css';

const Rating = ({ value }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <img className='rating-star-icon' src={Star} alt='' />
        ) : value >= 0.5 ? (
          <img className='rating-star-icon' src={HalfStar} alt='' />
        ) : (
          <img className='rating-star-icon' src={EmptyStar} alt='' />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <img className='rating-star-icon' src={Star} alt='' />
        ) : value >= 1.5 ? (
          <img className='rating-star-icon' src={HalfStar} alt='' />
        ) : (
          <img className='rating-star-icon' src={EmptyStar} alt='' />
        )}
      </span>
      <span>
        <span>
          {value >= 3 ? (
            <img className='rating-star-icon' src={Star} alt='' />
          ) : value >= 2.5 ? (
            <img className='rating-star-icon' src={HalfStar} alt='' />
          ) : (
            <img className='rating-star-icon' src={EmptyStar} alt='' />
          )}
        </span>
      </span>
      <span>
        <span>
          {value >= 4 ? (
            <img className='rating-star-icon' src={Star} alt='' />
          ) : value >= 3.5 ? (
            <img className='rating-star-icon' src={HalfStar} alt='' />
          ) : (
            <img className='rating-star-icon' src={EmptyStar} alt='' />
          )}
        </span>
      </span>
      <span>
        <span>
          {value >= 5 ? (
            <img className='rating-star-icon' src={Star} alt='' />
          ) : value >= 4.5 ? (
            <img className='rating-star-icon' src={HalfStar} alt='' />
          ) : (
            <img className='rating-star-icon' src={EmptyStar} alt='' />
          )}
        </span>
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
