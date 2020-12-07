import { CALORIES } from '../constants';

const caloriesData = (state = [], action) =>{
  switch(action.type) {
    case CALORIES.SUCCESS:
      return action.payload
    case CALORIES.ADD:
      // if this date already exists in the array, increment the calories_burned. otherwise create new item in array;
      // for performance issues, data should be refactored to object for instant lookup.
      let stateCopy = [...state];
      let index = state.findIndex(data => data.date === action.payload.date);
      if(index !== -1) {
        stateCopy[index].calories_burned += action.payload.calories_burned;
        return stateCopy;
      } else {
        return [...state, action.payload]
      }
    default:
      return state;
  }
}

export default caloriesData;