import React, { useRef } from 'react';
import { Wrapper, Skill } from './SkillElements';
import { gsap } from 'gsap/all';
import { useIntersection } from 'react-use';

import html from '../../images/logo/html.png';
import css from '../../images/logo/css.png';
import bootstrap from '../../images/logo/bootstrap.png';
import js from '../../images/logo/JS.png';
import react from '../../images/logo/react.png';
import redux from '../../images/logo/redux.png';
import node from '../../images/logo/node.png';
import express from '../../images/logo/express.png';
import antd from '../../images/logo/antd.png';
import material from '../../images/logo/material.png';
import mongo from '../../images/logo/mongo.png';
import styled from '../../images/logo/styled.png';

const SkillPage = ({ id }) => {
  const skillRef = useRef(null);

  // it will points the specific dom in different component
  const intersection = new useIntersection(skillRef, {
    root: null,
    rootMargin: '5%', //trggers when page bottom becomes 0
    threshold: 0.7, //height of screen 1 == 100%
  });

  const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });

  const fadeIn = (element) => {
    tl.to(element, {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      y: 60,
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    tl.to(element, {
      opacity: 0,
      duration: 1,
      ease: 'power1.out',
      y: 20,
    });
  };

  intersection && intersection.intersectionRatio < 0.7
    ? fadeOut('.fadeIn') //Not reached
    : fadeIn('.fadeIn'); // reached to animate

  return (
    <Wrapper ref={skillRef} id={id}>
      <h1 className='fadeIn'>Web Development Skills</h1>
      <Skill className='fadeIn'>
        <img src={html} alt={html} />
        <img src={css} alt={css} />
        <img src={styled} alt={styled} />
        <img src={bootstrap} alt={bootstrap} />
        <img src={js} alt={js} />
        <img src={react} alt={react} />
        <img src={redux} alt={redux} />
        <img src={node} alt={node} />
        <img src={express} alt={express} />
        <img src={mongo} alt={mongo} />
        <img src={antd} alt={antd} />
        <img src={material} alt={material} />
      </Skill>
    </Wrapper>
  );
};

export default SkillPage;
