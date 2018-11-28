const restify = require('restify');
const server = restify.createServer();
const port = 3000;

// server.get('/', rootPage = (request, result, next) => {
//     result.send('Hello World');
// });

module.exports = server, port;
