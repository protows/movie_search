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
import { fetchMoviesElement, fetchMoviesElementSuccess } from "./moviesElement.slice";

import { useHistory, useLocation } from "react-router";
import React, { useState, useEffect, useContext } from "react";
import qs from "qs";
import TodoContext from "../../contexts/pagePagination.context";


interface Props { }

export function* onFetchMoviesElement() {

    yield put(startFetching(fetchMoviesElement.type));

    try {
        const res: SagaReturnType<typeof getCurrentPage> = yield getCurrentPage(2);
        // const breeds = Object.keys(res.data.message);
        const breeds2 = res.data.movies;

        console.log("breeds2 is ", breeds2);

        yield put(fetchMoviesElementSuccess(breeds2));
        yield put(successFetching(fetchMoviesElement.type));
    } catch (error: any) {
        yield put(
            failedFetching({ name: fetchMoviesElement.type, error: error?.message as string })
        );
    }
}

export function* onFetchMoviesElementStart() {
    yield takeLatest(fetchMoviesElement.type, onFetchMoviesElement);
}

export default function* movieElementSaga() {
    yield all([call(onFetchMoviesElementStart)]);
}
