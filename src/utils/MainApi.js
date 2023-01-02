class MainApi {
  constructor(settings) {
    this._url = settings.url;
    this._headers = settings.headers;
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      if (res.status === 401) {
        err.status = 401;
      }
      return Promise.reject(err);
    }
    return res.json();
  }

  async getSavedMovies() {
    this._token = JSON.parse(localStorage.getItem('token'));
    const res = await fetch(`${this._url}/movies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this._token}`,
      },
    });
    return this._getResponseData(res);
  }

  async savedMovie(data) {
    this._token = JSON.parse(localStorage.getItem('token'));
    const res = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify(data),
    });
    return this._getResponseData(res);
  }

  async deleteMovie(id) {
    this._token = JSON.parse(localStorage.getItem('token'));
    const res = await fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this._token}`,
      },
    });
    return this._getResponseData(res);
  }
}

export const savedMoviesApi = new MainApi({
  url: 'https://api.vden.movies.nomoredomains.club',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
