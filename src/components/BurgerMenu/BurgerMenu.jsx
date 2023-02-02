import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState();
  const location = useLocation();

  const handleToggleOpenMenu = (evt) => {
    evt.stopPropagation();
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <button className="burger-button" onClick={handleToggleOpenMenu} />
      {isOpenMenu && (
        <div className="burger-container" onClickCapture={handleToggleOpenMenu}>
          <nav className="burger-menu">
            <button
              className="burger-menu__close-button"
              onClick={handleToggleOpenMenu}
            />
            <ul className="burger-menu__list">
              <li className="burger-menu__item">
                <Link
                  to="/"
                  className={`burger-menu__link ${
                    location.pathname === '/'
                      ? 'burger-menu__link_active'
                      : null
                  }`}
                >
                  Главная
                </Link>
              </li>
              <li className="burger-menu__item">
                <Link
                  to="/movies"
                  className={`burger-menu__link ${
                    location.pathname === '/movies'
                      ? 'burger-menu__link_active'
                      : null
                  }`}
                >
                  Фильмы
                </Link>
              </li>
              <li className="burger-menu__item">
                <Link
                  to="/saved-movies"
                  className={`burger-menu__link ${
                    location.pathname === '/saved-movies'
                      ? 'burger-menu__link_active'
                      : null
                  }`}
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <Link
              className="profile-link profile-link_type_burger"
              to="/profile"
            >
              Аккаунт
              <div className="profile-link__image"></div>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
