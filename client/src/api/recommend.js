import axios from 'axios';
import { resolve } from './common.js';
import { FILMPICK_STORAGE, INVALID_TOKEN, getFromStorage } from '../utils/storage';

export const getRecommendations = async (query) => {
    const obj = getFromStorage(FILMPICK_STORAGE);
    
    if (obj && obj.token) {
        return await resolve(
            axios.get(
                '/api/recommend/', {
                    params: {
                        q: query
                    }
                }
            ).then(res => res.data)
        );
    }
    return INVALID_TOKEN;
}
