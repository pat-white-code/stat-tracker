import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import caloriesSaga from './caloriesSaga';

export default function* rootSaga() {
  yield all([
    imagesSaga(),
    caloriesSaga()
  ]);
}