import { combineReducers } from 'redux';
import images from './images';
import loading from './loading';
import errors from './errors';
import caloriesData from './caloriesData';
import caloriesLoad from './caloriesLoad';
import caloriesError from './caloriesError';
import relatedImagesData from './relatedImagesData';

export default combineReducers({
  images,
  loading,
  errors,
  caloriesData,
  caloriesLoad,
  caloriesError,
  relatedImagesData
})