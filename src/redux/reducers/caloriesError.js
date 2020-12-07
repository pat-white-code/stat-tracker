import { CALORIES } from '../constants';

const caloriesError = (state = null, action) =>{
  switch(action.type) {
    case CALORIES.SUCCESS:
      return null
    case CALORIES.FAIL:
      return action.payload;
    default:
      return state;
  }
}

export default caloriesError;