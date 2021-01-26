import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import get from '../getApiCaller';
import {
  GET_VS_MULTI_PRODUCTS_STARTED,
  GET_VS_MULTI_PRODUCTS_SUCCESS,
  GET_VS_MULTI_PRODUCTS_FAILED
} from '../../common/action';

const API_DATA = payload => {
  return get(`${payload.url}/${payload.deviceID}/${payload.status}`, 'GET', true).then(response => {
    return response
  })
};


export const GET_VS_MULTI_PRODUCTS = function* getVsMultiProducts() {
  yield takeEvery('GET_VS_MULTI_PRODUCTS', function* (action) {
    yield put({
      type: GET_VS_MULTI_PRODUCTS_STARTED
    })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: GET_VS_MULTI_PRODUCTS_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({
        type: GET_VS_MULTI_PRODUCTS_FAILED,
        payload: error
      })
    }
  })
}