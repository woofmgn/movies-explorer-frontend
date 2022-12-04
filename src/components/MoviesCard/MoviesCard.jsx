import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import movie from '../../images/movie.png';
import './MoviesCard.scss';

const MoviesCard = () => {
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
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div
          className="card__wrapper"
          onMouseEnter={location.pathname === '/movies' ? null : onHover}
          onMouseLeave={location.pathname === '/movies' ? null : onExit}
        >
          <h5 className="card__title">Название</h5>
          <button
            ref={hover}
            className={`card__button ${
              location.pathname === '/movies' ? '' : 'card__button_type_remove'
            }`}
          />
        </div>
        <p className="card__duration">время</p>
      </li>
    </>
  );
};

export default MoviesCard;
