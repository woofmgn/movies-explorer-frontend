import { useEffect } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
// import { searchReqStorage } from '../../utils/storage';
import './Movies.scss';

const Movies = ({
  movies,
  isChecked,
  isLoading,
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
  const handlerGetApiMovies = () => {
    onGetApiMovies();
  };

  const handlerPagitateMovies = () => {
    onPaginateMovies();
  };

  useEffect(() => {
    handlerGetApiMovies();
    onGetStorageData();
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
      <MoviesCardList
        movies={movies}
        isLoading={isLoading}
        onLikeMovie={onLikeMovie}
        onGetSavedMovies={onGetSavedMovies}
        userMovies={userMovies}
        onDislikeMovies={onDislikeMovies}
      />
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
