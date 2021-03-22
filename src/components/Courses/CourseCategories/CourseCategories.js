import React from 'react';
import './CourseCategories.css';
import { LinkContainer } from 'react-router-bootstrap';

import MoreIcon from '../../../assets/icons/More.svg';
import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
import CourseLists from '../CourseLists/CourseLists';

function CourseCategories({
  courseCategoryTitle,
  courseCategoryDescription,
  isLive,
}) {
  return (
    <div className='courseCategories'>
      <p className='courseCategories__heading'>{courseCategoryTitle}</p>
      {courseCategoryDescription && (
        <div className='courseCategories__description'>
          <p>{courseCategoryDescription}</p>
          <button>
            More{' '}
            <img
              className='courseCategories__moreIcon'
              src={MoreIcon}
              alt='more icon'
            />
          </button>
        </div>
      )}
      <div className='courseCategories__tabs'>
        <Tabs>
          <TabLink to='tab1'>All Courses</TabLink>
          <TabLink to='tab2'>Web Development</TabLink>
          <TabLink to='tab3'>Makeup Training</TabLink>

          <TabContent for='tab1' className='courseCategories__tabContent'>
            <CourseLists isLive={isLive} />
          </TabContent>
          <TabContent for='tab2'>
            <CourseLists
              isLive={isLive}
              className='courseCategories__tabContent'
            />
          </TabContent>
          <TabContent for='tab3'>
            <CourseLists
              isLive={isLive}
              className='courseCategories__tabContent'
            />
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CourseCategories;
