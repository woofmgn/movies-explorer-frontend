import React from 'react';
import movie from '../../images/movie.png';
import './MoviesCard.scss';

const MoviesCard = () => {
  return (
    <>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
      <li className="card">
        <img className="card__preview" src={movie} alt="превью фильма" />
        <div className="card__wrapper">
          <h5 className="card__title">Название</h5>
          <button className="card__like-button" />
        </div>
        <p className="card__duration">время</p>
      </li>
    </>
  );
};

export default MoviesCard;
