import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/infra/http/controllers/**/*.[jt]s',
    '!<rootDir>/src/modules/**/infra/http/controllers/**/*.schema.[jt]s',
    '<rootDir>/src/modules/**/use-cases/**/*.[jt]s',
    '!<rootDir>/src/modules/**/infra/http/controllers/**/__tests__/**/*',
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
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
