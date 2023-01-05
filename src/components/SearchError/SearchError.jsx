import './SearchError.scss';

export const SearchError = () => {
  return (
    <h2 className="search-error">
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз
    </h2>
  );
};
