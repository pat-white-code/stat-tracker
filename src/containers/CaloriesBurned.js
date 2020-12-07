import CaloriesBurned from '../components/CaloriesBurned';
import { loadCalories } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  calories: state.calories
})

const mapDispatchToProsp = dispatch => ({
  loadCalories: ()=> dispatch(loadCalories())
})

export default connect(mapStateToProps, mapDispatchToProsp)(CaloriesBurned)