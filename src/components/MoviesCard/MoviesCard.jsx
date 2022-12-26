import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.scss';

const MoviesCard = ({ movieData, onLikeMovie, onGetSavedMovies }) => {
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

  const handlerLikeMovie = () => {
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
    onLikeMovie(data);
  };

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
          <button
            ref={hover}
            onClick={handlerLikeMovie}
            className={`card__button ${
              location.pathname === '/movies' ? '' : 'card__button_type_remove'
            }`}
          />
        </div>
        <p className="card__duration">{duration} мин.</p>
      </li>
    </>
  );
};

export default MoviesCard;
