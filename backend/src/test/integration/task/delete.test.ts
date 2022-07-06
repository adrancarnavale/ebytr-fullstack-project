import { prisma } from '@db';
import { app } from '@app';
import jwt from 'jsonwebtoken';
import request from 'supertest';
import { Task } from '@prisma/client';

const foundTaskMock = {
  authorId: '1',
  createdAt: '2020-01-01T00:00:00.000Z' as unknown as Date,
  id: '45e2ffd2-4afd-46f7-8fe1-6db993bf97b0',
  title: 'teste de task',
  description: 'estudar',
  status: 'done',
};

const tokenMock = '1234';

const tokenReturnMock = {
  data: {
    email: 'teste@teste.com',
    password: '1234',
  },
};

describe('Integration tests for destroy tasks route', () => {
  describe('It should pass when', () => {
    beforeEach(() => {
      jest.spyOn(prisma.task, 'findUnique').mockResolvedValue(foundTaskMock);
      jest
        .spyOn(prisma.task, 'delete')
        .mockResolvedValue(true as unknown as Task);
      jest
        .spyOn(jwt, 'verify')
        .mockReturnValue(tokenReturnMock as unknown as void);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should pass when correct taskId is provided', async () => {
      const res = await request(app)
        .delete('/task/destroy/45e2ffd2-4afd-46f7-8fe1-6db993bf97b0')
        .set('authorization', tokenMock);

      expect(res.status).toBe(204);
    });
  });

  describe('It should fail when', () => {
    beforeEach(() => {
      jest
        .spyOn(prisma.task, 'findUnique')
        .mockResolvedValue(undefined as unknown as Task);
      jest
        .spyOn(prisma.task, 'delete')
        .mockResolvedValue(true as unknown as Task);
      jest
        .spyOn(jwt, 'verify')
        .mockReturnValue(tokenReturnMock as unknown as void);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should pass when correct taskId is provided', async () => {
      const res = await request(app)
        .delete('/task/destroy/45e2ffd2-4afd-46f7-8fe1-6db993bf97b0')
        .set('authorization', tokenMock);

      expect(res.status).toBe(404);
      expect(res.body).toStrictEqual({ message: 'Task not found' });
    });
  });
});
