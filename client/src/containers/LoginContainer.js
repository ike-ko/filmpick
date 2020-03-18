import { connect } from 'react-redux'
import { setLogin } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state, ownProps) => ({
    isVisible: ownProps.isVisible,
    hideLogin: ownProps.hideLogin
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)