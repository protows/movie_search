import {
    all,
    call,
    put,
    SagaReturnType,
    takeLatest,
} from "@redux-saga/core/effects";

import { getCurrentPage } from "../../services/movies_items.service";
import {
    failedFetching,
    startFetching,
    successFetching,
} from "../loading/loading.slice";
import { fetchPagePagination, fetchPagePaginationSuccess } from "./pagePagination.slice";

import { selectPagePagination } from "../../store/pagePagination/pagePagination.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

// const Movies = () => {
//     const pagePagination = ;

// }

export function* onFetchPagePagination() {
    console.log("hhh ");
    // yield put(startFetching(fetchPagePagination.type));




    // try {
    //     const res: SagaReturnType<typeof getCurrentPage> = yield getCurrentPage(2);
    //     // const breeds = Object.keys(res.data.message);
    //     const breeds2 = res.data.movies;

    //     console.log("breeds2 is ", breeds2);

    //     yield put(fetchPagePaginationSuccess(breeds2));
    //     yield put(successFetching(fetchPagePagination.type));
    // } catch (error: any) {
    //     yield put(
    //         failedFetching({ name: fetchPagePagination.type, error: error?.message as string })
    //     );
    // }
}

export function* onFetchPagePaginationStart() {
    yield takeLatest(fetchPagePagination.type, onFetchPagePagination);
}

export default function* pagePaginationElementSaga() {
    yield all([call(onFetchPagePaginationStart)]);
}
