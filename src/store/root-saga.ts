import { all, call } from "redux-saga/effects";

import movieSaga from "./movies/movies.saga";
import tvSeriesSaga from "./tvSeries/tvSeries.saga";
import movieElementSaga from "./moviesElement/moviesElement.saga";

import tvSeriesElementSaga from "./tvSeriesElement/tvSeriesElement.saga";

export default function* rootSaga() {
  yield all([call(movieSaga), call(tvSeriesSaga), call(movieElementSaga), call(tvSeriesElementSaga)]);

}
