import React, { useState } from "react";

import "./Footer.css";

import PocketAcademyLogo from "../../assets/images/Logo.svg";
import IOM from "../../assets/images/IOM.svg";
import PracticalNotice from "../../assets/images/PracticalNotice.svg";
import UrgentNotice from "../../assets/images/UrgentNotice.svg";
import EmailIcon from "../../assets/icons/Email.svg";
import ContactIcon from "../../assets/icons/Contact.svg";

function Footer() {
  const [courses, setCourses] = useState([
    "Home",
    "About Us",
    "Live Courses",
    "Popular Courses",
    "Academic Courses",
  ]);

  const [links, setLinks] = useState([
    "Testimonials",
    "Help and Support",
    "Blogs and News",
    "Notices",
    "Contact Us",
  ]);

  const [notices, setNotices] = useState([
    {
      id: "1",
      thumbnail: IOM,
      title: "IOM Entrance Exam 2020",
      subtitle: "16 December 2020",
    },
    {
      id: "2",
      thumbnail: UrgentNotice,
      title: "Urgent notice for Exam Center 2020",
      subtitle: "14 December 2020",
    },
    {
      id: "3",
      thumbnail: PracticalNotice,
      title: "Notice of Practical Class",
      subtitle: "12 December 2020",
    },
  ]);

  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__info">
          <img
            src={PocketAcademyLogo}
            alt="Pocket Academy Logo"
            className="footer__header"
          />
          <p className="footer__infoDescription">
            Study hard what interests you the most in the most undisciplined,
            irreverent and original manner possible.
          </p>
          <div className="footer__contact footer__email">
            <img src={EmailIcon} alt="Pocket Academy Email" />
            <span>info@pocketacademy.com.np</span>
          </div>
          <div className="footer__contact footer__phone">
            <img src={ContactIcon} alt="Pocket Academy Phone" />
            <span>+977 16-6001-2448</span>
          </div>
        </div>
        <div className="footer__menu">
          <p className="footer__header">Menu</p>
          {courses.map((course) => (
            <p className="footer__item" key={course}>
              {course}
            </p>
          ))}
        </div>
        <div className="footer__links">
          <p className="footer__header">Useful Links</p>
          {links.map((link) => (
            <p className="footer__item" key={link}>
              {link}
            </p>
          ))}
        </div>
        <div className="footer__notice">
          <div className="footer__header">Recent Notice</div>
          {notices.map((notice) => (
            <div className="footer__noticeItem" key={notice.id}>
              <div className="footer__noticeBackground">
                <img src={notice.thumbnail} alt="" />
              </div>
              <div className="footer__noticeInfo">
                <p className="footer__noticeTitle">{notice.title}</p>
                <p className="footer__noticeSubTitle">{notice.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="footer--border" />
      </div>
      <div className="footer__down">
        <p className="footer__downItem">Privacy Policy</p>
        <p className="footer__downItem">Terms of Use</p>
        <p className="footer__downItem">
          Copyright © 2020 All rights reserved. | Made with 🖤 ️in Nepal
        </p>
      </div>
    </div>
  );
}

export default Footer;
