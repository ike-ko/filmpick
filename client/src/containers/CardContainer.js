import { connect } from 'react-redux'
import Card from '../components/Card'

const mapStateToProps = (state, ownProps) => ({
    genres: state.mediaInfo.genres
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)