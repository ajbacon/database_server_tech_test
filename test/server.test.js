const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('server', () => {
  describe('GET /', () => {
    it('should return a response status of 200', async () => {
      const response = await request.get('/');

      // console.log(response);

      expect(response.status).toEqual(200);
    });
  });
});
