import { useState } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { TIME_DURATION } from '../../utils/constants';
import { savedMoviesApi } from '../../utils/MainApi';

const SavedMovies = ({
  userMovies,
  onGetSavedMovies,
  onDislikeMovies,
  isChecked,
  isLoading,
  errorStatus,
  onSetSavedUserMovies,
  onToggleCheckbox,
  onSetErrorStatus,
}) => {
  const [userSearchReq, setUserSearchReq] = useState('');

  const handlerSetErrorStatus = (status) => {
    onSetErrorStatus(status);
  };

  const handleUserSearchReq = (search) => {
    setUserSearchReq(search);
  };

  const handleSearchUserMovies = (reqSearch) => {
    const searched = userMovies.filter((item) => {
      const titleRU = item.nameRU
        .toLowerCase()
        .includes(reqSearch.toLowerCase());
      const titleEN = item.nameEN
        .toLowerCase()
        .includes(reqSearch.toLowerCase());
      if (isChecked && item.duration <= TIME_DURATION) {
        return titleRU || titleEN;
      } else if (!isChecked && item.duration > TIME_DURATION) {
        return titleRU || titleEN;
      }
    });
    onSetSavedUserMovies(searched);
  };

  const filterUserMovie = async (checkbox) => {
    handlerSetErrorStatus(false);
    try {
      const res = await savedMoviesApi.getSavedMovies();
      const searched = res.filter((item) => {
        if (!checkbox && item.duration <= TIME_DURATION) {
          return item;
        } else if (checkbox && item.duration > TIME_DURATION) {
          return item;
        }
      });
      onSetSavedUserMovies(searched);
    } catch (err) {
      console.log(err);
      handlerSetErrorStatus(true);
    }
  };

  return (
    <main className="movies-page">
      <SearchForm
        userSearchReq={userSearchReq}
        onToggleCheckbox={onToggleCheckbox}
        isChecked={isChecked}
        onUserSearchReq={handleUserSearchReq}
        onSearchUserMovies={handleSearchUserMovies}
        onfilterUserMovie={filterUserMovie}
      />

      {userMovies.length || userSearchReq ? (
        <MoviesCardList
          isLoading={isLoading}
          userSearchReq={userSearchReq}
          userMovies={userMovies}
          onGetSavedMovies={onGetSavedMovies}
          onDislikeMovies={onDislikeMovies}
          errorStatus={errorStatus}
        />
      ) : null}
    </main>
  );
};

export default SavedMovies;
