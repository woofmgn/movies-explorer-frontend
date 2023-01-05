import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">© 2022</p>
        <ul className="footer__links-container">
          <li className="footer__link-wrapper">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a
              className="footer__link"
              href="https://github.com/woofmgn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
