import { connect } from 'react-redux'
import Favorites from '../components/Favorites'

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userData.isLoggedIn,
    favorites: state.userData.favorites
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)