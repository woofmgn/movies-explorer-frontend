import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';

const SavedMovies = ({ userMovies, onGetSavedMovies }) => {
  return (
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList
        userMovies={userMovies}
        onGetSavedMovies={onGetSavedMovies}
      />
    </main>
  );
};

export default SavedMovies;
