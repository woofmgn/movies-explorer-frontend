import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';

const SavedMovies = ({
  userMovies,
  onGetSavedMovies,
  onDislikeMovies,
  isChecked,
  onSetSavedUserMovies,
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

  return (
    <main className="movies-page">
      <SearchForm onSearchUserMovies={handleSearchUserMovies} />
      <MoviesCardList
        userMovies={userMovies}
        onGetSavedMovies={onGetSavedMovies}
        onDislikeMovies={onDislikeMovies}
      />
    </main>
  );
};

export default SavedMovies;
