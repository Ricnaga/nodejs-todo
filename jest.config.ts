import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/controllers/**/*.controller.[jt]s',
    '<rootDir>/src/modules/**/use-cases/**/*.use-case.[jt]s',
    '!<rootDir>/src/modules/**/__tests__/**/*',
    '!<rootDir>/src/modules/**/*.schema.[jt]s',
    '!**/*.d.ts',
  ],
  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
  clearMocks: true,
  globals: {
    transform: {
      '<transform_regex>': [
        'ts-jest',
        {
          tsconfig: './tsconfig.json',
        },
      ],
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.spec.ts',
    '<rootDir>/**/__tests__/**/*.test.ts',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
