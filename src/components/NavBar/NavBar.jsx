import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__item navbar__item_type_first">
          <Link to="/movies" className="navbar__movies-link">
            Фильмы
          </Link>
        </li>
        <li className="navbar__item navbar__item_type_center">
          <Link to="/saved-movies" className="navbar__movies-link">
            Сохранённые фильмы
          </Link>
        </li>
        <li className="navbar__item navbar__item_last">
          <Link className="navbar__profile-link" to="/profile">
            Аккаунт
            <div className="navbar__profile-image"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
