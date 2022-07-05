import jwt from 'jsonwebtoken';
import { app } from '@app';
import request from 'supertest';
import { prisma } from '@db';

describe('E2E tests for edit tasks route', () => {
  afterAll(async () => {
    await prisma.user.delete({ where: { email: 'adran.carnavale@gmail.com' } });
  });

  describe('It should pass when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Correct inputs are provided', async () => {
      const user = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      const { token } = user.body;

      const task = await request(app)
        .post('/task/create')
        .set('authorization', token)
        .send({
          title: 'teste de task',
          description: 'estudar',
          status: 'done',
        });

      const { id } = task.body;

      const res = await request(app)
        .patch('/task/edit')
        .set('authorization', token)
        .send({
          id,
          title: 'ler aaaaaaaaaaaaaaaaaaaaa',
          description: 'ler ler ler',
          status: 'pending',
        });

      expect(res.status).toBe(201);

      expect(res.body).toStrictEqual({
        id,
        title: 'ler aaaaaaaaaaaaaaaaaaaaa',
        description: 'ler ler ler',
        status: 'pending',
      });
    });
  });

  describe('It should fail when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('No task is found', async () => {
      const user = await request(app).post('/user/login').send({
        email: 'adran.carnavale@gmail.com',
        password: '12345678aA',
      });

      const { token } = user.body;

      const res = await request(app)
        .patch('/task/edit')
        .set('authorization', token)
        .send({
          id: 'anyId',
          title: 'ler aaaaaaaaaaaaaaaaaaaaa',
          description: 'ler ler ler',
          status: 'pending',
        });

      expect(res.status).toBe(404);

      expect(res.body).toStrictEqual({ message: 'Task not found' });
    });
  });
});
