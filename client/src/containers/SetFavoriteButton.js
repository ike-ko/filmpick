import { connect } from 'react-redux'
import { setFavorite } from '../actions'
import SearchFavoritebutton from '../components/SearchFavoriteButton'

const mapStateToProps = (state, ownProps) => ({
    favoriteIds: state.setFavorite.favorites,
    movieId: ownProps.movieId
})

const mapDispatchToProps = dispatch => ({
    setFavorite: id => dispatch(setFavorite(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFavoritebutton)