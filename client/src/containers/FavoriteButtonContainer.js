import { connect } from 'react-redux'
import { setFavorite } from '../actions'
import FavoriteButton from '../components/FavoriteButton'

const mapStateToProps = (state, ownProps) => ({
    favoriteIds: state.userData.favorites,
    movieId: ownProps.movieId
})

const mapDispatchToProps = dispatch => ({
    setFavorite: id => dispatch(setFavorite(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)