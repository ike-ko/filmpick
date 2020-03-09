import { connect } from 'react-redux'
import { setSearchByOption, setSortByOption } from '../actions'
import SearchOptions from '../components/SearchOptions'

const mapStateToProps = state => ({
    searchByOption: state.searchOptions.searchBy,
    sortByOption: state.searchOptions.sortBy
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSearchByOption: option => dispatch(setSearchByOption(option)),
    setSortByOption: option => dispatch(setSortByOption(option)),
    isVisible: ownProps.isVisible,
    hideSearchOptions: ownProps.hideSearchOptions
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions)