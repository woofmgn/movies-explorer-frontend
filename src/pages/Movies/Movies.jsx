import React from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.scss';

const Movies = () => {
  return (
    <div className="movies-page">
      <SearchForm />
      <MoviesCardList />
      <button className="more-button">Ещё</button>
    </div>
  );
};

export default Movies;
