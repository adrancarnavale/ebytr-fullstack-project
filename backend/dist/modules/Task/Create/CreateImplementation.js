"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImplementation = void 0;
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const CustomError_1 = require("../../../utils/CustomError");
class CreateImplementation {
    async create(task, userEmail) {
        const prisma = new client_1.PrismaClient();
        const { title, description, status } = task;
        const user = await prisma.user.findUnique({
            where: {
                email: userEmail,
            },
        });
        if (!user)
            throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, 'Internal server error');
        const { id: authorId } = user;
        const createdTask = await prisma.task.create({
            data: {
                authorId,
                title,
                description,
                status,
            },
        });
        const { id } = createdTask;
        const serializedTask = {
            id,
            title,
            description,
            status,
        };
        return serializedTask;
    }
}
exports.CreateImplementation = CreateImplementation;
//# sourceMappingURL=CreateImplementation.js.map