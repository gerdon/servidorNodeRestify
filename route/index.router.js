const server = require('../config/server').server;

const rootPage = () => {
    server.get('/', (request, result, next) => {
        result.send('Hello World');
    });
};

module.exports = rootPage;