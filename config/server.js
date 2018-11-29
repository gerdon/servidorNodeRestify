const restify = require('restify');
const server = restify.createServer();
const bodyParser = require('body-parser');
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

module.exports = server, port;
