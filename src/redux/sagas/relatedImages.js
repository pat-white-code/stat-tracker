import { take, call, fork, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImagesByUser, mockFetchImagesByUser } from '../api';
import { setRelatedImages } from '../actions';

// Not being used, to prevent Rate Limit crashing. Using mockHandler instead
function* handleRelatedImages(userId, imgId) {
  console.log('USERID ', userId)
  const relatedImages = yield call(fetchImagesByUser, userId);
  console.log('userId', relatedImages)
  console.log('imgId', imgId)
  yield put(setRelatedImages({imgId, userId, relatedImages}))
}

function* mockHandleRelatedImages(userId, imgId) {
  console.log('USERID ', userId)
  const relatedImages = yield call(mockFetchImagesByUser, userId);
  console.log('userId', relatedImages)
  console.log('imgId', imgId)
  yield put(setRelatedImages({imgId, userId, relatedImages}))
}

function* relatedImagesWatcher() {
  while(true) {
    const { payload } = yield take(IMAGES.SUCCESS);
    console.log('IMAGES', payload);
    for(let i = 0 ; i < payload.length ; i++) {
      let image = payload[i];
      console.log(image.id, image.user.id);
      yield fork(mockHandleRelatedImages, image.user.id, image.id)
    }
  }
}

export default relatedImagesWatcher;