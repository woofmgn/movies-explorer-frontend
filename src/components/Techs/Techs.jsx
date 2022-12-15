import React from 'react';
import './Techs.scss';

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="section-title section-title_type_techs">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs-container">
        <li className="techs-container__item">
          <p className="techs-container__title">HTML</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">CSS</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">JS</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">React</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">Git</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">Express.js</p>
        </li>
        <li className="techs-container__item">
          <p className="techs-container__title">mongoDB</p>
        </li>
      </ul>
    </section>
  );
};

export default Techs;
