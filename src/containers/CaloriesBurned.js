import CaloriesBurned from '../components/CaloriesBurned';
import { loadCalories } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  caloriesData: state.caloriesData,
  caloriesLoading: state.caloriesLoad
})

const mapDispatchToProsp = dispatch => ({
  loadCalories: ()=> dispatch(loadCalories())
})

export default connect(mapStateToProps, mapDispatchToProsp)(CaloriesBurned)