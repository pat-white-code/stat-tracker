import { IMAGES, IMG_DATA, CALORIES } from './constants';
import caloriesError from './reducers/caloriesError';

export const loadImages = () => {
  return {type: IMAGES.LOAD}
}

export const setImages = images => {
  return {type: IMAGES.SUCCESS, payload: images}
}

export const setErrors = error => (
  {type: IMAGES.FAIL, payload: error}
)

export const badRequest = () => (
  {type: 'BAD_REQUEST'}
)

export const loadImgData = () => ({
  type: IMG_DATA.LOAD
})

export const loadCalories = () => {
  return {type: CALORIES.LOAD}
}

export const setCalories = calorieData => {
  return {type: CALORIES.SUCCESS, payload: calorieData}
}

export const setCaloriesError = err => {
  return {type: CALORIES.FAIL, payload: err}
}

export const addCaloriesData = caloriesData => ({
  type: CALORIES.ADD, payload: caloriesData
})