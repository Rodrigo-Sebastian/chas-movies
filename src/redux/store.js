import { configureStore } from "@reduxjs/toolkit"; //skapar en redux store som håller reda på applikationens data
import favoritesReducer from "./favoritesSlice"; //hanterar all logik kring att lägga till eller ta bort filmer från användarens favoriter

//är konfigurerad och redo att användas där state om användarens favoriter lagras och ahnteras.
export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});