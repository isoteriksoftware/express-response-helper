const server = require('express')();
const responseHelper = require('../src/index');

// Use the helper middleware (on all routes)
server.use(responseHelper.helper());

// Define routes
server.get('/', (req, res) => {
  res.respond({ message: 'Hello, World!' });
});

server.post('/create', (req, res) => {
  res.respondCreated(null, 'Resource Created');
});

server.post('/bad-request', (req, res) => {
  res.fail('Bad request');
});

server.post('/bad-request/errors', (req, res) => {
  res.fail(['Error 1', 'Error 2', 'Error 3']);
});

server.listen(3001);

module.exports = server;