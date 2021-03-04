module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)'],
  setupFiltesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
