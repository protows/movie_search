import {
  all,
  call,
  put,
  SagaReturnType,
  takeLatest,
} from "@redux-saga/core/effects";

import { getTvSeriesElementData } from "../../services/tvSeriesElement.service";
import {
  failedFetching,
  startFetching,
  successFetching,
} from "../loading/loading.slice";
import { fetchTvSeriesElement, fetchTvSeriesElementSuccess } from "./tvSeriesElement.slice";

export function* onFetchTvSeriesElement() {
  yield put(startFetching(fetchTvSeriesElement.type));

  try {
    const res: SagaReturnType<typeof getTvSeriesElementData> = yield getTvSeriesElementData();

    const resTvSeriesElement = res.data['tv-series'];
    console.log("breeds resTvSeries is ", resTvSeriesElement['tv-series']);

    yield put(fetchTvSeriesElementSuccess(resTvSeriesElement));
    yield put(successFetching(fetchTvSeriesElement.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchTvSeriesElement.type, error: error?.message as string })
    );
  }
}

export function* onFetchTvSeriesElementStart() {
  yield takeLatest(fetchTvSeriesElement.type, onFetchTvSeriesElement);
}

export default function* tvSeriesElementSaga() {
  yield all([call(onFetchTvSeriesElementStart)]);
}
