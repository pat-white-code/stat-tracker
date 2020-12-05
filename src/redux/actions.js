import { IMAGES } from './constants';

export const loadImages = () => {
  return {type: IMAGES.LOAD}
}

export const setImages = images => {
  return {type: IMAGES.SUCCESS, payload: images}
}