import axios from 'axios';
import { resolve } from './common.js';

export const searchTMDB = async (searchQuery, searchFor, sortBy) => {
    return await resolve(
        axios.get(
            `/api/search/`, {
                params: {
                    search_query: encodeURIComponent(searchQuery).replace(/%20/g, "+"),
                    search_for: searchFor,
                    sort_by: sortBy
                }
            }
        ).then(res => res.data)
    );
}

export const getGenres = async () => {
    return await resolve(
        axios.get(
            '/api/search/genres'
        ).then(res => res.data)
    );
}

export const getPopularMovies = async () => {
    return await resolve(
        axios.get(
            '/api/search/movie/popular'
        ).then(res => res.data)
    );
}

export const getPopularTV = async () => {
    return await resolve(
        axios.get(
            '/api/search/tv/popular'
        ).then(res => res.data)
    );
}