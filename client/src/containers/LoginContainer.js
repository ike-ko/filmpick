import { connect } from 'react-redux'
import { setLogin, setFavorites } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status)),
    setFavorites: items => dispatch(setFavorites(items)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)