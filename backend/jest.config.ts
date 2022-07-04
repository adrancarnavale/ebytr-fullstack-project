/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  moduleNameMapper: {
    '^@db$': '<rootDir>/src/db/prisma',
    '^@app$': '<rootDir>/src/app.ts',
    '^@types$': '<rootDir>/src/types',
    '^@utils$': '<rootDir>/src/utils',
    '^@entities$': '<rootDir>/src/entities',
    '^@DTOs$': '<rootDir>/src/DTOs',
    '^@middlewares$': '<rootDir>/src/middlewares',
    '^@modules$': '<rootDir>/src/modules',
  },
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  preset: 'ts-jest',

  testMatch: ['**/**/*.test.ts'],
  verbose: true,
};
