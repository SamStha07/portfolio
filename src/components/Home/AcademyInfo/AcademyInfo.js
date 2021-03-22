import React, { useState } from "react";

import WSC from "../../../assets/images/academyInfo/WSC.svg";

import "./AcademyInfo.css";

function AcademyInfo() {
  const [features, setFeatures] = useState([
    {
      id: "1",
      title: "Well Sturecture Courses",
      subtitle: `In a learning environment where an instructor and students do not
              meet face-to-face, an intuitive, organized, and well-structured
              course design is especially ...`,
    },
    {
      id: "2",
      title: "In depth Courses",
      subtitle: `This course will help digital marketers and product managers
       understand both the basic and advanced concepts of Google Analytics, 
       with live examples of how ...`,
    },
    {
      id: "3",
      title: "Easy to use User Interface",
      subtitle: `A clear interface helps prevent user errors, makes important 
                    information obvious, and contributes to ease of learning 
                    and use. Consistent.`,
    },
    {
      id: "4",
      title: "One-on-One Mentorship",
      subtitle: `The program makes one-to-one matches and also assigns each 
                mentor-mentee pair to a group. Groups meet weekly after school 
                with a group facilitator for two- ...`,
    },
  ]);
  return (
    <div className="academyInfo">
      <p className="academyInfo__heading">What’s more in Pocket Academy</p>
      <div className="academyInfo__features">
        {features.map(({ id, title, subtitle }) => (
          <div className="academyInfo__feature" key={id}>
            <img src={WSC} alt="" className="academyInfo__image" />
            <div className="academyInfo__description">
              <div className="academyInfo__title">{title}</div>
              <div className="academyInfo__subtitle">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademyInfo;
