import axios from 'axios';
import { resolve } from './common.js';
import { FILMPICK_STORAGE, INVALID_TOKEN, getFromStorage } from '../utils/storage';

export const getFavorites = async () => {
    const obj = getFromStorage(FILMPICK_STORAGE);
    
    if (obj && obj.token) {
        return await resolve(
            axios.get(
                '/api/favorites/', {
                    params: {
                        token: obj.token
                    }
                }
            ).then(res => res.data)
        );
    }
    return INVALID_TOKEN;
}

export const addFavorite = async (item) => {
    const obj = getFromStorage(FILMPICK_STORAGE);

    if (obj && obj.token) {
        return await resolve(
            axios.put(
                '/api/favorites', {
                    item
                }, {
                    params: {
                        token: obj.token
                    }
                },
            ).then(res => res.data)
        );
    }
    return INVALID_TOKEN;
}

export const removeFavorite = async (itemId) => {
    const obj = getFromStorage(FILMPICK_STORAGE);

    if (obj && obj.token) {
        return await resolve(
            axios.delete(
                '/api/favorites', {
                    params: {
                        item_id: itemId,
                        token: obj.token
                    }
                }
            ).then(res => res.data)
        );
    }
    return INVALID_TOKEN;
}