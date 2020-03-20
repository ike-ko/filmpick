const axios =  require('axios');
const API_KEYS = require('../../utils/apiKeys')

const TASTEDIVE_API_URL = "https://tastedive.com/api/similar";

module.exports = app => {
    app.get('/api/recommend', async (req, res) => {
        const { query } = req;
        // ?q=encodeURIComponent'edQuery separated by commas
        const { q } = query;

        try {
            const tdMovieRes = await axios.get(
                TASTEDIVE_API_URL, {
                    params: {
                        k: API_KEYS.TASTEDIVE_API_KEY,
                        q,
                        limit: 10,
                        info: 1,
                        type: "movies"
                    }
                }
            ).then(res => res.data);
            
            const tdTVRes = await axios.get(
                TASTEDIVE_API_URL, {
                    params: {
                        k: API_KEYS.TASTEDIVE_API_KEY,
                        q,
                        limit: 10,
                        info: 1,
                        type: "shows"
                    }
                }
            ).then(res => res.data);

            let resArr = tdMovieRes.Similar.Results.concat(tdTVRes.Similar.Results);
            resArr.sort((a, b) => (a.Name > b.Name) ? 1 : -1);

            return res.send({
                success: true,
                message: 'Recommend successful',
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
    })
};