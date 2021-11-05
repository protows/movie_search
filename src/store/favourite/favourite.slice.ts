import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteState {
  favouriteItem: Array<any>;
}

const initialState: FavouriteState = {
  favouriteItem: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    favouriteAdd: (state: FavouriteState = initialState, action: PayloadAction<[any]>) => {
      return {
        ...state, favouriteItem: [...state.favouriteItem, action.payload]
      }
    },
    favouriteRemove: (state: FavouriteState = initialState, action: PayloadAction<[string]>) => {
      return {
        ...state, favouriteItem: state.favouriteItem.filter(item => item === action.payload),
      }
    },
  },
});

export const { favouriteAdd, favouriteRemove } = favouriteSlice.actions;

export default favouriteSlice.reducer;
