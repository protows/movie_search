import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

import counterReducer from "./counter/counter.slice";
import moviesReducer from "./movies/movies.slice";
import loadingReducer from "./loading/loading.slice";
import tvSeriesReducer from "./tvSeries/tvSeries.slice";
import pagePaginationReducer from "./pagePagination/pagePagination.slice";
import moviesElementReducer from "./moviesElement/moviesElement.slice";
import tvSeriesElementReducer from "./tvSeriesElement/tvSeriesElement.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    loading: loadingReducer,
    tvSeries: tvSeriesReducer,
    pagePagination: pagePaginationReducer,
    moviesElement: moviesElementReducer,
    tvSeriesElement: tvSeriesElementReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
