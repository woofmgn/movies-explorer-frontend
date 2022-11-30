import React from 'react';
import AboutProject from '../../components/AboutProject/AboutProject';
import Promo from '../../components/Promo/Promo';
import Techs from '../../components/Techs/Techs';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
};

export default Main;
