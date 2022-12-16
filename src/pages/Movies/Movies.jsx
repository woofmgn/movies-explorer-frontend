import React, { useState } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { apiMovies } from '../../utils/MoviesApi';
import './Movies.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getApiMovies = () => {
    apiMovies.getMovies().then((res) => setMovies(() => res));
  };

  return (
    <main className="movies-page">
      <SearchForm onGetApiMovies={getApiMovies} />
      <MoviesCardList />
      <button className="more-button">Ещё</button>
    </main>
  );
};

export default Movies;
