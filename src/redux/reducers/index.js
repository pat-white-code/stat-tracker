import { combineReducers } from 'redux';
import images from './images';
import loading from './loading';

export default combineReducers({
  images,
  loading
})