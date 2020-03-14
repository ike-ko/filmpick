import { connect } from 'react-redux'
import Recommendations from '../components/Recommendations'

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userData.isLoggedIn,
    favoriteIds: state.userData.favorites
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations)