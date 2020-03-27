const axios =  require('axios');
const API_KEYS = require('../../utils/apiKeys')
const { TASTEDIVE_API_URL, THEMOVIEDB_API_URL } = require('../../utils/apiUrls');

module.exports = app => {
    app.get('/api/recommend', async (req, res) => {
        const { query } = req;
        // ?q=encodeURIComponent'edQuery separated by commas
        const { q } = query;

        try {
            let foundRecs = [];

            const tdMovieRes = await axios.get(
                TASTEDIVE_API_URL, {
                    params: {
                        k: API_KEYS.TASTEDIVE_API_KEY,
                        q,
                        limit: 5,
                        info: 1,
                        type: "movies"
                    }
                }
            ).then(res => res.data);

            tdMovieRes.Similar.Results.forEach(async (rec) => {
                const recRes = await axios.get(
                    `/search/movie`, {
                        baseURL: THEMOVIEDB_API_URL,
                        params: {
                            api_key: API_KEYS.THEMOVIEDB_API_KEY,
                            query: rec.Name
                        }
                    }
                ).then(res => res.data);

                if (recRes.results.length > 0) {
                    foundRecs.push(recRes.results[0]);
                }
            });
            
            const tdTvRes = await axios.get(
                TASTEDIVE_API_URL, {
                    params: {
                        k: API_KEYS.TASTEDIVE_API_KEY,
                        q,
                        limit: 5,
                        info: 1,
                        type: "shows"
                    }
                }
            ).then(res => res.data);

            tdTvRes.Similar.Results.forEach(async (rec) => {
                const recRes = await axios.get(
                    `/search/tv`, {
                        baseURL: THEMOVIEDB_API_URL,
                        params: {
                            api_key: API_KEYS.THEMOVIEDB_API_KEY,
                            query: rec.Name
                        }
                    }
                ).then(res => res.data);

                if (recRes.results.length > 0) {
                    foundRecs.push(recRes.results[0]);
                }
            });

            return res.send({
                success: true,
                message: 'Recommend successful',
                results: foundRecs
            });
        }
        catch (err) {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
    })
};