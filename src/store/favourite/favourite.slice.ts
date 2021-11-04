import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteState {
  value: Array<any>;
}

const initialState: FavouriteState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    favouriteDispatch: (state: FavouriteState = initialState, action: PayloadAction<[any]>) => {
      return {
        ...state, value: [...state.value, action.payload]
      }
    },

  },
});

export const { favouriteDispatch } = favouriteSlice.actions;

export default favouriteSlice.reducer;
