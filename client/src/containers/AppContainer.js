import { connect } from 'react-redux'
import { setLogin, setFavorites, setGenres } from '../actions'
import App from '../App'

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = dispatch => ({
    setLogin: status => dispatch(setLogin(status)),
    setFavorites: items => dispatch(setFavorites(items)),
    setGenres: genres => dispatch(setGenres(genres))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)