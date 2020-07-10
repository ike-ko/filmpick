const initialState = {
    isLoggedIn: false,
    favorites: [],
    isFirstLoad: true
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            if (action.status) {
                return {
                    ...state,
                    isLoggedIn: action.status
                }
            }
            else {
                return initialState;
            }
        case 'SET_FAVORITES':
            return {
                ...state,
                favorites: action.items
            }
        case 'SET_FIRST_LOAD':
            return {
                ...state,
                isFirstLoad: action.isFirstLoad
            }
        default:
            return state;
    }
}

export default userData;