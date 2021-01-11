(exports.operatorsAliases = {
  $eq: "Op.eq",
  $ne: "Op.ne",
  $gte: "Op.gte",
  $gt: "Op.gt",
  $lte: "Op.lte",
  $lt: "Op.lt",
  $not: "Op.not",
  $in: "Op.in",
  $notIn: "Op.notIn",
  $is: "Op.is",
  $like: "Op.like",
  $notLike: "Op.notLike",
  $iLike: "Op.iLike",
  $notILike: "Op.notILike",
  $regexp: "Op.regexp",
  $notRegexp: "Op.notRegexp",
  $iRegexp: "Op.iRegexp",
  $notIRegexp: "Op.notIRegexp",
  $between: "Op.between",
  $notBetween: "Op.notBetween",
  $overlap: "Op.overlap",
  $contains: "Op.contains",
  $contained: "Op.contained",
  $adjacent: "Op.adjacent",
  $strictLeft: "Op.strictLeft",
  $strictRight: "Op.strictRight",
  $noExtendRight: "Op.noExtendRight",
  $noExtendLeft: "Op.noExtendLeft",
  $and: "Op.and",
  $or: "Op.or",
  $any: "Op.any",
  $all: "Op.all",
  $values: "Op.values",
  $col: "Op.col",
}),
  (exports.almondHouseDbConfig = {
    user: "postgres",
    password: "1234",
    database: "almond_db_staging",
    host: "localhost",
    dialect: "postgres",
    max: 10,
    idleTimeoutMillis: 30000,
    // operatorsAliases: this.operatorsAliases
  });

exports.testServerDbConfig = {
  host: "http://159.65.149.7/",
  database: "pr_live_new",
  user: "postgres",
  password: "4321",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  operatorsAliases: this.operatorsAliases,
};

//mongo db configs
exports.flipkartCloneConfig = {
  dbUrl: "mongodb://127.0.0.1:27017/flipcart-clone",
  description: "Flipkart",
};

exports.assessmentAppConfig = {
  description: "Assessment app",
  dbUrl: "mongodb://127.0.0.1:27017/assessment-app",
};
