import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects'
import get from '../getApiCaller'
import {
  GET_CATEGORIES_FILTER_STARTED,
  GET_CATEGORIES_FILTER_SUCCESS,
  GET_CATEGORIES_FILTER_FAILED
} from '../../common/action'

const API_DATA = payload => {
  return get(`${payload.url}/${payload.category_id}/${payload.brand_id}`, 'GET', true).then(response => {
    return response
  })

}


export const GET_CATEGORIES_FILTER = function* getCategoriesFilter() {
  yield takeEvery('GET_CATEGORIES_FILTER', function* (action) {
    yield put({
      type: GET_CATEGORIES_FILTER_STARTED
    })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: GET_CATEGORIES_FILTER_SUCCESS,
        payload: DATA
      });
    } catch (error) {
      yield put({
        type: GET_CATEGORIES_FILTER_FAILED,
        payload: error
      })
    }
  })
}