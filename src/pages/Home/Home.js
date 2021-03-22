import React, { useState } from 'react';

import './Home.css';

import LiveCourses from '../../components/Home/LiveCourses/LiveCourses';
import PopularCourses from '../../components/Home/PopularCourses/PopularCourses';
import FeaturedCourse from '../../components/Home/FeaturedCourse/FeaturedCourse';
import AcademyInfo from '../../components/Home/AcademyInfo/AcademyInfo';
import Companies from '../../components/Home/Companies/Companies';
import Testimonials from '../../components/Home/Testimonials/Testimonials';
import Login from '../../components/Authentication/Login/Login';

// redux
import { useSelector } from 'react-redux';
import { selectLogin } from '../../features/app/appSlice';
import LiveCouseDetails from '../LiveCourseDetails/LiveCourseDetails';

function Home() {
  const login = useSelector(selectLogin);

  return (
    <div className='home'>
      {login && <Login />}
      <FeaturedCourse />
      <PopularCourses />
      <LiveCourses />
      <AcademyInfo />
      <Testimonials />
      <Companies />
    </div>
  );
}

export default Home;
