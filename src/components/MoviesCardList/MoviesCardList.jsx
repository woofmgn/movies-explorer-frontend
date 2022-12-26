import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import './MoviesCardList.scss';

const MoviesCardList = ({ movies, isLoading, onLikeMovie }) => {
  let location = useLocation();

  return (
    <section className="movies">
      {movies && movies.length !== 0 ? (
        <ul
          className={`movies-list ${
            location.pathname === '/saved-movies'
              ? 'movies-list_type_saved-movies'
              : null
          }`}
        >
          {isLoading ? (
            <Preloader />
          ) : (
            movies.map((item) => {
              return (
                <MoviesCard
                  key={item.id}
                  movieData={{ ...item }}
                  thumbnail={item.image.formats.thumbnail.url}
                  onLikeMovie={onLikeMovie}
                />
              );
            })
          )}
        </ul>
      ) : (
        <SearchNotFound />
      )}
    </section>
  );
};

export default MoviesCardList;
