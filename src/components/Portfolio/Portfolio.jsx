import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Link
        to="https://github.com/woofmgn/how-to-learn"
        className="portfolio__link"
      >
        Статичный сайт
      </Link>
      <Link
        to="https://russian-travel-deploy.vercel.app/"
        className="portfolio__link"
      >
        Адаптивный сайт
      </Link>
      <Link
        to="https://vden.mesto.nomoredomains.icu/"
        className="portfolio__link"
      >
        Одностраничное приложение
      </Link>
    </section>
  );
};

export default Portfolio;
