import { loadCalories, setCalories, setCaloriesError } from '../actions';
import { CALORIES } from '../constants';
import { takeEvery, call, put } from "redux-saga/effects";

function* caloriesWatcher() {
  yield takeEvery(CALORIES.LOAD, caloriesLoader)

}

function* caloriesLoader() {
  try {
    const calories = yield call(loadCalories);
    put(setCalories(calories))
  } catch (err) {
    put(setCaloriesError(err))
  }
}

export default caloriesWatcher;