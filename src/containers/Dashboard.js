import { loadImages } from '../redux/actions';
import Dashboard from '../components/pages/Dashboard';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (
  {
    loadImages: () => dispatch(loadImages())
  }
)

export default connect(null, mapDispatchToProps)(Dashboard);