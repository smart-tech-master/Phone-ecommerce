import { put, takeEvery, call } from 'redux-saga/effects';
import get from '../getApiCaller';
import {
  GET_TRENDING_PRODUCTS_STARTED,
  GET_TRENDING_PRODUCTS_SUCCESS,
  GET_TRENDING_PRODUCTS_FAILED
} from '../../common/action';

const API_DATA = ({ url }) => {
  return get(url, 'GET', true).then(response => {
    return response;
  });
};

export const GET_TRENDING_PRODUCTS = function* getTrendingProducts() {
  yield takeEvery('GET_TRENDING_PRODUCTS', function*(action) {
    yield put({ type: GET_TRENDING_PRODUCTS_STARTED });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({
        type: GET_TRENDING_PRODUCTS_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({ type: GET_TRENDING_PRODUCTS_FAILED, payload: error });
    }
  });
};
