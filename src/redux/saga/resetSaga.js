import { put, takeEvery } from 'redux-saga/effects'

export const RESET = function* perform_reset() {
  yield takeEvery('RESET', function*(action) {
    yield put({ type: action.payload.type, payload: action.payload })
  })
}
