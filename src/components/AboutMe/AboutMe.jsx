import personalPhoto from '../../images/personal-foto.png';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="personal-info">
        <div className="personal-info__container">
          <h3 className="personal-info__name">Денис</h3>
          <p className="personal-info__profession">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="personal-info__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="personal-info__link"
            href="https://github.com/woofmgn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <img
          src={personalPhoto}
          alt="Фото автора"
          className="personal-info__photo"
        />
      </div>
    </section>
  );
};

export default AboutMe;
