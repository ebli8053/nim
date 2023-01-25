module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverage: true,
  testPathIgnorePatterns: ['./web/script'],
};
