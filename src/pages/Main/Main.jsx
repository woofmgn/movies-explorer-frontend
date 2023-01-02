import AboutMe from '../../components/AboutMe/AboutMe';
import AboutProject from '../../components/AboutProject/AboutProject';
import Portfolio from '../../components/Portfolio/Portfolio';
import Promo from '../../components/Promo/Promo';
import Techs from '../../components/Techs/Techs';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
