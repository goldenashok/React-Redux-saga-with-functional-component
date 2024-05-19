/* import {createStore, applyMiddleware} from 'redux';//used only for redux-saga
import reduxSaga from 'redux-saga';//used only for redux-saga*/

import {configureStore} from '@reduxjs/toolkit'// used only for @reduxjs/toolkit
import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';// used only for @reduxjs/toolkit

//Apply middleware via redux-saga
/*const initialState = {};
const reduxSagaMiddleware = reduxSaga();
const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
reduxSagaMiddleware.run(rootSaga);*/

//conecting vis @reduxjs/toolkit
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export default store;