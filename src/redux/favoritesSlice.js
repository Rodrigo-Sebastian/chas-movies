import { createSlice } from '@reduxjs/toolkit';

// Funktion för att hämta favoriter från localStorage
const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavoritesFromLocalStorage(), // Ladda favoriter från localStorage vid initialisering
  reducers: {
    addFavorite: (state, action) => {
      const updatedState = [...state, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedState)); // Spara till localStorage
      return updatedState; // Returnera det uppdaterade state
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter(movie => movie.imdbID !== action.payload.imdbID);
      localStorage.setItem('favorites', JSON.stringify(updatedState)); // Uppdatera localStorage
      return updatedState; // Returnera det uppdaterade state
    },
  },
});

// Exportera våra actions och reducer
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
