import React from 'react';
import './CourseCard.css';

import CourseImg from '../../../assets/images/course1.svg';
import AuthorImg from '../../../assets/images/author.svg';
import StarIcon from '../../../assets/icons/Star.svg';
import LiveIcon from '../../../assets/icons/Live.svg';
import { LinkContainer } from 'react-router-bootstrap';

function CourseCard({
  title,
  authorName,
  authorPosition,
  oldPrice,
  newPrice,
  rating,
  reviewsCount,
  isLive,
  startDate,
  endDate,
  categories,
}) {
  return (
    <div className='courseCard'>
      <div className='courseCard__banner'>
        <LinkContainer to='/details'>
          <img src={CourseImg} alt='course banner' />
        </LinkContainer>
        {isLive && (
          <img className='courseCard__live' src={LiveIcon} alt='live icon' />
        )}
        {isLive && (
          <p className='courseCard__date'>
            {startDate} - {endDate}
          </p>
        )}
      </div>
      <div className='courseCard__categories'>
        {categories.length > 1 &&
          categories.map((category) => (
            <p className='courseCard__category' key={category}>
              {category}
            </p>
          ))}
      </div>
      <div className='courseCard__info'>
        <LinkContainer to='/details'>
          <p className='courseCard__title'>{title}</p>
        </LinkContainer>

        <div className='courseCard__authorInfo'>
          <img src={AuthorImg} alt='Author' />
          <div className='courseCard__author'>
            <p className='courseCard__authorName'>{authorName}</p>
            <p className='courseCard__authorPosition'>{authorPosition}</p>
          </div>
        </div>
        <p className='courseCard__oldPrice'>NPR {oldPrice}</p>
        <div className='courseCard__price'>
          <p className='courseCard__newPrice'>NPR {newPrice}</p>
          <p className='courseCard__rating'>
            <img src={StarIcon} alt='Star Icon' />
            {rating}
            <span>({reviewsCount})</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
