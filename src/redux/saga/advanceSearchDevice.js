import {
  ADVANCE_SEARCH_DEVICE_STARTED,
  ADVANCE_SEARCH_DEVICE_SUCCESS,
  ADVANCE_SEARCH_DEVICE_FAILED
} from '../../common/action';

import { put, takeEvery } from 'redux-saga/effects';
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }

export const ADVANCE_SEARCH_DEVICE = function* advanceSearchDevice() {
  yield takeEvery('ADVANCE_SEARCH_DEVICE', function*(action) {
    yield put({ type: ADVANCE_SEARCH_DEVICE_STARTED });
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: ADVANCE_SEARCH_DEVICE_SUCCESS
        // payload: DATA
      });
    } catch (error) {
      yield put({ type: ADVANCE_SEARCH_DEVICE_FAILED, payload: error });
    }
  });
};
