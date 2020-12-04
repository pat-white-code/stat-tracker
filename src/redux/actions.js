import { IMAGES } from './constants';

export const setImages = images => {
  return {type: IMAGES.SUCCESS, payload: images}
}