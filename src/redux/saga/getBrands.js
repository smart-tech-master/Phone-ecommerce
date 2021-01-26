import { put, takeEvery, call } from 'redux-saga/effects';
// import { put, takeEvery, call } from 'redux-saga/effects'
import get from '../getApiCaller';
import {
  GET_BRANDS_STARTED,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILED
} from '../../common/action';

const API_DATA = payload => {
  return get(payload.url, 'GET', true).then(response => {
    return response;
  });
};

export const GET_BRANDS = function* getBrands() {
  yield takeEvery('GET_BRANDS', function*(action) {
    yield put({ type: GET_BRANDS_STARTED });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({ type: GET_BRANDS_SUCCESS, payload: DATA });
    } catch (error) {
      yield put({ type: GET_BRANDS_FAILED, payload: error });
    }
  });
};
