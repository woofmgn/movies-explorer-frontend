import { settingsMoviesApi } from './config';

class MoviesApi {
  constructor(settings) {
    this._url = settings.url;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(this._url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this._getResponseData);
  }
}

export const apiMovies = new MoviesApi(settingsMoviesApi);
