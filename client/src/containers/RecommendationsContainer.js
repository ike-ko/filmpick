import { connect } from 'react-redux'
import Recommendations from '../components/Recommendations'
import { setFavorites } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userData.isLoggedIn,
    favorites: state.userData.favorites
})

const mapDispatchToProps = dispatch => ({
    setFavorites: items => dispatch(setFavorites(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations)