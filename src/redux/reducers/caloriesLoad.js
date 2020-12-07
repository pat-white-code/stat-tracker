import { CALORIES } from '../constants';

const caloriesLoad = (state = {}, action) =>{
  switch(action.type) {
    case CALORIES.LOAD:
      return {...state, load: true};
    case CALORIES.SUCCESS:
      return {...state, load: false};;
    case CALORIES.FAIL:
      return {...state, load: false};;
    default:
      return state;
  }
}

export default caloriesLoad