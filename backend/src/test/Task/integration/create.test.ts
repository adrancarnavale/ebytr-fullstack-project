import { app } from '@app';
import jwt from 'jsonwebtoken';
import request from 'supertest';

describe('Integration tests for create tasks route', () => {
  beforeAll(async () => {
    await request(app).post('/user/register').send({
      firstName: 'Adran',
      lastName: 'Carnavale',
      email: 'adran.carnavale.task.create@gmail.com',
      password: '12345678aA',
    });
  });

  describe('It should pass when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale.task.create@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('correct data is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste de task',
          description: 'estudar',
          status: 'done',
        });

      const { id } = res.body;

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id,
        title: 'teste de task',
        description: 'estudar',
        status: 'done',
      });
    });

    it('no description is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste',
          status: 'done',
        });

      const { id } = res.body;

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id,
        title: 'teste',
        status: 'done',
      });
    });

    it('empty description is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste',
          description: '',
          status: 'done',
        });

      const { id } = res.body;

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id,
        title: 'teste',
        description: '',
        status: 'done',
      });
    });
  });

  describe('It should fail when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale.task.create@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('no title is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          description: 'estudar',
          status: 'done',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'You must provide a valid title',
      });
    });

    it('empty title is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: '',
          description: 'estudar',
          status: 'done',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'You must provide a valid title',
      });
    });

    it('a title with one character is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'a',
          description: 'estudar',
          status: 'done',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your title must have at least 3 characters',
      });
    });

    it('a title with two characters is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'ab',
          description: 'estudar',
          status: 'done',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'Your title must have at least 3 characters',
      });
    });

    it('a invalid status is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste',
          description: 'estudar',
          status: 'invalid',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'You must provide a valid status',
      });
    });

    it('no status is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste',
          description: 'estudar',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'You must provide a valid status',
      });
    });

    it('empty status is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste',
          description: 'estudar',
          status: '',
        });

      expect(res.status).toBe(400);
      expect(res.body).toStrictEqual({
        message: 'You must provide a valid status',
      });
    });
  });
});
