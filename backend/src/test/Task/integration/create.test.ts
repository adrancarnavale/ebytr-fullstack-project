import { prisma } from '../../../db/prisma';
import { app } from '../../../app';
import jwt from 'jsonwebtoken';
import request from 'supertest';

const taskInput = {
  title: 'teste de task',
  description: 'estudar',
  status: 'done',
};

const createdTaskMock = {
  authorId: '1',
  createdAt: '2020-01-01T00:00:00.000Z' as unknown as Date,
  id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
  title: 'teste de task',
  description: 'estudar',
  status: 'done',
};

const createdUserMock = {
  id: '98c5d87b-ee08-4a6d-9178-155e58992f28',
  firstName: 'Adran',
  lastName: 'Carnavale',
  email: 'adran.carnnavale@gmail.com',
  password: '$2a$10$V31Dn8wZaSOr/bE0TwMPAead6X3DFH1W95SiewBuQILWbzpJemgMu',
};

const tokenMock = '1234';

const tokenReturnMock = {
  data: {
    email: 'teste@teste.com',
    password: '1234',
  },
};

describe('Unit tests for create tasks route', () => {
  beforeEach(() => {
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(createdUserMock);
    jest.spyOn(prisma.task, 'create').mockResolvedValue(createdTaskMock);
    jest
      .spyOn(jwt, 'verify')
      .mockReturnValue(tokenReturnMock as unknown as void);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it(' Should pass when correct data is provided', async () => {
    const res = await request(app)
      .post('/task/create')
      .set('authorization', tokenMock)
      .send(taskInput);

    expect(res.status).toBe(201);
  });
});
