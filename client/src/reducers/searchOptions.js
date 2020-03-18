import { SearchForOptions, SortByOptions } from '../actions';

const initialState = {
    searchFor: SearchForOptions.MOVIES,
    sortBy: SortByOptions.RELEVANCE
}

const searchOptions = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_FOR_OPTION':
            return {
                searchFor: action.option,
                sortBy: state.sortBy
            };
        case 'SET_SORT_BY_OPTION':
            return {
                searchFor: state.searchFor,
                sortBy: action.option
            };
        default:
            return state;
    }
}

export default searchOptions;