const express = require("express");
const {
  almondHouseDbConfig,
  flipkartCloneConfig,
  assessmentAppConfig,
} = require("../databases/config");
const {
  connectPostgresDatabase,
  postgresDbConnection,
} = require("../databases/postgres.connection");
const app = express();
const port = 3004;
const { mongooseDbConnection } = require("../databases/mongoose.connection");
const { DATABASE_TYPE } = require("./utils/constants");
const { getTransactionItems } = require("./controllers/postgres-controllers/transactionItems.controller");
const { getCategories } = require("./controllers/mongoose-controllers/category.controller");

//mongo db
let selectedDb = flipkartCloneConfig;
// let selectedDb = assessmentAppConfig;
let dbType = DATABASE_TYPE.MONGO_DB;

//postgres db
// let selectedDb = almondHouseDbConfig;
// let dbType = DATABASE_TYPE.POSTGRES_DB;

app.listen(port, function (err) {
  if (typeof err == "undefined") {
    console.log("Your application is running on : " + port + " port");
    if (dbType === DATABASE_TYPE.POSTGRES_DB) {
      const db = postgresDbConnection(selectedDb);
      db.authenticate()
        .then(async () => {
          console.log(
            `Postgres database (${selectedDb.database}) connected successfully!`
          );

          //getting the initial data
          getInitialData(selectedDb, db);
        })
        .catch((err) => {
          console.error("Unable to connect to the database:", err);
        });
    } else if (dbType === DATABASE_TYPE.MONGO_DB) {
      //mongoose db connection
      const db = mongooseDbConnection(selectedDb.dbUrl, selectedDb.description);
      getInitialData(selectedDb, db);
      //
    }
  } else {
    console.log("Your application is not running Try with another port!!!!");
  }
});

function getInitialData(selectedDb, db) {
  switch (selectedDb) {
    case flipkartCloneConfig:
      getCategories();
      break;
    case assessmentAppConfig:
      break;

    case almondHouseDbConfig:
      getTransactionItems(db);

      break;
    default:
      break;
  }
}
