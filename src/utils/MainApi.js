class MainApi {
  constructor(settings) {
    this._url = settings.url;
    this._headers = settings.headers;
    this._token = JSON.parse(localStorage.getItem('token'));
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
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
  url: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
