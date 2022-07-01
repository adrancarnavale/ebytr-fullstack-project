"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = require("../../app");
const client_1 = require("@prisma/client");
const { user, task } = new client_1.PrismaClient();
chai_1.default.use(chai_http_1.default);
describe('Tests route for creating tasks', () => {
    describe('It should pass when', () => {
        beforeEach(() => {
            sinon_1.default
                .stub(user, 'findUnique')
                .resolves({
                id: '1',
                firstName: "Adran",
                lastName: "Carnavale",
                email: "adran_12345678aA@email.com",
                password: "12345678aA"
            });
            sinon_1.default.stub(task, 'create').resolves({
                authorId: '1',
                createdAt: '2020-01-01T00:00:00.000Z',
                id: "92c995a7-a698-4d74-8b72-9a10a5cdc9d0",
                title: "teste de task",
                description: "estudar",
                status: "done"
            });
        });
        afterEach(() => {
            user.findUnique.restore();
            task.create.restore();
        });
        it('Correct task Data is provided', async () => {
            const response = await chai_1.default.request(app_1.app).post('/task/create').send({
                title: "teste de task",
                description: "estudar",
                status: "done"
            });
            chai_1.default.expect(response.status).to.equal(201);
        });
    });
});
//# sourceMappingURL=create.test.js.map