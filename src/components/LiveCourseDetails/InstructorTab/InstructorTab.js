import React from 'react';
import star from '../../../assets/icons/Star.svg';
import youtube from '../../../assets/icons/LiveCourse/Youtube.svg';
import twitter from '../../../assets/icons/LiveCourse/Twitter.svg';
import linkdin from '../../../assets/icons/LiveCourse/Linkdin.svg';
import m from '../../../assets/icons/LiveCourse/M.svg';

import {
  Wrapper,
  ImageWrapper,
  IntroWrapper,
  Title,
  InstructorReview,
  Icons,
} from './InstructorTabElements';
import MoreCoursesBy from '../MoreCoursesBy/MoreCoursesBy';

const InstructorTab = ({ courseInstrutor }) => {
  return (
    <>
      <Wrapper>
        <div>
          <ImageWrapper>
            <img src={courseInstrutor.instructor.image} alt='' />
          </ImageWrapper>

          <Icons>
            <div className='circle-twitter'>
              <img className='logo-twitter' src={twitter} alt='' />
            </div>
            <div className='circle-linkdin'>
              <img className='logo-linkdin' src={linkdin} alt='' />
            </div>
            <div className='circle-m'>
              <img className='logo-m' src={m} alt='' />
            </div>
            <div className='circle-youtube'>
              <img className='logo-youtube' src={youtube} alt='' />
            </div>
          </Icons>
        </div>
        <IntroWrapper>
          <Title>{courseInstrutor.instructor.name}</Title>
          <p className='expertise'>{courseInstrutor.instructor.occupation}</p>
          <p className='intro'>{courseInstrutor.instructor.intro}</p>

          <InstructorReview>
            <p className='total-students'>
              {courseInstrutor.instructor.totalStudentsEnrolled} Total Students
            </p>
            <div className='rating'>
              <img src={star} alt='' />
              {''}
              <span className='rating-number'>
                {courseInstrutor.instructor.ratings}
              </span>
              <span className='rating-total'>(500 Ratings)</span>
            </div>
            <p className='reviews'>
              {courseInstrutor.instructor.reviews.length} Reviews
            </p>
          </InstructorReview>
        </IntroWrapper>
      </Wrapper>

      <MoreCoursesBy courseInstrutor={courseInstrutor} />
    </>
  );
};

export default InstructorTab;
