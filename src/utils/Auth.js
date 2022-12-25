class Auth {
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
    const res = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: {
        name: newName,
        email: newEmail,
      },
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
  url: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});