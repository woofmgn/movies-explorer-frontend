import React from 'react';
import './AboutProject.scss';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="section-title">О проекте</h2>
      <div className="about-diploma">
        <h3 className="about-diploma__title">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-diploma__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-diploma__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-diploma__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="daration-diploma">
        <div className="daration-diploma__backend">
          <p className="daration-diploma__title">1 неделя</p>
          <p className="daration-diploma__description">Back-end</p>
        </div>
        <div className="daration-diploma__frontend">
          <p className="daration-diploma__title daration-diploma__title_type_dark">
            4 недели
          </p>
          <p className="daration-diploma__description">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
