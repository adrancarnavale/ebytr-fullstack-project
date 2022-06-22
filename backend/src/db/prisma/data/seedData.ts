import { Prisma } from '@prisma/client';

export const usersData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Adison',
    lastName: 'Reis',
    email: 'adison_1234@email.com',
    password: '$2a$10$NXVBkVJIHT3l29A8vpMK4uc87klrMjRH8m5W3QAznJHROB8TJKYFS',
    tasks: {
      create: [
        {
          title: 'assistir one piece',
          status: 'in progress',
        },
      ],
    },
  },
  {
    firstName: 'João Vitor',
    lastName: 'Rocha',
    email: 'joao_1234@email.com',
    password: '$2a$10$neWu4VLD1u6Z.jxZAWWvI.GI5t4puFhBSsveRKsSqRRjbYXXYT/9G',
    tasks: {
      create: [
        {
          title: 'trampar na gringa',
          status: 'in progress',
        },
        {
          title: 'aceitar que bolinho de arroz é ruim',
          status: 'in progress',
        },
      ],
    },
  },
  {
    firstName: 'Igor',
    lastName: 'Brendow',
    email: 'igor_nony@email.com',
    password: '$2a$10$sAxX7ijqyLAo.GOrSuyRQO2kd6SSf/oYJYI13cNhsGsLZzvjdbUM2',
    tasks: {
      create: [
        {
          title: 'vencer um clash',
          status: 'done',
        },
        {
          title: 'nunca mais olhar pra react',
          status: 'pending',
        },
      ],
    },
  },
  {
    firstName: 'Vitor',
    lastName: 'Belarmino',
    email: 'vitor_1234@email.com',
    password: '$2a$10$KyD/8XuoDFN9I1O7oxPm/e2S/M/Js3w36ZAKiuTdtGmWGvUfHa7G2',
    tasks: {
      create: [
        {
          title: 'nunca mais olhar pra backend',
          status: 'pending',
        },
        {
          title: 'terminar de assistir it',
          status: 'pending',
        },
      ],
    },
  },
  {
    firstName: 'Joao',
    lastName: 'Pasip',
    email: 'pasip_1234@email.com',
    password: '$2a$10$Pg0xTR51PsFp0KmZQ4BeteEw01IVfvQovyrd6a.YgUBPo1VrzDX82',
    tasks: {
      create: [
        {
          title: 'marcar 3 gols no próximo baba',
          status: 'pending',
        },
        {
          title: 'trabalhar com c#',
          status: 'pending',
        },
      ],
    },
  },
  {
    firstName: 'Carlos',
    lastName: 'Augusto',
    email: 'carlos_1234@email.com',
    password: '$2a$10$lINozCdPekIM4T2ZrZd1h.o1D/jIGqmiO62gX0ri5u9MrOO/GnqYG',
    tasks: {
      create: [
        {
          title: 'vender 15000 seguros',
          status: 'done',
        },
        {
          title: 'ser culto',
          status: 'done',
        },
      ],
    },
  },
  {
    firstName: 'Bescoito',
    lastName: 'Fausto',
    email: 'bescoito_1234@email.com',
    password: '$2a$10$/dId7Vwt53b4bsJU/p5WB.ZggaMM4ENB9xvzzsYqAxTXBtrTdvcR6',
    tasks: {
      create: [
        {
          title: 'aprender python',
          status: 'done',
        },
        {
          title: 'ir pra paris',
          status: 'pending',
        },
      ],
    },
  },
];
