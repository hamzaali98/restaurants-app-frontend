import {all} from 'redux-saga/effects';
import restaurantSaga from './restaurants/saga';


export default function* rootSaga() {
    yield all([
        restaurantSaga(),
    ]);
}
