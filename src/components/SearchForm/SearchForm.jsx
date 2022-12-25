import { useState } from 'react';
// import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './SearchForm.scss';

const SearchForm = ({
  isChecked,
  prevSearch,
  onToggleCheckbox,
  onSearchMovies,
}) => {
  const [isSearch, setSearch] = useState('');

  const handleToggleCheckbox = () => {
    onToggleCheckbox();
  };

  const handleChangleInput = (evt) => {
    setSearch(evt.target.value);
  };

  const handlerSumbit = (evt) => {
    evt.preventDefault();
    onSearchMovies(isSearch);
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
            // value={values.search && isSearch}
            value={isSearch || prevSearch || ''}
            onChange={handleChangleInput}
          />
          {/* <span className="auth-form__error">{errors.search}</span> */}
          <button
            className="search-movies__button"
            type="submit"
            // disabled={!isValid}
          />
        </fieldset>
        <div className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <label className="search-movies__label">
            <input
              type="checkbox"
              className="search-movies__checkbox"
              checked={isChecked}
              onChange={handleToggleCheckbox}
            />
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
