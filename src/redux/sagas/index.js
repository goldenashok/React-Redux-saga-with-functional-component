import { PRODUCT_LIST, SEARCH_PRODUCT } from '../constant';
import { getProducts ,searchProducts} from './productSaga';
import { takeEvery } from 'redux-saga/effects'

export default function* () {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}