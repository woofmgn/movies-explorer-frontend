import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.scss';

const Movies = ({ movies, isChecked, onToggleCheckbox, onSearchMovies }) => {
  const handlerGetApiMovies = () => {
    // onGetApiMovies();
  };

  return (
    <main className="movies-page">
      <SearchForm
        isChecked={isChecked}
        onToggleCheckbox={onToggleCheckbox}
        onSearchMovies={onSearchMovies}
      />
      <MoviesCardList movies={movies} />
      <button className="more-button">Ещё</button>
    </main>
  );
};

export default Movies;
