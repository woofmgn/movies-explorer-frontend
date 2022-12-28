import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { savedMoviesApi } from '../../utils/MainApi';

const SavedMovies = ({
  userMovies,
  onGetSavedMovies,
  onDislikeMovies,
  isChecked,
  onSetSavedUserMovies,
  onToggleCheckbox,
}) => {
  const handleSearchUserMovies = (reqSearch) => {
    const searched = userMovies.filter((item) => {
      const titleRU = item.nameRU
        .toLowerCase()
        .includes(reqSearch.toLowerCase());
      const titleEN = item.nameEN
        .toLowerCase()
        .includes(reqSearch.toLowerCase());
      if (isChecked && item.duration <= 40) {
        return titleRU || titleEN;
      } else if (!isChecked && item.duration > 40) {
        return titleRU || titleEN;
      }
    });
    onSetSavedUserMovies(searched);
  };

  const filterUserMovie = async (checkbox) => {
    try {
      const res = await savedMoviesApi.getSavedMovies();
      const searched = res.filter((item) => {
        if (!checkbox && item.duration <= 40) {
          return item;
        } else if (checkbox && item.duration > 40) {
          return item;
        }
      });
      onSetSavedUserMovies(searched);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="movies-page">
      <SearchForm
        onSearchUserMovies={handleSearchUserMovies}
        onToggleCheckbox={onToggleCheckbox}
        isChecked={isChecked}
        onfilterUserMovie={filterUserMovie}
      />
      <MoviesCardList
        userMovies={userMovies}
        onGetSavedMovies={onGetSavedMovies}
        onDislikeMovies={onDislikeMovies}
      />
    </main>
  );
};

export default SavedMovies;
