"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const seedData_1 = require("./data/seedData");
const prisma = new client_1.PrismaClient();
async function main() {
    await Promise.all(seedData_1.usersData.map(async (data) => {
        await prisma.user.create({
            data,
        });
    }));
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map