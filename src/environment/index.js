const dotenv = require('dotenv');


dotenv.config();

module.exports = ((env) => ({
  devDB: env.DEV_DB,
  testDB: env.TEST_DB,
  dbHost: env.DB_HOST,
  dbPort: env.DB_PORT,
  dbDialect: env.DB_DIALECT,
  dbUserName: env.DB_USERNAME,
  dbPassword: env.DB_PASSWORD,
}))(process.env);
