import { all, call } from "redux-saga/effects";

import movieSaga from "./movies/movies.saga";
import tvSeriesSaga from "./tvSeries/tvSeries.saga";

export default function* rootSaga() {
  yield all([call(movieSaga), call(tvSeriesSaga)]);
}
