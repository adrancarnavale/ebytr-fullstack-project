"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditImplementation = void 0;
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const CustomError_1 = require("../../../utils/CustomError");
class EditImplementation {
    async edit(task) {
        const prisma = new client_1.PrismaClient();
        const { id, title, description, status } = task;
        const target = await prisma.task.findUnique({
            where: { id },
        });
        if (!target)
            throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Task not found');
        const edittedTask = await prisma.task.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                status,
            },
            select: {
                id: true,
                title: true,
                description: true,
                status: true,
            },
        });
        return edittedTask;
    }
}
exports.EditImplementation = EditImplementation;
//# sourceMappingURL=EditImplementation.js.map