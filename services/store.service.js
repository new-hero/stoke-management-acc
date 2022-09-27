const Store = require("../models/Store");

exports.createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
}


exports.getStoreService = async () => {
  const brands = await Store.find({}).select('-products -suppliers');
  return brands;
}


exports.getStoreByIdService = async (id) => {
  const brand = await Store.findOne({ _id: id });
  return brand;
}


exports.updateStoreService = async (id, data) => {
  const result = await Store.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}
