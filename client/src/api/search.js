import axios from 'axios';
import { resolve } from './common.js';

export const searchTMDB = async (searchQuery, searchFor, sortBy) => {
    return await resolve(
        axios.get(
            `/api/search/`, {
                params: {
                    search_query: searchQuery,
                    search_for: searchFor,
                    sort_by: sortBy
                }
            }
        ).then(res => res.data)
    );
}