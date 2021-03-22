import React from 'react';

import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
import CurriculumTab from '../CurriculumTab/CurriculumTab';
import InstructorTab from '../InstructorTab/InstructorTab';
import OverviewTab from '../OverviewTab/OverviewTab';

import './Tabs.css';
import CoursePreview from '../CoursePreview/CoursePreview';
import ReviewTab from '../ReviewTab/ReviewTab';

const TabContainer = ({ courseDetails }) => {
  return (
    <div className='tab-header'>
      <Tabs>
        <TabLink to='tab1'>Overview</TabLink>
        <TabLink to='tab2'>Curriculum</TabLink>
        <TabLink to='tab3'>Instructor</TabLink>
        <TabLink to='tab4'>Reviews</TabLink>

        <TabContent for='tab1'>
          <OverviewTab courseOverview={courseDetails} />
        </TabContent>
        <TabContent for='tab2'>
          <CurriculumTab courseCurriculum={courseDetails} />
        </TabContent>
        <TabContent for='tab3'>
          <InstructorTab courseInstrutor={courseDetails} />
        </TabContent>
        <TabContent for='tab4'>
          <ReviewTab courseReview={courseDetails} />
        </TabContent>
      </Tabs>

      <div className='course-preview'>
        <CoursePreview coursePreview={courseDetails} />
      </div>
    </div>
  );
};

export default TabContainer;
