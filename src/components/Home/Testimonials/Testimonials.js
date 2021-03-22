import React, { useState } from "react";

import "./Testimonials.css";

import Comma from "../../../assets/images/testimonials/comma.svg";
import Person from "../../../assets/images/testimonials/person.svg";
import Person1 from "../../../assets/images/testimonials/person1.svg";
import Person2 from "../../../assets/images/testimonials/person2.svg";
import { TabContent, TabLink, Tabs } from "react-tabs-redux";

function Testimonials() {
  return (
    <div className="testimonials">
      <p className="testimonials__heading">
        10 thousands Plus are already learning on <span>Pocket Academy</span>
      </p>

      <Tabs className='testimonials__tab'>
        <TabContent for="tab1" className="testimonials__contentTab">
          <div className="testimonials__description">
            <img src={Comma} alt="comma icon" />
            <p>
              ”Plenty of examples, with enough time taken to work through them!
              clearly enjoys the subject, which helps keep us engaged during
              lecture. The homework isn’t too far off from class material,
              making it challenging but not impossible.”
            </p>
          </div>
        </TabContent>
        <TabContent for="tab2">
          <div className="testimonials__description">
            <img src={Comma} alt="comma icon" />
            <p>
              ”Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              iste error quaerat laborum cum nemo iure dolores sed nesciunt ad
              deleniti inventore, temporibus aperiam optio. Delectus tenetur a
              maiores magni..”
            </p>
          </div>
        </TabContent>
        <TabContent for="tab3">
          <div className="testimonials__description">
            <img src={Comma} alt="comma icon" />
            <p>
              ”The course was really good”
            </p>
          </div>
        </TabContent>
        <TabLink to="tab1" className="testimonials__labelTab">
          <div className="testimonials__person">
            <img src={Person} alt="person" />
            <div className="testimonials__personInfo">
              <p className="testimonials__personName">Krishna Timlishina</p>
              <p className="testimonials__personPosition">SEO Specialist</p>
            </div>
          </div>
        </TabLink>
        <TabLink to="tab2" className="testimonials__labelTab">
          <div className="testimonials__person">
            <img src={Person1} alt="person" />
            <div className="testimonials__personInfo">
              <p className="testimonials__personName">Manish Pradhan</p>
              <p className="testimonials__personPosition">Web Designer</p>
            </div>
          </div>
        </TabLink>
        <TabLink to="tab3" className="testimonials__labelTab">
          <div className="testimonials__person">
            <img src={Person2} alt="person" />
            <div className="testimonials__personInfo">
              <p className="testimonials__personName">Heena Tuladhar</p>
              <p className="testimonials__personPosition">Outbound Marketer</p>
            </div>
          </div>
        </TabLink>
      </Tabs>
    </div>
  );
}

export default Testimonials;
