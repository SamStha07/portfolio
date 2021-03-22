import React from 'react';
import { Wrapper } from './CurriculumTabElements';
import CurriculumTopics from './CurriculumTopics/CurriculumTopics';

const CurriculumTab = () => {
  return (
    <Wrapper>
      <p className='overview-content'>
        Cooking and baking are the kinds of activities that most people assume
        are second nature. After all, we're humans, and our most basic need is
        to supply ourselves with nutrition. Logically, we should just be able to
        get in the kitchen and make something to eat.{' '}
      </p>

      <CurriculumTopics />
    </Wrapper>
  );
};

export default CurriculumTab;
