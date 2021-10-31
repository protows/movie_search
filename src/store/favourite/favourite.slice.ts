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
    increment: (state: FavouriteState = initialState, action: PayloadAction<[any]>) => {
      console.log("...state ", state);
      console.log("payload ", action.payload);
      return {
        ...state, value: [...state.value, action.payload]
      }
    },

  },
});

export const { increment } = favouriteSlice.actions;

export default favouriteSlice.reducer;
