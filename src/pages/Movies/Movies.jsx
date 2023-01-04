import { useEffect } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.scss';

const Movies = ({
  movies,
  isChecked,
  isLoading,
  errorStatus,
  searcRequere,
  moviesInStorage,
  onToggleCheckbox,
  onSearchMovies,
  onGetApiMovies,
  onPaginateMovies,
  onGetStorageData,
  onLikeMovie,
  onGetSavedMovies,
  userMovies,
  onDislikeMovies,
  onCheckBoxToggle,
}) => {
  const handlerPagitateMovies = () => {
    onPaginateMovies();
  };

  useEffect(() => {
    onGetStorageData();
    onGetApiMovies();
  }, []);

  useEffect(() => {
    onCheckBoxToggle();
  }, [isChecked]);

  return (
    <main className="movies-page">
      <SearchForm
        isChecked={isChecked}
        onToggleCheckbox={onToggleCheckbox}
        onSearchMovies={onSearchMovies}
      />

      {searcRequere ? (
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
          errorStatus={errorStatus}
          onLikeMovie={onLikeMovie}
          onGetSavedMovies={onGetSavedMovies}
          userMovies={userMovies}
          onDislikeMovies={onDislikeMovies}
        />
      ) : null}
      {moviesInStorage.length !== movies.length &&
        moviesInStorage.length > 4 && (
          <button className="more-button" onClick={handlerPagitateMovies}>
            Ещё
          </button>
        )}
    </main>
  );
};

export default Movies;
