import { call, put, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../redux/constants';
import { fetchImages, makeBadCall } from './api';
import { setErrors, setImages } from './actions'

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, imagesLoadSaga)
  yield takeEvery('BAD_REQUEST', badRequest)
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

function* badRequest() {
  try { 
    const images = yield call(makeBadCall)
    yield put(setImages(images))
  }
  catch(err) {
    console.log(err)
    yield put(setErrors(err.message))
  }
}

export default rootSaga