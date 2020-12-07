import { CALORIES } from '../constants';

const caloriesData = (state = [], action) =>{
  switch(action.type) {
    case CALORIES.SUCCESS:
      return action.payload
    case CALORIES.ADD:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default caloriesData;