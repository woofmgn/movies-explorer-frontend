import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

const Header = React.memo(({ isLogged }) => {
  return (
    <header className={`header ${isLogged ? 'header_theme_dark' : null}`}>
      <Link className="header__main-link" to="/" />
      {isLogged ? (
        <NavBar />
      ) : (
        <>
          <nav className="header__navigation">
            <ul className="header__navigation-list">
              <li className="header__navigation-item">
                <Link className="header__navigation-link" to="/signup">
                  Регистрация
                </Link>
              </li>
              <li className="header__navigation-item">
                <Link
                  className="header__navigation-link header__navigation-link_theme_green"
                  to="/signin"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
});

export default Header;
