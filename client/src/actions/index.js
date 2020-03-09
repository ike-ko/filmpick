export const setSearchByOption = option => ({
    type: 'SET_SEARCH_BY_OPTION',
    option
})

export const setSortByOption = option => ({
    type: 'SET_SORT_BY_OPTION',
    option
})

export const SearchByOptions = {
    TITLE: 'TITLE',
    DIRECTOR: 'DIRECTOR',
    ACTOR: 'ACTOR'
}

export const SortByOptions = {
    RELEVANCE: 'RELEVANCE',
    ALPHABETICAL: 'ALPHABETICAL',
    RELEASE_DATE: 'RELEASE_DATE'
}