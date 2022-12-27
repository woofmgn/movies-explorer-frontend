import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';

const SavedMovies = ({ userMovies, onGetSavedMovies, onDislikeMovies }) => {
  return (
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList
        userMovies={userMovies}
        onGetSavedMovies={onGetSavedMovies}
        onDislikeMovies={onDislikeMovies}
      />
    </main>
  );
};

export default SavedMovies;
