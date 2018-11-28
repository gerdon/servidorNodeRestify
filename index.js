const server = require('./config/server').server;
const port = require('./config/server').port;
const route = require('./route/index.router');

server.listen(port, (route) => {
    console.log('O servidor está no ativo');
})
