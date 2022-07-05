/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  moduleNameMapper: {
    '^@molecules$': '<rootDir>/src/components/molecules',
    '^@atoms$': '<rootDir>/src/components/atoms',
    '^@utils$': '<rootDir>/src/utils',
    '^@app$': '<rootDir>/src/app',
    '^@components$': '<rootDir>/src/components',
    '^@pages$': '<rootDir>/src/pages',
    '^@test$': '<rootDir>/src/test',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
  testMatch: ['**/**/*.test.tsx'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  verbose: true,
};
