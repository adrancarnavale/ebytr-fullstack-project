import sinon, { SinonStub } from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { prisma } from '../../db/prisma'
import { app } from '../../app';
import jwt from 'jsonwebtoken'

const createdTaskMock = {
  authorId: '1',
  createdAt: '2020-01-01T00:00:00.000Z' as unknown as Date,
	id: "45e2ffd2-4afd-46f7-8fe1-6db993bf97b0",
	title: "teste de task",
	description: "estudar",
	status: "done",
}

const createdUserMock = {
  id: '98c5d87b-ee08-4a6d-9178-155e58992f28',
  firstName: 'Adran',
  lastName: 'Carnavale',
  email: 'adran.carnnavale@gmail.com',
  password: '$2a$10$V31Dn8wZaSOr/bE0TwMPAead6X3DFH1W95SiewBuQILWbzpJemgMu'
}

const tokenMock = '1234';

const tokenReturnMock ={
  data: {
    email: 'teste@teste.com',
    password: '1234',
  }
}

chai.use(chaiHttp)

describe('Route - Create task', () => {
  describe('Should pass when', () => {
    before(async () => {
      sinon.stub(prisma.user, 'findUnique').resolves(createdUserMock);
      sinon.stub(prisma.task, 'create').resolves(createdTaskMock);
      sinon.stub(jwt, 'verify').resolves(tokenReturnMock);
    });

    after(() => {
      (prisma.task.create as SinonStub).restore();
      (prisma.user.findUnique as SinonStub).restore();
      (jwt.verify as SinonStub).restore();
    });

    it('Correct data is provided', async () => {
      const response = await chai
      .request(app)
      .post('/task/create')
      .send({
        title: "teste de task",
        description: "estudar",
        status: "done",
      })
      .set('authorization', tokenMock)

      expect(response.status).to.be.equal(201)
    });
  })
})