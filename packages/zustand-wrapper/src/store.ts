import create from "zustand";

const _storeMap:{[key: string]: any} = {};

const createStore = (name: string, blueprintCallback: any) => {
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
