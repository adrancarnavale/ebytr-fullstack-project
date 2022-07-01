"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImplementation = void 0;
const client_1 = require("@prisma/client");
const CustomError_1 = require("../../../utils/CustomError");
class DeleteImplementation {
    async delete(taskId) {
        const prisma = new client_1.PrismaClient();
        const targetTask = await prisma.task.findUnique({ where: { id: taskId } });
        if (!targetTask)
            throw new CustomError_1.CustomError(404, 'Task not found');
        await prisma.task.delete({ where: { id: taskId } });
        return;
    }
}
exports.DeleteImplementation = DeleteImplementation;
//# sourceMappingURL=DeleteImplementation.js.map