import React from 'react';
import './CourseLists.css';

import CourseCard from '../CourseCard/CourseCard';

function CourseLists({ isLive }) {
  return (
    <div className='courseLists'>
      <CourseCard
        title='Zoom Beauty Academy with Make Up Studio Pvt. Ltd.'
        authorName='Coralina Cloud'
        authorPosition='Makeup Artist'
        oldPrice='2500.90'
        newPrice='2090.00'
        rating='4.8'
        reviewsCount='174'
        isLive={isLive}
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
        isLive={isLive}
        startDate='5:15 PM, Mon 10 Jan'
        endDate='5:15 PM, Fri 14 Jan'
        categories={['LevelA', 'B.Sc Nursing']}
      />
      <CourseCard
        title='Zoom Beauty Academy with Make Up Studio Pvt. Ltd.'
        authorName='Coralina Cloud'
        authorPosition='Makeup Artist'
        oldPrice='2500.90'
        newPrice='2090.00'
        rating='4.8'
        reviewsCount='174'
        isLive={isLive}
        startDate='5:15 PM, Mon 10 Jan'
        endDate='5:15 PM, Fri 14 Jan'
        categories={['LevelA', 'B.Sc Nursing']}
      />
    </div>
  );
}

export default CourseLists;
