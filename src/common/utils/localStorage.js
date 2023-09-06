export const setLocalStorageItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorageItem = (key) => JSON.parse(window.localStorage.getItem(key));

export const removeLocalStorageItem = (key) => window.localStorage.removeItem(key);
