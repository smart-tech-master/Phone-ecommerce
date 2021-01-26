import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects'
import get from '../getApiCaller'
import {
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED
} from '../../common/action'

const API_DATA = payload => {
  return get(`${payload.url}`, 'GET', true).then(response => {
    return response
  })

}


export const GET_CATEGORIES = function* getCategories() {
  yield takeEvery('GET_CATEGORIES', function* (action) {
    yield put({
      type: GET_CATEGORIES_STARTED
    })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: GET_CATEGORIES_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({
        type: GET_CATEGORIES_FAILED,
        payload: error
      })
    }
  })
}