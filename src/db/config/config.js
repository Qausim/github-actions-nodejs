const {
  dbHost, devDB, testDB, dbUserName,
  dbPassword, dbDialect, dbPort,
} = require('../../environment');

module.exports = {
  development: {
    host: dbHost,
    database: devDB,
    username: dbUserName,
    password: dbPassword,
    dialect: dbDialect,
    port: dbPort,
  },
  test: {
    host: dbHost,
    database: testDB,
    username: dbUserName,
    password: dbPassword,
    dialect: dbDialect,
  },
  production: {
    use_env_variable: 'PROD_DB_URL',
  },
};
