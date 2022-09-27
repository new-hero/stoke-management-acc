const Category = require("../models/Category");

exports.createCatagoryService = async (data) => {
  const result = await Category.create(data);
  return result;
}


exports.getCategoryService = async () => {
  const allCategory = await Category.find({});
  return allCategory;
}


exports.getCategoryByIdService = async (id) => {
  const aCategory = await Category.findOne({ _id: id });
  return aCategory;
}


exports.updateCategoryService = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}





//store
//category