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
  it('returns Resource Created', (done) => {
    request
      .post('/create')
      .expect(201, 'Resource Created')
      .end(done);
  });
});