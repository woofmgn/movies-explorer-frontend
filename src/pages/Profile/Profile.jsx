import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.scss';

const Profile = ({ onLogOutUser, onSetUserInfo }) => {
  const userInfo = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(userInfo.name);
  const [userEmail, setUserEmail] = useState(userInfo.email);

  const handlerLogOutUser = () => {
    onLogOutUser();
  };

  const handlerChangeUserName = (evt) => {
    setUserName(evt.target.value);
  };

  const handlerChangeUserEmail = (evt) => {
    setUserEmail(evt.target.value);
  };

  const handleSumbitSetUserInfo = (evt) => {
    evt.preventDefault();
    onSetUserInfo({
      name: userName,
      email: userEmail,
    });
  };

  return (
    <main className="main main_type_user-profile">
      <section className="auth profile">
        <h3 className="profile__title">Добро пожаловать</h3>
        <form className="profile-form" onSubmit={handleSumbitSetUserInfo}>
          <label className="profile-form__label">
            Имя
            <input
              className="profile-form__input profile-form__input_type_email"
              type="name"
              required
              value={userName}
              onChange={handlerChangeUserName}
            />
          </label>

          <span className="profile-form__error"></span>
          <label className="profile-form__label">
            Email
            <input
              className="profile-form__input profile-form__input_type_email"
              type="email"
              required
              value={userEmail}
              onChange={handlerChangeUserEmail}
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
