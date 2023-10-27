module.exports = {
  db: {
    database: "management",
    user: "root",
    password: "root",
    host: "localhost",
  },
  serverPort: 3000,
  tokenConfig: {
    PRIVITE_KEY: "management",
    EXPIRESD: 60 * 60 * 24,
  },
};
