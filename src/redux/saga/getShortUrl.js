import { put, takeEvery } from 'redux-saga/effects'
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_SHORT_URL_STARTED,
  // GET_SHORT_URL_SUCCESS,
  GET_SHORT_URL_FAILED
} from '../../common/action'

export const GET_SHORT_URL = function* getShortUrl() {
  yield takeEvery('GET_SHORT_URL', function*(action) {
    yield put({ type: GET_SHORT_URL_STARTED })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({ type: GET_SHORT_URL_SUCCESS, payload: DATA });
    } catch (error) {
      yield put({ type: GET_SHORT_URL_FAILED, payload: error })
    }
  })
}
