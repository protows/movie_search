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
import { fetchCats, fetchCatsSuccess } from "./tvSeries.slice";

export function* onFetchCats() {
  yield put(startFetching(fetchCats.type));

  try {
    const res: SagaReturnType<typeof getTvSeriesData> = yield getTvSeriesData();
    // const cats = Object.keys(res.data[0]);

    // console.log(res.data);
    // const cats = res.data.map((cat: any) => { return cat.name });
    //const cats = res.data;

    const cats = res.data['tv-series'];
    console.log("breeds is ", cats['tv-series']);
    //['prop-3']

    yield put(fetchCatsSuccess(cats));
    yield put(successFetching(fetchCats.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchCats.type, error: error?.message as string })
    );
  }
}

export function* onFetchCatsStart() {
  yield takeLatest(fetchCats.type, onFetchCats);
}

export default function* catsSaga() {
  yield all([call(onFetchCatsStart)]);
}
