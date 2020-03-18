import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { setLogin } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userData.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)