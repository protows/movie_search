import {
  all,
  call,
  put,
  SagaReturnType,
  takeLatest,
} from "@redux-saga/core/effects";

import { getAllBreeds } from "../../services/movies.service";
import {
  failedFetching,
  startFetching,
  successFetching,
} from "../loading/loading.slice";
import { fetchMovies, fetchMoviesSuccess } from "./movies.slice";

export function* onFetchMovies() {
  yield put(startFetching(fetchMovies.type));

  try {
    const res: SagaReturnType<typeof getAllBreeds> = yield getAllBreeds();
    // const breeds = Object.keys(res.data.message);
    const breeds = res.data.movies;

    console.log("breeds is ", breeds);

    yield put(fetchMoviesSuccess(breeds));
    yield put(successFetching(fetchMovies.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchMovies.type, error: error?.message as string })
    );
  }
}

export function* onFetchMoviesStart() {
  yield takeLatest(fetchMovies.type, onFetchMovies);
}

export default function* movieSaga() {
  yield all([call(onFetchMoviesStart)]);
}
