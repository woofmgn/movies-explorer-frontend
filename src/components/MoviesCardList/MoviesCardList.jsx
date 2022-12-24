import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = ({ movies }) => {
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
        {movies.map((item) => {
          return (
            <MoviesCard
              key={item.id}
              imageUrl={item.image.url}
              titleRU={item.nameRU}
              titleEN={item.nameEN}
              duration={item.duration}
              trailerLink={item.trailerLink}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
