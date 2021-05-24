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

describe('DELETE /delete', () => {
  it('returns Resource deleted', (done) => {
    request
      .delete('/delete')
      .expect(200, 'Resource deleted')
      .end(done);
  });
});

describe('PUT /update', () => {
  it('returns Resource updated', (done) => {
    request
      .put('/update')
      .expect(200, 'Resource updated')
      .end(done);
  });
});


describe('DELETE /delete', () => {
  it('returns Resource deleted', (done) => {
    request
      .delete('/delete')
      .expect(200, 'Resource deleted')
      .end(done);
  });
});

describe('PUT /no-content', () => {
  it('returns nothing', (done) => {
    request
      .put('/no-content')
      .expect(204, '')
      .end(done);
  });
});

describe('GET /unauthorized', () => {
  it('returns object with error message and code', (done) => {
    request
      .get('/unauthorized')
      .expect(401, {
        status: 401,
        error: 401,
        messages: 'Unauthorized'
      })
      .end(done);
  });
});

describe('GET /forbidden', () => {
  it('returns object with error message and code', (done) => {
    request
      .get('/forbidden')
      .expect(403, {
        status: 403,
        error: 403,
        messages: 'Forbidden'
      })
      .end(done);
  });
});

describe('GET /not-found', () => {
  it('returns object with error message and code', (done) => {
    request
      .get('/not-found')
      .expect(404, {
        status: 404,
        error: 404,
        messages: 'Not Found'
      })
      .end(done);
  });
});

describe('POST /conflict', () => {
  it('returns object with error message and code', (done) => {
    request
      .post('/conflict')
      .expect(409, {
        status: 409,
        error: 409,
        messages: 'Conflict'
      })
      .end(done);
  });
});

describe('GET /gone', () => {
  it('returns object with error message and code', (done) => {
    request
      .get('/gone')
      .expect(410, {
        status: 410,
        error: 410,
        messages: 'Gone'
      })
      .end(done);
  });
});

describe('GET /overload', () => {
  it('returns object with error message and code', (done) => {
    request
      .get('/overload')
      .expect(429, {
        status: 429,
        error: 429,
        messages: 'Too Many Requests'
      })
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

describe('POST /server-error', () => {
  it('returns object with error message and code', (done) => {
    request
      .post('/server-error')
      .expect(500, {
        status: 500,
        error: 500,
        messages: 'Internal Server Error'
      })
      .end(done);
  });
});