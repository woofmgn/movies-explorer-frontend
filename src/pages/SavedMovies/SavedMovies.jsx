import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;
