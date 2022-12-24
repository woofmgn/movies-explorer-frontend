import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.scss';

const MoviesCard = ({ imageUrl, titleRU, titleEN, duration, trailerLink }) => {
  let location = useLocation();

  const hover = useRef('hover');

  const onHover = () => {
    hover.current.style.visibility = 'visible';
  };

  const onExit = () => {
    hover.current.style.visibility = 'hidden';
  };

  return (
    <>
      <li className="card">
        <a className="card__trailer-link" href={trailerLink} target="_black">
          <img
            className="card__preview"
            src={`https://api.nomoreparties.co${imageUrl}`}
            alt="превью фильма"
          />
        </a>
        <div
          className="card__wrapper"
          onMouseEnter={location.pathname === '/movies' ? null : onHover}
          onMouseLeave={location.pathname === '/movies' ? null : onExit}
        >
          <h5 className="card__title">{titleRU || titleEN}</h5>
          <button
            ref={hover}
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
