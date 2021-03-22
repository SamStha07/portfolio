import React from 'react';

import { List, Title, Wrapper } from './OverviewTabElements.js';

const OverviewTab = ({ courseOverview }) => {
  return (
    <Wrapper>
      <Title>Course Description</Title>
      <p className='overview-content'>
        Are you ready to start your path to becoming a Popular chef!
      </p>

      <p className='overview-content'>
        Cooking and baking are the kinds of activities that most people assume
        are second nature. After all, we're humans, and our most basic need is
        to supply ourselves with nutrition. Logically, we should just be able to
        get in the kitchen and make something to eat.
      </p>

      {/* youtube video section */}
      <img
        style={{ width: '100%', height: '451px' }}
        src={courseOverview.videoUrl}
        alt=''
      />

      <p className='overview-content'>
        is over $120,000 in the United States according to Indeed! Data Science
        is a rewarding career that allows you to solve some of the world's most
        interesting problems!earning:
      </p>

      <p className='overview-content'>
        This course is designed for both beginners with some cooking experience
        or experienced chef looking to make the jump to Popular chef! This
        comprehensive course is comparable to other Chef bootcamps that usually
        cost thousands of dollars, but now you can learn all that information at
        a fraction of the cost! With over 100 HD. Video lectures and detailed
        code notebooks for every lecture this is one of the most comprehensive
        course for Cook and Chef on Pocket Academy!
      </p>

      <Title>Certification</Title>
      <p className='overview-content'>
        Certificates work! In the least amount of time, and for the least amount
        of money, they provide people with the right knowledge and skills to
        land a job. Employers are increasingly demanding professional
        certification in addition to a degree from college graduates.
      </p>

      <Title>Skill you may gain</Title>

      {courseOverview.skills.map((skill) => (
        <List>
          <span>{skill.list}</span>
        </List>
      ))}

      <Title className='overview-title'>Requirements</Title>

      {courseOverview.requirements.map((requirement) => (
        <List className='requirement-list'>
          <span>{requirement.list}</span>
        </List>
      ))}
    </Wrapper>
  );
};

export default OverviewTab;
