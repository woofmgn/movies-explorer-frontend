import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Movies from './pages/Movies/Movies';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import SavedMovies from './pages/SavedMovies/SavedMovies';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  let location = useLocation();

  // хардкод для проверки изменения визуала хедера
  const handleToggleLoginStatus = () => {
    setIsLogged((prev) => !prev);
  };

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
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/signin"
          element={<Login onToggleLoginStatus={handleToggleLoginStatus} />}
          // хардкод для проверки изменения визуала хедера
        />
        <Route path="/profile" element={<Profile />} />
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
