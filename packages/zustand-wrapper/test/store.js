const create = require("zustand");

const _storeMap = {};

const createStore = (name, blueprintCallback) => {
  if (!!_storeMap[name])
    throw `ERROR: Trying to memoize a store that already exists - ${name}`;

  const storeRef = create(blueprintCallback);
  _storeMap[name] = () => storeRef;
}

const getExistentStores = () => Object.keys(_storeMap);

module.exports = {
  _storeMap,
  createStore,
  getExistentStores
}
