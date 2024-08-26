import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemons: [],
  pokemonSelected: null,
  loading: false,
};

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async ({ page }) => {
    const MAX_RESULTS = 151;
    let limit = 20;
    const offset = (page - 1) * limit;

    if (offset + limit > MAX_RESULTS) {
      limit = MAX_RESULTS - offset;
    }

    const response = await axios.get(
      `${API_URL}?limit=${limit}&offset=${offset}`
    );
    return response.data.results;
  }
);

export const getPokemonById = createAsyncThunk(
  "pokemons/fetchPokemonById",
  async (url) => {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
);

export const getPokemonByName = createAsyncThunk(
  "pokemons/fetchPokemonByName",
  async (name) => {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.loading = false;
      }),
      builder.addCase(getPokemonById.pending, (state, action) => {
        state.pokemonSelected = null;
        state.loading = true;
      }),
      builder.addCase(getPokemonById.fulfilled, (state, action) => {
        state.pokemonSelected = action.payload;
        state.loading = false;
      }),
      builder.addCase(getPokemonByName.pending, (state, action) => {
        state.pokemonSelected = null;
        state.loading = true;
      }),
      builder.addCase(getPokemonByName.fulfilled, (state, action) => {
        state.pokemonSelected = action.payload;
        state.loading = false;
      });
  },
});

export default pokemonSlice.reducer;
