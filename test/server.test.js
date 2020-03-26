const supertest = require('supertest');
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

    it('should save the query data to a session', async () => {
      let serverAgent = request;
      console.log(request);

      expect(response.status).toEqual(200);
      expect(response.res.req.path).toEqual('/set?somekey=somevalue');
    });
  });
});
