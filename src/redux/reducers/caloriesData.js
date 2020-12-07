import { CALORIES } from '../constants';

const caloriesData = (state = {}, action) =>{
  switch(action.type) {
    case CALORIES.SUCCESS:
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export default caloriesData;