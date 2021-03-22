import React from "react";
import "./PopularCourses.css";

import CourseCategories from "../../Courses/CourseCategories/CourseCategories";

function PopularCourses() {
  return (
    <div className="popularCourses">
      <CourseCategories
        courseCategoryTitle="Popular Courses"
        courseCategoryDescription="Pocket Academy has a large range of free, comprehensive classes on
          technology, languages, science, financial literacy, personal and soft
          skills, entrepreneurship."
      />
    </div>
  );
}

export default PopularCourses;
