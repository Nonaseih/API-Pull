/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 11:23:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/utils/favorites.js
const KEY = "post_favorites_v1";

export function getFavorites() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setFavorites(obj) {
  try {
    localStorage.setItem(KEY, JSON.stringify(obj));
  } catch {}
}

export function toggleFavorite(id) {
  const fav = getFavorites();
  if (fav[id]) {
    delete fav[id];
  } else {
    fav[id] = true;
  }
  setFavorites(fav);
  return !!fav[id];
}

export function isFavorite(id) {
  const fav = getFavorites();
  return !!fav[id];
}
