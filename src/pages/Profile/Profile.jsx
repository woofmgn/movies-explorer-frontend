import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { REGEXP_EMAIL, REGEXP_NAME } from '../../utils/constants';
import './Profile.scss';
const ERROR = 'Нельзя отправить старые данные';

const Profile = ({
  authError,
  onLogOutUser,
  onSetUserInfo,
  onSetErrorInfo,
}) => {
  const userInfo = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();

  const handlerLogOutUser = () => {
    onLogOutUser();
  };

  const handleCheckedPrevValue = () => {
    if (values.name !== userInfo.name || values.email !== userInfo.email) {
      onSetUserInfo({
        name: values.name,
        email: values.email,
      });
      onSetErrorInfo('');
      return;
    } else {
      onSetErrorInfo(ERROR);
    }
  };

  const handleSumbitSetUserInfo = (evt) => {
    evt.preventDefault();
    handleCheckedPrevValue();
  };

  useEffect(() => {
    setValues({ name: userInfo.name, email: userInfo.email });
    onSetErrorInfo('');
  }, []);

  return (
    <main className="main main_type_user-profile">
      <section className="auth profile">
        <h3 className="profile__title">Привет, {userInfo.name}!</h3>
        <form className="profile-form" onSubmit={handleSumbitSetUserInfo}>
          <label className="profile-form__label">
            Имя
            <input
              className="profile-form__input profile-form__input_type_email"
              type="text"
              name="name"
              pattern={REGEXP_NAME}
              required
              value={values.name || ''}
              onChange={handleChange}
            />
          </label>

          <span className="profile-form__error">{errors.name}</span>
          <label className="profile-form__label">
            Email
            <input
              className="profile-form__input profile-form__input_type_email"
              type="email"
              name="email"
              pattern={REGEXP_EMAIL}
              required
              value={values.email || ''}
              onChange={handleChange}
            />
          </label>
          <span className="profile-form__error">{errors.email}</span>
          <div className="profile-form__submit-container">
            <span className="profile-form__submit-error">{authError}</span>
            <button className="profile-form__submit" disabled={!isValid}>
              Редактировать
            </button>
          </div>
        </form>
        <button className="logout-button" onClick={handlerLogOutUser}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
};

export default Profile;
