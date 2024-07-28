// src/sagas/restaurantsSaga.js
import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import {
    fetchRestaurants,
    fetchRestaurantsSuccess,
    fetchRestaurantsError,
    fetchRestaurantById,
    fetchRestaurantByIdSuccess,
    fetchRestaurantByIdError,
} from './restaurantsSlice';
import { getRequestData } from '../../utils/RestService';
import { GET_RESTAURANTS_URL, GET_RESTAURANT_BY_ID_URL } from '../../utils/urls';

function* fetchRestaurantsSaga(action) {
    try {
        const url = GET_RESTAURANTS_URL(action.payload.lat, action.payload.lon);
        const response = yield call(getRequestData, url);
        yield put(fetchRestaurantsSuccess(response));
    } catch (error) {
        yield put(fetchRestaurantsError(error.toString()));
    }
}

function* fetchRestaurantByIdSaga(action) {
    try {
        const url = GET_RESTAURANT_BY_ID_URL(action.payload);
        const response = yield call(getRequestData, url);
        yield put(fetchRestaurantByIdSuccess(response));
    } catch (error) {
        yield put(fetchRestaurantByIdError(error.toString()));
    }
}

export function* watchFetchRestaurants() {
    yield takeEvery(fetchRestaurants, fetchRestaurantsSaga);
}

export function* watchFetchRestaurantById() {
    yield takeEvery(fetchRestaurantById, fetchRestaurantByIdSaga);
}

export default function* restaurantsSaga() {
    yield all([
        fork(watchFetchRestaurants),
        fork(watchFetchRestaurantById),
    ]);
}
