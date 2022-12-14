import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { SearchError } from '../SearchError/SearchError';
import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import './MoviesCardList.scss';

const MoviesCardList = ({
  movies,
  isLoading,
  onLikeMovie,
  userMovies,
  errorStatus,
  onGetSavedMovies,
  onDislikeMovies,
}) => {
  let location = useLocation();

  useEffect(() => {
    onGetSavedMovies();
  }, []);

  return (
    <section className="movies">
      {(location.pathname === '/movies' && movies && movies.length !== 0) ||
      (location.pathname === '/saved-movies' &&
        userMovies &&
        userMovies.length !== 0) ? (
        <ul
          className={`movies-list ${
            location.pathname === '/saved-movies'
              ? 'movies-list_type_saved-movies'
              : null
          }`}
        >
          {isLoading ? (
            <Preloader />
          ) : location.pathname === '/movies' && !errorStatus ? (
            movies.map((item) => {
              return (
                <MoviesCard
                  key={item.id}
                  movieData={{ ...item }}
                  onLikeMovie={onLikeMovie}
                  userMovies={userMovies}
                  onDislikeMovies={onDislikeMovies}
                />
              );
            })
          ) : location.pathname === '/saved-movies' && !errorStatus ? (
            userMovies.map((savedMovie) => {
              return (
                <MoviesCard
                  key={savedMovie._id}
                  movieData={{ ...savedMovie }}
                  onLikeMovie={onLikeMovie}
                  userMovies={userMovies}
                  onDislikeMovies={onDislikeMovies}
                />
              );
            })
          ) : (
            <SearchError />
          )}
        </ul>
      ) : errorStatus ? (
        <SearchError />
      ) : (
        <SearchNotFound />
      )}
    </section>
  );
};

export default MoviesCardList;
