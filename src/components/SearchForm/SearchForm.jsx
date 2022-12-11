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
        {/* <label className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <input className="search-movies__checkbox" type="checkbox" />
          <div class="toggler-slider">
            <div class="toggler-knob"></div>
          </div>
        </label> */}
        <div className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <label className="toggler-wrapper style-1">
            <input type="checkbox" />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
