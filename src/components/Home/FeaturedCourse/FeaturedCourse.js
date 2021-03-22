import React, { useState } from "react";
import "./FeaturedCourse.css";

import BackgroundImage from "../../../assets/images/Background.svg";
import Banner from "../../../assets/images/Banner.svg";
import PlayIcon from "../../../assets/icons/Play.svg";
import VideoPlayIcon from "../../../assets/icons/VideoPlay.svg";
import ActiveDot from "../../../assets/icons/ActiveDot.svg";
import Dot from "../../../assets/icons/Dot.svg";

function FeaturedCourse() {
  const [course, setCourse] = useState({
    id: "1",
    title: "Syllabus Revised Basic Graduation in Nursing",
    description: "Want to crack Bsc Nursing 2021 with your dream score?",
    demoLink: "#",
    banner: Banner,
  });
  const { id, title, description, demoLink, banner } = course;
  return (
    <div className="featuredCourse">
      <img
        src={BackgroundImage}
        alt="background theme"
        className="featuredCourse__background"
      />
      <div className="featuredCourse__info" key={id}>
        <p className="featuredCourse__title">{title}</p>
        <p className="featuredCourse__description">{description}</p>
        <div className="featuredCourse__buttons">
          <button className="featuredCourse__joinBtn">JOIN NOW</button>
          <div className="featuredCourse__demoBtn">
            <img src={PlayIcon} alt="demo play icon" />
            <p className="featuredCourse__demoText">DEMO VIDEO</p>
          </div>
        </div>
      </div>

      <div className="featuredCourse__banner">
        <img src={banner} alt="course banner" className='featuredCourse__mainImage'/>
        <img
          className="featuredCourse__videoPlayIcon"
          src={VideoPlayIcon}
          alt="course video play icon"
        />
        <div className="featuredCourse__dots">
          <img src={Dot} alt="course active dot" />
          <img
            className="featuredCourse__activeDot"
            src={ActiveDot}
            alt="course active dot"
          />
          <img src={Dot} alt="course active dot" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourse;
