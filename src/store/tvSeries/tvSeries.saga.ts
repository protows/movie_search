import {
  all,
  call,
  put,
  SagaReturnType,
  takeLatest,
} from "@redux-saga/core/effects";

import { getTvSeriesData } from "../../services/tvSeries.service";
import {
  failedFetching,
  startFetching,
  successFetching,
} from "../loading/loading.slice";
import { fetchTvSeries, fetchTvSeriesSuccess } from "./tvSeries.slice";

export function* onFetchTvSeries() {
  yield put(startFetching(fetchTvSeries.type));

  try {
    const res: SagaReturnType<typeof getTvSeriesData> = yield getTvSeriesData();

    const resTvSeries = res.data['tv-series'];
    console.log("breeds resTvSeries is ", resTvSeries['tv-series']);
    yield put(fetchTvSeriesSuccess(resTvSeries));
    yield put(successFetching(fetchTvSeries.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchTvSeries.type, error: error?.message as string })
    );
  }
}

export function* onFetchTvSeriesStart() {
  yield takeLatest(fetchTvSeries.type, onFetchTvSeries);
}

export default function* tvSeriesSaga() {
  yield all([call(onFetchTvSeriesStart)]);
}
