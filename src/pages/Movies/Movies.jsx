import { useEffect } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.scss';

const Movies = ({
  movies,
  isChecked,
  isLoading,
  moviesInStorage,
  prevSearch,
  onToggleCheckbox,
  onSearchMovies,
  onGetApiMovies,
  onPaginateMovies,
  onGetStorageData,
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

  return (
    <main className="movies-page">
      <SearchForm
        isChecked={isChecked}
        prevSearch={prevSearch}
        onToggleCheckbox={onToggleCheckbox}
        onSearchMovies={onSearchMovies}
      />
      <MoviesCardList movies={movies} isLoading={isLoading} />
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
