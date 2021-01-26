import { put, takeEvery } from 'redux-saga/effects'
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_MODELS_STARTED,
  // GET_MODELS_SUCCESS,
  GET_MODELS_FAILED
} from '../../common/action'

export const GET_MODELS = function* getModels() {
  yield takeEvery('GET_MODELS', function*(action) {
    yield put({ type: GET_MODELS_STARTED })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({ type: GET_MODELS_SUCCESS, payload: DATA });
    } catch (error) {
      yield put({ type: GET_MODELS_FAILED, payload: error })
    }
  })
}
