import { RootState } from "../store";

export const selectMoviesElement = (state: RootState) => state.moviesElement.moviesElement;
