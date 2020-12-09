import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import caloriesSaga from './caloriesSaga';
import relatedImagesWatcher from './relatedImages';

export default function* rootSaga() {
  yield all([
    imagesSaga(),
    caloriesSaga(),
    relatedImagesWatcher()
  ]);
}