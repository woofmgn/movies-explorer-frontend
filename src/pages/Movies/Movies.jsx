import { useEffect } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.scss';

const Movies = ({
  movies,
  isChecked,
  onToggleCheckbox,
  onSearchMovies,
  onGetApiMovies,
  onPaginateMovies,
  isLoading,
  moviesInStorage,
}) => {
  const handlerGetApiMovies = () => {
    onGetApiMovies();
  };

  const handlerPagitateMovies = () => {
    onPaginateMovies();
  };

  useEffect(() => {
    handlerGetApiMovies();
  }, []);

  return (
    <main className="movies-page">
      <SearchForm
        isChecked={isChecked}
        onToggleCheckbox={onToggleCheckbox}
        onSearchMovies={onSearchMovies}
      />
      <MoviesCardList movies={movies} isLoading={isLoading} />
      {moviesInStorage.length > 4 && (
        <button className="more-button" onClick={handlerPagitateMovies}>
          Ещё
        </button>
      )}
    </main>
  );
};

export default Movies;
