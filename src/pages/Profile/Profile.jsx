import React from 'react';
import './Profile.scss';

const Profile = ({ userInfo, onLogOutUser, onSetUserInfo }) => {
  const handlerLogOutUser = () => {
    onLogOutUser();
  };

  const handlerChangeUserInfo = (evt) => {};

  return (
    <main className="main main_type_user-profile">
      <section className="auth profile">
        <h3 className="profile__title">Добро пожаловать</h3>
        <form className="profile-form">
          <label className="profile-form__label">
            Имя
            <input
              className="profile-form__input profile-form__input_type_email"
              type="name"
              required
              value={userInfo.name || ''}
              onChange={handlerChangeUserInfo}
            />
          </label>

          <span className="profile-form__error"></span>
          <label className="profile-form__label">
            Email
            <input
              className="profile-form__input profile-form__input_type_email"
              type="email"
              required
              value={userInfo.email || ''}
              onChange={handlerChangeUserInfo}
            />
          </label>

          <span className="profile-form__error"></span>
          <button className="profile-form__submit">Редактировать</button>
        </form>
        <button className="logout-button" onClick={handlerLogOutUser}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
};

export default Profile;
