import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHeroes } from "../api/api";

export const fetchHeroesThunk = createAsyncThunk('heroes/fetchHeroes', async () => {
  let allHeroes = [];
  let page = 1;
  let hasMore = true;

  while(hasMore) {
    const heroes = await fetchHeroes(page);
    allHeroes = [...allHeroes, ...heroes.results];
    hasMore = heroes.info.next !== null;
    page++;
  }
  return allHeroes;
});

const heroesSlice = createSlice({
  name: 'heroes',
  initialState: {
    heroes: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeroesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.heroes = action.payload; 
      })
      .addCase(fetchHeroesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
  }
});

export const selectHeroes = (state) => state.heroes.heroes;
export const selectLoading = (state) => state.heroes.loading;
export const selectError = (state) => state.heroes.error;

export default heroesSlice.reducer;