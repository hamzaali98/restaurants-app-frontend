// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import appReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
