import { takeEvery, put, call} from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { setImages, badRequest, setErrors } from '../actions';
import { fetchImages } from '../api';

function* imagesWatcher() {
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

export default imagesWatcher;