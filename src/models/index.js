///postgres databases
const { transcationItems } = require("../models/postgres/transactionitemsModel");
///mongoose databases
const CategoryModel = require('../models/mongoose/category.model');


module.exports = {
  transcationItems,
  CategoryModel
}