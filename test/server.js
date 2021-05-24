const server = require('express')();
const responseHelper = require('../src/index');

// Use the helper middleware (on all routes)
server.use(responseHelper);

// Define routes
server.get('/', (req, res) => {
  res.respond({ message: 'Hello, World!' });
});

server.listen(3001);

module.exports = server;