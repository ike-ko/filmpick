const initialState = {
    favorites: []
}

const setFavorite = (state = initialState, action) => {
    if (state.favorites.includes(action.id)) {
        return { favorites: state.favorites.filter(e => e !== action.id) }
    }
    else {
        return { favorites: [...state.favorites, action.id] };
    }
}

export default setFavorite;