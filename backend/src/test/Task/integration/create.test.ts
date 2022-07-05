import { prisma } from '@db';
import { app } from '@app';
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

describe('Integration tests for create tasks route', () => {
  describe('It should pass when', () => {
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

    it('correct data is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', tokenMock)
        .send(taskInput);

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
        title: 'teste de task',
        description: 'estudar',
        status: 'done',
      });
    });

    it('no description is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', tokenMock)
        .send({
          title: 'teste',
          status: 'done',
        });

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
        title: 'teste',
        status: 'done',
      });
    });

    it('empty description is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', tokenMock)
        .send({
          title: 'teste',
          description: '',
          status: 'done',
        });

      expect(res.status).toBe(201);
      expect(res.body).toStrictEqual({
        id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
        title: 'teste',
        description: '',
        status: 'done',
      });
    });
  });

  describe('It should fail when', () => {
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

    it('no title is provided', async () => {
      const res = await request(app)
        .post('/task/create')
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
        .set('authorization', tokenMock)
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
