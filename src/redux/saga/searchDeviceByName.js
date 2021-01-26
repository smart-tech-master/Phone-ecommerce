import { put, takeEvery, call } from 'redux-saga/effects';
import get from '../getApiCaller';
import {
  GET_DEVICE_BY_NAME_STARTED,
  GET_DEVICE_BY_NAME_SUCCESS,
  GET_DEVICE_BY_NAME_FAILED
} from '../../common/action';

const API_DATA = payload => {
  return get(
    `${payload.url}?text=${payload.name}`,
    'GET',
    true
  ).then(response => {
    return response;
  });
};

export const GET_DEVICE_BY_NAME = function* getDeviceByName() {
  yield takeEvery('GET_DEVICE_BY_NAME', function*(action) {
    yield put({ type: GET_DEVICE_BY_NAME_STARTED });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({
        type: GET_DEVICE_BY_NAME_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({ type: GET_DEVICE_BY_NAME_FAILED, payload: error });
    }
  });
};
