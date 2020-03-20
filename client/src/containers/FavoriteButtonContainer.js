import { connect } from 'react-redux'
import { setFavorites } from '../actions'
import FavoriteButton from '../components/FavoriteButton'

const mapStateToProps = (state) => ({
    isLoggedIn: state.userData.isLoggedIn,
    favorites: state.userData.favorites
})

const mapDispatchToProps = dispatch => ({
    setFavorites: items => dispatch(setFavorites(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)