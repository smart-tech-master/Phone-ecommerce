import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects'
import get from '../getApiCaller';
import {
  GET_VERSION_SPECIALFICATION_STARTED,
  GET_VERSION_SPECIALFICATION_SUCESS,
  GET_VERSION_SPECIALFICATION_FAILED
} from '../../common/action';

const API_DATA = payload => {

  return get(`${payload.url}/${payload.productId}/${payload.status}?version_id=${payload.versionId}`,
    `GET`,
    true
  ).then(response => {
    return response;
  });
}

export const GET_VERSION_SPECIALFICATION = function* getVersionSpecailfication() {

  yield takeEvery('GET_VERSION_SPECIALFICATION', function* (action) {
    yield put({
      type: GET_VERSION_SPECIALFICATION_STARTED
    });
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload));
      yield put({
        type: GET_VERSION_SPECIALFICATION_SUCESS,
        payload: DATA
      });

    } catch (error) {
      yield put({
        type: GET_VERSION_SPECIALFICATION_FAILED,
        payload: error
      });
    }

  });

}