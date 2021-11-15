const withImages = require('next-images')
module.exports = {
    ...withImages(),
    env: {
        GMAPS_API_KEY: process.env.GOOGLE_API_KEY,
    },
}
