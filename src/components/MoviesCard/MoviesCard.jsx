import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.scss';

const MoviesCard = ({
  movieData,
  onLikeMovie,
  userMovies,
  onDislikeMovies,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const {
    trailerLink,
    image,
    nameRU,
    nameEN,
    duration,
    country,
    director,
    year,
    description,
    id,
  } = movieData;

  let location = useLocation();
  const hover = useRef('hover');
  const link = useRef('https://api.nomoreparties.co');

  const onHover = () => {
    hover.current.style.visibility = 'visible';
  };

  const onExit = () => {
    hover.current.style.visibility = 'hidden';
  };

  const handleChechedLike = () => {
    if (location.pathname === '/movies' && userMovies.length) {
      const likedMovie = userMovies.find((item) => {
        if (item.movieId === id) {
          setIsLiked(() => true);
          return item;
        }
      });
      return likedMovie;
    } else {
      return null;
    }
  };

  const handlerToggleMovie = () => {
    const movie = handleChechedLike();
    const data = {
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: `${link.current}${image.url}`,
      trailerLink: trailerLink,
      thumbnail: `${link.current}${image.formats.thumbnail.url}`,
      movieId: id,
      nameRU: nameRU,
      nameEN: nameEN,
    };

    if (movie) {
      setIsLiked((prev) => !prev);
      onDislikeMovies(movie._id);
    } else {
      onLikeMovie(data);
      setIsLiked(() => true);
    }
  };

  const handleDeleteMovies = () => {
    onDislikeMovies(movieData._id);
  };

  useEffect(() => {
    handleChechedLike();
  }, []);

  return (
    <>
      <li className="card">
        <a className="card__trailer-link" href={trailerLink} target="_black">
          <img
            className="card__preview"
            src={
              location.pathname === '/movies'
                ? `${link.current}${image.url}`
                : image
            }
            alt="превью фильма"
          />
        </a>
        <div
          className="card__wrapper"
          onMouseEnter={location.pathname === '/movies' ? null : onHover}
          onMouseLeave={location.pathname === '/movies' ? null : onExit}
        >
          <h5 className="card__title">{nameRU || nameEN}</h5>
          {location.pathname === '/movies' ? (
            <button
              onClick={handlerToggleMovie}
              className={`card__button ${isLiked && 'card__button_active'}`}
            />
          ) : (
            <button
              ref={hover}
              onClick={handleDeleteMovies}
              className="card__button card__button_type_remove"
            />
          )}
        </div>
        <p className="card__duration">{duration} мин.</p>
      </li>
    </>
  );
};

export default MoviesCard;
