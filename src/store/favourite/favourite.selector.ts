import { RootState } from "../store";

export const selectFavourite = (state: RootState) => state.favourite.value;
