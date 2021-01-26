import { put, takeEvery } from 'redux-saga/effects'
// import { put, takeEvery, call } from 'redux-saga/effects'
// import get from '../getApiCaller'

// const API_DATA = payload => {
//   return get('endPoint', 'GET', true).then(response => {
//     return response
//   })
// }
import {
  GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED,
  // GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS,
  GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED
} from '../../common/action'

export const GET_DEVICE_BY_NAME_CATEGORY_WISE = function* getDeviceByNameCategoryWise() {
  yield takeEvery('GET_DEVICE_BY_NAME_CATEGORY_WISE', function*(action) {
    yield put({ type: GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      // yield put({
      //   type: GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS,
      //   payload: DATA
      // });
    } catch (error) {
      yield put({
        type: GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED,
        payload: error
      })
    }
  })
}
