import { connect } from 'react-redux'
import Search from '../components/Search'

const mapStateToProps = (state, ownProps) => ({
    searchForOption: state.searchOptions.searchFor,
    sortByOption: state.searchOptions.sortBy
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)