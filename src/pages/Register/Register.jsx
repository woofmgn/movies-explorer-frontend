import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
    <main className="main main_type_user-profile">
      <section className="auth">
        <div className="auth-header">
          <Link to="/" className="auth-header__link" />
          <h3 className="auth-header__title">Добро пожаловать</h3>
        </div>
        <form className="auth-form auth-form__registration">
          <label className="auth-form__label">Имя</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
          />
          <span className="auth-form__error"></span>
          <label className="auth-form__label">E-mail</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
          />
          <span className="auth-form__error"></span>
          <label className="auth-form__label">Пароль</label>
          <input
            className="auth-form__input auth-form__input_type_password popup__form-item"
            type="password"
          />
          <span className="auth-form__error">член</span>
          <button className="auth-form__submit">Зарегистрироваться</button>
        </form>
        <p className="auth__subtitle">
          Уже зарегистрированы?
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
