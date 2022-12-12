import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = ({ onToggleLoginStatus }) => {
  const navigate = useNavigate();

  const handleTogleLoginStatus = (evt) => {
    evt.preventDefault();
    onToggleLoginStatus();
    navigate('/movies');
  };

  return (
    <main className="main main_type_user-profile">
      <section className="auth">
        <div className="auth-header">
          <Link to="/" className="auth-header__link" />
          <h3 className="auth-header__title">Добро пожаловать</h3>
        </div>
        <form
          className="auth-form auth-form__registration"
          onSubmit={handleTogleLoginStatus}
        >
          <label className="auth-form__label">E-mail</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
            required
          />
          <span className="auth-form__error"></span>
          <label className="auth-form__label">Пароль</label>
          <input
            className="auth-form__input auth-form__input_type_password popup__form-item"
            type="password"
            required
          />
          <span className="auth-form__error"></span>
          <button
            className="auth-form__submit auth-form__submit_type_login"
            type="submit"
          >
            Войти
          </button>
        </form>
        <p className="auth__subtitle">
          Ещё не зарегистрированы?
          <Link to="/signin" className="auth__link">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
