const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://gqrvakft:cEWB8LemP-hQYH7cnYqXDxnQ3ghjPSZA@stampy.db.elephantsql.com:5432/gqrvakft",
  {
    dialect: "postgres",
    pool: {
      max: 100,
      min: 0,
      idle: 20000,
      acquire: 20000,
      evict: 20000
    }
  }
);

console.log("connected to remote db");

module.exports = db;
