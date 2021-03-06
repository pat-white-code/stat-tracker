import { IMAGES, IMG_DATA, CALORIES, RELATED_IMGS } from './constants';

export const loadImages = (query) => {
  return {type: IMAGES.LOAD, payload: query}
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

export const loadRelatedImages = userId => ({
  type: RELATED_IMGS.LOAD
})

export const setRelatedImages = ({userId, imgId, relatedImages}) => ({
  type: RELATED_IMGS.LOAD_SUCCESS,
  payload: {userId, imgId, relatedImages}
})

export const setRelatedImagesErr = ({imgId, err}) => ({
  type: RELATED_IMGS.LOAD_FAIL,
  payload: {imgId, err}
})