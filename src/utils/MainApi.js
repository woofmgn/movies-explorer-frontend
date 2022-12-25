class MainApi {
  constructor(settings) {
    this._url = settings.url;
    this._headers = settings.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  async getSavedMovies() {
    const res = await fetch(`${this._url}/movies`, {
      headers: this._headers,
    });
    return this._getResponseData(res);
  }

  async savedMovie(data) {
    const res = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
    return this._getResponseData(res);
  }

  async deleteMovie(id) {
    const res = await fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._getResponseData(res);
  }
}

const savedMoviesApi = new MainApi({});
