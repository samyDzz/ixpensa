const mysql = require("mysql2");

const devMysql = {
  host:
    process.env.NODE_ENV === "development"
      ? "localhost"
      : process.env.MYSQL_HOST,
  username:
    process.env.NODE_ENV === "development"
      ? "root"
      : process.env.MYSQL_USERNAME,
  password:
    process.env.NODE_ENV === "development" ? "" : process.env.MYSQL_PASSWORD,
  port:
    process.env.NODE_ENV === "development" ? "3306" : process.env.MYSQL_PORT,
  database:
    process.env.NODE_ENV === "development" ? "ixpensa" : process.env.MYSQL_DB,
};

const pool = mysql.createPool({
  host: devMysql.host,
  user: devMysql.username,
  password : devMysql.password,
  database: devMysql.database
});

const promisePool = pool.promise();

module.exports = promisePool;
