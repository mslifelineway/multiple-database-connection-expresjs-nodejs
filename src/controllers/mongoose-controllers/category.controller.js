const { CategoryModel } = require("../../models");
exports.getCategories = () => {
  CategoryModel.find({}).exec((err, results) => {
    if (err) {
      console.log("\n\n error while getting category data: " + err);
      return err;
      // res.status(400).json({err})
    } else {
      console.log("\n\n category data - total = " + results.length);
      return results;
      //   res.status(200).json({results})
    }
  });
};
