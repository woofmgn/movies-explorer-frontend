import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-container">
        <li className="portfolit__link-item">
          <a
            className="portfolio__link"
            href="https://github.com/woofmgn/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolit__link-item">
          <a
            className="portfolio__link"
            href="https://russian-travel-deploy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolit__link-item">
          <a
            className="portfolio__link"
            href="https://vden.mesto.nomoredomains.icu/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
