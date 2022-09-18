const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.scss$': '<rootDir>/scssTransformer.js'
  },
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
};
