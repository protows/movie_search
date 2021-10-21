import { RootState } from "../store";

export const selectTvSeries = (state: RootState) => state.tvSeries.tvSeries;
