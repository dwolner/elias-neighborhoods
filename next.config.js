const withImages = require('next-images')
module.exports = {
    ...withImages(),
    env: {
        GMAPS_API_KEY: 'AIzaSyBe1MCdquXljVHyTzXwD194J8Eq6ubdaTs',
    },
}
