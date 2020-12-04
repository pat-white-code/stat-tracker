import { takeEvery } from 'redux-saga/effects';

function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
}

function* workerSaga() {
  yield console.log('HI FROM WORKER')
}

export default rootSaga