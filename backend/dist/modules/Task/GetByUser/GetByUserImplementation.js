"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByUserImplementation = void 0;
const client_1 = require("@prisma/client");
class GetByUserImplementation {
    async getByUser(userId, sortOrder) {
        const prisma = new client_1.PrismaClient();
        const tasks = await prisma.task.findMany({
            where: {
                authorId: userId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                status: true,
                createdAt: true,
            },
            orderBy: [
                {
                    [sortOrder]: 'desc',
                },
                {
                    createdAt: 'desc',
                },
            ],
        });
        return tasks;
    }
}
exports.GetByUserImplementation = GetByUserImplementation;
//# sourceMappingURL=GetByUserImplementation.js.map