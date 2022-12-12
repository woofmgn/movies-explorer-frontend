import './Promo.scss';

import React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      {/* <img
        className="promo__image"
        src={promoLogo}
        alt="Абстрактная иллюстрация"
      /> */}
      <div className="promo__image"></div>
    </section>
  );
};

export default Promo;
