const superTest = require('supertest');
const server = require('./server');

let request = superTest(server);

describe('GET /', () => {
  it('returns data', (done) => {
    request
      .get('/')
      .expect(200, { message: 'Hello, World!' })
      .end(done);
  });
});

describe('POST /create', () => {
  it('returns Resource created', (done) => {
    request
      .post('/create')
      .expect(201, 'Resource created')
      .end(done);
  });
});

describe('POST /bad-request', () => {
  it('returns Bad request object', (done) => {
    request
      .post('/bad-request')
      .expect(400, {
        status: 400,
        error: 400,
        messages: 'Bad request'
      })
      .end(done);
  });
});

describe('POST /validation-error', () => {
  it('returns Bad request object with errors', (done) => {
    request
      .post('/validation-error')
      .expect(400, {
        status: 400,
        error: 400,
        messages: ['Error 1', 'Error 2', 'Error 3']
      })
      .end(done);
  });
});