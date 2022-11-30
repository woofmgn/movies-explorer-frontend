import { Route, Routes } from 'react-router-dom';

import AboutProject from './components/AboutProject/AboutProject';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Movies from './pages/Movies/Movies';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import SavedMovies from './pages/SavedMovies/SavedMovies';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
