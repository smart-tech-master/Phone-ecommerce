import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects'
import get from '../getApiCaller'
import {
  GET_RELATED_PRODUCTS_STARTED,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAILED
} from '../../common/action';


const API_DATA = payload => {
  return get(`${payload.url}/${payload.categoryID}`,
    `GET`,
    true
  ).then(response => {
    return response;
  });
}

export const GET_RELATED_PRODUCTS = function* getRelatedProducts() {
  yield takeEvery('GET_RELATED_PRODUCTS', function* (action) {
    yield put({
      type: GET_RELATED_PRODUCTS_STARTED
    });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: GET_RELATED_PRODUCTS_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({
        type: GET_RELATED_PRODUCTS_FAILED,
        payload: error
      });
    }
  });
};