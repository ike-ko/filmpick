import { SearchByOptions, SortByOptions } from '../actions';

const initialState = {
    searchBy: SearchByOptions.TITLE,
    sortBy: SortByOptions.RELEVANCE
}

const searchOptions = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_BY_OPTION':
            return {
                searchBy: action.option,
                sortBy: state.sortBy
            };
        case 'SET_SORT_BY_OPTION':
            return {
                searchBy: state.searchBy,
                sortBy: action.option
            };
        default:
            return state;
    }
}

export default searchOptions;