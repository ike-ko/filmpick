import { connect } from 'react-redux'
import { setLogin, setFavorites } from '../actions'
import App from '../App'

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status)),
    setFavorites: items => dispatch(setFavorites(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)