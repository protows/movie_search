import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  cats: string[];
}

const initialState: MoviesState = {
  movies: [],
  cats: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovies: (state: MoviesState) => { },
    fetchMoviesSuccess: (state: MoviesState, action: PayloadAction<string[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess } = moviesSlice.actions;

export default moviesSlice.reducer;
