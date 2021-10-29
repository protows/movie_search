import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TvSeriesState {
  tvSeries: any[];
}

const initialState: TvSeriesState = {
  tvSeries: [],
};

export const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducers: {
    fetchTvSeries: (state: TvSeriesState) => { },
    fetchTvSeriesSuccess: (state: TvSeriesState, action: PayloadAction<any[]>) => {
      state.tvSeries = action.payload;
    },
  },
});

export const { fetchTvSeries, fetchTvSeriesSuccess } = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
