import { loadImages, badRequest } from '../redux/actions';
import Dashboard from '../components/pages/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  images: state.images,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    badRequest: () => dispatch(badRequest())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);