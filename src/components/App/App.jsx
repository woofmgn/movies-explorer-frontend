import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import { ProtectedRoute } from '../../hoc/ProtectedRoute';
import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import { authApi } from '../../utils/Auth';
import {
  DESKTOP_CARD_QUANTITY,
  MESSAGE_EDIT_COMPLETE,
  MOBILE_CARD_QUANTITY,
  TABLET_CARD_QUANTITY,
  TIME_DURATION,
} from '../../utils/constants';
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
import Preloader from '../Preloader/Preloader';

function App() {
  let location = useLocation();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [isLoadingApp, setIsLoadingApp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState('');
  const [isFilteredMovies, setIsFilteredMovies] = useState([]);
  const [slicedMovies, setSlicedMovies] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [savedUserMovies, setSavedUserMovies] = useState([]);
  const [resizeState, setResizeState] = useState(DESKTOP_CARD_QUANTITY);
  const [errorStatus, setErrorStatus] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleGetApiMovies = async () => {
    setIsLoading(() => true);
    try {
      const res = await apiMovies.getMovies();
      setMovies(() => res);
    } catch (err) {
      console.log(err);
      setErrorStatus(true);
    } finally {
      setIsLoading(() => false);
    }
  };

  const handlerToggleResize = () => {
    if (window.innerWidth > 1280) {
      setResizeState(DESKTOP_CARD_QUANTITY);
    } else if (window.innerWidth < 1280 && window.innerWidth > 768) {
      setResizeState(TABLET_CARD_QUANTITY);
    } else if (window.innerWidth <= 768) {
      setResizeState(MOBILE_CARD_QUANTITY);
    }
  };

  const handleSetSavedUserMovies = (newMovieList) => {
    setSavedUserMovies(newMovieList);
  };

  const handleToggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSetErrorStatus = (status) => {
    setErrorStatus(status);
  };

  const handleSetAuthError = (err) => {
    setAuthError(err);
  };

  const handleSetUserInfo = async (newInfo) => {
    try {
      const res = await authApi.editProfile(newInfo.name, newInfo.email);
      setUserInfo(res);
      setAuthError(MESSAGE_EDIT_COMPLETE);
    } catch (err) {
      if (err.status) {
        handleLogOutUser();
      }
      setAuthError(err.message);
    }
  };

  const handleSearchMovies = (searchReq) => {
    setSearchedMovies(searchReq);
    filteredReqMovies(searchReq);
    searchReqStorage.setDataStorage(searchReq);
    checkboxStatus.setDataStorage(isChecked);
  };

  const handleCheckBoxToggle = async () => {
    const searchReq = searchReqStorage.getDataStorage();
    await checkboxStatus.getDataStorage();
    if (movies.length) {
      setSearchedMovies(searchReq);
      filteredReqMovies(searchReq);
    }
    checkboxStatus.setDataStorage(isChecked);
  };

  const getStartSliceMovies = (slicedArr) => {
    if (slicedArr) {
      const newArr = slicedArr.slice(0, resizeState.cards);
      setSlicedMovies(newArr);
    }
  };

  const handlePaginationMovies = () => {
    const endMoviesList = slicedMovies.length;
    const newLength = slicedMovies.length + resizeState.more;
    const newArr = isFilteredMovies.slice(endMoviesList, newLength);
    setSlicedMovies([...slicedMovies, ...newArr]);
  };

  const filteredReqMovies = (searchReq) => {
    if (searchReq) {
      const filteredMovies = movies.filter((item) => {
        const titleRU = item.nameRU
          .toLowerCase()
          .includes(searchReq.toLowerCase());
        const titleEN = item.nameEN
          .toLowerCase()
          .includes(searchReq.toLowerCase());
        if (isChecked && item.duration <= TIME_DURATION) {
          return titleRU || titleEN;
        } else if (!isChecked && item.duration > TIME_DURATION) {
          return titleRU || titleEN;
        }
      });
      moviesStorage.setDataStorage(filteredMovies);
      setIsFilteredMovies(filteredMovies);
      getStartSliceMovies(filteredMovies);
    }
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
    setErrorStatus(false);
    setIsLoading(() => true);
    try {
      const res = await savedMoviesApi.getSavedMovies();
      setSavedUserMovies(res);
    } catch (err) {
      if (err.status) {
        handleLogOutUser();
      }
      setErrorStatus(true);
    } finally {
      setIsLoading(() => false);
    }
  };

  const handleLikeMovies = async (movieCard) => {
    try {
      const res = await savedMoviesApi.savedMovie(movieCard);
      setSavedUserMovies([...savedUserMovies, res]);
    } catch (err) {
      if (err.status) {
        handleLogOutUser();
      }
      console.log(err.message);
    }
  };

  const handleDislikeMovies = async (id) => {
    try {
      await savedMoviesApi.deleteMovie(id);
      const afterDelMovie = savedUserMovies.filter((item) => item._id !== id);
      setSavedUserMovies(afterDelMovie);
    } catch (err) {
      if (err.status) {
        handleLogOutUser();
      }
      console.log(err.message);
    }
  };

  const handleChechToken = async () => {
    const token = jwtToken.getDataStorage();
    if (token) {
      try {
        const res = await authApi.checkToken(token);
        setIsLogged(true);
        setUserInfo({
          name: res.name,
          email: res.email,
        });
        setIsLoadingApp(false);
      } catch (err) {
        if (err.status) {
          handleLogOutUser();
        }
        setIsLogged(false);
        navigate('/');
        console.log(err.message);
      }
    }
    setIsLoadingApp(false);
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
      setAuthError(err.message);
    }
  };

  const handleRegistrationUser = async (name, email, password) => {
    try {
      await authApi.register(name, email, password);
      handleAuthorizationUser(email, password);
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleLogOutUser = () => {
    setIsLogged(false);
    setUserInfo({});
    setMovies([]);
    setSearchedMovies('');
    setIsFilteredMovies([]);
    setSlicedMovies([]);
    setSavedUserMovies([]);
    setAuthError('');
    jwtToken.removeItemDataStorage();
    moviesStorage.removeItemDataStorage();
    searchReqStorage.removeItemDataStorage();
    checkboxStatus.removeItemDataStorage();
    navigate('/');
  };

  useEffect(() => {
    handleChechToken();
  }, [isLogged]);

  useEffect(() => {
    window.addEventListener('resize', handlerToggleResize);

    return () => {
      window.removeEventListener('resize', handlerToggleResize);
    };
  }, []);

  return (
    <>
      {isLoadingApp ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={userInfo}>
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
                <ProtectedRoute isLogged={isLogged}>
                  <Movies
                    movies={slicedMovies}
                    isChecked={isChecked}
                    isLoading={isLoading}
                    moviesInStorage={isFilteredMovies}
                    userMovies={savedUserMovies}
                    errorStatus={errorStatus}
                    searcRequere={searchedMovies}
                    onGetApiMovies={handleGetApiMovies}
                    onToggleCheckbox={handleToggleCheckbox}
                    onSearchMovies={handleSearchMovies}
                    onPaginateMovies={handlePaginationMovies}
                    onGetStorageData={handleGetStorageData}
                    onLikeMovie={handleLikeMovies}
                    onGetSavedMovies={handleGetSavedMovies}
                    onDislikeMovies={handleDislikeMovies}
                    onCheckBoxToggle={handleCheckBoxToggle}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <SavedMovies
                    userMovies={savedUserMovies}
                    isChecked={isChecked}
                    errorStatus={errorStatus}
                    isLoading={isLoading}
                    onGetSavedMovies={handleGetSavedMovies}
                    onDislikeMovies={handleDislikeMovies}
                    onSetSavedUserMovies={handleSetSavedUserMovies}
                    onToggleCheckbox={handleToggleCheckbox}
                    onSetErrorStatus={handleSetErrorStatus}
                    onChechToken={handleChechToken}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  isLogged={isLogged}
                  authError={authError}
                  onRegisterUser={handleRegistrationUser}
                  onSetAuthError={handleSetAuthError}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  isLogged={isLogged}
                  authError={authError}
                  onAuthUser={handleAuthorizationUser}
                  onSetAuthError={handleSetAuthError}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <Profile
                    authError={authError}
                    onLogOutUser={handleLogOutUser}
                    onSetUserInfo={handleSetUserInfo}
                    onSetErrorInfo={handleSetAuthError}
                    onChechToken={handleChechToken}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {location.pathname === '/' ||
          location.pathname === '/movies' ||
          location.pathname === '/saved-movies' ? (
            <Footer />
          ) : null}
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
