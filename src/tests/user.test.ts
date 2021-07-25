import request from 'supertest';
import app from '../app';

describe('Get Users', () => {
  it('should show all users', async () => {
    const res = await request(app).get('/api/v1/user');
    expect(res.statusCode).toEqual(200);
  });
});
