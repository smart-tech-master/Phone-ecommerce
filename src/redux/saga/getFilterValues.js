import { put, takeEvery } from 'redux-saga/effects'
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_FILTERED_VALUES_STARTED,
  // GET_FILTERED_VALUES_SUCCESS,
  GET_FILTERED_VALUES_FAILED
} from '../../common/action'

export const GET_FILTERED_VALUES = function* getFilteredValues() {
  yield takeEvery('GET_FILTERED_VALUES', function*(action) {
    yield put({ type: GET_FILTERED_VALUES_STARTED })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({
      //   type: GET_FILTERED_VALUES_SUCCESS,
      //   payload: DATA
      // });
    } catch (error) {
      yield put({ type: GET_FILTERED_VALUES_FAILED, payload: error })
    }
  })
}
