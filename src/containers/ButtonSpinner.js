import { loadImages } from '../redux/actions';
import ButtonSpinner from '../components/ButtonSpinner';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSpinner);