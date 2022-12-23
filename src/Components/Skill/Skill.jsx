import React from 'react';

import './Skill.css';
import Frontend from './Frontend';
import ML from './ML';

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <ML />
      </div>
    </section>
  );
};

export default Skill;
