import { combineReducers } from 'redux';
import images from './images';
import loading from './loading';
import errors from './errors';

export default combineReducers({
  images,
  loading,
  errors
})