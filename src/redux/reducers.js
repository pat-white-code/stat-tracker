import { combineReducers } from 'redux';
import {IMAGES} from './constants';

const images = (state = [], action) => {
  switch(action.type){
    case IMAGES.SUCCESS:
      return action.payload
    default: return state;
  }
}

export default combineReducers({
  images
})