import React from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './SearchForm.scss';

const SearchForm = ({ onGetApiMovies }) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  const handlerSumbit = (evt) => {
    evt.preventDefault();
    onGetApiMovies();
  };
  return (
    <section className="search-form">
      <form className="form search-movies" onSubmit={handlerSumbit}>
        <fieldset className="search-movies__wrapper">
          <input
            className="search-movies__input"
            type="text"
            name="search"
            placeholder="Фильм"
            required
            value={values.search || ''}
            onChange={handleChange}
          />
          {/* <span className="auth-form__error">{errors.search}</span> */}
          <button
            className="search-movies__button"
            type="submit"
            disabled={!isValid}
          />
        </fieldset>
        <div className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <label className="search-movies__label">
            <input type="checkbox" className="search-movies__checkbox" />
            <div className="search-movies__slider">
              <div className="search-movies__knob"></div>
            </div>
          </label>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
