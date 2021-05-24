const server = require('express')();
const responseHelper = require('../src/index');

// Use the helper middleware (on all routes)
server.use(responseHelper);

// Define routes
server.get('/', (req, res) => {
  res.respond({ message: 'Hello, World!' });
});

server.post('/create', (req, res) => {
  res.respondCreated(null, 'Resource Created');
});

server.listen(3001);

module.exports = server;