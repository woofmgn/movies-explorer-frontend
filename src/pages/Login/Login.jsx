import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Login.scss';

const Login = ({ onAuthUser, authError }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handlerSubmitAuthUser = (evt) => {
    evt.preventDefault();
    onAuthUser(values.email, values.password);
  };

  return (
    <main className="main main_type_user-profile">
      <section className="auth">
        <div className="auth-header">
          <Link to="/" className="auth-header__link" />
          <h3 className="auth-header__title">Добро пожаловать</h3>
        </div>
        <form
          className="form auth-form auth-form__registration"
          onSubmit={handlerSubmitAuthUser}
        >
          <label className="auth-form__label">E-mail</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
            required
            minLength="2"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className="auth-form__error">{errors.email}</span>
          <label className="auth-form__label">Пароль</label>
          <input
            className="auth-form__input auth-form__input_type_password popup__form-item"
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className="auth-form__error">{errors.password}</span>
          <div className="auth-form__submit-container">
            <span className="auth-form__submit-error">{authError}</span>
            <button className="auth-form__submit" disabled={!isValid}>
              Войти
            </button>
          </div>
        </form>
        <p className="auth__subtitle">
          Ещё не зарегистрированы?
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
