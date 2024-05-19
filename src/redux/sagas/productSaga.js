import { put } from 'redux-saga/effects'
import { SET_PRODUCT_LIST } from '../constant';

export const getProducts = function* () {
    let data = yield fetch('http://localhost:5000/api/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

export const searchProducts = function* (data) {
    let result = yield fetch(`http://localhost:5000/api/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}