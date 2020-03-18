const initialState = {
    isLoggedIn: false,
    favorites: []
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                isLoggedIn: action.status
            }
        case 'SET_FAVORITE':
            if (state.favorites.includes(action.id)) {
                return {
                    ...state,
                    favorites: state.favorites.filter(e => e !== action.id) 
                }
            }
            else {
                return { 
                    ...state,
                    favorites: [...state.favorites, action.id] 
                };
            }
        default:
            return state;
    }
}

export default userData;