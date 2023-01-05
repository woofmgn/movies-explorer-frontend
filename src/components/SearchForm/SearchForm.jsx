import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchReqStorage } from '../../utils/storage';
import './SearchForm.scss';

const SearchForm = ({
  isChecked,
  onToggleCheckbox,
  onSearchMovies,
  onSearchUserMovies,
  onfilterUserMovie,
  onUserSearchReq,
  userSearchReq,
}) => {
  const [isSearch, setSearch] = useState('');
  const [userCheckBox, setUserCheckBox] = useState(false);
  const location = useLocation();

  const handleToggleCheckbox = () => {
    onToggleCheckbox();
  };

  const handleChangleInput = (evt) => {
    setSearch(evt.target.value);
  };

  const handleChangeUserMovieInput = (evt) => {
    onUserSearchReq(evt.target.value);
  };

  const handlerSumbit = (evt) => {
    evt.preventDefault();
    onSearchMovies(isSearch);
  };

  const handleSumbitUserSearch = (evt) => {
    evt.preventDefault();
    onSearchUserMovies(userSearchReq);
  };

  const handleToggleUserCheckbox = () => {
    setUserCheckBox((prev) => !prev);
    onfilterUserMovie(userCheckBox);
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      const prevSearch = searchReqStorage.getDataStorage();
      if (prevSearch) {
        setSearch(prevSearch);
      }
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
            value={location.pathname === '/movies' ? isSearch : userSearchReq}
            onChange={
              location.pathname === '/movies'
                ? (evt) => handleChangleInput(evt)
                : (evt) => handleChangeUserMovieInput(evt)
            }
          />
          <button className="search-movies__button" type="submit" />
        </fieldset>
        <div className="search-movies__checkbox-wrapper">
          <p className="search-movies__description">Короткометражки</p>
          <label className="search-movies__label">
            <input
              type="checkbox"
              className="search-movies__checkbox"
              checked={
                location.pathname === '/movies' ? isChecked : userCheckBox
              }
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
