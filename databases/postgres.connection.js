const { Client } = require("pg");
const Sequelize = require("sequelize");
exports.connectPostgresDatabase = async (config) => {
  const client = new Client(config);

  try {
    await client.connect();
    console.log("\n db connected");
  } catch (e) {
    console.log("\n error: \n" + e);
  }
};

exports.postgresDbConnection = (config) => {
  return new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
  });
};
