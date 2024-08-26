import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../state/pokemonSlice'

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})