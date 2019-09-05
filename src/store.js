class Stores {
  constructor() {
    this.stores = {};
  }

  setStore(key, obj) {
    this.stores[key] = obj;
  }

  getStore(key) {
    return this.stores[key];
  }

  hasStore(key) {
    return this.stores[key] ? true : false;
  }

  removeStore(key) {
    delete this.stores[key];
  }
}

export default new Stores();
