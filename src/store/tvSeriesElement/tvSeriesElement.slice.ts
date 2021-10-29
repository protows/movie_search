import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TvSeriesElementState {
  tvSeriesElement: any[];
}

const initialState: TvSeriesElementState = {
  tvSeriesElement: [],
};

export const tvSeriesElementSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducers: {
    fetchTvSeriesElement: (state: TvSeriesElementState) => { },
    fetchTvSeriesElementSuccess: (state: TvSeriesElementState, action: PayloadAction<any[]>) => {
      state.tvSeriesElement = action.payload;
    },
  },
});

export const { fetchTvSeriesElement, fetchTvSeriesElementSuccess } = tvSeriesElementSlice.actions;

export default tvSeriesElementSlice.reducer;
