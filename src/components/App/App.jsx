import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import { authApi } from '../../utils/Auth';
import { savedMoviesApi } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';
import {
  checkboxStatus,
  jwtToken,
  moviesStorage,
  searchReqStorage,
} from '../../utils/storage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  let location = useLocation();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState('');
  const [isFilteredMovies, setIsFilteredMovies] = useState([]);
  const [slicedMovies, setSlicedMovies] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [savedUserMovies, setSavedUserMovies] = useState([]);

  const handleGetApiMovies = async () => {
    setIsLoading(() => true);
    try {
      const res = await apiMovies.getMovies();
      setMovies(() => res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(() => false);
    }
  };

  const handleToggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSetUserInfo = (newInfo) => {
    setUserInfo(newInfo);
  };

  const handleSearchMovies = (data) => {
    setSearchedMovies(data);
    filteredReqMovies(data);
    searchReqStorage.setDataStorage(data);
    checkboxStatus.setDataStorage(isChecked);
  };

  const getStartSliceMovies = (slicedArr) => {
    const newArr = slicedArr.slice(0, 4);
    setSlicedMovies(newArr);
  };

  const handlePaginationMovies = () => {
    const endMoviesList = slicedMovies.length;
    const newLength = slicedMovies.length + 4;
    const newArr = isFilteredMovies.slice(endMoviesList, newLength);
    setSlicedMovies([...slicedMovies, ...newArr]);
  };

  const filteredReqMovies = (data) => {
    const filteredMovies = movies.filter((item) => {
      const titleRU = item.nameRU.toLowerCase().includes(data.toLowerCase());
      const titleEN = item.nameEN.toLowerCase().includes(data.toLowerCase());
      if (isChecked && item.duration <= 40) {
        return titleRU || titleEN;
      } else if (!isChecked && item.duration > 40) {
        return titleRU || titleEN;
      }
    });
    moviesStorage.setDataStorage(filteredMovies);
    setIsFilteredMovies(filteredMovies);
    getStartSliceMovies(filteredMovies);
  };

  const handleGetStorageData = async () => {
    const movies = await moviesStorage.getDataStorage();
    const chechbox = await checkboxStatus.getDataStorage();
    const searchReq = await searchReqStorage.getDataStorage();
    if (movies) {
      setIsFilteredMovies(movies);
    }
    if (chechbox) {
      setIsChecked(() => chechbox);
    }
    if (searchReq) {
      setSearchedMovies(searchReq);
    }
    getStartSliceMovies(movies);
  };

  const handleGetSavedMovies = async () => {
    setIsLoading(() => true);
    try {
      const res = await savedMoviesApi.getSavedMovies();
      setSavedUserMovies(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(() => false);
    }
  };

  const handleLikeMovies = async (movieCard) => {
    try {
      await savedMoviesApi.savedMovie(movieCard);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDislikeMovies = async (id) => {
    try {
      await savedMoviesApi.deleteMovie(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChechToken = async () => {
    const token = jwtToken.getDataStorage();
    if (token) {
      try {
        const res = await authApi.checkToken(token);
        setIsLogged((prev) => !prev);
        setUserInfo({
          name: res.name,
          email: res.email,
        });
        navigate('/movies');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRegistrationUser = async (name, email, password) => {
    try {
      await authApi.register(name, email, password);
      navigate('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAuthorizationUser = async (email, password) => {
    try {
      const res = await authApi.login(email, password);
      if (res.token) {
        jwtToken.setDataStorage(res.token);
        setIsLogged(() => true);
        navigate('/movies');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogOutUser = () => {
    jwtToken.removeItemDataStorage();
    navigate('/');
  };

  useEffect(() => {
    handleChechToken();
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
              movies={slicedMovies}
              isChecked={isChecked}
              isLoading={isLoading}
              prevSearch={searchedMovies}
              moviesInStorage={isFilteredMovies}
              onGetApiMovies={handleGetApiMovies}
              onToggleCheckbox={handleToggleCheckbox}
              onSearchMovies={handleSearchMovies}
              onPaginateMovies={handlePaginationMovies}
              onGetStorageData={handleGetStorageData}
              onLikeMovie={handleLikeMovies}
              onGetSavedMovies={handleGetSavedMovies}
              userMovies={savedUserMovies}
              onDislikeMovies={handleDislikeMovies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              userMovies={savedUserMovies}
              onGetSavedMovies={handleGetSavedMovies}
              onDislikeMovies={handleDislikeMovies}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register onRegisterUser={handleRegistrationUser} />}
        />
        <Route
          path="/signin"
          element={<Login onAuthUser={handleAuthorizationUser} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              userInfo={userInfo}
              onLogOutUser={handleLogOutUser}
              onSetUserInfo={handleSetUserInfo}
            />
          }
        />
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
