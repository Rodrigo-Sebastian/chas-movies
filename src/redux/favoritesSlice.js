//Använder slice från redux toolkit. som kombinerar initalt state & reducers(funktioner som ändrar state)
//och actions i ett enda objekt.
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    //ett objekt som innehåller funktioner (reducers) som hanterar hur state ska uppdateras när olika actions kallas.
    //här har vi addFavorite och removeFavorite.
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(movie => movie.imdbID !== action.payload.imdbID);
    },
  },
});

//exportation av våra actions och reducer som är funktionen som uppdaterar vårt state baserat på 
//respektiv action som körs.
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;