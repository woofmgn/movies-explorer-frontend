import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import './MoviesCardList.scss';

const MoviesCardList = ({
  movies,
  isLoading,
  onLikeMovie,
  userMovies,
  onGetSavedMovies,
}) => {
  let location = useLocation();

  return (
    <section className="movies">
      {(movies && movies.length !== 0) ||
      (userMovies && userMovies.length !== 0) ? (
        <ul
          className={`movies-list ${
            location.pathname === '/saved-movies'
              ? 'movies-list_type_saved-movies'
              : null
          }`}
        >
          {isLoading ? (
            <Preloader />
          ) : location.pathname === '/movies' ? (
            movies.map((item) => {
              return (
                <MoviesCard
                  key={item.id}
                  movieData={{ ...item }}
                  onLikeMovie={onLikeMovie}
                />
              );
            })
          ) : location.pathname === '/saved-movies' ? (
            userMovies.map((savedMovie) => {
              return (
                <MoviesCard
                  key={savedMovie._id}
                  movieData={{ ...savedMovie }}
                  onLikeMovie={onLikeMovie}
                  onGetSavedMovies={onGetSavedMovies}
                />
              );
            })
          ) : null}
        </ul>
      ) : (
        <SearchNotFound />
      )}
    </section>
  );
};

export default MoviesCardList;
