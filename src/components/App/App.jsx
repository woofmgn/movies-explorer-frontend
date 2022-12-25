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

  const handleGetApiMovies = async () => {
    setIsLoading((prev) => !prev);
    try {
      const res = await apiMovies.getMovies();
      setMovies(() => res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading((prev) => !prev);
    }
  };

  const handleToggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSearchMovies = (data) => {
    setSearchedMovies(data);
    filteredReqMovies(data);
    searchReqStorage.setDataStorage(data);
    checkboxStatus.setDataStorage(isChecked);
  };

  // хардкод для проверки изменения визуала хедера
  // const handleToggleLoginStatus = () => {
  //   setIsLogged((prev) => !prev);
  // };

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
        navigate('/signin');
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
            />
          }
        />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/signup"
          element={<Register onRegisterUser={handleRegistrationUser} />}
        />
        <Route
          path="/signin"
          element={<Login onAuthUser={handleAuthorizationUser} />}
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
