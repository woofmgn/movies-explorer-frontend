import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = () => {
  let location = useLocation();

  return (
    <section className="movies">
      <ul
        className={`movies-list ${
          location.pathname === '/saved-movies'
            ? 'movies-list_type_saved-movies'
            : null
        }`}
      >
        <MoviesCard />
      </ul>
    </section>
  );
};

export default MoviesCardList;
