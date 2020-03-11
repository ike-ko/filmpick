export const setFavorite = id => ({
    type: 'SET_FAVORITE',
    id
})

export const setSearchForOption = option => ({
    type: 'SET_SEARCH_FOR_OPTION',
    option
})

export const setSortByOption = option => ({
    type: 'SET_SORT_BY_OPTION',
    option
})

export const SearchForOptions = {
    MOVIES: 'MOVIES',
    TV_SHOWS: 'TV_SHOWS'
}

export const SortByOptions = {
    RELEVANCE: 'RELEVANCE',
    ALPHABETICAL: 'ALPHABETICAL',
    RELEASE_DATE: 'RELEASE_DATE'
}