import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">© 2022</p>
        <ul className="footer__links-container">
          <li className="footer__link-wrapper">
            <Link to="https://practicum.yandex.ru" className="footer__link">
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__link-wrapper">
            <Link to="https://github.com/woofmgn" className="footer__link">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
