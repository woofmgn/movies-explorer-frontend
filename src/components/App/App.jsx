import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import { apiMovies } from '../../utils/MoviesApi';
import { moviesStorage } from '../../utils/storage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  let location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState('');
  const [isFilteredMovies, setIsFilteredMovies] = useState([]);

  const handleGetApiMovies = () => {
    apiMovies.getMovies().then((res) => {
      setMovies(() => res);
    });
  };

  const handleToggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSearchMovies = (data) => {
    setSearchedMovies(data);
    filteredReqMovies(data);
  };

  // хардкод для проверки изменения визуала хедера
  const handleToggleLoginStatus = () => {
    setIsLogged((prev) => !prev);
  };

  const filteredReqMovies = (data) => {
    const filteredMovies = movies.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(data.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(data.toLowerCase())
      );
    });
    moviesStorage.setDataStorage(filteredMovies);
    setIsFilteredMovies(filteredMovies);
  };

  useEffect(() => {
    handleGetApiMovies();
  }, []);
  return (
    <>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <Header isLogged={isLogged} />
      ) : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              onGetApiMovies={handleGetApiMovies}
              movies={movies}
              isChecked={isChecked}
              onToggleCheckbox={handleToggleCheckbox}
              onSearchMovies={handleSearchMovies}
            />
          }
        />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/signin"
          element={<Login onToggleLoginStatus={handleToggleLoginStatus} />}
          // хардкод для проверки изменения визуала хедера
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
