import { app } from '@app';
import jwt from 'jsonwebtoken';
import request from 'supertest';

describe('Integration tests for destroy tasks route', () => {
  describe('It should pass when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale.task.delete@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should pass when correct taskId is provided', async () => {
      const user = await request(app).post('/user/register').send({
        firstName: 'Adran',
        lastName: 'Carnavale',
        email: 'adran.carnavale.task.delete@gmail.com',
        password: '12345678aA',
      });

      console.log(user.body);

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
        .delete(`/task/destroy/${id}`)
        .set('authorization', 'token');

      expect(res.status).toBe(204);
    });
  });

  describe('It should fail when', () => {
    beforeEach(() => {
      jest.spyOn(jwt, 'verify').mockResolvedValue({
        data: {
          email: 'adran.carnavale.task.delete@gmail.com',
          password: '12345678aA',
        },
      } as unknown as never);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should pass when correct taskId is provided', async () => {
      const user = await request(app).post('/user/login').send({
        email: 'adran.carnavale.task.delete@gmail.com',
        password: '12345678aA',
      });

      const { token } = user.body;

      const res = await request(app)
        .delete('/task/destroy/anyId')
        .set('authorization', token);

      expect(res.status).toBe(404);
      expect(res.body).toStrictEqual({ message: 'Task not found' });
    });
  });
});
