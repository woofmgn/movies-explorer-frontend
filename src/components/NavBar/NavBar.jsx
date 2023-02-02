import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavBar.scss';

const NavBar = () => {
  const location = useLocation();
  const [isBurger, setIsBurger] = useState(false);

  const toggleBurger = () => {
    if (window.innerWidth < 780) {
      setIsBurger(true);
    } else {
      setIsBurger(false);
    }
  };

  useEffect(() => {
    toggleBurger();
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
        <nav
          className={`navbar ${
            location.pathname === '/' ? 'navbar_theme_green' : null
          }`}
        >
          <ul className="navbar__container">
            <li className="navbar__item navbar__item_type_first">
              <Link
                to="/movies"
                className={`navbar__movies-link ${
                  location.pathname === '/movies'
                    ? 'navbar__movies-link_active'
                    : null
                }`}
              >
                Фильмы
              </Link>
            </li>
            <li className="navbar__item navbar__item_type_center">
              <Link
                to="/saved-movies"
                className={`navbar__movies-link ${
                  location.pathname === '/saved-movies'
                    ? 'navbar__movies-link_active'
                    : null
                }`}
              >
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
