/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/11/2025 - 23:52:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/utils/translationCache.js
const CACHE_KEY = "translations_v1";
let cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");

export function getCached(id) {
  return cache[id] || null;
}

export function setCached(id, text) {
  cache[id] = text;
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}
