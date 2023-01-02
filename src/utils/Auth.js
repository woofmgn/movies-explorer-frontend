class Auth {
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

  async register(name, email, password) {
    const res = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
    return this._getResponseData(res);
  }

  async login(email, password) {
    const res = await fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
    return this._getResponseData(res);
  }

  async editProfile(newName, newEmail) {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({ name: newName, email: newEmail }),
    });
    return this._getResponseData(res);
  }

  async checkToken(jwt) {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });
    return this._getResponseData(res);
  }
}

export const authApi = new Auth({
  url: 'https://api.vden.movies.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
});
