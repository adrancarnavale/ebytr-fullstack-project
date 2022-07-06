import request from 'supertest';
import { app } from '@app';

describe('Tests register validation middleware', () => {
  describe('Should fail when', () => {
    it('no firstName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your first name must not be empty',
      });
    });

    it('empty firstName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: '',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your first name must not be empty',
      });
    });

    it('Invalid firstName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'a',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your first name must have at least two characters',
      });
    });

    it('no lastName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your last name must not be empty',
      });
    });

    it('empty lastName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: '',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your last name must not be empty',
      });
    });

    it('Invalid lastName is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'c',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your last name must have at least two characters',
      });
    });

    it('no email is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your email must not be empty',
      });
    });

    it('empty email is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: '',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your email must not be empty',
      });
    });

    it('Invalid email is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'a',
        password: '12345678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Please enter a valid email address',
      });
    });

    it('no password is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        email: 'adran.carnavale@gmail.com',
        lastName: 'Carnavale',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your password must not be empty',
      });
    });

    it('empty password is provided', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        email: 'adran.carnavale@gmail.com',
        lastName: 'Carnavale',
        password: '',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your password must not be empty',
      });
    });

    it('Invalid password is provided - less than 8 characters', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '5678aA',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message:
          'Your password must have at least eight characters, one uppercase letter, and one number',
      });
    });

    it('Invalid password is provided - no number', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: 'abcdABCD',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message:
          'Your password must have at least eight characters, one uppercase letter, and one number',
      });
    });

    it('Invalid password is provided - no letter', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '12345678',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message:
          'Your password must have at least eight characters, one uppercase letter, and one number',
      });
    });

    it('Invalid password is provided - no uppercase letter', async () => {
      const res = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: 'abcd12345678',
      });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message:
          'Your password must have at least eight characters, one uppercase letter, and one number',
      });
    });
  });
});
