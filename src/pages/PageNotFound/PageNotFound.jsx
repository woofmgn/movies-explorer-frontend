import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="main main_type_error">
      <section className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <p className="page-not-found__description">Страница не найдена</p>
        </div>
        <button
          className="page-not-found__back-button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  );
};

export default PageNotFound;
