import { connect } from 'react-redux'
import { setSearchForOption, setSortByOption } from '../actions'
import SearchOptions from '../components/SearchOptions'

const mapStateToProps = (state, ownProps) => ({
    searchForOption: state.searchOptions.searchFor,
    sortByOption: state.searchOptions.sortBy
})

const mapDispatchToProps = dispatch => ({
    setSearchForOption: option => dispatch(setSearchForOption(option)),
    setSortByOption: option => dispatch(setSortByOption(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions)