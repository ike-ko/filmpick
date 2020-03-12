import { connect } from 'react-redux'
import { setLogin } from '../actions'
import Register from '../components/Register'

const mapStateToProps = (state, ownProps) => ({
    isVisible: ownProps.isVisible,
    hideRegister: ownProps.hideRegister
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)