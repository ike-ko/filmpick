import { connect } from 'react-redux'
import { setFavorite } from '../actions'
import Favorites from '../components/Favorites'

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userData.isLoggedIn,
    favoriteIds: state.userData.favorites
})

const mapDispatchToProps = dispatch => ({
    setFavorite: id => dispatch(setFavorite(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)