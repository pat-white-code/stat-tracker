import { call, put, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../redux/constants';
import { fetchImages } from './api';
import { setImages } from './actions'

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, imagesLoadSaga)
}

function* imagesLoadSaga() {
  const images = yield call(fetchImages)
  yield put(setImages(images))
}

export default rootSaga