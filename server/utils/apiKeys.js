const fs = require('fs');

const path = './API_KEYS';

const readKeyFile = () => {
    try {
        return JSON.parse(fs.readFileSync(require.resolve(path)));
    }
    catch(err) {
        return {
            "TASTEDIVE_API_KEY": process.env.TASTEDIVE_API_KEY,
            "THEMOVIEDB_API_KEY": process.env.THEMOVIEDB_API_KEY
        }
    }
}
const API_KEYS = readKeyFile();

module.exports = API_KEYS;