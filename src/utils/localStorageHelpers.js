export function getStorageValue(key) {
  const saved = localStorage.getItem(key);
  return JSON.parse(saved)
}

export function setStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
