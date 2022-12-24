class Storage {
  constructor(settings) {
    this._dataStorage = settings;
  }

  getDataStorage() {
    this._storage = JSON.parse(localStorage.getItem(this._dataStorage));
    if (this._storage) {
      return this._storage;
    }
  }

  setDataStorage(newData) {
    localStorage.setItem(this._dataStorage, JSON.stringify(newData));
  }
}

const moviesStorage = new Storage('movies');
const searchReqStorage = new Storage('searchReq');
const checkboxStatus = new Storage('checkboxReq');

export { moviesStorage, searchReqStorage, checkboxStatus };
