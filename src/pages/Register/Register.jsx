import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { REGEXP_EMAIL, REGEXP_NAME } from '../../utils/constants';
import './Register.scss';

const Register = ({ isLogged, authError, onRegisterUser, onSetAuthError }) => {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handlerSubmitRegister = (evt) => {
    evt.preventDefault();
    onRegisterUser(values.name, values.email, values.password);
  };

  useEffect(() => {
    if (isLogged) {
      navigate(-1);
    }
    onSetAuthError('');
  }, [isLogged]);

  return (
    <main className="main main_type_user-profile">
      <section className="auth">
        <div className="auth-header">
          <Link to="/" className="auth-header__link" />
          <h3 className="auth-header__title">Добро пожаловать</h3>
        </div>
        <form
          className="form auth-form auth-form__registration"
          onSubmit={handlerSubmitRegister}
        >
          <label className="auth-form__label">Имя</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="name"
            name="name"
            minLength="2"
            maxLength="30"
            pattern={REGEXP_NAME}
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className="auth-form__error">{errors.name}</span>
          <label className="auth-form__label">E-mail</label>
          <input
            className="auth-form__input auth-form__input_type_email popup__form-item"
            type="email"
            name="email"
            pattern={REGEXP_EMAIL}
            required
            value={values.email || ''}
            onChange={handleChange}
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
              Зарегистрироваться
            </button>
          </div>
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
