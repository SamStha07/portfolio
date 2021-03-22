import React from 'react';
import { Route } from 'react-router';
import CourseCategories from '../../Courses/CourseCategories/CourseCategories';

function LiveCourses() {
  return (
    <div className='liveCourses'>
      <CourseCategories courseCategoryTitle='Live courses' isLive={true} />
    </div>
  );
}

export default LiveCourses;
