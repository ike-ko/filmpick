const initialState = {
    isLoggedIn: false,
    favorites: []
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
        default:
            return state;
    }
}

export default userData;