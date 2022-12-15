import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <main className="main main_type_user-profile">
      <section className="auth profile">
        <h3 className="profile__title">Добро пожаловать</h3>
        <form className="profile-form">
          <label className="profile-form__label">
            Имя
            <input
              className="profile-form__input profile-form__input_type_email"
              type="email"
              required
            />
          </label>

          <span className="profile-form__error"></span>
          <label className="profile-form__label">
            Email
            <input
              className="profile-form__input profile-form__input_type_email"
              type="email"
              required
            />
          </label>

          <span className="profile-form__error"></span>
          <button className="profile-form__submit">Редактировать</button>
        </form>
        <button className="logout-button" onClick={() => navigate('/')}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
};

export default Profile;
