import React from 'react';
import './SearchForm.scss';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-movies">
        <fieldset className="search-movies__wrapper">
          <input
            className="search-movies__input"
            type="text"
            placeholder="Фильм"
          />
          <button className="search-movies__button" type="submit" />
        </fieldset>
        <label className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <input className="search-movies__checkbox" type="checkbox" />
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
