const server = require('express')();
const responseHelper = require('../index');

// Use the helper middleware (on all routes)
server.use(responseHelper.helper());

// Define routes
server.get('/', (req, res) => {
  res.respond({ message: 'Hello, World!' });
});

server.post('/create', (req, res) => {
  res.respondCreated(null, 'Resource created');
});

server.post('/bad-request', (req, res) => {
  res.fail('Bad request');
});

server.delete('/delete', (req, res) => {
  res.respondDeleted(null, 'Resource deleted');
});

server.put('/update', (req, res) => {
  res.respondUpdated(null, 'Resource updated');
});

server.put('/no-content', (req, res) => {
  res.respondNoContent('No Content');
});

server.get('/unauthorized', (req, res) => {
  res.failUnauthorized();
});

server.get('/forbidden', (req, res) => {
  res.failForbidden();
});

server.get('/not-found', (req, res) => {
  res.failNotFound();
});

server.post('/validation-error', (req, res) => {
  res.failValidationError(['Error 1', 'Error 2', 'Error 3']);
});

server.post('/conflict', (req, res) => {
  res.failResourceExists();
});

server.get('/gone', (req, res) => {
  res.failResourceGone();
});

server.get('/overload', (req, res) => {
  res.failTooManyRequests();
});

server.post('/server-error', (req, res) => {
  res.failServerError();
});

module.exports = server.listen(3001);