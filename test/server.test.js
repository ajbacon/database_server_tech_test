const supertest = require('supertest');
const session = require('supertest-session');
const app = require('../server');
const request = supertest(app);

describe('server', () => {
  describe('GET /', () => {
    it('should return a response status of 200', async () => {
      const response = await request.get('/');

      expect(response.status).toEqual(200);
    });

    it('should return text of - API Running', async () => {
      const response = await request.get('/');

      expect(response.text).toEqual('API Running');
    });
  });

  describe('GET /somethingincorrect', () => {
    it('incorrect route should return a response status of 404', async () => {
      const response = await request.get('/somethingincorrect');

      expect(response.status).toEqual(404);
    });
  });

  describe('GET /set', () => {
    it('should return a response status of 200', async () => {
      const response = await request.get('/set');

      expect(response.status).toEqual(200);
    });

    it('should have have the correct path with query', async () => {
      const response = await request.get('/set?somekey=somevalue');

      expect(response.status).toEqual(200);
      expect(response.res.req.path).toEqual('/set?somekey=somevalue');
    });
  });

  describe('GET /get', () => {
    it('should return a response status of 200', async () => {
      const response = await request.get('/get');

      expect(response.status).toEqual(200);
    });

    it('should return data stored in /set', async () => {
      const testSession = session(app);
      const response = await testSession
        .get('/set')
        .query({ somekey: 'somedata' });
      const response2 = await testSession.get('/get').query({ key: 'somekey' });

      expect(response2.body).toEqual('somedata');
    });
  });
});
