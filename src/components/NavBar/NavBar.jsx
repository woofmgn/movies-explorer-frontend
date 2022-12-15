import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavBar.scss';

const NavBar = () => {
  const [isBurger, setIsBurger] = useState(false);

  const toggleBurger = () => {
    if (window.innerWidth < 780) {
      setIsBurger(true);
    } else {
      setIsBurger(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', toggleBurger);

    return () => {
      window.removeEventListener('resize', toggleBurger);
    };
  }, []);

  return (
    <>
      {isBurger ? (
        <BurgerMenu />
      ) : (
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
              <Link
                className="profile-link profile-link_type_desktop"
                to="/profile"
              >
                Аккаунт
                <div className="profile-link__image"></div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
