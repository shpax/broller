export function getValue(key) {
  return JSON.parse(String(localStorage.getItem(key)));
}

export function setValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearValue(key) {
  localStorage.removeItem(key);
}
