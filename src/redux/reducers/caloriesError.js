import { CALORIES } from '../constants';

const caloriesError = (state = {}, action) =>{
  switch(action.type) {
    case CALORIES.SUCCESS:
      return {...state, error: null};
    case CALORIES.FAIL:
      return action.payload;
    default:
      return state;
  }
}

export default caloriesError;