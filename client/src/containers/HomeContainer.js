import { connect } from 'react-redux'
import { setFirstLoad } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
    isFirstLoad: state.userData.isFirstLoad
})

const mapDispatchToProps = dispatch => ({
    setFirstLoad: isFirstLoad => dispatch(setFirstLoad(isFirstLoad))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)