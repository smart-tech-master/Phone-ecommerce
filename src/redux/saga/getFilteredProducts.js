import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import get from '../getApiCaller';
import {
  GET_CB_FILTER_PRODUCTS_STARTED,
  GET_CB_FILTER_PRODUCTS_SUCCESS,
  GET_CB_FILTER_PRODUCTS_FAILED
} from '../../common/action';

const API_DATA = payload => {
  return get(
    `${payload.url}/${payload.categoryID}/${payload.brandID}`,
    'GET',
    true
  ).then(response => {
    return response;
  });
};

export const GET_CB_FILTER_PRODUCTS = function* getCBfilterProducts() {
  yield takeEvery('GET_CB_FILTER_PRODUCTS', function* (action) {
    yield put({
      type: GET_CB_FILTER_PRODUCTS_STARTED
    });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({
        type: GET_CB_FILTER_PRODUCTS_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({
        type: GET_CB_FILTER_PRODUCTS_FAILED,
        payload: error
      });
    }
  });
};