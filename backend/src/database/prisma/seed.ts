import { PrismaClient } from '@prisma/client';
import { usersData } from './data/seedData';

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    usersData.map(async (data) => {
      await prisma.user.create({
        data,
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
