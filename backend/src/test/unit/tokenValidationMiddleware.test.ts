import request from 'supertest';
import { app } from '@app';

describe('Tests token validation middleware', () => {
  describe('Should fail when', () => {
    it('Invalid or expired token is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', 'token')
        .send({
          title: 'teste de task',
          description: 'estudar',
          status: 'done',
        });

      expect(res.status).toBe(401);
      expect(res.body).toStrictEqual({ message: 'Invalid or expired token' });
    });

    it('No token is provided', async () => {
      const res = await request(app).post('/task/create').send({
        title: 'teste de task',
        description: 'estudar',
        status: 'done',
      });

      expect(res.status).toBe(404);
      expect(res.body).toStrictEqual({ message: 'Token not found' });
    });
  });
});
