import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchReqStorage } from '../../utils/storage';
// import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './SearchForm.scss';

const SearchForm = ({
  isChecked,
  onToggleCheckbox,
  onSearchMovies,
  onSearchUserMovies,
  onfilterUserMovie,
}) => {
  const [isSearch, setSearch] = useState('');
  const location = useLocation();

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

  const handleSumbitUserSearch = (evt) => {
    evt.preventDefault();
    onSearchUserMovies(isSearch);
  };

  const handleToggleUserCheckbox = () => {
    onToggleCheckbox();
    onfilterUserMovie(isChecked);
  };

  useEffect(() => {
    const prevSearch = searchReqStorage.getDataStorage();
    if (prevSearch) {
      setSearch(prevSearch);
    }
  }, []);

  return (
    <section className="search-form">
      <form
        className="form search-movies"
        onSubmit={
          location.pathname === '/movies'
            ? (evt) => handlerSumbit(evt)
            : (evt) => handleSumbitUserSearch(evt)
        }
      >
        <fieldset className="search-movies__wrapper">
          <input
            className="search-movies__input"
            type="text"
            name="search"
            placeholder="Фильм"
            required
            value={isSearch || ''}
            onChange={handleChangleInput}
          />
          <button className="search-movies__button" type="submit" />
        </fieldset>
        <div className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <label className="search-movies__label">
            <input
              type="checkbox"
              className="search-movies__checkbox"
              checked={isChecked}
              onChange={
                location.pathname === '/movies'
                  ? () => handleToggleCheckbox()
                  : () => handleToggleUserCheckbox()
              }
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
