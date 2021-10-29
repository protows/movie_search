import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PagePaginationState {
    pagePagination: number;
}

const initialState: PagePaginationState = {
    pagePagination: 2,

};

export const pagePaginationSlice = createSlice({
    name: "pagePagination",
    initialState,
    reducers: {
        fetchPagePagination: () => { },
        fetchPagePaginationSuccess: (state: PagePaginationState, action: PayloadAction<number>) => {
            console.log("qqqqqqqqqqq slice is " + action.payload);
            state.pagePagination = action.payload;
        },
    },
});

export const { fetchPagePagination, fetchPagePaginationSuccess } = pagePaginationSlice.actions;

export default pagePaginationSlice.reducer;
