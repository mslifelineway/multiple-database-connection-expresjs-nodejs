const { transcationItems } = require("../../models");

exports.getTransactionItems = (db) => {
  transcationItems(db)
    .findAll({})
    .then((data) => {
      console.log("\n transaction items results - total = : " + data.length);
    })
    .catch((e) => {
      console.log(e);
    });
};
