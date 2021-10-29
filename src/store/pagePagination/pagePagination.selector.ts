import { RootState } from "../store";

export const selectPagePagination = (state: RootState) => state.pagePagination.pagePagination;
