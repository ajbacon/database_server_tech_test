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

  describe('GET /set?somekey=somevalue', () => {
    it('should return a response status of 200', async () => {
      const response = await request.get('/set?somekey=somevalue');

      expect(response.status).toEqual(200);
    });
  });
});
