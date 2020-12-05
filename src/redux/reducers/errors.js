import { IMAGES } from '../constants';

const errorsReducer = (state = null, action) => {
  switch(action) {
    case IMAGES.FAIL:
      return action.payload
      default: return state;
  }
}

export default errorsReducer;