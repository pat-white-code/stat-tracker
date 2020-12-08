import { addCaloriesData, setCalories, setCaloriesError } from '../actions';
import { CALORIES } from '../constants';
import { takeEvery, call, put } from "redux-saga/effects";
import { fetchCaloriesData } from '../api';

function* caloriesWatcher() {
  yield takeEvery(CALORIES.LOAD, caloriesLoader)
}

function* caloriesLoader() {
  try {
    const calories = yield call(fetchCaloriesData);
    yield put(setCalories(calories))
  } catch (err) {
    put(setCaloriesError(err))
  }
}

export default caloriesWatcher;