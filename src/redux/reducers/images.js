import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
  switch(action.type){
    case IMAGES.SUCCESS:
      return action.payload
    default: return state;
  }
}

export default imagesReducer