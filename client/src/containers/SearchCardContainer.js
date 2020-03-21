import { connect } from 'react-redux'
import SearchCard from '../components/SearchCard'

const mapStateToProps = (state, ownProps) => ({
    genres: state.mediaInfo.genres
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCard)