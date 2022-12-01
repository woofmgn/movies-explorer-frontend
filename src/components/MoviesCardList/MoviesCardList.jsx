import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = () => {
  return (
    <section className="movies">
      <ul className="movies-list">
        <MoviesCard />
      </ul>
    </section>
  );
};

export default MoviesCardList;
