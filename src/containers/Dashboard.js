import { loadImages, badRequest, loadImgData } from '../redux/actions';
import Dashboard from '../components/pages/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  images: state.images,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    badRequest: () => dispatch(badRequest()),
    loadImgData: ()=> dispatch(loadImgData())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);