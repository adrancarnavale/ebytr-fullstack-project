import * as controller from '../../modules/Task/Create/CreateIntegration';
import request from 'supertest';
import { app } from '@app';

describe('Tests errorMiddleware', () => {
  beforeEach(() => {
    jest
      .spyOn(controller.create, 'handle')
      .mockRejectedValue(new Error('some error here') as never);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should catch an error that is not an instance of CustomError', async () => {
    const user = await request(app).post('/user/register').send({
      firstName: 'Adran',
      lastName: 'Carnavale',
      email: 'adran.carnavale@gmail.com',
      password: '12345678aA',
    });

    const { token } = user.body;

    const res = await request(app)
      .post('/task/create')
      .set('authorization', token)
      .send({
        title: 'teste de task',
        description: 'estudar',
        status: 'done',
      });

    expect(res.status).toBe(500);
    expect(res.body).toStrictEqual({ message: 'Internal server error' });
  });
});
