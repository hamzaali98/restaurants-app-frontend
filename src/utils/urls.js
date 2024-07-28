// src/urls.js
export const baseUrl = "http://localhost:8000";

// Restaurant URLs
export const GET_RESTAURANTS_URL = (lat, lon) =>
  `${baseUrl}/restaurants?lat=${lat}&lon=${lon}`;
export const GET_RESTAURANT_BY_ID_URL = (id) => `${baseUrl}/restaurants/${id}`;
