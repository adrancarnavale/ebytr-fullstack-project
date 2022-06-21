import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const baianim = await prisma.user.deleteMany({
    where: {
      firstName: 'Baia',
    },
  });

  console.log({ baianim });
}

main();
