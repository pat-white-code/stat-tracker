import { call, put, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../redux/constants';
import { fetchImages } from './api';
import { setErrors, setImages } from './actions'

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, imagesLoadSaga)
}

function* imagesLoadSaga() {
  try { 
    const images = yield call(fetchImages)
  yield put(setImages(images))
  }
  catch(err) {
    yield put(setErrors(JSON.stringify(err)))
  }
}

export default rootSaga