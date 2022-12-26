import React, { useEffect } from 'react';
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
  onDislikeMovies,
}) => {
  let location = useLocation();

  useEffect(() => {
    onGetSavedMovies();
  }, []);

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
                  movieId={userMovies.movieId}
                  userMovies={userMovies}
                  onDislikeMovies={onDislikeMovies}
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
                  movieId={userMovies.movieId}
                  userMovies={userMovies}
                  onDislikeMovies={onDislikeMovies}
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
