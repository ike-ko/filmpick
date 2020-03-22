const axios =  require('axios');
const API_KEYS = require('../../utils/apiKeys')

const THEMOVIEDB_API_URL = "https://api.themoviedb.org/3";

module.exports = app => {
    app.get('/api/search', async (req, res) => {
        const { query } = req;
        // ?q=ABC?search_for=movies/tv?sort_by=relevance/alphabetical/releasedate
        const { search_query, search_for, sort_by } = query;

        try {
            const tmdbRes = await axios.get(
                `/search/${search_for}`, {
                    baseURL: THEMOVIEDB_API_URL,
                    params: {
                        api_key: API_KEYS.THEMOVIEDB_API_KEY,
                        query: search_query
                    }
                }
            )

            let resArr = tmdbRes.data.results;  // sort in place

            if (sort_by === 'alphabetical') {
                if (search_for === 'tv')
                    resArr.sort((a, b) => (a.name > b.name) ? 1 : -1)
                else
                    resArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
                
            }
            else if (sort_by === 'release_date') {
                if (search_for === 'tv')
                    resArr.sort((a, b) => (a.first_air_date < b.first_air_date) ? 1 : -1)
                else
                    resArr.sort((a, b) => (a.release_date < b.release_date) ? 1 : -1)
            }

            return res.send({
                success: true,
                message: 'Search successful',
                results: tmdbRes.data
            });
        }
        catch (err) {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
    });

    app.get('/api/search/genres', async (req, res) => {
        try {
            const movieRes = await axios.get(
                '/genre/movie/list', {
                    baseURL: THEMOVIEDB_API_URL,
                    params: {
                        api_key: API_KEYS.THEMOVIEDB_API_KEY
                    }
                }
            ).then(res => res.data);

            const tvRes = await axios.get(
                '/genre/tv/list', {
                    baseURL: THEMOVIEDB_API_URL,
                    params: {
                        api_key: API_KEYS.THEMOVIEDB_API_KEY
                    }
                }
            ).then(res => res.data);

            let resArr = [...movieRes.genres];
            
            tvRes.genres.forEach(tvGenre => {
                if (!resArr.some(genre => genre.id === tvGenre.id)) {
                    resArr.push(tvGenre);
                }
            });
            

            return res.send({
                success: true,
                message: 'Search successful',
                results: resArr
            });
        }
        catch (err) {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
    });
};