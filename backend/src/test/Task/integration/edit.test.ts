import { prisma } from '@db';
import { app } from '@app';
import jwt from 'jsonwebtoken';
import request from 'supertest';
import { Task } from '@prisma/client';

const taskInput = {
  title: 'teste de task',
  description: 'estudar',
  status: 'done',
};

const createdTaskMock = {
  id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
  title: 'teste de task',
  description: 'estudar',
  status: 'done',
};

const updatedTaskMock = {
  id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
  title: 'teste de task depois do update',
  description: 'estudar depois do update',
  status: 'pending',
};

const tokenMock = '1234';

const tokenReturnMock = {
  data: {
    email: 'teste@teste.com',
    password: '1234',
  },
};

describe('Integration tests for edit tasks route', () => {
  describe('It should pass when', () => {
    beforeEach(() => {
      jest
        .spyOn(prisma.task, 'findUnique')
        .mockResolvedValue(createdTaskMock as Task);
      jest
        .spyOn(prisma.task, 'update')
        .mockResolvedValue(updatedTaskMock as Task);
      jest
        .spyOn(jwt, 'verify')
        .mockReturnValue(tokenReturnMock as unknown as void);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Correct inputs are provided', async () => {
      const res = await request(app)
        .patch('/task/edit')
        .set('authorization', tokenMock)
        .send(createdTaskMock);

      expect(res.body).toStrictEqual({
        id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
        title: 'teste de task depois do update',
        description: 'estudar depois do update',
        status: 'pending',
      });

      expect(res.status).toBe(201);
    });
  });

  describe('It should fail when', () => {
    beforeEach(() => {
      jest
        .spyOn(prisma.task, 'findUnique')
        .mockResolvedValue(undefined as unknown as Task);
      jest
        .spyOn(prisma.task, 'update')
        .mockResolvedValue(updatedTaskMock as Task);
      jest
        .spyOn(jwt, 'verify')
        .mockReturnValue(tokenReturnMock as unknown as void);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('No task is found', async () => {
      const res = await request(app)
        .patch('/task/edit')
        .set('authorization', tokenMock)
        .send(createdTaskMock);

      expect(res.body).toStrictEqual({
        message: 'Task not found',
      });

      expect(res.status).toBe(404);
    });
  });
});
