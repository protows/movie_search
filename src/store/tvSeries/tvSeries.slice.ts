import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TvSeriesState {
  dogs: any[];
  tvSeries: any[];
}

const initialState: TvSeriesState = {
  dogs: [],
  tvSeries: [],
};

export const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducers: {
    fetchCats: (state: TvSeriesState) => { },
    fetchCatsSuccess: (state: TvSeriesState, action: PayloadAction<any[]>) => {
      state.tvSeries = action.payload;
    },
  },
});

export const { fetchCats, fetchCatsSuccess } = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
