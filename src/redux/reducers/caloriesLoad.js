import { CALORIES } from '../constants';

const caloriesLoad = (state = false, action) =>{
  switch(action.type) {
    case CALORIES.LOAD:
      return true;
    case CALORIES.SUCCESS:
      return false;
    case CALORIES.FAIL:
      return false
    default:
      return state;
  }
}

export default caloriesLoad