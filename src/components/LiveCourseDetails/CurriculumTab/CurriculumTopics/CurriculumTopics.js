import React, { useState } from 'react';
import { Wrapper, Tab } from './CurriculumTopicsElements';

import DownArrow from '../../../../assets/icons/LiveCourse/DownArrow.svg';

const CurriculumTopics = () => {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <Tab onClick={() => setShow(!show)}>
        <span className='text'>Day 1</span>
        {show ? (
          <div className='show-arrow'>
            <img className='downarrow' src={DownArrow} alt='' />
          </div>
        ) : (
          <img className='downarrow' src={DownArrow} alt='' />
        )}
      </Tab>
      {show && (
        <div className='show-details'>
          <p className='topic-intro'>
            We will teach you in this chapter how this course was designed and
            how to get the most out of it. We'll also show you how the exercises
            can be overcome and quizzes submitted.
          </p>
        </div>
      )}
    </Wrapper>
  );
};

export default CurriculumTopics;
