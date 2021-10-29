import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesElementState {
    moviesElement: any[];
}

const initialState: MoviesElementState = {
    moviesElement: [],

};

export const moviesElementSlice = createSlice({
    name: "moviesElement",
    initialState,
    reducers: {
        fetchMoviesElement: (state: MoviesElementState) => { },
        fetchMoviesElementSuccess: (state: MoviesElementState, action: PayloadAction<string[]>) => {
            state.moviesElement = action.payload;
        },
    },
});

export const { fetchMoviesElement, fetchMoviesElementSuccess } = moviesElementSlice.actions;

export default moviesElementSlice.reducer;
