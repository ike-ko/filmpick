export const setLogin = status => ({
    type: 'SET_LOGIN',
    status
})

export const setFavorites = items => ({
    type: 'SET_FAVORITES',
    items
})

export const setGenres = genres => ({
    type: 'SET_GENRES',
    genres
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