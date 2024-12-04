//jest.config.js

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@enums/(.*)$": "<rootDir>/src/enums/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "^@images/(.*)$": "<rootDir>/public/images/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
