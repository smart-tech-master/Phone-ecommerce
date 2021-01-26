import { put, takeEvery } from 'redux-saga/effects';
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_POPULAR_PRODUCTS_STARTED,
  GET_POPULAR_PRODUCTS_SUCCESS,
  GET_POPULAR_PRODUCTS_FAILED
} from '../../common/action';

export const GET_POPULAR_PRODUCTS = function* getPopularProducts() {
  yield takeEvery('GET_POPULAR_PRODUCTS', function*(action) {
    yield put({ type: GET_POPULAR_PRODUCTS_STARTED });
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({
      //   type: 'GET_POPULAR_PRODUCTS_SUCCESS',
      //   payload: DATA
      // });
    } catch (error) {
      yield put({ type: GET_POPULAR_PRODUCTS_FAILED, payload: error });
    }
  });
};
