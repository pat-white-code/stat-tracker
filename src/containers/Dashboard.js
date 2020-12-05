import { loadImages, badRequest } from '../redux/actions';
import Dashboard from '../components/pages/Dashboard';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (
  {
    loadImages: () => dispatch(loadImages()),
    badRequest: () => dispatch(badRequest())
  }
)

export default connect(null, mapDispatchToProps)(Dashboard);