import React from 'react';

import PriceSvg from '../../../assets/icons/CoursePreview/Price.svg';
import InstructorSvg from '../../../assets/icons/CoursePreview/Instructor.svg';
import DurationSvg from '../../../assets/icons/CoursePreview/Duration.svg';
import LecturesSvg from '../../../assets/icons/CoursePreview/Lectures.svg';
import RegisteredSvg from '../../../assets/icons/CoursePreview/Registered.svg';
import LanguageSvg from '../../../assets/icons/CoursePreview/Language.svg';
import DateSvg from '../../../assets/icons/CoursePreview/Date.svg';
import ShareSvg from '../../../assets/icons/Share.svg';
import LoveSvg from '../../../assets/icons/Love.svg';
import WishSvg from '../../../assets/icons/WishList.svg';
import DotSvg from '../../../assets/icons/CoursePreview/Dot.svg';

import { Wrapper } from './CoursePreviewElements';

const CoursePreview = ({ coursePreview }) => {
  return (
    <Wrapper>
      <img className='course-thumbnail' src={coursePreview.previewUrl} alt='' />

      <div className='course-card'>
        {/* Price */}
        <div className='card-single-price'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <div className='logo-price'>
                <img src={PriceSvg} alt='' />
              </div>
            </div>
            <div className='card-title-name'>Price</div>
          </div>
          {coursePreview.price === 0 ? (
            <div className='price-free'>Free</div>
          ) : (
            <div className='card-title-detail'>{coursePreview.price}</div>
          )}
        </div>

        {/* Instructor */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={InstructorSvg} alt='' />
            </div>
            <div className='card-title-name'>Instructor</div>
          </div>
          <div className='card-title-detail'>
            {coursePreview.instructor.name}
          </div>
        </div>
        <div className='card-line'></div>

        {/* Duration */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={DurationSvg} alt='' />
            </div>
            <div className='card-title-name'>Duration</div>
          </div>
          <div className='card-title-detail'>
            {coursePreview.duration} weeks
          </div>
        </div>
        <div className='card-line'></div>

        {/* Lectures */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={LecturesSvg} alt='' />
            </div>
            <div className='card-title-name'>Lectures</div>
          </div>
          <div className='card-title-detail'>{coursePreview.lectures}</div>
        </div>
        <div className='card-line'></div>

        {/* Enrolled */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={RegisteredSvg} alt='' />
              <img src={DotSvg} alt='' />
            </div>
            <div className='card-title-name'>Enrolled</div>
          </div>
          <div className='card-title-detail'>
            {coursePreview.enrolled} students
          </div>
        </div>
        <div className='card-line'></div>

        {/* Language */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={LanguageSvg} alt='' />
            </div>
            <div className='card-title-name'>Language</div>
          </div>
          <div className='card-title-detail'>{coursePreview.language}</div>
        </div>
        <div className='card-line'></div>

        {/* End Date */}
        <div className='card-single-tab'>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img src={DateSvg} alt='' />
            </div>
            <div className='card-title-name'>End Date</div>
          </div>
          <div className='card-title-detail'>{coursePreview.deadline}</div>
        </div>

        <button className='btn-enroll'>Enroll</button>
        <div className='btn-group'>
          <button className='btn'>
            <img src={ShareSvg} alt='' />
          </button>
          <button className='btn'>
            <img src={LoveSvg} alt='' />
          </button>
          <button className='btn'>
            <img src={WishSvg} alt='' />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CoursePreview;
