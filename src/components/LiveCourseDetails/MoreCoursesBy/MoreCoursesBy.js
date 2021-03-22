import React from 'react';
import CourseCard from '../../Courses/CourseCard/CourseCard';

import { Wrapper } from './MoreCoursesElements';

const MoreCoursesBy = ({ courseInstrutor }) => {
  return (
    <Wrapper>
      <div>more courses by {courseInstrutor.instructor.name} </div>

      <div className='courseLists'>
        <CourseCard
          title='Zoom Beauty Academy with Make Up Studio Pvt. Ltd.'
          authorName='Coralina Cloud'
          authorPosition='Makeup Artist'
          oldPrice='2500.90'
          newPrice='2090.00'
          rating='4.8'
          reviewsCount='174'
          // isLive={isLive}
          startDate='5:15 PM, Mon 10 Jan'
          endDate='5:15 PM, Fri 14 Jan'
          categories={['Level A', 'B.Sc Nursing']}
        />

        <CourseCard
          title='Zoom Beauty Academy with Make Up Studio Pvt. Ltd.'
          authorName='Coralina Cloud'
          authorPosition='Makeup Artist'
          oldPrice='2500.90'
          newPrice='2090.00'
          rating='4.8'
          reviewsCount='174'
          // isLive={isLive}
          startDate='5:15 PM, Mon 10 Jan'
          endDate='5:15 PM, Fri 14 Jan'
          categories={['LevelA', 'B.Sc Nursing']}
        />
      </div>
    </Wrapper>
  );
};

export default MoreCoursesBy;
