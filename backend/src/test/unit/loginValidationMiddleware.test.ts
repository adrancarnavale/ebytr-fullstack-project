import request from 'supertest';
import { app } from '@app';

describe('Tests login validation middleware', () => {
  describe('Should fail when', () => {
    it('no email is provided', async () => {
      const res = await request(app).post('/user/login').send({
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your email must not be empty',
      });
    });

    it('empty email is provided', async () => {
      const res = await request(app).post('/user/login').send({
        email: '',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your email must not be empty',
      });
    });

    it('Invalid email is provided', async () => {
      const res = await request(app).post('/user/login').send({
        email: 'a',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Please enter a valid email address',
      });
    });
  });
});
