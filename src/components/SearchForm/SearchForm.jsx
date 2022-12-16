import React from 'react';
import './SearchForm.scss';

const SearchForm = ({ onGetApiMovies }) => {
  const handlerSumbit = (evt) => {
    evt.preventDefault();
    onGetApiMovies();
  };
  return (
    <section className="search-form">
      <form className="search-movies" onSubmit={handlerSumbit}>
        <fieldset className="search-movies__wrapper">
          <input
            className="search-movies__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-movies__button" type="submit" />
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
