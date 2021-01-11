//initialization
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

exports.mongooseDbConnection = (dbUrl, description) => {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`\n${description} database connected!`);
    })
    .catch((e) => {
      console.log("\nError while connecting ${description} database.\n");
      console.log(e);
    });
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);

  return mongoose;
};
